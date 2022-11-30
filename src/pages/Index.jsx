import { useLoaderData } from "react-router-dom";
import {obtenerClientes} from "../../data/clientes";
import Cliente from "../components/Cliente";


export const loader = () => {

  // const clientes = obtenerClientes();
  return obtenerClientes();
}

const Index = () => {

  const clientes = useLoaderData();
  console.log(clientes)
  


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tu clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody className="">
            {clientes.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) :
        (
          <p className="mt-10 text-center">No hay clientes aún</p>
        )}
    </>
  )
}

export default Index