import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./company.css";
import { useEffect } from "react";

function Company() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="company-hero fade-in">
        <h1>Redefining System Integration</h1>
        <p>We build digital ecosystems that drive real business impact</p>
      </section>

      <section className="what-we-do fade-in">
  <div className="container">
    <h2>What We Do</h2>

    <div className="wwd-grid">

      <div className="wwd-card">
        <i className="fa-solid fa-link"></i>
        <h3>Connect Systems</h3>
        <p>We integrate platforms to ensure seamless data flow.</p>
      </div>

      <div className="wwd-card">
        <i className="fa-solid fa-chart-line"></i>
        <h3>Drive Growth</h3>
        <p>Our solutions help businesses scale efficiently.</p>
      </div>

      <div className="wwd-card">
        <i className="fa-solid fa-brain"></i>
        <h3>Enable Decisions</h3>
        <p>We transform data into actionable insights.</p>
      </div>

    </div>
  </div>
</section>

      {/* BELIEF */}
      <section className="belief fade-in">
        <div className="container belief-content">

          <div className="belief-text">
            <h2>What We Believe</h2>
            <p>
              Integration is not just about connecting systems — it’s about unlocking
              business potential and enabling smarter decisions.
            </p>
          </div>

          <div className="belief-box">
            <h3>🚀 Strategy First</h3>
            <p>Technology should serve your business vision.</p>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <div className="timeline">

  <div className="timeline-card">
    <h3>Idea</h3>
    <p>Recognizing that integrations lacked business impact.</p>
  </div>

  <div className="timeline-card">
    <h3>Vision</h3>
    <p>Align integration with business strategy.</p>
  </div>

  <div className="timeline-card">
    <h3>Growth</h3>
    <p>Building scalable solutions across industries.</p>
  </div>

  <div className="timeline-card">
    <h3>Today</h3>
    <p>Driving transformation through smart ecosystems.</p>
  </div>

</div>

      {/* FEATURES */}
      <section className="features fade-in">
        <div className="container">
          <h2>What Sets Us Apart</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <i className="fa-solid fa-lightbulb"></i>
              <h3>Strategic Thinking</h3>
              <p>We design integration for long-term growth.</p>
            </div>

            <div className="feature-card">
              <i className="fa-solid fa-users"></i>
              <h3>Boutique Advantage</h3>
              <p>Direct access to senior expertise.</p>
            </div>

            <div className="feature-card">
              <i className="fa-solid fa-gear"></i>
              <h3>End-to-End Ownership</h3>
              <p>We stay beyond deployment.</p>
            </div>

            <div className="feature-card">
              <i className="fa-solid fa-globe"></i>
              <h3>Industry Expertise</h3>
              <p>Solutions across domains.</p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise fade-in">
        <div className="container">
          <h2>Our Expertise</h2>

          <div className="expertise-grid">

            <div className="expertise-card">
              <i className="fa-solid fa-cloud"></i>
              <p>Cloud</p>
            </div>

            <div className="expertise-card">
              <i className="fa-solid fa-database"></i>
              <p>Data</p>
            </div>

            <div className="expertise-card">
              <i className="fa-solid fa-link"></i>
              <p>API</p>
            </div>

            <div className="expertise-card">
              <i className="fa-solid fa-cogs"></i>
              <p>Optimization</p>
            </div>

            <div className="expertise-card">
              <i className="fa-solid fa-bolt"></i>
              <p>MuleSoft</p>
            </div>

            <div className="expertise-card">
              <i className="fa-solid fa-chart-line"></i>
              <p>Salesforce</p>
            </div>

          </div>
        </div>
      </section>

      {/* FLOW */}
      <div className="flow-steps">

  <div className="flow-card">
    <h4>Strategy</h4>
    <p>Understand business goals</p>
  </div>

  <div className="flow-card">
    <h4>Design</h4>
    <p>Architect scalable systems</p>
  </div>

  <div className="flow-card">
    <h4>Build</h4>
    <p>Implement robust integrations</p>
  </div>

  <div className="flow-card">
    <h4>Scale</h4>
    <p>Optimize and grow systems</p>
  </div>

</div>

      {/* CTA */}
      <section className="cta fade-in">
        <div className="container">
          <h2>Let’s Get Started</h2>
          <button className="talk-btn">Get Started</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Company;