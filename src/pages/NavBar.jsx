import CardWidget from "../components/CardWidget";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const localizacion = useLocation();
  const navegacion = useNavigate();
  const pathCoincidente = (ruta) => {
    if (ruta === localizacion.pathname) {
      return true;
    }
  };
  
  return (
    <>
      <div className="sticky-top-0 bg-black border-b shadow-sm z-50 h-13">
        <header className="flex justify-between items-center px-4 max-w-6xl mx-auto">
          <div>
            <Link className="navbar-brand" to={"/"}><h2 className="h2 mb-2">Juegos de Consola</h2></Link>
          </div>
          <div>
            <ul className="flex space-x-10 text-neutral-200 font-medium cursor-pointer">
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/") && "text-blue border-b-red-800"
                }`}
                onClick={() => navegacion("/")}
              >
                {" "}
                Inicio{" "}
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/Catalogo") && "text-blue border-b-red-800"
                }`}
                onClick={() => navegacion("/Catalogo")}
              >
                Catalogo
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/campo/shooter") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/campo/shooter")}
              >
                Shooters
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/campo/rpg") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/campo/rpg")}
              >
                RPG
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/plataforma/ps5") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/plataforma/ps5")}
              >
                PlayStation 5
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/plataforma/ps4") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/plataforma/ps4")}
              >
                PlayStation 4
              </li> 
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/version/deluxe") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/version/deluxe")}
              >
                Edicion Deluxe
              </li>           
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/version/standard") && "text-white border-b-red-800"
                }`}
                onClick={() => navegacion("/version/standard")}
              >
                Edicion Standard
              </li> 
            </ul>
          </div>
          <CardWidget/>
        </header>        
      </div>          
      
    </>
  );
};

export default NavBar;
