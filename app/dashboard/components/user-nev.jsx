"use client";
import { redirect } from "next/navigation";
import { LogOut, Settings, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export default function UserNev() {
  const { data: session } = useSession();
  console.log(session);

  // Get user initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
  };

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/login");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 group cursor-pointer">
          <Avatar
            className={cn(
              "h-9 w-9 border-2 transition-all border-blue-800",
              "group-hover:border-primary/80 group-data-[state=open]:border-primary"
            )}
          >
            <AvatarImage
              src={session?.user.image || undefined}
              alt={session?.user.name || "User avatar"}
            />
            <AvatarFallback className="bg-primary/10 font-medium">
              {session?.user.name ? getInitials(session.user.name) : "US"}
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 rounded-xl shadow-lg border forceMount"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="px-4 py-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold truncate">
              {session?.user.name || "Anonymous User"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {session?.user.email || "No email provided"}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-muted" />

        <DropdownMenuGroup className="px-1">
          <DropdownMenuItem className="px-3 py-2 rounded-lg focus:bg-accent transition-colors">
            <User className="mr-3 h-4 w-4 text-primary" />
            <span className="text-sm">Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-3 py-2 rounded-lg focus:bg-accent transition-colors">
            <Settings className="mr-3 h-4 w-4 text-primary" />
            <span className="text-sm">Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-muted" />

        <DropdownMenuItem
          onClick={handleLogout}
          className="px-3 py-2 rounded-lg focus:bg-destructive/10 focus:text-destructive transition-colors"
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span className="text-sm">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
