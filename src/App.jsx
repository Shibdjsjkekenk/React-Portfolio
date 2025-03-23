import './index.css'
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import LogoSlider from './components/LogoSlider'
import AboutUs from './components/AboutUs'
import CategoryCarousel from './components/CategoryCarousel'
import Experience from './components/Experience'
import RelevantExperience from './components/RelevantExperience'
import Footer from './components/Footer'
import Services from './components/Services'
import TimeLine from './components/TimeLine'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <AboutUs />
      <TimeLine/>
      <CategoryCarousel/>
      <Experience/>
      <RelevantExperience/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
