import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import logo from '/logo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState (1)
  const [inputPage, setInputPage] = useState ("") 

  useEffect(() => {
    const carrega = async () => {
      try{
        const response = await api.get(`/character/?page=${page}`)
        setData(response.data.results)
      }catch{
        console.error("deu ruim")
      }
    } 
    carrega()
  }, [page])
  

  return (
    <>
      <img className={s.logo} src={logo} alt="Logo Rick and Morty" />
      <div>
        <label>Choose Page</label>
        <input min={1} max={42} type="number" placeholder='Type the page 1/42' value={inputPage} onChange={(e) => setInputPage(e.target.value)}/>
        <button onClick={() => setPage(Number(inputPage))}>buscar</button>
      </div>
      <main>
        {data.map((item) => {
          return(
            <div key={item.id} >
              <Card nome={item.name} imagem={item.image} especies={item.species} origem={item.origin.name}/>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
