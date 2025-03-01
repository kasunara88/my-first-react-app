<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
=======
'use client';
// Cliend side component for the login form
import React, { useState } from 'react';
import { loginUser } from '../libs/apis/server';

export default function LoginForm() {
  const [email, setemail] = useState('');
  const [password, setpasword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const validateForm = () => {
    if (!email) {
      setemailError('Email is required');
      return false;
    } else {
      setemailError('');
    }
    if (!password) {
      setpasswordError('Password is required');
      return false;
    } else {
      setpasswordError('');
    }
    return true;
>>>>>>> origin/main
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const isValid = validateForm();
    if (isValid) {
      await signIn.email(
        { email, password },
        {
          onSuccess: () => redirect("/dashboard"),
          onError: (ctx) => {
            console.error(ctx?.error?.message);
            setPasswordError("Invalid credentials");
          },
        }
      );
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 m-0 p-0">
      <Card className="w-full max-w-md border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-sm rounded-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Access your Dashboard
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-xs text-red-600 mt-1">{emailError}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-xs text-red-600 mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <a
                href="/forget-password"
                className="text-sm font-medium text-blue-700 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button
              type="submit"
              className="w-full"
              size="sm"
              variant="default"
            >
              Sign In
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="text-blue-700 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
=======

    const isValid = validateForm();
    if (isValid) {
      const login = await loginUser({ email: email, password: password });
    }
    
  };

  return (
    <div className="w-[500px] ex-auto">
      <div className="bg-white shadow-md border-gray-300 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-semibold text-center">Sign In</h3>
          {/* Add the email field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold texet-gray-900 block mb-2"
            >
              E mail
            </label>
            <input
              type="emial"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {emailError && (
              <div className="text-red-600 text-sm mt-2 ml-2">{emailError}</div>
            )}
          </div>

          {/* Add the password field */}
          <div>
            <label
              htmlFor="Password"
              className="text-sm font-semibold texet-gray-900 block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpasword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="................"
            />
            {passwordError && (
              <div className="text-red-600 text-sm mt-2 ml-2">
                {passwordError}
              </div>
            )}
          </div>
          {/* Add the remember me checkbox */}
          <div className="flex justify-between ">
            <div className="flex items-start ">
              <div className="flex items-center h-5">
                <input
                  id="remeber"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus-ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remeber" className="font-medium">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/forget-pasword"
              className="text-sm text-gray-800 font-semibold hover:underline ml-auto"
            >
              Forget Password?
            </a>
          </div>
          {/* Add the submit button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In{' '}
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-2">
            <span>Don't have an account yet?</span>
            <a
              href="/register"
              className="font-medium text-blue-800 text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
>>>>>>> origin/main
    </div>
  );
}
