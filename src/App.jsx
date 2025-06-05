
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bottom } from './components/Bottom'
import { Hero } from './components/HeroComponents/Hero'
import { Navbar } from './components/Navbar'
import { Features } from './Pages/Features';
import { Contact } from './Pages/Contact';
import { Integrations } from './Pages/Integrations';
import { Pricing } from './Pages/Pricing';
import { useTheme } from './components/ThemeContext'
import { SignupForm } from './components/SignupForm'

function App() {  
  const { darkMode } = useTheme()

  return (
    <>
      <div className={`min-h-screen w-full bg-cover flex flex-col items-center justify-center relative ${darkMode ? `bg-gray-900 text-white` : `bg-gradient-to-t from-slate-300 to-blue-500 text-black`}`}>
        <img src="/clouds.png" className="absolute bottom-0 w-full opacity-30" />
        <div className='flex sticky z-50 text-white'>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Signup" element={<SignupForm/>} />
          {/* <Route path="/pricing" element={<SigninForm />} /> */}
        </Routes>
        
          <Bottom />
      </div>
    </>
  )
}

export default App
