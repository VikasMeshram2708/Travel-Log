"use client";
import { TripLog } from "@/types";
import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Button } from "../ui/button";
import {
  BarChartIcon,
  TagIcon,
  TrendingUpIcon,
  GlobeIcon,
  CalendarIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

// Color palette for consistent theming
const CHART_COLORS = {
  primary: "#4f46e5",
  secondary: "#10b981",
  accent: "#f59e0b",
  neutral: "#6b7280",
  danger: "#ef4444",
};

export default function DashTravelChart({ logs }: { logs: TripLog[] }) {
  const [chartType, setChartType] = useState<"bar" | "timeline" | "tags">(
    "bar"
  );

  // Memoized helper functions for better performance
  const extractDurationValue = useMemo(
    () => (durationString: string) => {
      const match = durationString.match(/Value - (\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    },
    []
  );

  const formatDate = useMemo(
    () => (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    },
    []
  );

  // Process data with useMemo to avoid unnecessary recalculations
  const { countryData, tagData, timelineData, stats } = useMemo(() => {
    // Process data by country
    const countryGroupedData = logs.reduce<
      Record<string, { visits: number; duration: number }>
    >((acc, log) => {
      const key = log.country;
      const durationValue = extractDurationValue(log.duration);

      if (!acc[key]) {
        acc[key] = { visits: 0, duration: 0 };
      }

      acc[key].visits += 1;
      acc[key].duration += durationValue;
      return acc;
    }, {});

    const countryData = Object.entries(countryGroupedData).map(
      ([country, data]) => ({
        name: country,
        visits: data.visits,
        duration: data.duration,
      })
    );

    // Process tag data
    const tagCounts = logs.reduce<Record<string, number>>((acc, log) => {
      log.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {});

    const tagData = Object.entries(tagCounts)
      .map(([tag, count]) => ({ name: tag, value: count }))
      .sort((a, b) => b.value - a.value); // Sort by most popular tags

    // Timeline data
    const sortedLogs = [...logs].sort(
      (a, b) =>
        new Date(a.visitedOn).getTime() - new Date(b.visitedOn).getTime()
    );

    const timelineData = sortedLogs.map((log, index) => ({
      name: formatDate(log.visitedOn),
      cumulative: index + 1,
      duration: extractDurationValue(log.duration),
    }));

    // Calculate stats
    const totalDays = logs.reduce(
      (total, log) => total + extractDurationValue(log.duration),
      0
    );
    const uniqueCountries = new Set(logs.map((log) => log.country)).size;

    return {
      countryData,
      tagData,
      timelineData,
      stats: {
        totalTrips: logs.length,
        totalDays,
        uniqueCountries,
        avgTripDuration: totalDays / logs.length,
      },
    };
  }, [logs, extractDurationValue, formatDate]);

  // Custom tooltip components for better UX
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <div className="bg-white p-4 border rounded shadow-sm">
        <p className="font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`tooltip-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{" "}
            {entry.name === "duration" ? "days" : "visits"}
          </p>
        ))}
      </div>
    );
  };

  const PieTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border rounded shadow-sm">
        <p className="font-semibold">{data.name}</p>
        <p>{data.value} mentions</p>
        <p>{((payload[0].percent || 0) * 100).toFixed(1)}% of total</p>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            Travel Dashboard
          </CardTitle>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={chartType === "bar" ? "default" : "secondary"}
              size="sm"
              onClick={() => setChartType("bar")}
              aria-label="Show visits by country chart"
            >
              <BarChartIcon className="mr-2 h-4 w-4" />
              Visits
            </Button>
            <Button
              variant={chartType === "timeline" ? "default" : "secondary"}
              size="sm"
              onClick={() => setChartType("timeline")}
              aria-label="Show trip timeline chart"
            >
              <TrendingUpIcon className="mr-2 h-4 w-4" />
              Timeline
            </Button>
            <Button
              variant={chartType === "tags" ? "default" : "secondary"}
              size="sm"
              onClick={() => setChartType("tags")}
              aria-label="Show trip tags chart"
            >
              <TagIcon className="mr-2 h-4 w-4" />
              Tags
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {chartType === "bar" && (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={countryData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  layout="vertical" // Better for country names
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="visits"
                    fill={CHART_COLORS.primary}
                    name="Number of Visits"
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="duration"
                    fill={CHART_COLORS.secondary}
                    name="Stay Duration (days)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {chartType === "timeline" && (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timelineData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="cumulative"
                    stroke={CHART_COLORS.primary}
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                    name="Cumulative Trips"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="duration"
                    stroke={CHART_COLORS.secondary}
                    strokeWidth={2}
                    name="Trip Duration (days)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {chartType === "tags" && (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tagData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={40} // Donut chart style
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) =>
                      percent > 0.05
                        ? `${name} (${(percent * 100).toFixed(0)}%)`
                        : ""
                    }
                  >
                    {tagData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          [
                            CHART_COLORS.primary,
                            CHART_COLORS.secondary,
                            CHART_COLORS.accent,
                            CHART_COLORS.neutral,
                            CHART_COLORS.danger,
                          ][index % 5]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    formatter={(value, entry, index) => (
                      <span className="text-sm">
                        {value} (
                        {(
                          (entry.payload?.value /
                            tagData.reduce((a, b) => a + b.value, 0)) *
                          100
                        ).toFixed(1)}
                        %)
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <GlobeIcon className="h-4 w-4" />
              Total Trips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTrips}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across {stats.uniqueCountries} countries
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Total Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDays}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Avg {stats.avgTripDuration.toFixed(1)} days per trip
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Most Visited Country
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {countryData.length > 0
                ? countryData.reduce((prev, current) =>
                    prev.visits > current.visits ? prev : current
                  ).name
                : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {countryData.length > 0 &&
                `${
                  countryData.reduce((prev, current) =>
                    prev.visits > current.visits ? prev : current
                  ).visits
                } visits`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Most Popular Tag
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tagData.length > 0 ? tagData[0].name : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {tagData.length > 0 && `${tagData[0].value} mentions`}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
