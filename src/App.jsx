// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import Subscription from './components/Subscription.jsx';
import CoursesHome from './components/CoursesHome.jsx'; // Importamos el nuevo componente
import CoursesPage from './components/CoursesPage.jsx';
import CourseDetails from './components/CourseDetails.jsx';
import Teachers from './components/Teachers.jsx';
import AboutUs from './components/AboutUs.jsx';
import LoginRegister from './components/LoginRegister.jsx';
import Profile from './components/Profile.jsx';
import AcquiredCourses from './components/AcquiredCourses.jsx';
import Cart from './components/Cart.jsx';
import Confirmation from './components/Confirmation.jsx';
import SubscriptionConfirmation from './components/SubscriptionConfirmation.jsx';
import SubscribedCourseDetails from './components/SubscribedCourseDetails.jsx';
import TeacherDetails from './components/TeacherDetails.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* Contenedor principal que crecerá para ocupar el espacio disponible */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/courses" element={<CoursesHome />} />
            <Route path="/courses/:instrument" element={<CoursesPage />} />
            <Route path="/courses/:instrument/:courseId" element={<CourseDetails />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/acquired-courses" element={<AcquiredCourses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/subscription-confirmation"
              element={<SubscriptionConfirmation />}
            />
            <Route
              path="/subscribed-course"
              element={<SubscribedCourseDetails />}
            />
            <Route path="/teachers/:id" element={<TeacherDetails />} />
          </Routes>
        </div>
        {/* Agregamos el Footer aquí */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
