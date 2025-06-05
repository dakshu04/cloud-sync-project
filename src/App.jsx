
import './App.css'
import { Bottom } from './components/Bottom'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <>
      <div className="bg-gradient-to-t from-slate-300 to-blue-500 min-h-screen w-full bg-cover flex flex-col items-center justify-center relative">
        <img src="/clouds.png" className="absolute bottom-0 w-full opacity-30" />
        <div className='flex sticky z-50 text-white'>
          <Navbar />
        </div>
          <Hero />
          <Bottom />
      </div>
    </>
  )
}

export default App
