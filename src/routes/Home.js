import Breakfast from "../components/Breakfast";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1598259298632-e785684cfa90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG9hdG1lYWwlMjB3aXRoJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                title="15 - Minute Recipes  "
                text="Start a day with a healthy meal"
                para="Start your day with one of these flavorful breakfast recipes. These recipes take just 15 minutes to prepare, so you can be ready and out the door in no time. We know you'll love these delicious recipes. Recipes like our Besan Chilla and Mango-Almond Smoothie Bowl are breakfasts you'll want to make on repeat."
            />
            <Breakfast/>
            <Footer/>
        </>
    )
}