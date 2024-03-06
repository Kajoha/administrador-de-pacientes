/* Este archivo es el principal porque se esta cargando dentro del HTML  */
import Header from "./components/Header"
import Formulario from "./components/formulario"
import ListPacientes from "./components/ListPacientes"

function App() {

  return (
    <>
      <Header />
      <Formulario />
      <ListPacientes />
    </>
  )
}

export default App
