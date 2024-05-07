import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import { ThemeProvider } from './utils/context'
import Footer from './components/Footer'
import GlobalStyle from './utils/styles/GlobalStyle'
import { SurveyProvider } from './utils/context'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />

            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
