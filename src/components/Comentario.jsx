export default function Comentario() {
  return (
    <div className="flex w-11/12 mx-auto mb-4">
      <div>
        <div className="w-10 h-10 mr-4 rounded-full border border-black"></div>
      </div>
      <div>
        <p>Susan Quiroga</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque neque
          praesentium cum provident alias, adipisci magni vitae mollitia ratione
          sint id beatae explicabo ex minima qui! Alias quibusdam modi magni.
        </p>
        <div>
          <span className="mr-4">1h</span>
          <span className="mr-4 cursor-pointer">Responder</span>
          <span className="font-bold cursor-pointer">Ver 6 respuestas</span>
        </div>
      </div>
    </div>
  );
}
