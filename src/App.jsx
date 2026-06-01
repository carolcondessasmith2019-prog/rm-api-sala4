import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import logo from '/logo.png'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get(`/character`).then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.error("Deu ruim!!!", error)
    })
  }, [])
  

  return (
    <>
      <img className={s.logo} src={logo} alt="Logo Rick and Morty" />
      <div>
        <label>Search name</label>
        <input type="text" placeholder='Type the name you want'/>
      </div>
      <main>
        {data.map((item, index) => {
          return(
            <div>
              <h2>{item.name}</h2>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
