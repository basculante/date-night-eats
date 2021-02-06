import React, { HTMLAttributes } from "react";
import Image from "next/image";

interface ICardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  onSelect?: () => void;
  selected?: boolean;
}

const Card = ({ title, selected, onSelect, ...rest }: ICardProps) => {
  return (
    <div
      className={`h-full w-100  rounded-sm shadow-lg p-2 sm:p-6 ${
        selected ? "bg-green-50" : "bg-yellow-50"
      }`}
      {...rest}
    >
      <div className="h-72 md:h-84 relative">
        <Image
          className="rounded-sm"
          src="/assets/spaghetti.jpg"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl italic mt-12">{title}</h1>
      <div className="mt-8 text-lg">
        <ul>
          <li>Pasta</li>
          <li>Sauce</li>
          <li>Garlic Bread</li>
          <li>Salad</li>
          <li>Dessert</li>
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
