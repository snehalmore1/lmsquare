// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  const facts = [
    {
      icon: 'fas fa-clock',
      title: 'Dedicated Support Hours',
      number: 100,
      description: 'With 100 dedicated support hours, we ensure that our clients receive continuous assistance and seamless experiences.',
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Git Commits Made',
      number: 150,
      description: 'Collaborating on 150+ Git commits, reflecting our commitment to version control and collaboration.',
    },
    {
      icon: 'fas fa-file-code',
      title: 'Projects Hosted on GitHub',
      number: 20,
      description: 'Hosting 20 open-source projects on GitHub, contributing to the developer community.',
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Workshops Conducted',
      number: 20,
      description: 'Imparting knowledge through 20 educational workshops, empowering the next generation of developers.',
    },
    {
      icon: 'fas fa-comments',
      title: 'Community Forum Posts',
      number: 500,
      description: 'Engaging with our community through 500 forum posts, fostering a supportive developer ecosystem.',
    },
  
  ];

  return (
    <div className="about-us-container" id="about">
      <h1 className="section-title">About Us</h1>
      <h2>Welcome to LM Square Solutions!</h2>
      <p className="tagline"> Empowering Innovation Through Learning, Making, and Modifying</p>
      <p align="justify">
        Bringing over 15+ years of unrivaled expertise, our company is on a mission to redefine excellence
        in the IT landscape. We strive to provide innovative solutions, leveraging our wealth of experience
        to propel businesses forward and exceed the expectations of a dynamic and evolving market.
      </p>   
      <div className="facts-grid">
        {facts.map((fact) => (
          <div className="fact" key={fact.title}>
            <i className={fact.icon}></i>
            <div className="content">
              <h3>{fact.title}</h3>
              <h2 className="number">{fact.number}</h2>
              <p>{fact.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="values-section">
      <h2>Our Core Values</h2>
      <ul className="values-list">
        <li className="values-list-item">
          <i className="fas fa-lightbulb icon"></i>
          <div className="value-details">
            <span className="value-title">Innovation</span>
            <p className="value-description">We foster a culture of creativity and forward-thinking to drive innovation in everything we do.</p>
          </div>
        </li>
        <li className="values-list-item">
          <i className="fas fa-shield-alt icon"></i>
          <div className="value-details">
            <span className="value-title">Integrity</span>
            <p className="value-description">We uphold the highest standards of integrity, honesty, and ethics in all our interactions and decisions.</p>
          </div>
        </li>
        <li className="values-list-item">
          <i className="fas fa-handshake icon"></i>
          <div className="value-details">
            <span className="value-title">Client-Centric Approach</span>
            <p className="value-description">Our clients are at the heart of everything we do. We prioritize their needs and deliver solutions with a client-centric focus.</p>
          </div>
        </li>
        <li className="values-list-item">
          <i className="fas fa-book icon"></i>
          <div className="value-details">
            <span className="value-title">Continuous Learning</span>
            <p className="value-description">We embrace a culture of continuous learning and development, staying updated with the latest industry trends and technologies.</p>
          </div>
        </li>
      </ul>
    </div>



      <div className="how-we-work-section bg-gray-100 p-12">
        <div className="container mx-auto ">
          <h2 className="section-title text-4xl text-blue-900 mb-8 text-center">How We Work</h2>

          <div className="work-steps">
            <div className="work-step">
              <i className="fas fa-graduation-cap fa-3x mb-4"></i>
              <h3 className="text-2xl text-blue-900 font-bold">We <span className='font-black'>Learn</span></h3>
              <p>
                Our team is committed to continuous learning, staying updated with the latest technologies, processes, and market trends. This enables us to experiment and provide innovative solutions to our clients' challenges.
              </p>
            </div>

            <div className="connector-line"></div>

            <div className="work-step">
              <i className="fas fa-tools fa-3x mb-4"></i>
              <h3 className="text-2xl text-blue-900 font-bold">We <span className='font-black'>Make</span></h3>
              <p> {/* Adjusted font size for 'We Make' */}
                Leveraging years of experience in software analysis and design, we craft customized solutions to help clients improve operations, reduce costs, and enhance efficiency.
              </p>
            </div>

            <div className="connector-line"></div>

            <div className="work-step">
              <i className="fas fa-wrench fa-3x mb-4"></i>
              <h3 className="text-2xl text-blue-900 font-bold">We <span className='font-black'>Modify</span></h3>
              <p> {/* Adjusted font size for 'We Modify' */}
                With a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help clients adapt, improve, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="technology-section">
        <h2>Our Mission</h2>
        <p>We are on a relentless pursuit of excellence, committed to leveraging our technical expertise to solve challenges and pioneer innovative solutions across diverse domains. Our mission is to provide unparalleled technical solutions that transcend boundaries, making a positive impact on the world.</p>
      </div>

      
     

      <div className="technology-section">
  <h2>Our Comprehensive Expertise</h2>
  <p>Our team is proficient in leveraging cutting-edge technologies to deliver innovative solutions. We specialize in:</p>
  <ul className="technology-list">
    <li className="technology-list-item">
      <i className="fas fa-cogs"></i>
      <span>Custom Solution Development</span>
    </li>
    <li className="technology-list-item">
      <i className="fas fa-chart-line"></i>
      <span>Scalable Architectures</span>
    </li>
    <li className="technology-list-item">
      <i className="fas fa-cloud"></i>
      <span>Cloud Computing</span>
    </li>
    <li className="technology-list-item">
      <i className="fas fa-graduation-cap"></i>
      <span>Educational Training</span>
    </li>
    <li className="technology-list-item">
      <i className="fas fa-handshake"></i>
      <span>Consultation Services</span>
    </li>
  </ul>
</div>
    </div>
  );
};

export default AboutUs;
