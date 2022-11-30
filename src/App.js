import { useState } from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";
import "./style.css"

const TEXT = [
  {
    type: "Basic",
    price: ["$199.99", "$19.99"],
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB"
  },
  {
    type: "Professional",
    price: ["$249.99", "$24.99"],
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB"
  },
  {
    type: "Master",
    price: ["$399.99", "$39.99"],
    storage: "2 TB  Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB"
  }
]

function App() {
  const [frame, setFrame] = useState(0)
  
  return (
    <main>
      <h1>Our Pricing</h1>
      <Slider frame={frame} setFrame={setFrame}/>
      <section>
        <Card price={TEXT[0].price[frame]} text={TEXT[0]}/>
        <Card price={TEXT[1].price[frame]} text={TEXT[1]}/>
        <Card price={TEXT[2].price[frame]} text={TEXT[2]}/>
      </section>
    </main>
  );
}

export default App;
