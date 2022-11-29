import { useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">LLena todos los campos para registrar nuevo cliente</p>

            <div className="flex justify-end">
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 text-white hover:text-gray-800 px-3 py-1 rounded-xl font-bold uppercase hover:bg-blue-400 ease-in duration-200">
                    Volver
                </button>
            </div>

            <div className="bg-white shadow hover:shadow-none ease-in duration-200 rounded-md md:w-3/4 mx-auto px-5 py-10">
                {/* <Formulario/> */}

                <form action="" >

                    <Formulario />

                    <input
                        value='Resitrar cliente'
                        type="submit"
                        className="mt-5 w-full bg-blue-600 hover:bg-blue-400 font-bold text-white hover:text-gray-800 ease-in duration-200 rounded-md p-4" />

                </form>
            </div>
        </>
    )
}

export default NuevoCliente