const ItemPaciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietaro: {''}
                <span className="font-normal normal-case">Karen</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">10/02/2024</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>
        </div>
    )
}

export default ItemPaciente
