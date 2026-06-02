import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import logo from '/logo.png'

function App() {
  const [data, setData] = useState([])
  const [page, setPage]

  useEffect(() => {
    api.get(`/character/page=${page}&name=${name}`).then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.error("Deu ruim!!!", error)
    })
  }, [])
  

  return (
    <>
      <img className={s.logo} src={logo} alt="Logo Rick and Morty" />
      <div className={s.search}>
        <label>Search name</label>
        <input type="text" placeholder='Type the name you want'value={name} onChange={(e)=>setName}/>
      </div>
      <main>
        {data.map((item, index) => {
          return(
            <div>
              <h2>{item.name}</h2>
              <img src={item.image} alt="" />
              <h4>Name: {item.image}</h4>
              <p>Species: {item.species}</p>
                {item.status === "Dead" ? "Status:" }
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
