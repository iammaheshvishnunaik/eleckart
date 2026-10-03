import Breadcrumb from "../../components/common/Breadcrumb";

function PrivacyPolicy() {
    /* Breadcrumb */
        const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Privacy Policy",
            path: "/privacy-policy",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Last updated: September 5, 2026
                    </p>
                </div>

                <div className="space-y-8 rounded-lg bg-white p-6 shadow-sm sm:p-8">

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            1. Introduction
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Welcome to elecKart. We respect your privacy and are
                            committed to protecting the personal information you
                            share with us. This Privacy Policy explains how we
                            collect, use, store, and protect your information when
                            you use our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            2. Information We Collect
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            When you use elecKart, we may collect information that
                            you provide directly to us, including your name, email
                            address, mobile number, delivery address, and account
                            information.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            We may also collect information related to your orders,
                            products purchased, payment status, and interactions
                            with our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            3. How We Use Your Information
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We use the information we collect to provide and improve
                            our services, process orders, deliver products, manage
                            your account, communicate with you, and provide customer
                            support.
                        </p>

                        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                            <li>To create and manage your account</li>
                            <li>To process and deliver your orders</li>
                            <li>To communicate with you about your orders</li>
                            <li>To provide customer support</li>
                            <li>To improve our website and services</li>
                            <li>To detect and prevent fraudulent activity</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            4. Payment Information
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Payments made through elecKart may be processed by
                            third-party payment service providers. We do not
                            intentionally store your complete card details or
                            payment credentials on our servers.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            Payment information is handled according to the
                            policies and security practices of the applicable
                            payment service provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            5. Cookies and Local Storage
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Our website may use cookies, local storage, and similar
                            technologies to remember preferences, maintain your
                            shopping cart, manage your session, and improve your
                            browsing experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            6. Information Sharing
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We do not sell or rent your personal information to
                            third parties. We may share necessary information with
                            trusted service providers who help us operate our
                            website, process payments, deliver orders, or provide
                            other services on our behalf.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            7. Data Security
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We take reasonable measures to protect your personal
                            information from unauthorized access, alteration,
                            disclosure, or destruction. However, no method of
                            transmitting or storing information electronically can
                            be guaranteed to be completely secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            8. Your Rights
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Depending on applicable law, you may have the right to
                            access, update, correct, or request deletion of your
                            personal information. You may also contact us regarding
                            questions about how your information is used.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            9. Third-Party Services
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Our website may use third-party services such as payment
                            processors, analytics providers, hosting services, and
                            other technology providers. These services may collect
                            or process information according to their own privacy
                            policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            10. Changes to This Privacy Policy
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We may update this Privacy Policy from time to time.
                            Any changes will be reflected on this page along with
                            an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            11. Contact Us
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            If you have any questions or concerns about this Privacy
                            Policy or how your information is handled, please
                            contact us through the contact information provided
                            on the elecKart website.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy