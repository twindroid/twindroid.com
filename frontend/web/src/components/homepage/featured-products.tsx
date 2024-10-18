'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { searchFeaturedProducts } from "@/services/product.service";
import { ProductPreviewProps } from "@/types/product";
import { CardComponent } from "./card-component";


export function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const searchProduct = async () => {
    const data = await searchFeaturedProducts();
    setProducts(data);
  };

  const productList = products
    .slice(0, 4)
    .map((product: ProductPreviewProps) => (
      <Link key={product.id} href={'/products/' + product.id}>
        <CardComponent product={product} />
      </Link>
    ));

  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <div className="flex" id="products">
      <div className="hidden lg:block bg-gray-400 hover:bg-white w-[1px] my-10 mx-4"></div>
      <div className="flex flex-col max-w-full rounded-2xl pb-12 w-full bg-background-200">
        <div className="items-center justify-center flex">
          <p className="text-center text-2xl py-7 ml-auto font-semibold text-text-100">
            Principais destaques
          </p>
          <Link className="ml-auto" href="/products/sell">
            <p className="py-4 px-8 bg-primary-100 mr-2 rounded-xl">Vender</p>
          </Link>
        </div>
        <div
          className="inline-flex flex-wrap justify-between px-3 text"
          id="cards1"
        >
          {productList}
          <Link className="w-full mt-11" href="/products">
            <div className="bg-primary-100 hover:bg-primary-300 text-text-100 hover:text-primary-100 rounded-full p-2 text-center">
              <p className="text-xl">
                Ver tudo
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
