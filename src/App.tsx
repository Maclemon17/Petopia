import './App.css'
import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutUs />
      </main>
    </>
  )
}

export default App
