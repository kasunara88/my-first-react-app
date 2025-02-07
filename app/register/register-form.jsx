"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

const DEFAULT_ERROR = { error: false, message: "" };

// Keep this as a client component(functional component)
export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name") ?? "";
    const email = formData.get("email") ?? "";
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm-password") ?? "";

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setError(DEFAULT_ERROR);
      } else {
        setError({ error: true, message: "Passwords do not match" });
      }
    }
    console.log("Error", error);
  };

  return (
    <div className="flex  justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[400px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter Your Information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="John@gmail.com"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Enter Password again to confirm"
                />
              </div>
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-700 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>
              <div className="flex justify-center gap-1 text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1 font-medium" type="submit">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
