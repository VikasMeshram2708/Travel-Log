"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchLocation() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="relative max-w-5xl">
      <SearchIcon className="absolute w-5 h-5 top-2 left-2 text-gray-500" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-xl sm:max-w-7xl pl-8"
        type="text"
        placeholder="Search location"
      />
    </div>
  );
}
