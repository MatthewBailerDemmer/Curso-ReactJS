import { Children, createContext, type ReactNode, useState } from "react";

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    novoAluno: () => void;
}

interface UserProviderProps{
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData)

function UserProvider({ children }: UserProviderProps){
    const [aluno, setAluno] = useState("Maria Silva")
    const [qtdAlunos, setQtdAlunos] = useState(40)

    function mudaNome(nome: string){
        setAluno(nome)
    }

    function novoAluno(){
        setQtdAlunos(alunos => alunos + 1)
    }

    return(
        <UserContext value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
            {children}
        </UserContext>
    )
}


export default UserProvider;