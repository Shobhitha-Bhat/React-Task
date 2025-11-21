import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandPage from './components/LandPage'
import { ThemeProvider } from './context/ThemeProvider'
import UserProfileForm from './components/UserProfileForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoudary'

function App() {
  

  return (
    <>
    <ThemeProvider>
      <Router>
        
<Routes>
        <Route path="/" element={
          <ErrorBoundary>
<LandPage />
          </ErrorBoundary>
          } />
        <Route path="/userform" element={
          <ErrorBoundary>
            <UserProfileForm />
            </ErrorBoundary>} />
      </Routes>
      

      
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
