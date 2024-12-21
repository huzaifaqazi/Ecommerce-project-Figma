import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Pickup } from "./components/pickup";
import Catalouge from "./components/catalouge";
import Recommendtion from "./components/recommendtion";
import { Footer } from "./components/foooter";

export default function Home() {
  return (
    <div>
      <Navbar/>
       <Hero/>
      <Pickup/> 
      <Catalouge/>
      <Recommendtion/> 
      <Footer/>
    </div>
    
  
  );
}
