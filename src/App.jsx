

import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';





const App = () => {


  return (
    .
        <BrowserRouter>
         
        <div className="relative z-0 bg-primary" >
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />  
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact position={[0, -1.4, 0]} opacity={0.25} \scale={10} blur={1.5} far={1.4} />
            <StarsCanvas />
          </div>
      </div>
        
        </BrowserRouter>
      
     
  )
}

export default App
