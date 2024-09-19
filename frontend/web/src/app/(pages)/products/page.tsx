"use client"

import { CardComponent } from "@/components/homepage/card-component";
import { searchProducts } from "@/services/product.service";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    const searchProduct = async () => {
        const data = await searchProducts();
        setProducts(data);
    }

    useEffect(() => {
      console.log("useEffect called");
      searchProduct();
      }, []);

      const productList = products.map(product => 
        <CardComponent key={product.id} product={product} />
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