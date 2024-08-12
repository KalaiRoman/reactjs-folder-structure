import './App.scss';
import Routing from './routing/Routing';
function App() {
  const [login,setLogin]=useState(false);

const date=Date.now()+5000;

const tokenCheck=()=>{
  const exipreTime=localStorage.getItem("timer");

  if(exipreTime<Date.now())
  {
    setLogin(true);
    console.log("Logout User")
  }
}

const updateToken=()=>{
  localStorage.setItem("timer",date);
}

useEffect(()=>{
const timers=setInterval(() => {
  tokenCheck();
}, 5000);

return()=>{
  clearInterval(timers);
}
},[])

useEffect(()=>{
  updateToken();
  window.addEventListener("click",updateToken);
  window.addEventListener("scroll",updateToken);
  return()=>{
  window.removeEventListener("click",updateToken);
  window.addEventListener("scroll",updateToken);

  }
},[])
  return (
    <div className="App">
      {/* https://playcode.io/javascript/function-parameters */}
  <Routing/>
    </div>
  );
}

export default App;
