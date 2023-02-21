import Fetch from "../ejercicios/Fetch"

const Inicio = () => {
/* NO BORRAR FETCH  es un componente de ejercicios del directorio ejercicios,
requerido para la pre entrega 2 */
    return (
        <>
        <div className="bg-yellow-400 text-black text-center">
        <h1 className="h-10 p-3">INICIO</h1>
        <p className="h20  p-5 bg-grey-300">esta era la pagina de inicio por defecto, fue modificado el routing para la pre-entrega 2</p>
        <Fetch/>
        </div>
        
        </>
    )
} 

export default Inicio