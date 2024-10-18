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
      searchProduct();
      }, []);

      const productList = products.map(product => {
        return <CardComponent key={product.id} product={product} />;
      });
        
      return (
        <div className="flex">
          <div className="flex flex-col max-w-full rounded-2xl pb-12 w-full bg-bg-200">
            <p className="text-center text-2xl py-7 font-semibold text-white">
              Todos os produtos
            </p>
            <div className="inline-flex flex-wrap justify-between px-3" id="cards1">
              {productList}
            </div>
          </div>
        </div>
      );
}