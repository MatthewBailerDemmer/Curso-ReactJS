import { useState } from "react"
import { Alunos } from "./assets/Components/Alunos"
import { Footer } from "./assets/Components/Footer"
import UserProvider from "./Contexts/user"

function App() {
const [nome, setNome] = useState("Sujeito Programador")

  return (
    <UserProvider>
      <div>
        <h1>Escola DEV</h1>
        <br />
        <hr />

      <Alunos />

      <Footer />

      </div>
      </UserProvider>
  )
}

export default App
