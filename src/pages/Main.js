import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import ProjectSlider from "../Components/ProjectSlider/ProjectSlider";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <ProjectSlider></ProjectSlider>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
// import React from 'react';

// const index = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default index;
