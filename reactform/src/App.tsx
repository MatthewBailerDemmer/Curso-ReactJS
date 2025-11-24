import { useState, useActionState } from "react";
/*import { ButtonSubmit } from './Button';
import { NewUser } from './transition'*/


function App(){
  /*const [message, setMessage] = useState("")

 async function handleRegister(formData){
    //FAKE DELAY

    await new Promise( resolve => setTimeout(resolve, 2500))
    
    
    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa")


    console.log(nome)
    console.log(tarefa)

    setMessage("Bem vindo " + nome + ", Tarefa atual: " + tarefa)
  }*/
 async function handleSubmit(prevState, formData){
    //FAKE DELAY
        await new Promise( resolve => setTimeout(resolve, 2500))
    
    const nome = formData.get("nome")


    console.log(prevState);

    if(nome.length < 4){
      return {
        text: "Digite um nome maior"
      }
    }

    return {
      text: `Bem vindo ${nome}`
    }
 }
  
 const [state, formAction, pending] = useActionState(handleSubmit, null)

  return (
    <div>

      <h1>useActionState</h1>

      <form action={formAction}>
        <input type="text"
          placeholder="Digite seu nome"
          name="nome"
         />
         <button type='submit'>
          {pending ? "Enviando..." : "Cadastrar"}
         </button>
        
      </form>
      {state && <h1>{state.text}</h1>}

      { /*<form action={handleRegister}>
        <input type="text"
        name="nome"
        required
        placeholder="Digite seu nome..."
        />

        <br />

        <input type="text"
        name="tarefa"
        required
        placeholder="Digite a tarefa..."
        />

        <br />

       <ButtonSubmit></ButtonSubmit>
      </form>

      <h2>{message}</h2>

      <hr />

      <NewUser /> */}
    </div> 
  ) 
}

export default App