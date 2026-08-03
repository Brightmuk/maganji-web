import Link from "next/link";

export default function MaganjiFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <div className="maganji-display text-xl font-bold text-black dark:text-white mb-2">
              Maganji
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Built by Brimukon Labs in Nairobi. Your breathing room, worked
              out from your own M-Pesa and Airtel Money history — fully
              offline.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-4">
                App
              </div>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link
                    href="https://apps.apple.com/app/maganji/id0000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    App Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.brimukon.spenditize"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Google Play
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-4">
                Support
              </div>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link
                    href="mailto:support@brimukonlabs.com"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    support@brimukonlabs.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-4">
                Company
              </div>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link
                    href="https://brimukonlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Brimukon Labs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/40">
          <span>© {new Date().getFullYear()} Brimukon Labs. All rights reserved.</span>
          <span>Made in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}
