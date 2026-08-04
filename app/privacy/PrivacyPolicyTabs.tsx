"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PrivacyPolicyTabs() {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("platform")?.toLowerCase() === "ios" ? "ios" : "android";

    return (
        <>
            {/* Tab Navigation */}
            <div className="mt-8 mb-8 flex justify-center border-b border-foreground/10">
                <div className="flex space-x-4">
                    <Link
                        href="?platform=android"
                        scroll={false}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
                            activeTab === "android"
                                ? "border-primary text-primary font-semibold"
                                : "border-transparent text-foreground/60 hover:text-foreground"
                        }`}
                    >
                        Android
                    </Link>
                    <Link
                        href="?platform=ios"
                        scroll={false}
                        className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
                            activeTab === "ios"
                                ? "border-primary text-primary font-semibold"
                                : "border-transparent text-foreground/60 hover:text-foreground"
                        }`}
                    >
                        iOS
                    </Link>
                </div>
            </div>

            {/* Tab Content */}
            <section className="space-y-6 leading-relaxed text-foreground">
                {/* ANDROID CONTENT */}
                {activeTab === "android" && (
                    <>
                        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mb-6">
                            <h2 className="text-lg font-bold mb-2">Disclosure & Consent</h2>
                            <p className="text-sm italic text-foreground/80">
                                Maganji can optionally access your SMS messages (<code className="bg-foreground/10 px-1 py-0.5 rounded">READ_SMS</code> and <code className="bg-foreground/10 px-1 py-0.5 rounded">RECEIVE_SMS</code>) to function as an automated expense tracker.
                                This permission is used exclusively to identify financial transactions (e.g., M-Pesa, Bank alerts) and convert them into
                                organized expense entries.
                                <strong> All processing occurs locally on your device. We do not collect, upload, or share your SMS content or financial
                                    data with our servers or any third parties.</strong>
                            </p>
                        </div>

                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>Overview</strong>
                            <br />
                            Brimukon Labs (“Brimukon”, “we”, “our”, or “us”) developed <strong>Maganji</strong> as an
                            <strong> offline-first</strong> application. Maganji is designed to help you track your finances
                            without compromising your privacy. You are not required to create an account to use the app.
                        </p>

                        <h2 className="text-xl font-semibold">1. Compliance with Kenyan Law</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            We comply with the <strong>Kenya Data Protection Act, 2019</strong>. Because Maganji stores
                            all financial data in a local database on your phone, you maintain full ownership and
                            control over your personal information.
                        </p>

                        <h2 className="text-xl font-semibold">2. Information We Access & Use</h2>

                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>a. SMS Data (On-Device Parsing)</strong>
                            <br />
                            When granted permission, Maganji reads incoming SMS from financial service providers. The app
                            extracts the amount, merchant, and date to create an expense record.
                            This data is never transmitted off your device.
                        </p>

                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>b. No Account Information</strong>
                            <br />
                            Maganji does not require a name, email address, or phone number to function. We do not
                            maintain user profiles on our servers.
                        </p>

                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>c. Financial Data & Analysis</strong>
                            <br />
                            All categories, charts, and budget analysis  are
                            generated locally using the data stored in your device’s SQLite database.
                        </p>

                        <h2 className="text-xl font-semibold">3. Payments & Subscriptions</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Maganji may offer premium features via <strong>Google Play Billing</strong>.
                            In such cases, we only receive confirmation of the transaction status (e.g., &quot;Purchased&quot;)
                            from Google to unlock features. We never see or store your credit card numbers or
                            M-Pesa credentials. Transaction processing is governed by the{" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice" className="underline">
                                Google Payments Privacy Notice
                            </a>.
                        </p>

                        <h2 className="text-xl font-semibold">4. Data Retention & Deletion</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>Your Data, Your Control:</strong> Your financial records are stored only on
                            your device. If you delete a transaction within the app, it is permanently removed.
                            If you uninstall Maganji, all local data is deleted by the Android system. We cannot
                            recover your data once it is deleted as we do not keep cloud backups.
                        </p>

                        <h2 className="text-xl font-semibold">5. Google Play Data Safety</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Maganji adheres to the <strong>Google Play User Data Policy</strong>:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/70">
                            <li><strong>Limited Use:</strong> We only request permissions necessary for core financial tracking.</li>
                            <li><strong>No Sale of Data:</strong> We never sell your personal or financial information.</li>
                            <li><strong>Transparency:</strong> Our app provides a clear UI for users to see exactly which SMS messages have been converted into transactions.</li>
                        </ul>
                    </>
                )}

                {/* IOS CONTENT */}
                {activeTab === "ios" && (
                    <>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>Overview</strong>
                            <br />
                            Brimukon Labs (“Brimukon”, “we”, “our”, or “us”) developed <strong>Maganji</strong> as an
                            <strong> offline-first</strong> application. Maganji is designed to help you track your finances
                            without compromising your privacy. You are not required to create an account to use the app.
                        </p>

                        <h2 className="text-xl font-semibold">1. Compliance with Kenyan Law</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            We comply with the <strong>Kenya Data Protection Act, 2019</strong>. Because Maganji stores
                            all financial data in a local database on your iPhone, you maintain full ownership and
                            control over your personal information.
                        </p>

                        <h2 className="text-xl font-semibold">2. Information We Access & Use</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>a. Financial Data & Local Analysis</strong>
                            <br />
                            All manually entered transactions, categories, charts, and budget analysis  are
                            generated locally using the SQLite database on your iOS device.
                        </p>

                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>b. No Account Information</strong>
                            <br />
                            Maganji does not require a name, email address, or phone number to function. We do not
                            maintain user profiles on our servers.
                        </p>

                        <h2 className="text-xl font-semibold">3. Payments & Subscriptions</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Maganji may offer premium features via <strong>Apple In-App Purchases (App Store)</strong>.
                            In such cases, transaction processing is handled entirely by Apple. We never see or store your payment details. 
                            Payment processing is governed by the{" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.apple.com/legal/privacy/" className="underline">
                                Apple Privacy Policy
                            </a>.
                        </p>

                        <h2 className="text-xl font-semibold">4. Data Retention & Deletion</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            <strong>Your Data, Your Control:</strong> Your financial records are stored only on
                            your iPhone. If you delete a transaction within the app, it is permanently removed.
                            If you uninstall Maganji, all local data is purged by iOS. We cannot
                            recover your data once it is deleted as we do not maintain cloud backups.
                        </p>

                        <h2 className="text-xl font-semibold">5. Apple App Store Privacy Guidelines</h2>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Maganji adheres strictly to <strong>Apple&apos;s App Store Review Guidelines</strong>:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/70">
                            <li><strong>Minimal Access:</strong> We do not ask for unnecessary permissions.</li>
                            <li><strong>No Data Tracking:</strong> We do not track you across other apps or websites.</li>
                            <li><strong>Zero Data Selling:</strong> We never sell personal or financial data.</li>
                        </ul>
                    </>
                )}

                {/* Shared Footer Sections */}
                <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                    We may update this Privacy Policy as we add new features. We recommend checking this
                    page periodically. Your continued use of Maganji following any updates constitutes
                    acceptance of those changes.
                </p>

                <h2 className="text-xl font-semibold">7. Contact Us</h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                    For any questions about your privacy while using Maganji, please contact us at:
                </p>
                <a href="mailto:info@brimukon.com" className="underline font-bold text-lg">
                    info@brimukon.com
                </a>
            </section>
        </>
    );
}