import Post from "./Post";

export default function ListPosts() {
  return (
    <div className="overflow-auto" style={{ height: "550px" }}>
      <Post user="Jordan Jaramillo" id="16453" />
      <Post user="Joel Gurumendi" id="25456" />
      <Post user="Diego Echaiz" id="54632" />
    </div>
  );
}
