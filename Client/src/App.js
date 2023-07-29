import logo from './logo.svg';
import './App.css';
import CollapsibleExample from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Work from './Components/Works/Work'
import Footer from './Components/Footer/footer'
import SignupForm from './Components/Auth/SignUp'
import LoginForm from './Components/Auth/Login'

function App() {
  return (
   <>
   <CollapsibleExample />
   <About />
   < Work />
   < Footer />
   {/* < LoginForm />
   <SignupForm /> */}
   </>
  );
}

export default App;
