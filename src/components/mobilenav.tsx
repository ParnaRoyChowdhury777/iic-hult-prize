import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="block md:hidden ml-auto bg-transparent hover:bg-transparent border-none"
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {isMounted && theme === "dark" && (
            <Image
              src="/images/logo_dark.png"
              width={60}
              height={60}
              alt="logo"
            />
          )}
          {isMounted && theme === "light" && (
            <Image
              src="/images/logo_light.png"
              width={60}
              height={60}
              alt="logo"
            />
          )}
          <div className="border-b border-slate-400"></div>
        </SheetHeader>
        <ul>
          <li className="mt-4 text-md hover:text-pink-600">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-4 text-md hover:text-pink-600">
            <Link href="/about">About</Link>
          </li>
          <li className="mt-4 text-md hover:text-pink-600 relative flex items-center">
            <Link href="/winner">Winner</Link>
            <span className="absolute ml-2 hidden h-5 w-5 animate-bounce items-center justify-center sm:flex">
              <span className="absolute inline-flex h-full w-full animate-ping rounded bg-[#E0097E] opacity-75"></span>
              <span className="relative inline-flex rounded bg-[#E0097E] p-0.5 px-1 text-xs text-white">
                New
              </span>
            </span>
          </li>

          <li className="mt-4 text-md hover:text-pink-600">
            <Link href="/showcase">Submissions</Link>
          </li>
        </ul>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
