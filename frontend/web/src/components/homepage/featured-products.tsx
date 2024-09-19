"use client"; // This marks the component as a Client Component


import Image from "next/image";
import { CardComponent } from "./card-component";
import { PRODUCTS } from "@/app/utils/products";
import { useEffect, useState } from "react";

export function FeaturedProducts() {

    const productList = PRODUCTS.map(product => 
    <CardComponent key={product.id} />
  );

  return (
    <div className="flex">
      <div className="hidden lg:block bg-gray-400 hover:bg-white w-[1px] my-10 mx-4"></div>
      <div className="flex flex-col max-w-full rounded-2xl pb-12 w-full bg-bg-200">
        <p className="text-center text-2xl py-7 font-semibold text-white">
          Principais destaques
        </p>
        <div className="inline-flex flex-wrap justify-between px-3" id="cards1">
          {productList}
        </div>
      </div>{" "}
    </div>
  );
}
