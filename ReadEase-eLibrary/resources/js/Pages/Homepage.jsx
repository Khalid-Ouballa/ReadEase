import About from "@/Components/About";
import Blogs from "@/Components/Blogs";
import Home from "@/Components/Home";
import Footer from "@/Components/Footer";
import Opinions from "@/Components/Opinions";
import Featured from "@/Components/Featured";
import { Head } from "@inertiajs/react";


function Homepage() {
  return (
  
      
    <>
      <Head title="Homepage" />
      <Home/> 
    <About />
    <Featured/>
    <Opinions/>
   <Blogs/> 
   <Footer/> 
  
  </>
     
             
  );
}
export default Homepage;
