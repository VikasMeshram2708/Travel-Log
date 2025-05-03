"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function ImageUpload() {
  const [media, setMedia] = useState<File[]>([]);

  const removeMedia = (mediaIdx: number) => {
    setMedia((prev) => prev.filter((_, idx) => idx !== mediaIdx));
  };

  return (
    <div className="p-4 space-y-4 border rounded-lg bg-white shadow-sm">
      <Input
        type="file"
        multiple
        onChange={(e) => {
          const files = e.currentTarget.files;
          if (files) {
            setMedia(Array.from(files));
          }
        }}
      />

      {media.length === 0 ? (
        <div className="text-center text-gray-500 text-sm italic pt-4">
          No images selected. Please choose one or more files.
        </div>
      ) : (
        <div className="space-y-4">
          <ul className="flex flex-wrap gap-4 justify-start">
            {media.map((file, idx) => (
              <div
                key={idx}
                className="relative w-56 h-56 border rounded-lg overflow-hidden shadow-sm"
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  fill
                  className="object-contain bg-cover drop-shadow-2xl"
                />
                <Button
                  onClick={() => removeMedia(idx)}
                  className="absolute top-1 right-1 p-1"
                  size="icon"
                  variant="destructive"
                >
                  <X className="text-white" />
                </Button>
              </div>
            ))}
          </ul>

          <div className="flex gap-3 pt-2">
            <Button size="lg">Upload</Button>
            <Button
              size="lg"
              variant="destructive"
              onClick={() => setMedia([])}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
