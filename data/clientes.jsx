
export async function obtenerClientes() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes`) //? verifica si es clientes o clients
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error.message)
        return []
    }
}