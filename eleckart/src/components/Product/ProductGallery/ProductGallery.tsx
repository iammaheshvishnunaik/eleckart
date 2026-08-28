import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({
  images,
  productName,
}: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    setZoomPosition({
      x,
      y,
    });
  };

  return (
    <div className="w-full">

      {/* Main Image */}
      <div
        className="relative flex h-[450px] items-center justify-center overflow-hidden rounded-lg border border-gray-200 p-4 cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={selectedImage}
          alt={productName}
          className={`max-h-full max-w-full object-contain transition-transform duration-200 ${
            isZoomed ? "scale-200" : "scale-100"
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />
      </div>

      {/* Thumbnail Carousel */}
      <div className="relative mt-4 px-8">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={12}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index + image}>
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border-2 ${
                  selectedImage === image
                    ? "border-indigo-600"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="h-full w-full object-contain"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default ProductGallery;