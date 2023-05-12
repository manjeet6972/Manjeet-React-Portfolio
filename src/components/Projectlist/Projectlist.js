import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import avp from '../../Assets/avp.png'
import vizExplorer from '../../Assets/viz-explorer.png'
import builders from '../../Assets/builders.png'
import photography from '../../Assets/photography.png'
import carRental from '../../Assets/Car-Rental.png'
import artistic from '../../Assets/artistic.png'
import todo from '../../Assets/todo.png'
import employeeManagement from '../../Assets/employee-management.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts(Pie Chart, Bar Chart, Line Chart, Geography Chart), three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://react-user-admin-dash.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={avp}
                isBlog={false}
                title="AVP Tournaments"
                description=" AVP is the longest standing and most well known American beach volleyball organization, facilitating national tournaments, developing new talent, invigorating communities through sport and promoting beach volleyball lifestyle across the United States. AVP dashboard is build with HTML, CSS, ReactJS, Material UI, Redux, Styled Component."
                ghLink="https://avp.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={vizExplorer}
                isBlog={false}
                title="VizExplorer"
                description="VizExplorer site build with HTML, SaaS and ReactJS. VizExplorer is the leading provider of business intelligence to the casino gaming industry. Viz helps power over $10B in annual casino revenue with the most comprehensive solution set in the industry.  Viz offers Cloud or On Prem installation, an intuitive UI, dynamic reporting, recommendations, and real-time updates."
                ghLink="https://www.vizexplorer.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={builders}
                isBlog={false}
                title="Builders First Source"
                description="Builders FirstSource is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling. Our focus is on providing unparalleled service to both large and small customers. Through investments in innovation and an unmatched portfolio of value-added products and manufacturing capabilities, we’re revolutionizing the homebuilding industry – outperforming today and transforming tomorrow. We make builders internal project using ReactJS, Redux, Storybook, React-Bootstrap, SaaS."
                ghLink="https://www.bldr.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={photography}
                isBlog={false}
                title="Photography Ecommerce"
                description="Photography website build with using ReactJS, Redux ToolKit, Tailwind CSS, ViteJS, LocalStorage etc. It's a online store that offers a wide range of cameras and accessories. we can add to cart accessories and increase, decrease as well. Ecommerce photography is the process of taking pictures of goods that are being sold online. To help potential buyers make informed decisions about what to buy, Ecommerce shoot aims to present products in an accurate and appealing manner. Photography is art where the photographer captures shots of the products being crafted and manufactured."
                ghLink="https://photography-shop.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={carRental}
                isBlog={false}
                title="Car Rental"
                description="Car Renatl website build using ReactJS, CSS, SaaS/SCSS. website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price. A car rental, hire car or car hire agency is a company that rents automobiles for short periods of time for a fee. We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs. You can book any time as you need."
                ghLink="https://manjeet-car-rental.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={artistic}
                isBlog={false}
                title="Artistic"
                description="Artistic is a landing page for a photography studio. This is a well-designed and responsive landing page with dark mode feature. The main purpose of this project is to show how to create a landing page with dark mode feature using ReactJs. I will be using React Context API to toggle dark mode feature. It's build with ReactJS, Styled Component and CSS." 
                ghLink="https://artistic-landing.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todo}
                isBlog={false}
                title="To-Do CRUD"
                description="The TODO List project is developed using ReactJS, Redux, SCSS, Framer Motion and Local Storage. I will do all the CRUD operations. To manage our states, I will use Redux. The user can add the number of to-do task details and you can see the details stored in the list form. Also, you can even Update and Delete  the details of the record if you want."
                ghLink="https://crud-todo-react.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={employeeManagement}
                isBlog={false}
                title="Employee Management"
                description="Employee Management project build using ReactJS, Redux, CSS. This Employee Management System Project application stores all the employee's information. It contains employee information like employee id, first name, last name, email, salary and date. You can add new employee information, edit the employee information and delete the employee information."
                ghLink="https://employee-management-systematic.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist