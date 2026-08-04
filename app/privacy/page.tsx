import type { Metadata } from "next";
import { Suspense } from "react";
import MaganjiFooter from "../footer";
import PrivacyPolicyTabs from "./PrivacyPolicyTabs";
import SiteHeader from "../header";

export const metadata: Metadata = {
    title: "Privacy Policy | Maganji",
    description: "Privacy policy for Maganji expense tracker on Android and iOS."
};

export default function MaganjiPrivacyPage() {
    return (
        <div>
          <SiteHeader />
            <main className="mx-auto pt-20 flex w-full max-w-4xl flex-col px-4 py-16">
              <br></br>
                <h1 className="mb-4 text-center text-3xl font-semibold text-foreground">
                    Privacy Policy
                </h1>

                <p className="text-sm text-foreground/50 text-center">Last updated: 14th May 2026</p>

                <Suspense fallback={<div className="py-12 text-center text-foreground/60">Loading privacy policy...</div>}>
                    <PrivacyPolicyTabs />
                </Suspense>
            </main>
            <MaganjiFooter />
        </div>
    );
}