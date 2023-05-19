import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>ES 6</li>
                                    <li>SaaS/SCSS</li>
                                    <li>Tailwind CSS</li>
                                    <li>Agile Methodology</li>
                                    <li>Figma/AdobeXd</li>
                                    <li>Jira</li>
                                    <li>AEM</li>
                                    <li>PHP</li>
                                    <li>Unit Testing</li>
                                    <li>Jest</li>
                                </Col>
                                <Col md={5}>
                                    <li>React JS</li>
                                    <li>Redux</li>
                                    <li>Redux ToolKit</li>
                                    <li>StoryBook</li>
                                    <li>React-Bootstrap</li>
                                    <li>Material-UI</li>
                                    <li>Semantic-UI</li>
                                    <li>Bootstrap 5</li>
                                    <li>Git/Github</li>
                                    <li>Azure Devops</li>
                                    <li>Basic Deployments</li>
                                    <li>Rest API's</li>
                                    <li>Responsive UI</li>
                                    <li>Basic NextJS</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage