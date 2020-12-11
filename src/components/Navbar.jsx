export default function Navbar() {
  return (
    <div className="border-black border-b ">
      <div className="flex py-2 max-w-screen-lg justify-between items-center mx-auto">
        <p className="w-3/12 cursor-pointer font-bold uppercase text-2xl px-4">
          pitch
        </p>
        <div className="barra-central flex justify-between w-6/12 ">
          <button className="w-4/12 flex justify-center rounded focus:outline-none py-2 cursor-pointer hover:bg-gray-200">
            <img className="w-6" src="/icons/subir.svg" alt="" />
          </button>
          <button className="w-4/12 flex justify-center rounded focus:outline-none py-2 cursor-pointer hover:bg-gray-200">
            <img className="w-6" src="/icons/buscar.svg" alt="" />
          </button>
          <button className="w-4/12 flex justify-center rounded focus:outline-none py-2 cursor-pointer hover:bg-gray-200">
            <img className="w-6" src="/icons/tocar.svg" alt="" />
          </button>
        </div>
        <div className="flex justify-center w-3/12 items-center">
          <button className="cursor-pointer rounded-full focus:outline-none hover:bg-gray-200 p-2">
            <img className="w-6" src="/icons/chat.svg" alt="" />
          </button>
          <button className="cursor-pointer rounded-full ml-4 focus:outline-none hover:bg-gray-200 p-2">
            <img className="w-6" src="/icons/bell.svg" alt="" />
          </button>
          <div className="w-10 ml-4 h-10 cursor-pointer border-black border-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
