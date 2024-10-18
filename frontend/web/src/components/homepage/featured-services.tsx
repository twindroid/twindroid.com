import { CardComponent } from "./card-component";

export function FeaturedServices() {
  return (
    <div className="flex" id="services">
      <div className="hidden lg:block bg-gray-400 hover:bg-white w-[1px] my-10 mx-4"></div>
      <div className="flex flex-col mt-16 pb-12 bg-background-200 rounded-2xl w-[100%]">
      <p className="text-center text-2xl py-7 font-semibold text-text-100">
      Serviços em destaque
        </p>
        <div className="inline-flex flex-wrap justify-center" id="cards2">
          <p className="text-text-200">Brevemente</p>
          <CardComponent />
          
        </div>
      </div>
    </div>
  );
}
