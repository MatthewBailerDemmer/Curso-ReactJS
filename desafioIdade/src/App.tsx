import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [birth, setBirth] = useState("")
  const [result, setResult] = useState("")

  function calcular(event: FormEvent){
    event.preventDefault()
    const currentYear = new Date().getFullYear()

    setResult(`${name} você tem ${currentYear - Number(birth)} anos`)
    setName("")
    setBirth("")
  }

  return (
      <div className='container'>
       <h1 className='title'>Descubra sua idade</h1>
       <form className='form' onSubmit={calcular}>
        <label className='label'>Digite seu nome?</label>
        <input className='input' type='text' placeholder='Digite seu nome'
         onChange={ (e) => setName(e.target.value.toString())} value={name}/>
        <label className='label'>Digite o ano que nasceu?</label>
        <input className='input' type='text' placeholder='Digite o ano de nascimento'
        onChange={ (e) => setBirth(e.target.value.toString())} value={birth}/>
        <input className='button' type="submit"  value="Descobrir Idade"/>
       </form>

       { result && <p className='result'>{result}</p>}
      </div>
     
  )
}

export default App
