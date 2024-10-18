import Image from "next/image";

export function NavBar() {
  return (
    <nav className="flex bg-background-100 text-text-100 border-b-2 border-background-300 w-full">
      <div className="flex py-3 md:py-4 justify-between w-full items-center max-w-[1650px] mx-auto">
        <div className="flex gap-x-4">
          <Image
            src={require("@/assets/img/my_logo.png")}
            className="w-12 h-12"
            alt="logo"
          />
          <a className="hidden sm:block cursor-pointer text-2xl lg:text-3xl my-auto font-bold" href="/">
            twindroid.com
          </a>
          
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex px-4 font-semibold md:gap-6 md:text-lg lg:gap-10 lg:pr-8 lg:text-xl">
            <div>
              <a
                className="relative hover:text-primary-200 before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-[5px] before:rounded-full before:transition-all before:duration-[400ms] hover:duration-[400ms] before:bg-primary-200 hover:before:w-full"
                href="#featuring"
              >
                Promoções
              </a>
            </div>
            <div>
              <a
                className="relative hover:text-primary-200 before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-[5px] before:rounded-full before:transition-all before:duration-[400ms] hover:duration-[400ms] before:bg-primary-200 hover:before:w-full"
                href="#products"
              >
                Produtos
              </a>
            </div>
            <div>
              <a
                className="relative hover:text-primary-200 before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-[5px] before:rounded-full before:transition-all before:duration-[400ms] hover:duration-[400ms] before:bg-primary-200 hover:before:w-full"
                href="#services"
              >
                Serviços
              </a>
            </div>
            <div>
              <a
                className="relative hover:text-primary-200 before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-[5px] before:rounded-full before:transition-all before:duration-[400ms] hover:duration-[400ms] before:bg-primary-200 hover:before:w-full"
                href="#about"
              >
                Sobre
              </a>
            </div>
          </div>
          <div className="flex space-x-5 items-center">
            <div
              className="hover:text-primary-200 hover:duration-[400ms] cursor-pointer"
              //   href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>

            <div
              className="flex items-center hover:text-primary-200 hover:duration-[400ms] cursor-pointer"
              //   href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
              </span>
            </div>

            <div
              className="flex items-center hover:text-primary-200 hover:duration-[400ms] cursor-pointer"
              //   href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}
