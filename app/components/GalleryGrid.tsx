'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import allImages, { type GalleryImage } from '@/app/data/gallery';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allImages.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className="pro-card group relative overflow-hidden text-left"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open image: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index < 3}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-900/35 to-transparent p-4">
              <p className="text-sm font-semibold text-white">{image.caption}</p>
              <p className="mt-0.5 text-xs text-on-dark-muted">{image.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/40 bg-black/40 p-2 text-white transition hover:bg-black/65"
              aria-label="Close image"
            >
              <X size={28} />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1067}
              sizes="100vw"
              className="w-full rounded-2xl border border-white/15 object-cover"
            />
            <div className="mt-4 rounded-2xl border border-white/15 bg-black/35 p-4 text-center backdrop-blur">
              <p className="text-lg font-semibold text-white">{selectedImage.caption}</p>
              <p className="text-sm text-on-dark-muted">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
