"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden" />
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Hang out / Talk / Play / Chat
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Smoothy
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Make your group chats more fun Use custom emoji, stickers,
                soundboard effects and more to add your personality to your
                voice, video, or text chat. Set your avatar and a custom status,
                and write your own profile to show up in chat your way.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              {/* Download for Windows Butonu (Şeffaf arka plan) */}
              <Link
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                href=""
              >
                Download for windows
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="icon-2tQ9Jt"
                >
                  <g fill="currentColor">
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
              </Link>

              {/* Open Smoothy in your browser Butonu (Şeffaf arka plan) */}
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                href="home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Open Smoothy in your browser
              </a>
            </div>
          </div>
        </div>

        {/* Sağ üst köşeye eklenen linkli buton (Şeffaf arka plan) */}
        <div className="absolute top-4 right-4">
          <Link href="login" passHref>
            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}