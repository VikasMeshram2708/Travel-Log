"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, Globe, MapPin, Plus, X } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { memorySchema, MemorySchema } from "@/models";
import { saveMemory } from "@/app/dal/actions";
import { useStore } from "@/store/store";
import useDebounce from "@/lib/useDebounce";
import { CityDetails, CountryDetails } from "@/types";

export default function MemoryForm() {
  const form = useForm<MemorySchema>({
    resolver: zodResolver(memorySchema),
    defaultValues: {
      country: "",
      countryCode: "",
      city: "",
      location: "",
      visitedOn: new Date(),
      notes: "",
      tags: [],
      duration: "",
    },
  });

  const [tagInput, setTagInput] = useState("");
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (e?: React.KeyboardEvent) => {
    e?.preventDefault();
    const trimmedInput = tagInput.trim();
    if (trimmedInput && !form.getValues("tags").includes(trimmedInput)) {
      form.setValue("tags", [...form.getValues("tags"), trimmedInput]);
      setTagInput("");
      tagInputRef.current?.focus();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    form.setValue(
      "tags",
      form.getValues("tags").filter((tag) => tag !== tagToRemove)
    );
  };

  const onSubmit = async (data: MemorySchema) => {
    try {
      // console.log("myd", data);
      const { success, message } = await saveMemory(data);
      if (!success) {
        throw new Error(message || "Failed to save memory. Please try again.");
      }
      alert(message ?? "Memory saved successfully");
      form.reset();
    } catch (e) {
      const err = e as Error;
      alert(err?.message ?? "Something went wrong. Please try again.");
    }
  };

  const { findCountry, findCity } = useStore();
  const [countryArray, setCountryArray] = useState<CountryDetails[]>([]);
  const [cityValue, setCityValue] = useState<CityDetails | null>(null);
  const debounceCountryQuery = useDebounce(form.watch("country"));
  const debounceCityQuery = useDebounce(form.watch("city"));
  const [toggleCountryArray, setToggleCountryArray] = useState(true);
  const [toggleCity, setToggleCity] = useState(true);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  // for country
  useEffect(() => {
    async function getDetails() {
      const result = await findCountry(debounceCountryQuery);
      setCountryArray(result);
    }
    if (debounceCountryQuery.length > 0) {
      getDetails();
    } else {
      setCountryArray([]);
    }
  }, [debounceCountryQuery, findCountry]);

  // for city
  useEffect(() => {
    async function getDetails() {
      const result = await findCity(debounceCityQuery);
      // console.log("cityres", result);
      setCityValue(result);
    }
    if (debounceCityQuery.length > 0) {
      getDetails();
    } else {
      setCityValue(null);
    }
  }, [debounceCityQuery, findCity]);

  // for country
  function handleCountrySelect({
    countryName,
    countryCode,
    lat,
    lng,
  }: {
    countryName: string;
    countryCode: string;
    lat: string;
    lng: string;
  }) {
    if (!countryName || !countryCode || !lat || !lng) return;
    form.setValue("country", countryName);
    form.setValue("countryCode", countryCode);
    form.setValue("latitude", lat);
    form.setValue("longitude", lng);
    setToggleCountryArray(false);
    // Move focus to next field
    document.getElementById("countryCode")?.focus();
  }

  // for city
  function handleCitySelect({
    cityName,
    lat,
    lng,
  }: {
    cityName: string;
    lat: string;
    lng: string;
  }) {
    if (!cityName || !lat || !lng) return;
    form.setValue("city", cityName);
    form.setValue("latitude", lat);
    form.setValue("longitude", lng);
    setToggleCity(false);
    // Move focus to next field
    // document.getElementById("countryCode")?.focus();
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto p-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Country</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Where did you visit?"
                      className="pl-10"
                      {...field}
                      ref={countryInputRef}
                      onChange={(e) => {
                        field.onChange(e);
                        setToggleCountryArray(true);
                      }}
                      onFocus={() => setToggleCountryArray(true)}
                    />
                  </FormControl>
                  <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                {toggleCountryArray && countryArray.length > 0 && (
                  <ul className="mt-1 space-y-1 max-h-40 overflow-y-auto rounded-md border bg-popover shadow-md">
                    {countryArray?.map((cnt, idx) => (
                      <li
                        onClick={() =>
                          handleCountrySelect({
                            countryName: cnt.name?.common,
                            countryCode: cnt?.cca2,
                            lat: String(cnt.latlng?.[0]),
                            lng: String(cnt.latlng?.[1]),
                          })
                        }
                        key={idx}
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-accent transition-colors"
                      >
                        {cnt?.name?.common}
                      </li>
                    ))}
                  </ul>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Code */}
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Country Code
                </FormLabel>
                <FormControl>
                  <Input
                    readOnly
                    id="countryCode"
                    placeholder="US, IN, UK, etc."
                    className="uppercase cursor-not-allowed text-gray-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">City</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Which city?"
                    {...field}
                    ref={cityInputRef}
                  />
                </FormControl>
                {/* <pre>{JSON.stringify(cityValue, null, 2)}</pre> */}
                {toggleCity &&
                  Number(cityValue?.location?.name?.length) > 0 && (
                    <li
                      onClick={() =>
                        handleCitySelect({
                          cityName: String(cityValue?.location?.name),
                          lat: String(cityValue?.location?.lat),
                          lng: String(cityValue?.location?.lon),
                        })
                      }
                      className="px-3 py-2 text-sm cursor-pointer hover:bg-accent transition-colors"
                    >
                      {cityValue?.location.name}
                    </li>
                  )}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            {/* Duration */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Duration (days)
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="How many days?"
                        className="pl-10"
                        {...field}
                      />
                    </FormControl>
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Visited On */}
            <FormField
              control={form.control}
              name="visitedOn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Visited On
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="date"
                        className="pl-10"
                        value={
                          field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) => {
                          const date = e.target.value
                            ? new Date(e.target.value)
                            : new Date();
                          field.onChange(date);
                        }}
                      />
                    </FormControl>
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Specific Location
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Museum, Park, etc."
                      className="pl-10"
                      {...field}
                    />
                  </FormControl>
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Latitude & Longitude */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Latitude
                  </FormLabel>
                  <FormControl>
                    <Input
                      readOnly
                      className="cursor-not-allowed text-gray-400"
                      placeholder="12.345678"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value
                            ? parseFloat(e.target.value)
                            : undefined
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Longitude
                  </FormLabel>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="98.765432"
                      className="cursor-not-allowed text-gray-400"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value
                            ? parseFloat(e.target.value)
                            : undefined
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write something memorable..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Share your experiences, feelings, or special moments
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Tags</FormLabel>
                <div className="flex flex-wrap gap-2 mb-2">
                  {field.value.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-1 text-xs"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <X size={12} />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)}
                    ref={tagInputRef}
                    className="text-sm"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-9 w-9 p-0"
                    onClick={() => handleAddTag()}
                    disabled={!tagInput.trim()}
                    aria-label="Add tag"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                <FormDescription className="text-xs">
                  Press Enter or click + to add tags
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Form Actions */}
          <div className="flex justify-end gap-2 pt-4 sticky bottom-0 bg-background pb-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="min-w-[100px]">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="min-w-[100px]"
            >
              {form.formState.isSubmitting ? "Saving..." : "Save Memory"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
