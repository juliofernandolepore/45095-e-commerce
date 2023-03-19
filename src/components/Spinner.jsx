import styled from "styled-components";


const Spinner = () => {

  const Cargando = styled.h1 `
      color: black      
      font-size: 6rem;
      font-weight: 600;
    `;

   const ContenedorCargando = styled.div `
    background-color: yellow;
    padding: 5rem;
    margin: 5rem;
    border-radius: 0.4rem;
   ` 
  return (   
    
    <div className="container my-5">
            <div className="row">
                <ContenedorCargando>
                    <Cargando>Cargando...</Cargando>
                    <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Aguarde un momento...</span>
                    </div>
                </ContenedorCargando>
                
            </div>
        </div>
        
  )
}

export default Spinner