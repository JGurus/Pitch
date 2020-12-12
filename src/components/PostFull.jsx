import { useParams, Link } from "react-router-dom";
import Comentario from "./Comentario";
export default function PostFull() {
  let { id } = useParams();
  return (
    <div className="max-h-screen flex">
      <div className="w-3/5 h-screen bg-black h-full flex flex-col items-center justify-center">
        <Link to="/home">
          <button className="border absolute border-black focus:outline rounded-full bg-black top-4 left-4">
            <img className="w-8" src="/icons/cerrar.svg" alt="" />
          </button>
        </Link>
        <video src="/video.mp4" controls></video>
      </div>
      <div className="w-2/5 h-screen h-full">
        <div className="flex w-11/12 mx-auto mt-24 items-center">
          <div className="h-20 w-20 mr-4 rounded-full border border-black"></div>
          <div className="flex-grow">
            <p>Usuario</p>
            <p>Guayaquil 1h</p>
          </div>
          <div>
            <button className="border border-black px-4 py-2">Seguir</button>
          </div>
        </div>
        <div className="mt-8 w-11/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo,
          fugit laudantium numquam quas ut, quis iste assumenda repellat optio
          corrupti impedit fugiat doloremque facilis! Nihil animi quia accusamus
          officia?
        </div>
        <div className="p-2 flex border-b border-black justify-center items-center mt-4">
          <button className="cursor-pointer mx-auto focus:outline-none">
            <img className="w-8" src="/icons/corazon.svg" alt="" />
          </button>
          <button className="cursor-pointer mx-auto focus:outline-none">
            <img className="w-8 " src="/icons/comentario.svg" alt="" />
          </button>
          <button className="cursor-pointer mx-auto focus:outline-none">
            <img className="w-8" src="/icons/compartir.svg" alt="" />
          </button>
        </div>
        <div className="mt-5 h-96 overflow-auto">
          <Comentario />
          <Comentario />
          <Comentario />
          <Comentario />
        </div>
        <div className="absolute bottom-0 w-2/5 flex">
          <input
            className="border-t p-2 border-black px-5  flex-grow focus:outline-none"
            placeholder="Escribe un comentario"
          />
          <button className="border-t px-4 py-2 border-black focus:outline-none">
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}
