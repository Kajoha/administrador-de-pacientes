/* Este archivo es el principal porque se esta cargando dentro del HTML  */
import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/formulario"
import ListPacientes from "./components/ListPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);



  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListPacientes
          pacientes={pacientes}
        />
      </div>
    </div>
  )
}

export default App
