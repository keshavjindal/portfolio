import ExperienceTile from '../Components/ExperienceTile';
import React, { Fragment } from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { projectsList } from '../utils/helperList';

const Experience = () => {
    const experiences = [
        {
          companyLogo: 'amazonlogo.png',
          jobTitle: 'Software Dev Engineer Intern',
          companyName: 'Amazon',
          jobDescription: [
          `Worked on CLAM (Curated Limits Approval Management), an internal service managing AWS service quota increase requests for EC2 on-demand and spot instances.`,
          `Designed and implemented automation for the CLAM new region build process, reducing repetitive manual development effort from 2 weeks to a fully automated solution for launching the service in new AWS regions.`,
          `Successfully verified the launch of the service in the KUL region.` ,
          `Developed and integrated alarms and metrics to continuously monitor the deployment process of the service for future regions.`],
          duration: 'May 2024 - Aug 2024',
          location: 'Seattle, USA'
        },
        {
          companyLogo: 'zebpay.png',
          jobTitle: 'Software Engineer',
          companyName: 'Zebpay',
          jobDescription: [`Led the development of an internal product called Chain-Wallet-Watcher, in the Blockchain Team at India’s oldest cryptocurrency exchange, which automated the tracking of balances of more than 80 cryptocurrencies across multiple blockchains and wallets. The product increased the efficiency of finance and trade teams by 300%.`,
          `Facilitated easy wallet management with frontend features and wrote SQL queries for fast data retrieval. Slashed API runtime by an astonishing 87%, from 3 seconds to a rapid 0.4 seconds through SQL query optimization.`,
          `Managed and developed the data lake platform. The tool used ETL pipelines to store all the data in a data warehouse and then generate key reports used by different teams to make strategic decisions.`,
          `Tech Stack: TypeScript, Python, NestJS, ReactJS, PostgreSQL, MySQL`],
          duration: 'Jun 2022 - Jul 2023',
          location: 'Mumbai, IN'
        },
        {
            companyLogo: 'Amazon_logo.svg.png',
            jobTitle: 'Software Dev Engineer Intern',
            companyName: 'Amazon',
            jobDescription: [` Contributed to the Alexa Communications Team's backend codebase, overseeing the delivery of Alexa's calling-related experiences to millions of users worldwide.`,
            `Resolved a high-priority issue in the Alexa app, where users faced problems marking contacts as favorites due to userID and familyID mismatches.`,
            `Wrote integration tests for the Contacts Sync Service as part of a team initiative to adopt Continuous Delivery (CD) practices, 
            significantly enhancing the reliability and robustness of our deployment pipeline.`],
            duration: 'Feb 2022 - Mar 2022',
            location: 'Chennai, IN'
          },
          {
            companyLogo: 'test',
            jobTitle: 'Software Engineer Intern',
            companyName: 'Zupee',
            jobDescription: ['Wrote unit tests using the Jest framework and performed testing of more than 50 APIs in user and wallet services.', 
                'Reported and documented bugs through appropriate agile processes, leading to a 36% reduction in post-release issues, and ensuring seamless code quality.'],
            duration: 'Sept 2021 - Oct 2021',
            location: 'Gurugram, IN'
          },
          {
            companyLogo: 'test',
            jobTitle: 'Software Engineer Intern',
            companyName: 'Uxarmy',
            jobDescription: [`Developed a website using the MERN stack for the company's new product line, engineering a user-friendly login system for both admin and user access, and integrating a payment portal using the Stripe API.`],
            duration: 'Jun 2021 - Jul 2021',
            location: 'Jaipur, IN'
          },
        // Add more experiences here
      ];

    return(
      <>
        <CustomNav />
        <Container className="my-5">
      {/* <h2 style={{ color: '#1a1a6e' }}>Experience</h2> */}
      {experiences.map((exp, index) => (
        <ExperienceTile 
          key={index}
          companyLogo={exp.companyLogo}
          jobTitle={exp.jobTitle}
          companyName={exp.companyName}
          jobDescription={exp.jobDescription}
          duration={exp.duration}
          location={exp.location}
        />
      ))}
    </Container>
      </>
    )
  };

export default Experience;
