import CardWidget from "../components/CardWidget";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
  //funciones de react router
  const localizacion = useLocation();
  const navegacion = useNavigate();
  // si este path existe el valor almacenado en la constante es true
  const pathCoincidente = (ruta) => {
    if (ruta === localizacion.pathname) {
      return true;
    }
  };

  return (
    <>
      <div className="sticky-top-0 bg-red-600 border-b shadow-sm z-50 h-13">
        <header className="flex justify-between items-center px-4 max-w-6xl mx-auto">
          <div>
            <h2 className="h-4 my-3 cursor-pointer font-medium">
              DANIELA BENAVIDEZ
            </h2>
          </div>
          <div>
            <ul className="flex space-x-10 text-neutral-200 font-medium cursor-pointer">
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/")}
              >
                {" "}
                Inicio{" "}
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/Catalogo") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/Catalogo")}
              >
                Catalogo
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/multimedia") &&
                  "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/multimedia")}
              >
                Multimedia
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/eventos") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/eventos")}
              >
                Eventos
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/tienda") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/tienda")}
              >
                Tienda
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/contacto") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/contacto")}
              >
                Contacto
              </li>
              <li
                className={`py-3 border-b-[3px] border-b-transparent ${
                  pathCoincidente("/acerca") && "text-black border-b-red-800"
                }`}
                onClick={() => navegacion("/acerca")}
              >
                Acerca
              </li>
            </ul>
          </div>
        </header>
      </div>
      <CardWidget />
      
      
    </>
  );
};

export default NavBar;
