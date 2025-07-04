import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import NavElement from "./NavElement";

const CustomNav = () => {
  return (
    <div className="w-full flex flex-row flex-nowrap justify-between ">
      <Image src={"/logo.png"} alt="Logo" width={200} height={50}></Image>

      <NavigationMenu>
        <NavigationMenuList>
          
          <NavigationMenuItem>
            <NavElement href="/">Home</NavElement>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavElement href="/link">Link</NavElement>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default CustomNav;
