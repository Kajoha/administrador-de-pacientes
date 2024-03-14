const ItemPaciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?');
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-4 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietaro: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas} </span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white fon uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)} //Si quiero pasar un argumento a una función debo usar un arrow function
                >Editar</button>
                <button type="button"
                    onClick={handleEliminar} // Si la función es más de una linea, agregar el nombre de función 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white fon uppercase rounded-lg"
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default ItemPaciente
