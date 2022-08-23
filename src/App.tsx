import { useEffect, useRef, useState } from "react"
import { FormAddSub } from "./components/FormAddSub";
import { SubsList } from "./components/SubsList";
import { Isub } from "./models";

const INITIAL_STATE=[

  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador aveces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 8,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  },

]

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const [subs, setSubs]=useState<Isub[]>([]);

  useEffect(()=>{
    setSubs(INITIAL_STATE);
  }, [])

  const handleNewSub = (newSub: Isub):void => setSubs([...subs, newSub]);

  return (
    <div className="App" ref={appRef} >
      <h1>Midu Subs</h1>
      <SubsList subs={subs}/>
      <FormAddSub onNewSub={handleNewSub} />
    </div>
  )
}

export default App
