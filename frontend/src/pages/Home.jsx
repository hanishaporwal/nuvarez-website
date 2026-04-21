import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Transforming Digital Experiences</h1>
        <p>We deliver scalable solutions with Mulesoft & Salesforce</p>

        <div className="hero-buttons">
          <button className="talk-btn">Get Started</button>
          <button className="outline-btn">Learn More</button>
        </div>
      </section>

      <section className="services">
        <h2>Our Expertise</h2>

        <div className="service-cards">
          <div className="card">
            <h3>Mulesoft</h3>
            <p>Seamless system integration solutions</p>
          </div>

          <div className="card">
            <h3>Salesforce</h3>
            <p>CRM solutions to grow your business</p>
          </div>

          <div className="card">
            <h3>Industries</h3>
            <p>Customized solutions across domains</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;