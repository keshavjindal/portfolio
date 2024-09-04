import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomNav from '../Components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // alert('Copied to clipboard: ' + text);
  };

  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 style={{ color: '#1a1a6e', fontWeight: 'bold' }}>Get in Touch</h2>
            <p style={{ color: '#6e72ff' }}>
            I’d love to hear from you! Whether you want to discuss a project, collaborate, or just say hello, feel free to reach out. 
  {/* I am actively looking for full-time software engineering roles starting in May 2025, and I’d be thrilled to connect with you regarding any exciting opportunities. */}
            </p>
            <p style={{ color: '#6e72ff' }}>
  I am actively looking for <strong>full-time software engineering roles</strong> starting in <strong>May 2025</strong>, and I’d be thrilled to connect with you regarding any exciting opportunities.
            </p>
            <div className="mt-4">
              <Button
                href="https://www.linkedin.com/in/keshavjindal555/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-primary"
                className="m-2"
                style={{
                  borderColor: '#1a1a6e',
                  color: '#1a1a6e',
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Button>
            </div>
            <div className="mt-4">
              {/* <h4 style={{ color: '#1a1a6e', fontWeight: 'bold' }}>Emails</h4> */}
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span style={{ marginRight: '10px', color: '#6e72ff' }}>kjj5491@psu.edu</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => copyToClipboard('kes333hav@example.com')}
                  style={{
                    borderColor: '#1a1a6e',
                    color: '#1a1a6e',
                    padding: '0 10px',
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <span style={{ marginRight: '10px', color: '#6e72ff' }}>kes333hav@gmail.com</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => copyToClipboard('kjj5491@example.com')}
                  style={{
                    borderColor: '#1a1a6e',
                    color: '#1a1a6e',
                    padding: '0 10px',
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
