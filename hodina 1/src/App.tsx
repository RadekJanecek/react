import './App.css'
import { useState } from "react";
import Greetings from './components/Greetings.tsx'
import Container from './components/Container.tsx'
import Counter from './components/Counter.tsx'

const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const AddA = (x: number) => {
    setA(y => y + x)
  }
  const AddB = (x: number) => {
    setB(y => y + x)
  }
  return (
    <>
      <Container number="2" text="t"> AAAA<span>BBBB</span></Container>
      <Greetings text="Nazdar"/>
      <Counter value={a} setValue={AddA} />
      + 
      <Counter value={b} setValue={AddB} />
      =
      {a + b} 
    </>
  );
}


export default App
