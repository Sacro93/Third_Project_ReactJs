
import "./App.css";
import Flex from "./components/Flex/flex";
import Card from "./components/Card";
import NavBar from "./components/NavBar/NavBar";
import Hello from "./components/itemlistContainer/greetings";

 //esto es lo que se renderiza en "index.js" "<App/>"
  //no se tiene todo en un mismo archivo , todo por separado y luego se "importa" , webpack lo une

function App() {

 return (
  <>
  <NavBar/>
  <div>

<Hello

title="Hola Tutor!"
name="Me llamo Francisco Sacroisky"
proyect="El e-commerce se llamara Lo compramos entre todos"

/>

  </div>

  <Flex>
  <Card
          img="/imgs/play5.jpg"
          title="Sony Play Satation 5"
          price=  {150000}
          detail="Play 5"
        />

<Card
          img="/imgs/placard.jpg"
          title="Placard 2 m x 1.6m"
          price= {37000}
          detail="Placard"
        />

<Card
          img="/imgs/lavarropas_samsung.jpeg"
          title="Samsung ELA0F"
          price= {130000}
          detail="Lavarropas 7kg 10000 rpm"
          
        />
        

  </Flex>
  
  
  </>
  
 )
 }
export default App;
