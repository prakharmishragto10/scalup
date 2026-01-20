import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import slugify from "slugify";

// GET → List all published blogs
export async function GET() {
  await connectDB();

  const blogs = await Blog.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .select("-content");

  return NextResponse.json(blogs);
}

// POST → Create blog (draft or published)
export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const blog = await Blog.create({
    ...body,
    slug: slugify(body.title, { lower: true, strict: true }),
    publishedAt: body.status === "published" ? new Date() : null,
  });

  return NextResponse.json(blog, { status: 201 });
}
