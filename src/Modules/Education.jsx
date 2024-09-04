import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNav from '../Components/NavBar';
// import './Education.css'; // You will need to create this CSS file for the flip animation

const Education = () => {
  const [flipped, setFlipped] = useState({
    pennState: false,
    dtu: false,
  });

  const educationData = {
    pennState: {
      schoolName: 'The Pennsylvania State University',
      additionalName: '( Penn State )',
      degree: 'Master of Science (MS) in Computer Science',
      duration: 'May 2025 (Expected)',
      location: 'State College, PA, USA',
      description: 'A description of your experience at Penn State goes here.',
      logo: 'psu.png', // Add the path to the Penn State logo here,
      coursework: ['Computer Vision', 'Distributed Systems', 'Operating System', 'Computer Security', 'Quantum Algorithms', 'Computer Architecture', 'Performance Evaluation']
    },
    dtu: {
      schoolName: 'Delhi Technological University',
      additionalName: '( formerly Delhi College of Engineering )',
      degree: 'Bachelor of Technology (B.Tech) in Mathematics and Computing',
      duration: 'May 2022',
      location: 'Delhi, IN',
      description: 'A description of your experience at DTU goes here.',
      logo: 'dtu.png', // Add the path to the DTU logo here
      coursework: ['Data Structures and Algorithms', 'Database Management Systems', 'Cloud Computing', 'Software Engineering', 'Probability and Statistics', 'Discrete Mathematics', 'Stochastic Processes', 'Theory of Computation', 'Computer Networks', 'Cryptography and Network Security', 
                    'Fuzzy Set and Fuzzy Logic']
    },
  };

  const handleFlip = (key) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [key]: !prevFlipped[key],
    }));
  };

  const renderTile = (key, data) => (
    <Col xs={12} md={6} className="mb-4" key={key}>
      <div
        className={`flip-card ${flipped[key] ? 'flipped' : ''}`}
        onClick={() => handleFlip(key)}
        style={{
          width: '100%',
          paddingTop: '100%', // This makes the card a square
          position: 'relative',
        }}
      >
        <div className="flip-card-inner" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="flip-card-front d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img
                src={data.logo}
                alt={data.schoolName}
                style={{ width: '200', height: '200', marginBottom: '15px' }}
              />
              <h4 style={{ color: '#1a1a6e' }}>{data.schoolName}</h4>
              <h4 style={{ color: '#1a1a6e' }}>{data.additionalName}</h4>
            </div>
          </div>
          <div className="flip-card-back p-3">
            <Row className="align-items-center justify-content-between">
              <Col xs={10}>
                <h4 className="font-weight-bold mb-0" style={{ color: '#1a1a6e' }}>
                  {data.schoolName}
                </h4>
                <p className="text-muted" style={{ marginTop: '10px' }}>
                  {'Course: ' + data.degree}
                </p>
                <p className="text-muted" style={{ marginTop: '10px' }}>
                  {'Graduation Date: ' + data.duration}
                </p>
                <p className="text-muted" style={{ marginTop: '10px' }}>
                  Relevant Coursework:
                </p>
                <ul style={{ color: '#6e72ff' }}>
                  {data.coursework.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <p style={{ color: '#6e72ff' }}>
                  {data.description}
                </p>
              </Col>
            </Row> */}
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <>
    <CustomNav />
      <Container className="my-5">
      {/* <h2 style={{ color: '#1a1a6e' }}>Education</h2> */}
      <Row>
        {renderTile('pennState', educationData.pennState)}
        {renderTile('dtu', educationData.dtu)}
      </Row>
    </Container>
    </>
  
  );
};

export default Education;
