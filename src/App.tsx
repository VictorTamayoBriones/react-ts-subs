import { useState } from "react"
import { Isub } from "./models";

function App() {

  const [subs, setSubs]=useState<Isub[]>([
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Dapeli hace de moderador aveces'
    },
    {
      nick: 'sergio_serrano',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    },
  ]);


  return (
    <div className="App">
      <h1>Midu Subs</h1>
      <ul>
        {
          subs.map(sub=>(
            <li key={sub.nick} >
              <img src={sub.avatar} alt={sub.nick} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
