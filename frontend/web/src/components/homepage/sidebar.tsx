export function SideBar() {
  return (
    <div className="hidden lg:flex flex-col rounded-2xl w-[21rem] text-text-100 bg-bg-200 h-full p-6">
      <div className="flex items-start space-x-4 p-2 mb-5">
        <div>
          <p className="text-lg font-semibold text-white">Filtros</p>
          <span className="text-sm text-gray-400">Designer</span>
        </div>
      </div>
      <div>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          RAM
        </p>
        <p
          // href="#"
          // onClick={() => {}}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          CPU
        </p>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Lançamento
        </p>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Transfers
        </p>
        <p
          // href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Log Out
        </p>
      </div>
    </div>
  );
}
