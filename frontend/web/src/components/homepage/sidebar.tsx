export function SideBar() {
  return (
    <div className="hidden lg:flex flex-col rounded-2xl w-[21rem] text-text-100 bg-background-200 h-full p-6">
      <div className="flex items-start space-x-4 p-2 mb-5">
        <div>
          <p className="text-lg font-semibold text-text-100">Filtros</p>
          <span className="text-sm text-gray-400">Designer</span>
        </div>
      </div>
      <div>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          RAM
        </p>
        <p
          // href="#"
          // onClick={() => {}}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          CPU
        </p>
        <p
        // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          Placa gráfica 
        </p>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          Motherboard
        </p>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          Outros
        </p>
      </div>
    </div>
  );
}
