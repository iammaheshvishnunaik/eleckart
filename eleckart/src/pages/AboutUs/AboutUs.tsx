import Breadcrumb from "../../components/common/Breadcrumb";

function AboutUs() {

    /* Breadcrumb */
        const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About Us",
            path: "/about-us",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        About Us
                    </h1>

                    <p className='mt-4 text-lg text-gray-600'>
                        Technology made simple.
                    </p>

                    <div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                Who We Are
                            </h2>

                            <p className='mt-4 leading-7 text-gray-600'>
                                Welcome to elecKart, your one-stop destination for
                                the latest electronics and technology products.
                            </p>

                            <p className='mt-4 leading-7 text-gray-600'>
                                We believe shopping for technology should be simple,
                                convenient, and trustworthy. Whether you're looking
                                for a new smartphone, laptop, smartwatch, or other
                                electronic essentials, elecKart brings a range of
                                products together in one easy-to-use platform.
                            </p>
                        </div>

                        <div className='rounded-lg bg-indigo-50 p-8'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                What We Offer
                            </h2>

                            <ul className='mt-5 space-y-3 text-gray-600'>
                                <li>• Smartphones</li>
                                <li>• Laptops</li>
                                <li>• Smartwatches</li>
                                <li>• Other electronic products</li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-16'>
                        <h2 className='text-center text-2xl font-semibold text-gray-900'>
                            Why Choose elecKart?
                        </h2>

                        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            <div className='rounded-lg border p-6'>
                                <h3 className='text-lg font-semibold text-gray-900'>
                                    Quality Products
                                </h3>

                                <p className='mt-3 text-gray-600'>
                                    We focus on offering reliable and popular
                                    electronics from well-known brands.
                                </p>
                            </div>

                            <div className='rounded-lg border p-6'>
                                <h3 className='text-lg font-semibold text-gray-900'>
                                    Simple Shopping
                                </h3>

                                <p className='mt-3 text-gray-600'>
                                    Our website makes finding and purchasing products
                                    quick and convenient.
                                </p>
                            </div>

                            <div className='rounded-lg border p-6'>
                                <h3 className='text-lg font-semibold text-gray-900'>
                                    Secure Checkout
                                </h3>

                                <p className='mt-3 text-gray-600'>
                                    Enjoy a secure checkout experience and shop
                                    with confidence.
                                </p>
                            </div>

                            <div className='rounded-lg border p-6'>
                                <h3 className='text-lg font-semibold text-gray-900'>
                                    Customer First
                                </h3>

                                <p className='mt-3 text-gray-600'>
                                    We continuously work to improve the shopping
                                    experience for our customers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 grid gap-10 lg:grid-cols-2'>
                        <div className='rounded-lg bg-gray-50 p-8'>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                Our Mission
                            </h2>

                            <p className='mt-4 leading-7 text-gray-600'>
                                Our mission is to make technology accessible,
                                convenient, and easy to shop for. We want elecKart
                                to become a trusted destination for customers
                                looking for the latest electronics at competitive prices.
                            </p>
                        </div>

                        <div className='rounded-lg bg-indigo-600 p-8 text-white'>
                            <h2 className='text-2xl font-semibold'>
                                Our Vision
                            </h2>

                            <p className='mt-4 leading-7 text-indigo-100'>
                                We envision elecKart as a modern electronics
                                marketplace where customers can discover the latest
                                technology, shop with confidence, and enjoy a seamless
                                online shopping experience.
                            </p>
                        </div>
                    </div>

                    <div className='mt-16 text-center'>
                        <h2 className='text-2xl font-semibold text-gray-900'>
                            Thank You for Choosing elecKart
                        </h2>

                        <p className='mt-4 text-gray-600'>
                            We're excited to be part of your technology journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs