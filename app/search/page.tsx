// app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  // This extracts the 'q' parameter from the URL (/search?q=your-query)
  const query = searchParams.get("q");

  return (
    <main className="max-w-[1400px] mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-[#003A5C] mb-6">
        Search Results
      </h1>
      
      {query ? (
        <p className="text-lg text-gray-600">
          Showing results for: <span className="font-semibold text-[#005B8E]">"{query}"</span>
        </p>
      ) : (
        <p className="text-lg text-gray-500">No search term entered.</p>
      )}

      {/* ── YOUR SEARCH FILTER LOGIC GOES HERE ── */}
      <div className="mt-8 border border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400">
        Connect your data array or API filter loop here.
      </div>
    </main>
  );
}