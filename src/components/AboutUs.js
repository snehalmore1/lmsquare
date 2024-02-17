// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  const facts = [
    {
      icon: 'fas fa-project-diagram',
      title: 'Innovative Projects Delivered',
      number: 50,
      description: 'We have brought to life over 50 innovative projects, exceeding client expectations and setting new industry standards.',
    },
    {
      icon: 'fas fa-clock',
      title: 'Dedicated Support Hours',
      number: 10000,
      description: 'With 10,000 dedicated support hours, we ensure that our clients receive continuous assistance and seamless experiences.',
    },
    {
      icon: 'fas fa-users',
      title: 'Satisfied Clients Worldwide',
      number: 30,
      description: 'Our commitment to excellence has garnered the trust and satisfaction of over 30 clients globally, fostering long-term partnerships.',
    },
    {
      icon: 'fas fa-trophy',
      title: 'Award-Winning Achievements',
      number: 2,
      description: 'Celebrating 2 prestigious industry awards, our work has been recognized for pushing boundaries and achieving excellence.',
    },
  ];

  return (
    <div className="about-us-container" id="about">
      <h1 className="section-title">About Us</h1>
      <h2>Welcome to LM Square Solutions!</h2>
      <p className="tagline">Empowering Innovation Through Learning, Making, and Modifying</p>

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
        <ul>
          <li className="values-list-item">
            <i className="fas fa-lightbulb"></i>
            <span>Innovation</span>
          </li>
          <li className="values-list-item">
            <i className="fas fa-shield-alt"></i>
            <span>Integrity</span>
          </li>
          <li className="values-list-item">
            <i className="fas fa-handshake"></i>
            <span>Client-Centric Approach</span>
          </li>
          <li className="values-list-item">
            <i className="fas fa-book"></i>
            <span>Continuous Learning</span>
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



      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>Our diverse and talented team is the driving force behind our success. Learn more about the individuals who make it all possible.</p>
        {/* Add team member details here */}
      </div>
      
     

      <div className="technology-section">
        <h2>Our Technology Stack</h2>
        <ul>
          <li className="technology-list-item">
            <i className="fab fa-react"></i>
            <span>React.js</span>
          </li>
          <li className="technology-list-item">
            <i className="fab fa-node"></i>
            <span>Node.js</span>
          </li>
          <li className="technology-list-item">
            <i className="fas fa-database"></i>
            <span>MongoDB</span>
          </li>
          {/* Add more technologies as needed */}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
