import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Mainscreen from "./Mainscreen";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import AdminPage from "./AdminPage";
import Navbar from "./navbar";
import Project from "./project";
import ProjectPage from "./ProjectPage";
import SocialMedia from "./SocialMedia";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="*"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Mainscreen />
            </motion.div>
          }
        />
        <Route
          path="/service"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ServicePage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ProjectPage />
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AdminPage />
            </motion.div>
          }
        />
      </Routes>
      
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <SocialMedia/>
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
      // <Router>
      //  <Navbar/>
      //   <Routes>
      //     <Route path='*' element={<Mainscreen/>}></Route>
      //     <Route path='/service' element={<ServicePage/>}></Route>
      //     {/* <Route path='/projects' element={<ProjectPage/>}></Route> */}
      //     <Route path='/contact' element={<ContactPage/>}></Route>
      //     <Route path='/about' element={<AboutPage/>}></Route>
      //     <Route path='/admin' element={<AdminPage/>}></Route>
      //   </Routes>
      // </Router>