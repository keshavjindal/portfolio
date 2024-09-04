import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ExperienceTile = ({ companyLogo, jobTitle, companyName, jobDescription, duration, location }) => {
  return (
    <Card className="shadow-sm p-3 mb-4 bg-light rounded">
      <Card.Body>
        <Row className="align-items-start">
          <Col xs={10} md={9}>
            <Card.Title className="font-weight-bold mb-2" style={{ color: '#1a1a6e' }}>
              {/* {jobTitle} */}
              {companyName}
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
              {/* {companyName} */}
              {jobTitle}
            </Card.Subtitle>
          </Col>
          <Col xs={2} md={3} className="text-right">
            <span style={{ display: 'block', color: '#1a1a6e' }}>
              {duration}
            </span>
            <span style={{ display: 'block', color: '#1a1a6e' }}>
              {location}
            </span>
          </Col>
        </Row>
        <Row>
          {/* Uncomment this section if you want to display the logo */}
          {/* <Col xs={12} md={1} className="d-flex align-items-center justify-content-center">
            <img src={companyLogo} alt={companyName} style={{ width: '50px', height: '50px' }} />
          </Col> */}
          <Col xs={12} md={11}>
            <ul style={{ color: '#6e72ff' }}>
              {jobDescription.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ExperienceTile;
