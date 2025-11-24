import { useState, useTransition } from "react"
export function NewUser(){
    const [name, setName] = useState("")
    const [isPending, startTransition ] = useTransition();
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    
    async function handleSubmit(){
         startTransition( async () =>{
            try{
                //FAKE DELAY
                await new Promise( (resolve, reject) => setTimeout(() =>{
                    /*resolve();
                    setUser("Bem vindo " + name)*/
                    reject("Falha ao cadastrar o usuario")
                }, 2500))
            }catch(error){
                setError(error)
            }
         })
         
         
    }

    return (
        <div>
        <h1>Conehcendo useTransition</h1>

        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
         />

         <button onClick={handleSubmit} disabled={isPending}>
            {isPending ? "Enviando usuário..." : "Cadastrar"}
         </button>

         {user && <p>{user}</p>}

         {error && <strong>{error}</strong>}
         </div>
    )
}