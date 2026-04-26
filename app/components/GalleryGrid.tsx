'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import allImages, { type GalleryImage } from '@/app/data/gallery';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open image: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="w-full bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-medium text-white">{image.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Close image"
            >
              <X size={32} />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1067}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-lg font-medium">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
