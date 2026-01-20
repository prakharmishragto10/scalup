import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET → Single blog by slug
export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await connectDB();

  const blog = await Blog.findOne({
    slug: params.slug,
    status: "published",
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

// PUT → Update blog
export async function PUT(
  req: Request,
  { params }: { params: { slug: string } },
) {
  await connectDB();
  const data = await req.json();

  const updated = await Blog.findOneAndUpdate({ slug: params.slug }, data, {
    new: true,
  });

  return NextResponse.json(updated);
}

// DELETE → Delete blog
export async function DELETE(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await connectDB();

  await Blog.findOneAndDelete({ slug: params.slug });
  return NextResponse.json({ success: true });
}
