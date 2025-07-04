"use client";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ReactNode } from "react";

const NavElement = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const pathName = usePathname();
  return (
    <NavigationMenuLink asChild>
      <div
        className={`${
          pathName === href ? "border-b-[.25rem]" : "border-b-[0]"
        } font-bold text-[1.5rem] px-2 py-1 transition-[border] duration-100 ease-in-out hover:border-b-[.25rem]`}
      >
        <Link href={href}>{children}</Link>
      </div>
    </NavigationMenuLink>
  );
};

export default NavElement;
// hover:bg-[#235175]
