import {useNavigate} from 'react-router-dom'

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
        </>
    )
}

export default NuevoCliente