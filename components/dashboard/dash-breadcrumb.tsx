"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

// Helper function to check if a string is a UUID
const isUUID = (str: string) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};

export default function DashBreadcrumb() {
  const pathname = usePathname();

  // Custom capitalize function
  const capitalize = (str: string) => {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate breadcrumb items
  const getBreadcrumbs = () => {
    // Remove empty strings and "dashboard" from the path segments
    const segments = pathname
      .split("/")
      .filter((segment) => segment !== "" && segment !== "dashboard");

    const breadcrumbs = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Dashboard",
        href: "/dashboard",
      },
    ];

    // Build the breadcrumb trail dynamically
    let currentPath = "/dashboard";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      // Skip showing UUIDs and other IDs in breadcrumb
      if (isUUID(segment)) {
        return;
      }

      breadcrumbs.push({
        name: capitalize(segment),
        href: isLast ? "#" : currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {breadcrumb.href === "#" ? (
                <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={breadcrumb.href}>
                  {breadcrumb.name}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
