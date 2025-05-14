/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useStore } from "@/store/store";
import { saveMemory } from "@/app/dal/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Fill() {
  const { locationDetails, clearLocationDetails } = useStore();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form data with proper types
  const [formData, setFormData] = useState({
    location: locationDetails?.display_name || "",
    city: locationDetails?.address?.city || "",
    country: locationDetails?.address?.country || "",
    countryCode: locationDetails?.address?.country_code || "",
    visitedOn: new Date(),
    durationValue: 0,
    durationUnit: "days" as "hours" | "days" | "weeks" | "months",
    latitude: locationDetails?.lat ? String(locationDetails.lat) : "",
    longitude: locationDetails?.lon ? String(locationDetails.lon) : "",
    notes: "",
  });

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const value = e.target.valueAsNumber || 0;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData({
        ...formData,
        visitedOn: date,
      });
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await saveMemory({
        ...formData,
        tags,
        visitedOn: formData.visitedOn.toISOString(),
      });

      if (!result.success) {
        alert(result.message || "Failed to save memory");
        return;
      }

      alert("Memory saved successfully!");
      // Reset form
      setFormData({
        location: "",
        city: "",
        country: "",
        countryCode: "",
        visitedOn: new Date(),
        durationValue: 0,
        durationUnit: "days",
        latitude: "",
        longitude: "",
        notes: "",
      });
      setTags([]);
      clearLocationDetails();
    } catch (e) {
      console.error(e);
      alert((e as Error).message ?? "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Location
              </label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Eiffel Tower"
                required
                className="focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2 ">
                <span className="text-red-500">*</span>
                City
              </label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Paris"
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Country
              </label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="France"
                required
              />
            </div>

            <div>
              <label
                htmlFor="countryCode"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Country Code
              </label>
              <Input
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                placeholder="FR"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="visitedOn"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Visit Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(formData.visitedOn, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.visitedOn}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 ">
                <span className="text-red-500">*</span>
                Duration
              </label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    id="durationValue"
                    name="durationValue"
                    type="number"
                    min="0"
                    value={formData.durationValue}
                    onChange={(e) =>
                      handleNumberInputChange(e, "durationValue")
                    }
                    placeholder="2"
                    required
                  />
                </div>

                <div className="w-[120px]">
                  <Select
                    value={formData.durationUnit}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        durationUnit: value as any,
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="latitude"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Latitude
              </label>
              <Input
                id="latitude"
                name="latitude"
                type="number"
                step="any"
                value={formData.latitude}
                onChange={(e) => handleNumberInputChange(e, "latitude")}
                placeholder="48.8584"
                required
              />
            </div>

            <div>
              <label
                htmlFor="longitude"
                className="block text-sm font-medium mb-2 "
              >
                <span className="text-red-500">*</span>
                Longitude
              </label>
              <Input
                id="longitude"
                name="longitude"
                type="number"
                step="any"
                value={formData.longitude}
                onChange={(e) => handleNumberInputChange(e, "longitude")}
                placeholder="2.2945"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">
            <span className="text-red-500">*</span>
            Tags
          </label>
          <div className="relative">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Type tag and press Enter"
            />
            {tagInput && (
              <button
                type="button"
                onClick={() => setTagInput("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="pl-3">
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Add tags to categorize your memory (e.g., {"family"},{"adventure"})
          </p>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2 ">
            <span className="text-red-500">*</span>
            Notes
          </label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Share your memories..."
            rows={5}
            className="min-h-[120px]"
          />
          <p className="mt-1 text-xs text-gray-500">
            Describe your experience in detail
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Memory"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
