import { Nome } from "../Nome"
import { useContext } from "react"
import { UserContext } from "../../../Contexts/user"

export function Alunos(){
    const {qtdAlunos} = useContext(UserContext)
    return(
        <div>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <Nome />
        </div>
    )
}