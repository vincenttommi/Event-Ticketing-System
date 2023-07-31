// import Navbar from './Components/Navbar/Navbar';
import Industry from './Components/Industry/industry';
import './App.css';
import CollapsibleExample from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Work from './Components/Works/Work'
import Footer from './Components/Footer/footer'
import Industry from './Components/Industry/industry';
import SignupForm from './Components/Auth/SignUp'
import LoginForm from './Components/Auth/Login'
import Pricing from './Components/Pricing/pricing';

function App() {
  return (
   <>
   <CollapsibleExample />
   <About />
   <Industry/>
   <Pricing/>
   < Work />
   < Footer />
   {/* < LoginForm />
   <SignupForm /> */}
   </>
  );
}

export default App;
