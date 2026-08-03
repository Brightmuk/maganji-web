import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Maganji handles your data — in short, it doesn't leave your phone.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-foreground/40 mb-12">
        Last updated: [add date before publishing]
      </p>

      <div className="space-y-10 text-foreground/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">
            The short version
          </h2>
          <p>
            Maganji runs entirely on your device. There is no account, no
            login, and no server that your financial data is sent to. SMS
            messages from M-Pesa, Airtel Money, and supported banks are read
            and processed locally to build your transaction history, and
            never leave your phone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">
            What Maganji accesses
          </h2>
          <p>
            With your permission, Maganji reads SMS messages to detect and
            categorise mobile money and bank transactions. This data is
            stored only in the app's local database on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">
            What Maganji does not do
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not collect, transmit, or sell your transaction data.</li>
            <li>We do not require an account or login.</li>
            <li>We do not use your data for advertising.</li>
            <li>We do not share data with third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">
            Backups and exports
          </h2>
          <p>
            If you choose to back up your data to Google Drive or export it
            as a CSV file, that action is initiated by you and the data is
            sent to the destination you select — Maganji does not manage or
            access that storage on your behalf beyond completing the
            transfer you requested.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black dark:text-white mb-3">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:support@brimukonlabs.com"
              className="underline underline-offset-4"
            >
              support@brimukonlabs.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
