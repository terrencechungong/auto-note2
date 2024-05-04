import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed via npm
import { relative } from 'path-browserify';
import HomeSvg from './reusables/homeSVG';
import students_in_lec from '../assets/students-in-lec.jpg'
import {TopWords, AuthWords} from './reusables/top-words-home-page';

let style_bg = {
  backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  width: '100vw',
  height: '1500px',
  position: 'relative'
};

let label_style = { fontSize: 30, fontWeight: 600 };

const HomePage = () => (

  <div className="scrollable-container">
    <div style={style_bg}>
      <div style={{display:'flex'}}>
        <TopWords />
        <AuthWords/>
      </div>
    
      <div>
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: 90, width: 1000, marginLeft: 790, marginTop: 300 }}> Let AI take notes for you while you pay attention!</p>
        </div>
      </div>
      <HomeSvg />
      <div style={{ position: 'absolute', bottom: '15%', alignSelf:'center', marginLeft:'20%' }}>
        <div className="side-by-side-container" style={{ paddingTop: 60, justifyContent:'space-between', width:'70vw', alignSelf:'center' }}>
        <div className="text-piece">
          <p style={label_style}>Lecture Summary</p>
          <p>Revolutionize your learning experience with our AI-powered lecture summarization.</p>
        </div>

        <div className="text-piece" >
          <p style={label_style}>Exam Prep</p>
          <p>Prepare for exams efficiently with our app's integrated exam prep material, empowering you to review key concepts and ace your tests with confidence.</p>
        </div>
        <div className="text-piece">
          <p style={label_style}>Chat-GPT</p>
          <p>Engage in interactive learning by utilizing our chat feature to ask ChatGPT about your lecture, gaining additional insights and clarifications in real-time</p>
        </div>
      </div>
      </div>
    </div>
    <div
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        width: '100vw',
        height: '800px',
        position: 'relative'
      }}
    >
    </div>
  </div>
);

export default HomePage;