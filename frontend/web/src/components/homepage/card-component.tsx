import Image from "next/image"

export function CardComponent(product: any){

  product=product.product;

  if (product.features && product.features.length > 0){
  const productFeatures = []
  
  product.features.map(product => 
    <CardComponent key={product.id} />
  );
}

        <div className="inline-flex flex-wrap justify-between px-3" id="cards1">
          {productFeatures}
        </div>
    return <div className="max-w-96 min-w-10 mt-6 mx-4 border rounded-xl bg-bg-300 border-gray-200 dark:border-gray-700 hover:ring-4 transition cursor-pointer hover:border-blue-900 text-black dark:text-white shadow-md shadow-bg-100 hover:shadow-lg hover:shadow-black md:hover:scale-105 before:duration-[400ms] hover:duration-[400ms]">
            <Image
              src={require("@/assets/img/mix4.jpg")}
              className="rounded-t-xl w-full"
              alt="product image"
            />
            <div className="px-5 pb-5 mt-5">
              <label className="text-xl font-semibold tracking-tight">
                {product.name}
              </label>
              <div className="my-5">
                <div className="flex flex-col space-y-2">
                 {productFeatures}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  599,90€
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
}