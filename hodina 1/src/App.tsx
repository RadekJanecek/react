import './App.css'
import Greetings from './components/Greetings.tsx'
import Container from './components/Container.tsx'
import Counter from './components/Counter.tsx'

const App = () => {
  return (
    <>
      <Container number="2" text="t"> AAAA<span>BBBB</span></Container>
      <Greetings text="Nazdar"/>
      <Counter />
    </>
  );
}

export default App
