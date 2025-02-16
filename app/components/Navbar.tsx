import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegCircle } from "react-icons/fa6";
import Link from "next/link";
import "../globals.css";

import { currentUser } from "@clerk/nextjs/server";

export default async function Navbar() {
  const user = await currentUser();
  return (
    <div className="flex justify-between items-center p-4 ">
      <div>
        <h1 className="text-2xl font-bold ">teker</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="px-2 py-1.5 border-2 border-gray rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>

        <Link href="https://teker.vercel.app" target="_blank">
          <button className="flex items-center gap-x-2 px-4 py-1.5 border-2 border-gray rounded-lg cursor-pointer">
            Live{" "}
            <span className="text-green bg-green animate-pulse rounded-full text-sm">
              <FaRegCircle />
            </span>
          </button>
        </Link>

        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="px-4 py-1.5 bg-blue text-white
              rounded-lg text-lg font-semibold cursor-pointer focus:outline-none"
            >
              {user?.firstName?.split("")[0]}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg m-3 mr-4">
              <DropdownMenuLabel className="px-4 py-2 text-gray-500 space-y-2">
                <p className="text-black">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-[#a59e9e]">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </DropdownMenuLabel>

              <DropdownMenuSeparator className="border-t border-gray-200" />
              <DropdownMenuItem className="px-4 py-2 text-black font-medium hover:bg-gray-100 cursor-pointer">
                <a href="/support">Support</a>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="border-t border-gray-200" />
              <DropdownMenuItem className="px-4 py-2 text-black font-medium hover:bg-gray-100 cursor-pointer">
                <SignOutButton>Logout</SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}
