import React from "react";
import { Ebook } from "@/types";

export function EbookView(props: { ebooks: Ebook[] }) {
  const { ebooks } = props;

  return (
    <div className="container mx-auto p-5 md:p-10">
      <h1 className="text-center font-semibold text-3xl mb-10">E-Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebooks.map((item) => (
          <div key={item.id} className="shadow rounded-md overflow-hidden">
            <img src={item.cover} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                {item.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
