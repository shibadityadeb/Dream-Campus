import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Courses from "./Components/Courses/Courses"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import RandomFact from "./Components/RandomFact/Randomfact" 

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <div className="container">
        <section id="courses" className="section-padding section-bg">
          <Title
            subtitle="Our Programs"
            title="Academic Excellence & Innovation"
            description="Discover our comprehensive range of programs designed to prepare you for success in today's competitive world."
          />
          <Courses />
        </section>
        <section id="about" className="section-padding">
          <About />
        </section>
        <section id="campus" className="section-padding section-bg">
          <Title
            subtitle="Campus Gallery"
            title="Experience Our World-Class Facilities"
            description="Take a visual tour of our state-of-the-art campus facilities designed to enhance your learning experience."
          />
          <Campus />
        </section>
        <section id="testimonials" className="section-padding">
          <Title
            subtitle="Student Testimonials"
            title="What Our Students Say"
            description="Hear from our students about their transformative experiences and success stories."
          />
          <Testimonials />
        </section>
        <section id="contact" className="section-padding section-bg">
          <Title
            subtitle="Contact Us"
            title="Get In Touch With Us"
            description="Have questions or need more information? We're here to help you on your educational journey."
          />
          <Contact />
        </section>
      </div>
      <Footer />
      <RandomFact />
    </div>
  )
}

export default App
