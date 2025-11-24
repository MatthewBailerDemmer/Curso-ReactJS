import { useContext, use } from "react"
import { UserContext } from "../../../Contexts/user"


export function Nome(){
    //const { aluno, mudaNome } = useContext(UserContext)
    const {aluno, mudaNome } = use(UserContext)
    return(
        <div>
            <strong>Aluno: {aluno}</strong>
            <br />
            <button onClick={() => mudaNome("Matheus")}>
                Mudar nome para matheus
            </button>
        </div>
    )
}