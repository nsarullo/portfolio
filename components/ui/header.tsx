import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import UserImg from "@/public/images/nickSarulloLarge.jpg";
import nuvosWhiteLongLogoSVG from "@/public/images/nuvos_logo_white_long.svg";
import nuvosNavyLongLogoSVG from "@/public/images/blueNavyLong.svg";
import LinkedInSVG from "@/public/images/linkedin.svg"
import HeaderImg01 from "@/public/images/view_presentation.png";
import HeaderImg02 from "@/public/images/nuvos_software_shots.png";
import HeaderImg03 from "@/public/images/Operating.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center pt-6">
      {/* Dark mode toggle */}
      <ThemeToggle />
      {/* Intro */}
      <div className="mb-10">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={UserImg}
          width={48}
          height={48}
          
          alt="Nick Sarullo"
          priority
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Nick Sarullo
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Frontend engineer at
            <Link href="https://nuvoscre.com" target="_blank" rel="noopener noreferrer">
              <Image
                src={nuvosNavyLongLogoSVG}
                alt="Nuvos"
                width={51}
                height={17}
                className="inline ml-2 dark:hidden"
                style={{ marginBottom: '4.5px'}}
              />
              <Image
                src={nuvosWhiteLongLogoSVG}
                alt="Nuvos"
                width={51}
                height={17}
                className="hidden dark:inline ml-2"
                style={{ marginBottom: '4.5px'}}
              />
            </Link>
          </p>
        </div>
        <div className="cursor-pointer flex items-center justify-center gap-2">
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://github.com/nsarullo"
            aria-label="GitHub"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
            </svg>
          </a>
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://www.linkedin.com/in/nicholas-sarullo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="group flex justify-center gap-4">
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg border-2 border-[#2e70ef]"
          src={HeaderImg01}
          width={245}
          height={160}
          alt="Header 01"
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src={HeaderImg02}
          width={245}
          height={160}
          alt="Header 02"
          
          priority
        />
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg border-2 border-[#2e70ef]"
          src={HeaderImg03}
          width={245}
          height={160}
          alt="Header 03"
          priority
        />
      </div>
    </header>
  );
}
