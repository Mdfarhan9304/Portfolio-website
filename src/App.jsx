import Bar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



function App() {
  return (
    <div className='  bg-orange-100 flex flex-col gap-10'>
<Bar/>
<Hero/>
<About/>
<Experience/>
<Portfolio/>
<Contact/>
    </div>
  )
}

export default App
