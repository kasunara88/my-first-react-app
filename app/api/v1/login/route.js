import { NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  console.log(request);
  //Bind Database
  // Find the User in Database
  // Check Password Validity
  // Return the response with the token
  // If password invalid return error response
  return NextResponse.json({ success: true, username: "Kasun" });
};
