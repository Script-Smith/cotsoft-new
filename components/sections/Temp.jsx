import Image from "next/image";
import Link from "next/link";

export default function Temp () {
  return (
    <main className="min-h-screen flex items-center font-inter justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logob.png"
            alt="Company Logo"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-gv text-zinc-900 tracking-wider">
          Website Under Construction
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-zinc-600 text-base md:text-lg">
          We&apos;re currently working on something exciting.  
          Stay tuned for updates and announcements.
        </p>

        {/* Divider */}
        <div className="mt-8 w-20 h-[2px] bg-zinc-200 mx-auto rounded-full" />

        {/* Instagram Button */}
        <div className="mt-10">
          <Link
            href="https://www.instagram.com/cotsoft/"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-zinc-900 text-white font-semibold shadow-md hover:bg-zinc-800 transition"
          >
            Explore Our Instagram
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-zinc-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
