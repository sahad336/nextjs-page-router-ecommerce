import { cookies, headers } from "next/headers";

export async function GET() {
  const data = [{ id: 1, title: "T Shirt" }];

  const cookieList =await cookies();
  const tokenCookie =cookieList.get("authToken");
  console.log("tokenCookie:", tokenCookie);

  return Response.json({ data });
}

export async function POST(request: Request) {
  const prod = await request.json();
  const cookieList =await cookies();
  const tokenCookie = cookieList.get("authToken");
  const headerList = headers();

  console.log("Authorization:", (await headerList).get("Authorization"));

  const data = [{ id: 1, title: "T Shirt", prod }];

  return Response.json({ data });
}