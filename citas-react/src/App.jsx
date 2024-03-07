/* Este archivo es el principal porque se esta cargando dentro del HTML  */
import Header from "./components/Header"
import Formulario from "./components/formulario"
import ListPacientes from "./components/ListPacientes"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListPacientes />
      </div>
    </div>
  )
}

export default App
