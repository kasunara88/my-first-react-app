"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Film,
  PlusSquare,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SidePanelOverview from "../overview/side-panel-overview";

export default function SidePanel() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard/overview",
      label: "Overview",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      href: "/dashboard/movies",
      label: "Movies",
      icon: <Film className="h-4 w-4" />,
    },
    {
      href: "/dashboard/add-movie",
      label: "Add Movie",
      icon: <PlusSquare className="h-4 w-4" />,
    },
    {
      href: "/dashboard/users",
      label: "Users",
      icon: <Users className="h-4 w-4" />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  return (
    <nav
      className={cn(
        "w-64 h-screen px-4 py-6 border-r shadow-sm",
        // Subtle gradient background with slight transparency
        "bg-gradient-to-b from-accent/10 to-background/40 backdrop-blur-lg",
        // Text and border colors
        "border-border text-foreground"
      )}
    >
      <div className="space-y-1">
        <h2 className="px-2 text-lg font-semibold tracking-tight">Dashboard</h2>
        <div className="h-px bg-border mx-2 my-4" />

        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span className="text-muted-foreground group-hover:text-inherit transition-colors">
                {link.icon}
              </span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary navigation group */}
      <div className="mt-8 space-y-1">
        <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
          Quick Actions
        </h3>
        <div className="flex flex-col gap-1 mt-2">
          <Link
            href="/dashboard/add-movie"
            className="group flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="text-muted-foreground group-hover:text-inherit transition-colors">
              <PlusSquare className="h-4 w-4" />
            </span>
            New Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}
