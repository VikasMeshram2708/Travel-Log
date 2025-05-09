"use client";
import { useStore } from "@/store/store";
import { saveMemory } from "@/app/dal/actions";
import { useState } from "react";
import { X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { memorySchema, MemorySchema } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadMediaBtn from "@/components/dashboard/upload-media-btn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "../ui/dialog";

export default function LocDetailsForm() {
  const { locDetails } = useStore();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const form = useForm<MemorySchema>({
    resolver: zodResolver(memorySchema),
    defaultValues: {
      location: locDetails?.display_name || "",
      city: locDetails?.address.city || "",
      country: locDetails?.address?.country || "",
      countryCode: locDetails?.address?.country_code?.toUpperCase() || "",
      latitude: locDetails?.lat?.toString() || "",
      longitude: locDetails?.lon?.toString() || "",
      visitedOn: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
      durationValue: "",
      durationUnit: "days",
      notes: "",
      tags: [],
    },
  });

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        const newTags = [...tags, tagInput.trim()];
        setTags(newTags);
        form.setValue("tags", newTags);
        setTagInput("");
      }
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    form.setValue("tags", newTags);
  };

  async function onSubmit(data: MemorySchema) {
    try {
      const result = await saveMemory({
        ...data,
        visitedOn: new Date(data.visitedOn).toISOString(),
      });

      if (!result.success) {
        form.setError("root", {
          message: result.message || "Failed to save memory",
        });
        return;
      }
      alert("Memory saved");
      return;
    } catch (e) {
      console.error(e);
      alert((e as Error).message ?? "Something went wrong. Please try again.");
      return;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <fieldset className="border-4 border-muted rounded-xl p-6 space-y-6">
          <legend className="text-base font-medium text-muted-foreground px-2">
            Tell us about this place
          </legend>

          {/* Location Name */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Where did you go?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Santorini, Greece" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Name */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Which city?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., New Delhi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country + Code */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., India" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country Code</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., IN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Visited On + Duration */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="visitedOn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visited On</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value as string} // Ensure it's treated as string
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel>Duration</FormLabel>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="durationValue"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="e.g., 3" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="durationUnit"
                  render={({ field }) => (
                    <FormItem className="w-[120px]">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hours">Hours</SelectItem>
                          <SelectItem value="days">Days</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                          <SelectItem value="months">Months</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Lat + Lng */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 36.3932" {...field} />
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
                  <FormLabel>Longitude</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 25.4615" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <FormLabel>Tags</FormLabel>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-sm"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Type a tag and press Enter"
            />
            <FormMessage>{form.formState.errors.tags?.message}</FormMessage>
          </div>

          {/* Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Notes</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="e.g., best food, beautiful sunset..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Media Upload */}
          <UploadMediaBtn />

          {/* Submit and Error Message */}
          {form.formState.errors.root && (
            <div className="text-red-500 text-sm">
              {form.formState.errors.root.message}
            </div>
          )}

          <div className="flex justify-end gap-4">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save Memory"}
            </Button>
            <DialogClose className={buttonVariants({ variant: "destructive" })}>
              Close
            </DialogClose>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
