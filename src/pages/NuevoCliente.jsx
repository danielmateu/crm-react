import { useNavigate, Form, useActionData } from 'react-router-dom'
import Error from '../components/Error';

import Formulario from '../components/Formulario'


export async function action ({request})  {

    const formData = await request.formData();
    // console.log([...formData]);

    const datos = Object.fromEntries(formData);
    // console.log({datos});

    //Validación
    const errores = [];
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son oligatorios');
        console.log(errores)
    }
    //Retornar datos si hay errores
    if(Object.keys(errores).length){
        return errores;
        
    }

    console.log(errores)

}

const NuevoCliente = () => {

    const errores   = useActionData()
    const navigate  = useNavigate()

    // console.log(errores)


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

            <div className="bg-white shadow hover:shadow-none ease-in duration-200 rounded-md md:w-3/4 mx-auto px-5 py-10 my-10">
                {/* <Formulario/> */}

                {errores?.length && errores.map((error, i) =>(
                    <Error key={i}>{error}</Error>
                ))}

                <Form 
                    method="post"
                    >

                    <Formulario />

                    <input
                        value='Resitrar cliente'
                        type="submit"
                        className="mt-5 w-full bg-blue-600 hover:bg-blue-400 font-bold text-white hover:text-gray-800 ease-in duration-200 rounded-md p-4" />

                </Form>
            </div>
        </>
    )
}

export default NuevoCliente