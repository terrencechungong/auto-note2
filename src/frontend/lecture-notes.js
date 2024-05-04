import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function EducationalDashboard() {
    const history = useHistory();
    const [course, setCourse] = useState('');
    const [lecture, setLecture] = useState('');


    const generateNotes = () => {
        if (course && lecture) {
            
            // In a real app, you might navigate to a different component or fetch data based on these values
            console.log(`Generating notes for ${course}, ${lecture}`);
            history.push('/lecture-notes');
            
        } else {
            alert('Please select a course and a lecture');
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#6ad8f3' }}>
                {/* Navbar content */}
            </nav>

            {/* Sidebar */}
            <div className="sidebar" style={{ minWidth: '250px', backgroundColor: '#6ad8f3' }}>
                {/* Sidebar links */}
            </div>

            {/* Content */}
            <div className="content" style={{ padding: '20px' }}>
                <h2>TakeNote</h2>
                <div className="mb-3">
                    <label htmlFor="courseSelect" className="form-label">Select a Course</label>
                    <select className="form-select" value={course} onChange={e => setCourse(e.target.value)}>
                        <option value="">Select a course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="lectureSelect" className="form-label">Select a Lecture</label>
                    <select className="form-select" value={lecture} onChange={e => setLecture(e.target.value)}>
                        <option value="">Select a lecture</option>
                        <option value="lecture1">Lecture 1</option>
                        <option value="lecture2">Lecture 2</option>
                    </select>
                </div>
                <a href="/lecture-notes">Generate Notes</a>
            </div>
        </div>
    );
}

export default EducationalDashboard;