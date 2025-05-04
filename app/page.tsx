import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Notebook } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-16">
        {/* Hero Section */}
        <div className="border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg flex flex-col space-y-6 items-center h-[32rem] justify-center p-8 rounded-xl text-center">
          <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Compass className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              Track Your Journeys
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Relive Every Adventure
            </span>
            <br />
            With Your Personal Travel Log
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Document hidden gems, local stories, and unforgettable moments—all
            in one place. Perfect for wanderers who cherish memories.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button
                size={"lg"}
                className="cursor-pointer group transition-all"
              >
                Start Your Travel Diary
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant={"outline"}
                size={"lg"}
                className="border-gray-300 hover:bg-gray-50"
              >
                <Notebook className="mr-2 h-4 w-4" />
                How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Indicators (Optional) */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Trusted by travelers from 20+ countries</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
