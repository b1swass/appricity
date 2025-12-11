import ecom from "../assets/ecom.png";
import echat from "../assets/echat.png";
import cafe from "../assets/cafe.png";
import management from "../assets/management.png";

export const projects = [
  {
    title: "E-commerce Launchpad",
    desc: "A conversion-focused storefront for a growing brand.",
    tags: ["Web", "React", "E-commerce"],
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
    categories: ["web-development"],
    url: ecom,
    liveLink: "https://time2flex.netlify.app/"
  },
  {
    title: "Restaurant Website",
    desc: "A modern, responsive restaurant website with elegant menu layout and contemporary UI design. Features smooth animations and mobile-first approach.",
    tags: ["Web", "React", "Restaurant"],
    color: "bg-gradient-to-br from-gray-200 to-gray-400",
    categories: ["web-development", "graphics-branding"],
    url: cafe,
    liveLink: "https://restaurantorderingandmanagement.netlify.app/"
  },
  {
    title: "Restaurant ordering platform",
    desc: " A restaurant ordering platform with a completely separate Admin Panel hosted on a different domain. ",
    tags: ["Web", "Management", "Restaurant"],
    color: "bg-gradient-to-br from-slate-400 to-slate-600",
    categories: ["motion-graphics-vfx"],
    url: management,
    liveLink: "https://rnjtrestaurant.vercel.app"
  },
  // {
  //     title: "Fintech Dashboard",
  //     desc: "Real-time analytics dashboard for a financial institution.",
  //     tags: ["Software", "Dashboard"],
  //     color: "bg-gradient-to-br from-gray-800 to-black",
  //     categories: ["software-development"]
  //             ,url:ecom
  // },
  {
    title: "Chat App",
    desc: "nteractive messaging platform with real-time communication, location sharing, room creation, and map-based location view for enhanced user experience.",
    tags: ["Mobile", "iOS", "Android"],
    color: "bg-gradient-to-br from-zinc-400 to-zinc-600",
    categories: ["mobile-app-development"],
    url: echat,
    liveLink: "https://chatrnjt.netlify.app"
  },
];
