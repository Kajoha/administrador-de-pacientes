/*Los componentes en React deben iniciar con la primera letra en mayuscula
como estamos trabajando con vite, la extención es.jsx*/

function Header() {

    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> Seguimiento Pacientes {''}
                <span className="text-indigo-600">veterinarias</span>
            </h1>
        </>
    )
}

export default Header