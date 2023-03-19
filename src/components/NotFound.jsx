import error404 from "../images/error404.svg"
import styled from "styled-components";

const NotFound = () => {
  const H2Styled = styled.h2 `
    color: black;
    font-size: 5rem;
    font-weight: 800;
    margin-top: 2rem;
  `
  const Imagen404 = styled.img `
    margin-left: 600px;
  `
  return (
    <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                <p className="justify-content-center"><Imagen404 src={error404} alt="pagina no encontrada" width={"80"} /></p>
                <H2Styled>Error 404!</H2Styled>                    
                <H2Styled>Pagina no encontrada!</H2Styled>
                </div>
            </div>
        </div>
  )
}

export default NotFound