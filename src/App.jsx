import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero,
          Navbar, Tech, Works, StarsCanvas
 } from "./components"

const App = () => {

  return (
    <BrowserRouter>
    
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-to-b from-[#FFA500] to-white">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="bg-gradient-to-b from-white to-[#FFA500]">
          <Works />
        </div>
        <div className="bg-gradient-to-b from-[#FFA500] to-black">
          <Feedbacks />
        </div>
        <div className="relative z-0 bg-black">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
