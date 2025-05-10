import { Loader } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="min-h-screen bg-background  flex flex-col items-center justify-center">
      <Loader className="animate-spin" size={80} />
    </div>
  );
}
