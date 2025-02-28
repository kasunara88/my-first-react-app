"use client";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Film,
  Users,
  Clock,
  Plus,
  AlertCircle,
  Database,
  CalendarDays,
  Ticket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SidePanelOverview() {
  // Mock data - replace with real data from your API
  const stats = {
    totalMovies: 245,
    newThisWeek: 12,
    activeUsers: 1542,
    storageUsage: 65,
    recentActivities: [
      { id: 1, title: "The Dark Knight added", time: "2h ago" },
      { id: 2, title: "User subscription", time: "4h ago" },
      { id: 3, title: "System updated", time: "1d ago" },
    ],
    systemStatus: "operational",
  };

  return (
    <div className="h-full p-4 space-y-6 bg-background/95 backdrop-blur border-l">
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          System Overview
        </h3>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Film className="h-4 w-4" />
              Total Movies
            </div>
            <Badge variant="outline">{stats.totalMovies}</Badge>
          </div>
          <Progress
            value={(stats.newThisWeek / stats.totalMovies) * 100}
            className="h-2"
          />
          <p className="text-xs text-muted-foreground">
            +{stats.newThisWeek} this week
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              Active Users
            </div>
            <Badge variant="outline">{stats.activeUsers}</Badge>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-xs text-muted-foreground">
            +12.5% from last month
          </p>
        </div>
      </div>

      {/* System Status */}
      <div className="space-y-2 p-4 rounded-lg bg-muted/50">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm font-medium">
              All Systems {stats.systemStatus}
            </p>
            <p className="text-xs text-muted-foreground">
              Storage: {stats.storageUsage}% used
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="h-10 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span className="text-xs">Add Movie</span>
        </Button>
        <Button variant="outline" className="h-10 flex items-center gap-2">
          <Ticket className="h-4 w-4" />
          <span className="text-xs">Manage Content</span>
        </Button>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Recent Activity
        </h4>
        <div className="space-y-3">
          {stats.recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm leading-none">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
