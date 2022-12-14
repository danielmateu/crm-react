
export const obtenerClientes =  async () => {

    try {
        const response = await fetch(import.meta.env.VITE_API_URL) 
        const result = await response.json()
        // console.log(result)
        return result
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export const obtenerCliente =  async (id) => {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}` ) 
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export const agregarCliente = async (datos) => {
    
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: { 
                'Content-type': 'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export const actualizarCliente = async (id,datos) => {
    
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: { 
                'Content-type': 'application/json'
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export const eliminarCliente = async (id) => {
    
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
            // body: JSON.stringify(datos),
            // headers: { 
            //     'Content-type': 'application/json'
            // }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }

    console.log('Eliminando...')
    console.log({id})
}