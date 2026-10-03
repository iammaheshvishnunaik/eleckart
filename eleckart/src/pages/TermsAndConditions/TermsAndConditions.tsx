import Breadcrumb from "../../components/common/Breadcrumb";

function TermsAndConditions() {
    /* Breadcrumb */
        const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Terms And Conditions",
            path: "/terms-and-conditions",
        }
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Terms & Conditions
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
                            Welcome to elecKart. These Terms & Conditions govern
                            your use of the elecKart website and the purchase of
                            products through our platform. By accessing or using
                            our website, you agree to comply with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            2. User Accounts
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Some features of elecKart may require you to create an
                            account. You are responsible for providing accurate
                            information and keeping your account credentials
                            confidential.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            You are responsible for all activity carried out through
                            your account and should notify us if you believe your
                            account has been accessed without authorization.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            3. Products and Product Information
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We make reasonable efforts to ensure that product
                            descriptions, images, specifications, prices, and
                            availability displayed on the website are accurate.
                            However, minor differences may occur.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            Product availability and prices may change without
                            prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            4. Orders
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            When you place an order through elecKart, you agree to
                            provide accurate delivery and contact information.
                            Placing an order does not guarantee acceptance of the
                            order.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            We reserve the right to cancel or reject an order in
                            cases such as product unavailability, pricing errors,
                            suspected fraudulent activity, or other circumstances
                            that may prevent us from fulfilling the order.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            5. Pricing and Payments
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            All product prices displayed on the website are subject
                            to change. Applicable taxes, delivery charges, or other
                            fees may be added during checkout where applicable.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            Payments may be processed through third-party payment
                            service providers. By making a payment, you agree to
                            the applicable terms and conditions of the payment
                            provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            6. Shipping and Delivery
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We aim to deliver orders within the estimated delivery
                            timeframe provided during checkout. Delivery times may
                            vary depending on product availability, location,
                            logistics, weather, and other circumstances beyond our
                            control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            7. Returns and Refunds
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            Returns, replacements, cancellations, and refunds are
                            subject to the applicable return and refund policy of
                            elecKart and the specific product purchased.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            Products may need to meet certain conditions to qualify
                            for a return or replacement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            8. Acceptable Use
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            You agree not to misuse the elecKart website or attempt
                            to interfere with its operation.
                        </p>

                        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                            <li>Use the website for unlawful purposes</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Submit false or misleading information</li>
                            <li>Interfere with the security or functionality of the website</li>
                            <li>Use automated systems to access the website without permission</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            9. Intellectual Property
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            The content available on the elecKart website,
                            including text, graphics, logos, images, designs, and
                            other materials, may be protected by applicable
                            intellectual property laws.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            You may not reproduce, modify, distribute, or use our
                            content without appropriate authorization.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            10. Limitation of Liability
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            To the extent permitted by applicable law, elecKart
                            will not be responsible for indirect, incidental, or
                            consequential losses arising from your use of the
                            website or inability to use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            11. Changes to These Terms
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            We may update these Terms & Conditions from time to
                            time. Any changes will be posted on this page along
                            with an updated revision date.
                        </p>

                        <p className="mt-3 leading-7 text-gray-600">
                            Your continued use of the website after changes are
                            posted means that you accept the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900">
                            12. Contact Us
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            If you have any questions about these Terms &
                            Conditions, please contact us through the contact
                            information provided on the elecKart website.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions