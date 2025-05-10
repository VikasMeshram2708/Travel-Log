/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { upload, UploadResponse, type UploadOptions } from "@imagekit/next";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FileIcon, Loader2, Sparkles, UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { saveMediaMemory } from "@/app/dal/actions";
import { Badge } from "../ui/badge";

type AuthResponse = {
  signature: string;
  expire: number; // Changed to number
  token: string;
  publicKey: string;
};

const UploadMediaBtn = ({ tripId }: { tripId: string }) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const authenticator = async (): Promise<AuthResponse> => {
    try {
      const response = await fetch("/api/upload-auth");

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || "Authentication failed");
      }

      const data = await response.json();

      // Ensure expire is a number
      if (typeof data.expire !== "number") {
        data.expire = parseInt(data.expire, 10);
        if (isNaN(data.expire)) {
          throw new Error("Invalid expiration timestamp");
        }
      }

      return data;
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Failed to get upload credentials");
      throw error;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only JPG, PNG, WEBP, or GIF images are allowed");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be smaller than 5MB");
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }

    setIsUploading(true);
    setProgress(0);
    abortControllerRef.current = new AbortController();

    try {
      const authParams = await authenticator();

      const uploadOptions: UploadOptions = {
        ...authParams,
        file: selectedFile,
        fileName: `travel_${Date.now()}_${selectedFile.name.replace(
          /\s+/g,
          "_"
        )}`,
        folder: "/travelLog",
        useUniqueFileName: false,
        onProgress: (event) => {
          setProgress(Math.round((event.loaded / event.total) * 100));
        },
        abortSignal: abortControllerRef.current.signal,
      };

      const result: UploadResponse = await upload(uploadOptions);
      //   if result is success save to db
      if ((result?.fileId?.length as number) > 0) {
        // save to db
        await saveMediaMemory({
          fileId: result?.fileId ?? "",
          url: result?.url ?? "",
          tripLogId: tripId ?? "",
          fileSize: String(result?.size),
          // @ts-ignore
          mediaFileType: result?.fileType?.toUpperCase(),
        });
      }
      // else not
      // console.log(JSON.stringify(result));
      toast.success("Image uploaded successfully!");
      console.dir("Uploaded to:", result.url);
      resetUpload();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        toast.info("Upload canceled");
      } else {
        console.error("Upload error:", error);
        toast.error(error instanceof Error ? error.message : "Upload failed");
      }
    } finally {
      setIsUploading(false);
    }
  };

  const cancelUpload = () => {
    abortControllerRef.current?.abort();
    resetUpload();
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"lg"}
          variant="outline"
          className="relative border border-pink-500 to-yellow-500 cursor-pointer"
        >
          <Badge className="absolute -top-3 right-0 bg-amber-400 rounded-full">
            New
          </Badge>
          <Sparkles />
          {/* <ImageIcon className="h-4 w-4" /> */}
          Upload Your Journey Memories
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold ">
            Share Your Travel Memories
          </DialogTitle>
          <DialogDescription className="text-sm ">
            Upload photos and videos from your adventures (Max 10MB)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
              !selectedFile
                ? "border-primary/30 hover:border-primary/50 bg-primary/5 cursor-pointer"
                : "border-transparent"
            }`}
            onClick={() => !selectedFile && fileInputRef.current?.click()}
          >
            {!selectedFile ? (
              <div className="flex flex-col items-center justify-center space-y-3">
                <UploadCloud className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Drag and drop files here
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    or click to browse (JPG, PNG, MP4)
                  </p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Select Files
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Preview Section */}
                <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center">
                  {selectedFile.type.startsWith("image/") ? (
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                      width={600}
                      height={400}
                      className="object-contain w-full h-full"
                    />
                  ) : selectedFile.type.startsWith("video/") ? (
                    <video
                      src={URL.createObjectURL(selectedFile)}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full space-y-2">
                      <FileIcon className="h-12 w-12 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {selectedFile.name}
                      </span>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetUpload}
                    disabled={isUploading}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-800 rounded-full p-1.5"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* File Info */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-gray-500 dark:text-gray-400">Name</p>
                    <p className="font-medium truncate">{selectedFile.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 dark:text-gray-400">Type</p>
                    <p className="font-medium">
                      {selectedFile.type.split("/")[1].toUpperCase()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 dark:text-gray-400">Size</p>
                    <p className="font-medium">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            <Input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={isUploading}
              accept="image/*,video/*"
              className="hidden"
            />
          </div>

          {/* Upload Progress */}
          {progress > 0 && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="">Uploading...</span>
                <span className="text-primary">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={cancelUpload}
                  className="text-red-500 hover:text-red-600 dark:hover:text-red-400"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-between">
          {!isUploading && (
            <Button
              variant="outline"
              onClick={resetUpload}
              disabled={!selectedFile}
            >
              Clear
            </Button>
          )}
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="min-w-[160px]"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <UploadCloud className="mr-2 h-4 w-4" />
                Upload to Travel Log
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMediaBtn;
