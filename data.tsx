import { Cpu, Home, LocationEdit, PersonStanding } from "lucide-react";

export const dashData = [
  {
    title: "Home",
    href: "/dashboard",
    icon: <Home />,
  },
  {
    title: "Locations",
    href: "/dashboard/locations",
    icon: <LocationEdit />,
  },
  {
    title: "All Memories",
    href: "/dashboard/locations/all",
    icon: <Cpu />,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <PersonStanding />,
  },
  // {
  //   title: "Settings",
  //   href: "/dashboard/settings",
  //   icon: <Settings />,
  // },
];

// visited summary image gallery
export const imageGallery = [
  {
    title: "Sunset Over Hills",
    imageUrls: [
      "https://picsum.photos/id/1015/800/600",
      "https://picsum.photos/id/1016/800/600",
      "https://picsum.photos/id/1020/800/600",
      "https://picsum.photos/id/1024/800/600",
      "https://picsum.photos/id/1035/800/600",
    ],
  },
  {
    title: "Urban Exploration",
    imageUrls: [
      "https://picsum.photos/id/1040/800/600",
      "https://picsum.photos/id/1041/800/600",
      "https://picsum.photos/id/1050/800/600",
      "https://picsum.photos/id/1060/800/600",
      "https://picsum.photos/id/1070/800/600",
    ],
  },
  {
    title: "Nature Walk",
    imageUrls: [
      "https://picsum.photos/id/237/800/600", // Dog in nature
      "https://picsum.photos/id/1003/800/600",
      "https://picsum.photos/id/1005/800/600",
      "https://picsum.photos/id/1011/800/600",
      "https://picsum.photos/id/1025/800/600",
    ],
  },
];
