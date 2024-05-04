import logo from './logo.svg';
import './App.css';
import AudioRecorder from './backend/voice-record.js';
import SimpleForm from './frontend/chat-interface.js';
import Rec from './frontend/Rec.js'
import ProfRecord from './frontend/prof-record.js';
import Navbar from './frontend/NavBar.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import CoolWebsite from './frontend/about.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './frontend/footer.js';
import ChatBot from './frontend/real-chat-face.js';
import Quiz from './frontend/home.js';
import EducationalDashboard from './frontend/lecture-notes.js';
import LectureNotes from './frontend/note-generation.js';
import { QuizProvider } from './frontend/QuizContext.js';
import HomePage from './frontend/home-page.js';
import { AuthProvider } from './backend/AuthProvider.js';
import AboutPage from './frontend/about-page.js';
import Signup from './frontend/SignUp.js';
import Login from './frontend/LogIn.js';

function App() {
  return (
    <QuizProvider>
    <Router>
      <AuthProvider>
      <div>
        <Navbar />
        <Switch>
          <Route path="/chat">
            <ChatBot />
          </Route>
          <Route path="/record">
            <ProfRecord />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/lectures">
            <EducationalDashboard />
          </Route>
          <Route path="/lecture-notes">
            <LectureNotes />
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/rec">
            <Rec/>
          </Route>
          <Route path="/sign-up">
            <Signup/>
          </Route>
          <Route path="/log-in">
            <Login/>
          </Route>
        </Switch>
      </div>
      </AuthProvider>
    </Router>
    </QuizProvider>
  );
}

export default App;
