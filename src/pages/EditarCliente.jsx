import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { actualizarCliente, obtenerCliente } from "../../data/clientes"
import Error from "../components/Error";
import Formulario from "../components/Formulario";

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404, statusText: 'No hemos encontrado nada...'
        })
    }
    return cliente;
}

export async function action({ request, params }) {

    const formData = await request.formData();
    // console.log([...formData]);
    const datos = Object.fromEntries(formData);
    // console.log({datos});
    const email = formData.get('email');

    //Validación
    const errores = [];
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son oligatorios');
        console.log(errores)
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!regex.test(email)) {
        errores.push('El email, no es válido')
    }

    //Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;

    }

    //Actualizar Cliente

    await actualizarCliente(params.clienteId, datos)

    return redirect('/')
}

const EditarCliente = () => {

    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData();

    return (

        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Modifica los datos que necesites del cliente</p>

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
                    noValidate
                >

                    <Formulario
                        cliente={cliente} />

                    <input
                        value='Resitrar cliente'
                        type="submit"
                        className="mt-5 w-full bg-blue-600 hover:bg-blue-400 font-bold text-white hover:text-gray-800 ease-in duration-200 rounded-md p-4" />

                </Form>
            </div>
        </>
    )
}

export default EditarCliente