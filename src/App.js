import React from 'react';
import Navbar from './components/Navbar/navbar';
import InfoSection from './sections/info/info';
import EducationSection from './education/graduation/graduation';
import SkillComponent from './education/graduation/skills/skills';
import ProjectComponent from './project/projects';
import CertificateComponent from './certificate/certificate';
import Contact from './contact/contact';
import "./App.css"
import Footer from './footer/footer';
import ScrollToTopButton from './scrollbtn/btn';

const App = () => {
  return (
    <div>
      <Navbar />
      <InfoSection/>
      <EducationSection/>
      <ProjectComponent/>
      <SkillComponent/>
      <CertificateComponent/>
      <div>
        <h2 style={{ textAlign: "center", marginBottom:"30px", marginTop:"30px", color:"#2c8fb5" }}>Connect Me Through</h2>
      </div>
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
      
      
    </div>
  );
};

export default App;
