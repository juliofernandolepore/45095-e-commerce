import styled from "styled-components";

const Multimedia = () => {
/* herramienta muy util para escribir css nativo dentro de jsx sin necesidad de archivos de estilos
modificando esclusivamente el componente donde estoy parado */

  const Titulo = styled.h1`
    color: green;
    font-size: 60px;
    background-color: black;
    padding: 30px;
  `;
  const Parrafo = styled.p`
    color: yellow;
    font-size: 40px;
    background-color: black;
    border: 4px solid white;
    padding: 10px;
  `;
  return (
    <>
      <Titulo>algo para practicar styled components</Titulo>
      <Parrafo>trabajando con parrafos</Parrafo>
    </>
  );
};

export default Multimedia;
