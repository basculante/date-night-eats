import React, { HTMLAttributes } from "react";
import Image from "next/image";

interface ICardProps extends HTMLAttributes<HTMLElement> {
  image: string;
  sauceDescription: string;
  title?: string;
  onSelect?: () => void;
  selected?: boolean;
}

const Card = ({
  image,
  sauceDescription,
  title,
  selected,
  onSelect,
  ...rest
}: ICardProps) => {
  return (
    <div
      className={`h-full w-full m-auto rounded-sm shadow-lg p-2 sm:p-6 ${
        selected ? "bg-green-50" : "bg-yellow-50"
      }`}
      {...rest}
    >
      <div className="relative my-2 mx-2">
        <Image
          className="rounded-md"
          src={image}
          objectFit="cover"
          layout="intrinsic"
          height={400}
          width={400}
          priority
        />
      </div>
      <h1 className="text-3xl sm:text-5xl italic mt-8 sm:mt-12 mb-4">
        {title}
      </h1>
      <h3>All hand made from scratch</h3>
      <div className="mt-8 text-md sm:text-lg">
        <ul>
          <li className="p-2">4 Servings of Pasta</li>
          <li className="p-2">{sauceDescription}</li>
          <li className="p-2">4 Garlic Knots</li>
          <li className="p-2">Salad w/ Dressing</li>
          <li className="p-2">Lunchbox Cake</li>
        </ul>
      </div>
      <button
        className="bg-black text-white py-2 px-6 sm:px-12 m-10 text-2xl rounded-md focus:ring-2 focus:ring-red-500 ring-offset-2 "
        onClick={onSelect}
      >
        Select
      </button>
    </div>
  );
};

export default Card;
