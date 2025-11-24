import { use } from "react"
import { UserContext } from "../../../Contexts/user"

export function Footer(){
    
    const { qtdAlunos, novoAluno } = use(UserContext)

    return (
        <footer>
            <hr />
            <h3>Footer</h3>
            <h4>Alunos online na plataforma: {qtdAlunos}</h4>
            <button onClick={() => novoAluno()}>
                Novo aluno
            </button>
        </footer>
    )
}