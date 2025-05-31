'use client';

import { useEffect, useState, useRef } from 'react';

interface ImageItem {
  id: string;
  download_url: string;
  author: string;
}

export default function OrderPage() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const data = await res.json();
    setImages(prev => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        setPage(prev => prev + 1);
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.disconnect();
      }
    };
  }, [loading]);

  return (
    
<div className="grid grid-cols-4 gap-4">
  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
    <div key={n} className="bg-blue-500 text-white p-4 text-center">
      Box {n}
    </div>
  ))}
</div>



  );
}
