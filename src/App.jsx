// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import Subscription from './components/Subscription.jsx';
import CoursesHome from './components/CoursesHome.jsx';
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
import PurchasedCourseDetails from './components/PurchasedCourseDetails.jsx'; // Actualizado
import TeacherDetails from './components/TeacherDetails.jsx';
import Contact from './components/Contact.jsx';
import PaymentForm from './components/PaymentForm.jsx'; // Importamos el nuevo componente

import CourseSelection from './components/CourseSelection.jsx';
import TeacherSelection from './components/TeacherSelection.jsx';
import SubscriptionSummary from './components/SubscriptionSummary.jsx';

// Importamos slugify
import { slugify } from './utils/slugify';

// Importamos el UserProvider
import { UserProvider } from './context/UserContext.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Lista de instrumentos disponibles
  const instruments = ['Guitarra', 'Piano', 'Batería', 'Técnica Vocal'];

  return (
    <UserProvider>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          {/* Contenido Principal */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/course-selection" element={<CourseSelection />} />
              <Route path="/teacher-selection" element={<TeacherSelection />} />
              <Route path="/subscription-summary" element={<SubscriptionSummary />} />
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
                path="/purchased-course/:courseId"
                element={<PurchasedCourseDetails />} // Actualizado
              />
              <Route path="/teachers/:id" element={<TeacherDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<PaymentForm />} /> {/* Nueva ruta */}
            </Routes>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;