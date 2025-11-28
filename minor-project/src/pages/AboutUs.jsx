import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="intro">
        <h1>Welcome to Green Basket</h1>
        <p>
          At Green Basket, we believe in making a difference in the way food is produced, distributed, and consumed. 
          We are committed to bridging the gap between local farmers and urban consumers, offering fresh, organic, 
          and sustainably grown produce delivered directly to your doorstep.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple but profound: to provide fresh, healthy, and locally grown food to urban communities 
          while creating a sustainable, fair, and transparent marketplace for farmers. We understand the challenges 
          faced by farmers in accessing larger markets, and we aim to empower them by providing them with the tools 
          and platform they need to reach consumers directly. 
        </p>
        <p>
          Through our platform, we want to reduce food miles, promote the consumption of organic and seasonal produce, 
          and foster a deeper connection between the consumer and the food they eat. We are dedicated to building a 
          community that supports local agriculture, reduces environmental impact, and ensures fair pricing for both 
          farmers and consumers.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading platform that transforms the way people access and purchase food by creating 
          a more sustainable, equitable, and efficient food system. We envision a future where every consumer has access 
          to healthy, locally grown produce, where farmers are fairly compensated for their hard work, and where local 
          communities thrive.
        </p>
        <p>
          At Green Basket, we want to inspire change at a systemic level. By directly connecting consumers with farmers, 
          we hope to reshape the way food is produced, distributed, and consumed across the globe. Our goal is to build 
          a model that supports not only the local food economy but also the environment, by minimizing food waste, 
          reducing carbon footprints, and promoting eco-friendly farming practices.
        </p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <p>
          At the heart of Green Basket lies a set of core values that guide everything we do. These values represent 
          our commitment to quality, sustainability, and community.
        </p>
        <ul>
          <li><strong>Sustainability</strong>: We believe in the importance of sustainability in agriculture, and 
              strive to reduce our environmental footprint by supporting organic, eco-friendly farming practices.</li>
          <li><strong>Community</strong>: We are committed to building a stronger, more connected community of farmers, 
              consumers, and industry partners who support each other in achieving common goals.</li>
          <li><strong>Transparency</strong>: We prioritize transparency in all our dealings, ensuring that farmers and 
              consumers are informed and confident in the sourcing, pricing, and quality of the products they purchase.</li>
          <li><strong>Fairness</strong>: We ensure that farmers receive fair compensation for their produce and consumers 
              have access to high-quality products at competitive prices.</li>
          <li><strong>Innovation</strong>: We embrace innovation and technology to improve the efficiency and accessibility 
              of food distribution, and to help farmers increase productivity and sustainability.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          The team at Green Basket is a passionate group of individuals dedicated to making a positive impact on the food 
          system. We come from diverse backgrounds in technology, agriculture, sustainability, and business, but we are all 
          united by our shared commitment to supporting local farmers and delivering high-quality food to consumers.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="../../public/rishu.jpg" alt="Team Member 1" />
            <h3>rishu</h3>
            <p>Co-Founder & CEO</p>
            <p>Jane brings over a decade of experience in sustainable agriculture and business development. Her passion for 
              organic farming and commitment to social impact drives the vision behind Green Basket.</p>
          </div>
         
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <p>
          Green Basket is more than just an online marketplace. We are a movement towards creating a more sustainable 
          and fair food system. By supporting local farmers, we help reduce the environmental impact of long-distance 
          food transportation, minimize food waste, and promote the consumption of seasonal, fresh, and organic produce.
        </p>
        <p>
          Through our platform, we have seen the transformative power of supporting local businesses. Farmers who once 
          struggled to access larger markets now have a direct line to consumers who value the quality and sustainability 
          of their produce. For consumers, Green Basket offers a convenient way to access fresh, organic food while also 
          supporting a cause they believe in.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, inquiries, or would like to learn more about Green Basket, don't hesitate to get in touch. 
          We’d love to hear from you!</p>
        <p>Email: <a href="mailto:support@greenbasket.com">support@greenbasket.com</a></p>
      </section>
    </div>
  );
};

export default AboutUs;
