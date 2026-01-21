import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(
  _: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params; //  FIX

  await connectDB();

  const blog = await Blog.findOne({
    slug,
    status: "published",
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params; //  FIX
  const data = await req.json();

  await connectDB();

  const updated = await Blog.findOneAndUpdate({ slug }, data, { new: true });

  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params; // ✅ FIX

  await connectDB();
  await Blog.findOneAndDelete({ slug });

  return NextResponse.json({ success: true });
}
