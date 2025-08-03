import { useState, useEffect, useRef, useMemo, useCallback } from 'react'



export default function App(){
  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)
  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [editTask, setEditask] = useState({
    enabled: false,
    task: ''
  })



  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact")
    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas))
    }

  }, [])


  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false
      return
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks))
    console.log("useEffect foi chamado")
  }, [tasks])


  const handleRegister = useCallback(() => {
    if(!input){
      alert("Preencha o nome da tarefa")
      return
    }
    
    if(editTask.enabled){
      handleSaveEdit()
      return
    }
    setTasks(tarefas => [...tarefas, input])
    setInput("")
  }, [input, tasks])

  function handleDelete(item: string) {
    const removeTask = tasks.filter( task => task !== item)
    setTasks(removeTask)
  

  }

  function handleEdit(item: string){
    
    inputRef.current?.focus()

    setInput(item)
    setEditask({
      enabled: true,
      task: item
    })
  }

  function handleSaveEdit(){
    const findeIndexTask = tasks.findIndex( task => task === editTask.task)
    const allTaks = [...tasks]

    allTaks[findeIndexTask] = input
    setTasks(allTaks)

    setEditask({
      enabled: false,
      task: ''
    })
    setInput('')
  }
  
  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input 
      placeholder='Digite o nome da tarefa...'
      type="text" 
      value={input}
      onChange={ (e) => setInput(e.target.value)}
      ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enabled? 'Editar tarefa' : 'Adicionar Tarefa'}
        </button>

      <hr />

      <strong> Você tem {totalTarefas} tarefas !</strong>

      <br />
      <br />

      {tasks.map( (item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}