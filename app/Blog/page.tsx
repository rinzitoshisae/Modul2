"use client"; // penting kalau pakai hook client

import Link from "next/link";
import { useSearchParams } from "next/navigation"; // ✅ ganti next/router -> next/navigation
import { blogPosts } from "../Data/Blog";

export default function BlogPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); // ambil query ?category=

    const filteredPosts = category
        ? blogPosts.filter(
            (post) => post.category.toLowerCase() === category.toLowerCase()
        )
        : blogPosts;

    return (
        <main className="h-screen w-screen bg-cyan-800">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
                <h1 className="text-3xl font-bold mb-8 text-soft-brown">Blog Posts</h1>

                {/* Filter Links */}
                <div className="mt-4 mb-6 flex justify-center space-x-4">
                    <Link
                        href="/Blog"
                        className={`text-soft-brown ${!category ? "font-bold" : ""}`}
                    >
                        All
                    </Link>
                    <Link
                        href="/Blog?category=Tips%20%26%20Tricks!"
                        className={`text-soft-brown ${category === "Tips & Tricks!" ? "font-bold" : ""
                            }`}
                    >
                        Tips & Tricks
                    </Link>
                    <Link
                        href="/Blog?category=Intermediate!"
                        className={`text-soft-brown ${category === "Intermediate!" ? "font-bold" : ""
                            }`}
                    >
                        Intermediate
                    </Link>
                </div>

                {/* Blog List */}
                <div className="grid gap-6">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="border border-gray-200 p-4 rounded-lg">
                            <Link href={`/Blog/${post.slug}`}>
                                <h2 className="text-xl font-semibold mb-2 text-soft-brown hover:underline">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-white text-sm font-semibold mb-2">
                                {post.date}
                            </p>
                            <p>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
