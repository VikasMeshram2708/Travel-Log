import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  HelpCircle,
  Globe,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NewsLetterForm from "./news-letter-form";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Explore Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  My Trips
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/discover"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discover
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Stay Connected
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/mevikas1008"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9 text-muted-foreground hover:text-primary"
                )}
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/heisthevm/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9 text-muted-foreground hover:text-primary"
                )}
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-meshram"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9 text-muted-foreground hover:text-primary"
                )}
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              Subscribe to our newsletter
            </div>
            <NewsLetterForm />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-medium">Travel Log</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            © {currentYear} TravelPass. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
