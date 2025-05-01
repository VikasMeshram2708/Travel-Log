import { Home, LocationEdit, PersonStanding, Settings } from "lucide-react";

export const dashData = [
  {
    title: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <PersonStanding />,
  },
  {
    title: "Recent Places",
    href: "/dashboard/recents",
    icon: <LocationEdit />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,
  },
];

// recently visited places with co-ordinates, photos, location name, tag
export const recentlyVisited = [
  {
    title: "Kolhapur",
    lat: "16.69",
    lon: "74.23",
  },
  {
    title: "Nagpur",
    lat: "21.14631000",
    lon: "79.08491000",
  },
  {
    title: "Gondia",
    lat: "27.133662",
    lon: "81.963219",
  },
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
