import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-center">
        <Link href="/" className="inline-flex items-center" aria-label="Maganji home">
          <Image
            src="/images/logo.webp"
            alt="Maganji"
            width={160}
            height={48}
            priority
            className="h-8 w-auto invert dark:invert-0"
          />
        </Link>
       
      </div>
    </header>
  );
}