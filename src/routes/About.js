import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function About(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="About"
        para="Hi , I am Shivangi Mehta , 
        an engineering student . I love
         eating homecooked meals because 
         they are packed with nutrients and 
         flavours . So here i am sharing few
          ideas so you can quick make something 
          out of it.It is an amazing practice to
           maintain a positive lifestyle."
        />
        <Footer />
        </>
    )
}