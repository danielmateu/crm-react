

export async function obtenerClientes() {

    // const url = 'http://localhost:3000/clientes';

    const resp = await fetch(import.meta.env.VITE_API_URL);
    const res  = await resp.json();

    return res;

} 