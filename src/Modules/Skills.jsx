import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { skillsList, newSkillsList } from '../utils/helperList';



const Skills = () => {
  const getCategoryHeading = (category) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return 'Programming Languages';
      case 'databases':
        return 'Databases';
      case 'tools':
        return 'Frameworks/Tools';
      // Add more categories as needed
      default:
        return 'Other Skills';
    }
  };

  const renderSkillsSection = (category, skills) => (
    <div key={category} className="mb-5">
      <h3 style={{ color: '#1a1a6e', fontWeight: 'bold' }}>{getCategoryHeading(category + '')}</h3>
      <Row className="justify-content-center">
        {skills.map((s) => (
          <Col
            key={s.label}
            xs={6}
            sm={4}
            md={2}
            className="d-flex flex-column align-items-center mb-4"
          >
            <img src={s.src} alt={s.label} style={{ width: '100px', height: '100px' }} />
            <p style={{ marginTop: '10px', color: '#1a1a6e', fontWeight: 'bold' }}>{s.label}</p>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {Object.entries(newSkillsList).map(([category, skills]) =>
          renderSkillsSection(category.charAt(0).toUpperCase() + category.slice(1), skills)
        )}
      </Container>
    </>
  );
};

export default Skills;
