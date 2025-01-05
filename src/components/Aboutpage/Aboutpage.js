import React from 'react'
import '../../pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage () {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h3 className='aboutmetext'>
              About <span>Me</span>
            </h3>
            <p className='aboutdetails'>
              I have 6+ years of experience in IT and working with domains like
              e-commerce, IoT, etc. I am a DevOps Engineer with 2+ years of
              experience designing, implementing, and managing scalable CI/CD
              pipelines, cloud infrastructure, and automation solutions.
              Proficient in tools and technologies like Kubernetes, Docker, AWS,
              Terraform and Jenkins, Gitlab etc.
            </p>
            <ul className='skilllist'>
              <Row>
                <h3>Technical Skills</h3>
                <Col md={7}>
                  <li>Python</li>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Bash</li>
                  <li>Terraform</li>
                  <li>Shell Scripting</li>
                  <li>Agile Methodology</li>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>CI/CD Pipelines</li>
                  <li>GCP</li>
                  <li>Linux</li>
                  <li>Ansible</li>
                  <li>CircleCI</li>
                  <li>ELK Stack</li>
                  <li>JIRA</li>
                  <li>Grafana</li>
                  <li>CloudFormation</li>
                </Col>
                <Col md={5}>
                  <li>Prometheus</li>
                  <li>Cloud Computing</li>
                  <li>Azure</li>
                  <li>HTML 5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Unit Testing</li>
                  <li>React JS</li>
                  <li>Redux</li>
                  <li>Redux ToolKit</li>
                  <li>Web Development</li>
                  <li>React-Bootstrap</li>
                  <li>Material-UI</li>
                  <li>Semantic-UI</li>
                  <li>Bootstrap 5</li>
                  <li>Rest API's</li>
                  <li>Responsive UI</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className='webimage'></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Aboutpage
