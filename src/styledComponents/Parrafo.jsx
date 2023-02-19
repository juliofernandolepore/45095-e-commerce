import styled from "styled-components";

const Parrafo = () => {
  const ParrafoEstilizado = styled.p`
    color: white;
    background-color: blue;
    font-size:40px
    margin:50px;
    padding:60px
  `;

  return(
    <>
    <ParrafoEstilizado>
    <p>envio un texto</p>
    </ParrafoEstilizado>
    </>
  )
}

export default Parrafo;
