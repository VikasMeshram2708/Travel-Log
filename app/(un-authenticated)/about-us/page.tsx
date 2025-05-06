import { Metadata } from "next";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Brain, Check, Instagram, Share, Twitter, Users } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | TravelPass - Travel Smarter, Explore Freely",
  description:
    "Discover the story behind TravelPass. We help travelers explore the world with smart tools, authentic insights, and seamless sharing. Join our adventure!",
};

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
          Discover Our Story
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          At <span className="font-semibold text-primary">TravelPass</span>, we
          believe travel is more than just visiting {"places—it's"} about
          creating unforgettable experiences, connecting with cultures, and
          capturing moments that last a lifetime.
        </p>
      </section>

      <Separator className="my-12" />

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-none shadow-none">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>
                  Simplify travel planning with intuitive tools and expert
                  recommendations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>
                  Empower explorers with authentic, crowd-sourced insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>
                  Preserve memories through seamless media sharing and
                  storytelling
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Why Travel With Us?</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Curated by Travelers, for Travelers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real experiences from real people
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Smart & Personalized</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered recommendations tailored to your style
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Share className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Seamless Sharing</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload, organize, and relive your journeys effortlessly
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
        <p className="text-muted-foreground mb-8">
          Follow us for travel tips, hidden gems, and inspiring stories. Have
          feedback? {"We'd"} love to hear from you!
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="https://x.com/mevikas1008" target="_blank">
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a target="_blank" href="https://www.instagram.com/heisthevm/">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </Button>
          <Button size="lg">Contact Us</Button>
        </div>
      </section>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
