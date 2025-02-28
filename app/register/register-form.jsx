"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // for client-side redirect
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { signUp } from "@/lib/auth-client";

const DEFAULT_ERROR = { error: false, message: "" };

export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter(); // next/navigation for redirect

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirm-password")?.toString();

    // Reset error state
    setError(DEFAULT_ERROR);

    // Basic password match check
    if (password !== confirmPassword) {
      setError({ error: true, message: "Passwords do not match" });
      return;
    }

    setLoading(true);

    // signUp with your auth-client
    const { data, error: signUpError } = await signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {},
        onError: (ctx) => {
          if (ctx?.error) {
            setError({ error: true, message: ctx.error.message });
          }
        },
      }
    );

    setLoading(false);

    if (signUpError) {
      // handle error returned by signUp if the library provides it
      setError({ error: true, message: signUpError.message });
      return;
    }

    // If we successfully get data, show toast and redirect to login
    if (data) {
      toast({
        title: "Registration Successful",
        description: "Your account has been created. Please log in.",
        className: "bg-green-500 text-white",
      });
      // Redirect to the login page after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  };

  return (
    <div
      className="
        min-h-screen 
        flex 
        items-center 
        justify-center
        bg-gradient-to-b 
        from-blue-50 
        to-blue-100
      "
    >
      <Card className="w-full max-w-md shadow-lg border border-gray-200/50 bg-white/90 backdrop-blur-sm rounded-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">
            Create an account
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your information to get started
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Name Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter new password"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                placeholder="Enter password again"
                required
              />
            </div>

            {/* Error Message */}
            {error.error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-md p-2 text-center">
                {error.message}
              </div>
            )}

            {/* Already have an account? */}
            <div className="text-center text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Log in
              </Link>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              className="w-full flex items-center justify-center gap-2 font-medium"
              type="submit"
              disabled={loading}
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
