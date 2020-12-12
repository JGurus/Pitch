import ListEmpleo from "./components/ListEmpleos";
import ListPosts from "./components/ListPosts";
import ListStories from "./components/ListStories";
import Navbar from "./components/Navbar";
import OptionButton from "./components/OptionButton";
import Recomendados from "./components/Recomendados";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostFull from "./components/PostFull";
import StoriesView from "./components/StoriesView";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:param" exact>
          <div className="max-h-screen overflow-hidden">
            <header>
              <Navbar />
            </header>
            <main className="flex max-w-screen-lg mt-10 mx-auto justify-between">
              <section className="w-2/12">
                <OptionButton
                  invert="false"
                  title="Inicio"
                  ruta="/home"
                  imagen="home"
                />
                <OptionButton
                  title="Descubre"
                  imagen="observacion"
                  invert="false"
                  ruta="/descubre"
                />
                <Recomendados />
              </section>

              <section className="w-7/12">
                <ListStories />
                <ListPosts />
              </section>
              <aside className=" w-2/12">
                <OptionButton
                  title="Marketplace"
                  imagen="promocion"
                  invert="true"
                />
                <ListEmpleo />
              </aside>
            </main>
          </div>
        </Route>
        <Route path="/post/:id" exact>
          <PostFull />
        </Route>
        <Route path="/stories/:id" exact>
          <StoriesView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
