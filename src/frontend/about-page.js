import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed via npm

const AboutPage = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <section className="bg-light text-center p-5">
      <div className="container">
        <h2>About TakeNote</h2>
        <p className="lead">
          TakeNote is an innovative platform designed to enhance the classroom experience for both students and professors. Our mission is to provide a seamless and intuitive environment for note-taking, course management, and collaboration.
        </p>
        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>Our Vision</h5>
                <p>
                  We envision a world where education is more accessible, organized, and engaging. TakeNote aims to be at the forefront of educational technology, empowering users to achieve their academic goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5>Our Team</h5>
                <p>
                  Our team is comprised of passionate educators, developers, and designers who are dedicated to creating a user-friendly platform that meets the needs of the modern classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-dark text-white text-center p-3">
      <div className="container">
        <p>&copy; 2024 TakeNote All Rights Reserved.</p>
      </div>
    </footer>
  </div>
);

export default AboutPage;