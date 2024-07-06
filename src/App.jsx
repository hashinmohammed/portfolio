import './App.css'
import BubbleScreensaver from './Components/BubbleScreenSaver';
import Navbar from './Components/NavBar';
import VideoContainer from './Components/VideoContainer';
import GalleryComponent from './Components/Gallery';
import Technologies from './Components/Technologies';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
function App() {
  return (
    <> 
    <Navbar />
    <BubbleScreensaver />
    <Technologies />
    <VideoContainer />
    <GalleryComponent />
    <Testimonials />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
