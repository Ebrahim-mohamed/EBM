"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import Image from "next/image";
import { SelectValue } from "@radix-ui/react-select";

export function LanguageButton() {
  const locale = useLocale(); // current locale
  const router = useRouter();
  const pathname = usePathname(); // current route
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|ar)/, "")}`;
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <Select
      onValueChange={handleChange}
      defaultValue={locale}
      disabled={isPending}
    >
      <SelectTrigger className=" bg-[#4082BF] rounded-[0.5rem] border-none flex items-center text-white outline-none focus:outline-none focus:ring-0 ">
        {locale == "en" ? (
          <div className="flex items-center justify-between gap-[0.5rem]">
            <p>English</p>
            <Image
              alt="lang icon"
              width={10}
              height={10}
              src="/en.jpg"
              className="w-5 h-5"
            />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-[0.5rem]">
            <p>العربية</p>
            <Image
              alt="lang icon"
              width={10}
              height={10}
              src="/ar.jpg"
              className="w-5 h-5"
            />
          </div>
        )}
      </SelectTrigger>
      <SelectContent className="z-200">
        <SelectItem value="en" className="flex items-center justify-between">
          <p>English</p>
          <Image
            alt="lang icon"
            width={10}
            height={10}
            src="/en.jpg"
            className="w-5 h-5"
          />
        </SelectItem>
        <SelectItem value="ar" className="flex items-center justify-between">
          <p>العربية</p>
          <Image
            alt="lang icon"
            width={10}
            height={10}
            src="/ar.jpg"
            className="w-5 h-5"
          />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
