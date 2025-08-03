import { useState } from 'react'
import './App.css'

import logImg from './assets/logo.png'

function App(){
  const [textoFrase, setTextFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite em si mesmo e será imparável.",
        "O sucesso é a soma de pequenos esforços repetidos.",
        "Cada dia é uma nova oportunidade para brilhar.",
        "A persistência realiza o impossível.",
        "Não desista, supere.",
        "Acredite no poder dos seus sonhos.",
        "A mudança começa quando o desejo de permanecer o mesmo é superado.",
        "O treino de hoje é o resultado que você verá amanhã.",
        "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
        "A vida não é fácil para nenhum de nós, mas temos que ter persistência e confiança em nós mesmos." 
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases:
      [
        "Bom dia! Que sua jornada hoje seja leve e produtiva.",
        "Acorde com gratidão e faça deste dia o melhor!",
        "Que o sol ilumine seus passos hoje. Bom dia!",
        "Desejo um dia cheio de conquistas e alegrias!",
        "Bom dia! Que não falte paz, saúde e sorrisos."
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases:
      [
         "Boa noite! Que seus sonhos sejam doces e tranquilos.",
          "Durma bem e recarregue suas energias para um novo dia.",
          "Que a paz da noite embale seu sono e te traga serenidade.",
          "Boa noite! Que amanhã seja um dia ainda melhor.",
          "Descanse bem! Que a noite te traga conforto e esperança."
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length) 
    setTextFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

    return (
      <div className='container'>
        <img 
          alt="Logo frases"
          src={logImg}
        />

        <h2 className='title'>Categorias</h2>
        <section className="category-area">
          {allFrases.map( (item ,index) => (
            <button
            className='category-button'
              key={item.id}
              style={{
                borderWidth: item.nome == allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1fa4db"
              }}

              onClick={() => handleSwitchCategory(index) }
            >
                {item.nome}
            </button>
          ))}

        </section>

         <button className="button-frase" onClick={gerarFrase}>Gerar Frase</button>

          {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
          

      </div>

  )
}

export default App
