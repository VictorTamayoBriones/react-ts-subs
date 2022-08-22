import { useState } from "react"
import { Isub } from "./models";

function App() {

  const [subs, setSubs]=useState<Isub[]>([
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Dapeli hace de moderador aveces'
    }
  ]);


  return (
    <div className="App">
      
    </div>
  )
}

export default App
