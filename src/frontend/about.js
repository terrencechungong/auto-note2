import '../App.css'

function CoolWebsite() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              {/* <img src={TakeNoteLogo} alt="TakeNote Logo" height="50" width="50" /> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        {/* About Section */}
        <section className="bg-light text-center p-5">
          <div className="container">
            {/* Content here */}
          </div>
        </section>
  
        {/* Footer */}
        
      </div>
    );
  }
  
  export default CoolWebsite;  