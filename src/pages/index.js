import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import DisplayProjects from "../Components/DisplayProjects/DisplayProjects";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <DisplayProjects></DisplayProjects>
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
