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

export default function SidePanel() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
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
    <nav className="w-64 px-4 py-6 border-r bg-background/95 backdrop-blur">
      <div className="space-y-1">
        <h2 className="px-2 text-lg font-semibold tracking-tight">Dashboard</h2>
        <div className="h-[1px] bg-border mx-2 my-4" />

        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Add a secondary navigation group */}
      <div className="mt-8 space-y-1">
        <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
          Quick Actions
        </h3>
        <div className="flex flex-col gap-1 mt-2">
          <Link
            href="/dashboard/add-movie"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
          >
            <PlusSquare className="h-4 w-4" />
            New Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}

//   <div className="flex flex-col p-4 space-y-2">
//     <Link
//       href="/dashboard"
//       className="hover:bg-blue-100 text--sm p-2 rounded"
//     >
//       Overview
//     </Link>
//     <Link
//       href="/dashboard/movies"
//       className="hover:bg-blue-100 text--sm p-2 rounded"
//     >
//       Movies
//     </Link>
//     <Link
//       href="/dashboard/add-movie"
//       className="hover:bg-blue-100 text--sm p-2 rounded"
//     >
//       Add Movies
//     </Link>
//     <Link
//       href="/dashboard/users"
//       className="hover:bg-blue-100 text--sm p-2 rounded"
//     >
//       Users
//     </Link>
//     <Link
//       href="/dashboard/settings"
//       className="hover:bg-blue-100 text--sm p-2 rounded"
//     >
//       Settings
//     </Link>
//   </div>
// );
