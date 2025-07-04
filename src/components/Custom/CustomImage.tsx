import Image from "next/image";
import React, { ReactNode } from "react";

const CustomImage = ({ src }: { src: string }) => {
  return <Image src={src} alt="carousel slide image" />;
};

export default CustomImage;
