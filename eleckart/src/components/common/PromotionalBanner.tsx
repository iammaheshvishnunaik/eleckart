import React from "react";

interface PromotionalBannerProps {
    desktopImage: string;
    mobileImage: string;
    alt: string;
}

const PromotionalBanner = ({
    desktopImage,
    mobileImage,
    alt,
}: PromotionalBannerProps) => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-8">
            <img
                src={desktopImage}
                alt={alt}
                className="w-full rounded-lg object-cover hidden md:block"
            />
            <img
                src={mobileImage}
                alt={alt}
                className="w-full rounded-lg object-cover md:hidden"
            />
        </section>
    );
};

export default PromotionalBanner;