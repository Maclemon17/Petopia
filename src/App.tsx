import './App.css'
import AboutUs from './components/AboutUs'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
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
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}

export default App
