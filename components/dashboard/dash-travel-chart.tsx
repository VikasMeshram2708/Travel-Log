"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Your actual travel data
const travelData = [
  {
    id: "0306d4a2-2f54-47fe-bcd2-65a51fe74640",
    country: "India",
    countryCode: "IN",
    city: "Mumbai",
    location: "juhu beach",
    latitude: "18.975",
    longitude: "72.826",
    visitedOn: "2025-05-03T15:49:21.236Z",
    duration: "33",
    notes: "visited to mumbai",
    tags: ["mumbai local diaries", "mumbai local train"],
    createdAt: "2025-05-03T15:50:15.887Z",
    updatedAt: "2025-05-03T15:50:15.887Z",
    userId: "0a556950-c6b7-492c-9a4b-e05cc180f1e5",
  },
  {
    id: "ed39bbae-939c-42ad-a0e0-0c21fd31f0bb",
    country: "India",
    countryCode: "IN",
    city: "Nagpur",
    location: "Dragon Palace",
    latitude: "21.15",
    longitude: "79.1",
    visitedOn: "2025-05-03T12:18:41.245Z",
    duration: "12",
    notes: "enjoyed a lot there",
    tags: ["nagpur", "tarri poha", "kharra"],
    createdAt: "2025-05-03T12:19:38.324Z",
    updatedAt: "2025-05-03T12:19:38.324Z",
    userId: "0a556950-c6b7-492c-9a4b-e05cc180f1e5",
  },
  {
    id: "1",
    city: "Mumbai",
    visitedOn: "2025-05-01T10:00:00.000Z",
    duration: "45",
  },
  {
    id: "2",
    city: "Nagpur",
    visitedOn: "2025-04-28T10:00:00.000Z",
    duration: "20",
  },
  {
    id: "3",
    city: "Mumbai",
    visitedOn: "2025-04-25T10:00:00.000Z",
    duration: "30",
  },
  {
    id: "4",
    city: "Pune",
    visitedOn: "2025-04-20T10:00:00.000Z",
    duration: "25",
  },
  {
    id: "5",
    city: "Nagpur",
    visitedOn: "2025-04-15T10:00:00.000Z",
    duration: "15",
  },
];

// Process data into chart format
const processData = (data: typeof travelData) => {
  const dateMap: Record<
    string,
    { date: string; Mumbai: number; Nagpur: number; Pune?: number }
  > = {};

  data.forEach((entry) => {
    const date = new Date(entry.visitedOn).toISOString().split("T")[0];

    if (!dateMap[date]) {
      dateMap[date] = { date, Mumbai: 0, Nagpur: 0, Pune: 0 };
    }

    if (entry.city === "Mumbai") {
      dateMap[date].Mumbai += parseInt(entry.duration) || 0;
    } else if (entry.city === "Nagpur") {
      dateMap[date].Nagpur += parseInt(entry.duration) || 0;
    } else if (entry.city === "Pune") {
      dateMap[date].Pune! += parseInt(entry.duration) || 0;
    }
  });

  return Object.values(dateMap).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

const chartData = processData(travelData);

const chartConfig = {
  visitors: {
    label: "Duration (mins)",
  },
  Mumbai: {
    label: "Mumbai",
    color: "hsl(var(--chart-1))",
  },
  Nagpur: {
    label: "Nagpur",
    color: "hsl(var(--chart-2))",
  },
  Pune: {
    label: "Pune",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function DashTravelChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-05-03"); // Using your latest date
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Travel Duration by City</CardTitle>
          <CardDescription>
            Showing time spent in each city over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select time range"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillMumbai" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Mumbai)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Mumbai)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillNagpur" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Nagpur)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Nagpur)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPune" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Pune)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Pune)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Nagpur"
              type="natural"
              fill="url(#fillNagpur)"
              stroke="var(--color-Nagpur)"
              stackId="a"
            />
            <Area
              dataKey="Mumbai"
              type="natural"
              fill="url(#fillMumbai)"
              stroke="var(--color-Mumbai)"
              stackId="a"
            />
            <Area
              dataKey="Pune"
              type="natural"
              fill="url(#fillPune)"
              stroke="var(--color-Pune)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
