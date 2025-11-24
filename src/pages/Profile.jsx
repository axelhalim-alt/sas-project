function Profile() {
  return (
    <div className="profile-container">
<video autoPlay loop muted playsInline className="bg-video">
      <source src="/Video.mp4" type="video/mp4" />
      
    </video>
  
    
    <nav className="grow-navbar">
      <div className="grow-logo">🌱 Filbert Fortino</div>
      <ul className="grow-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
      {/* HEADER: PHOTO & NAME */}
      <header id="home" className="profile-header">
        <img
          src="src\assets\profile_picture.jpg"
          alt="Profile Photo"
          className="profile-photo"
        />

        <h1>Filbert Fortino</h1>
        <p className="subtitle">Senior School Student | Grade 11</p>
      </header>

      {/* PERSONAL INFORMATION */}
      <section id="about" className="info-card">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <p>

            <strong>Student ID:</strong> 24.07.5.10.0013
          </p>
          <p>
            <strong>Date of Birth:</strong> 07/10/2009
          </p>
          <p>
            <strong>Place of Birth:</strong> Medan, North Sumatra
          </p>
          <p>
            <strong>Address:</strong> Jln Pangeran Suryanata Blok 88B
          </p>
          <p>
            <strong>Hobbies:</strong> Table Tennis, Swimming, and Travelling
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="info-card">
        <h2>Education</h2>
        <div className="info-grid">
          <p>
            <strong>School:</strong> Sekolah Citra Kasih
          </p>
          <p>
            <strong>Grade:</strong> 11A
          </p>
          <p>
            <strong>Extracurricular:</strong> None
          </p>
          <p>
            <strong>Club:</strong> Table Tennis Club
          </p>
          <p></p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="info-card">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Basic Python</li>
          <li>Table Tennis</li>
          <li>Scratch</li>
          <li>Basketball </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="info-card">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> filbert.fortino@student.citrakasih.sch.id
        </p>
        <p>
          <strong>Instagram:</strong> @fortino.adc
        </p>
      </section>

      

      {/* CSS: CLEAN, PROFESSIONAL, FULL SCREEN */}
      <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.grow-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #3b7cff, #2353c4);
  border-bottom: 4px solid #162d6c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  box-shadow: 0 4px 0 #0f1b47;
  z-index: 100;
}


.bg-video{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
        filter: brightness(0.6);
        transition: opacity 0.5s ease-in-out;
        }

.grow-logo {
  font-family: "Press Start 2P", cursive;
  font-size: 14px;
  color: #fff;
  text-shadow: 2px 2px #1b2a6d;
}

.grow-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.grow-links a {
  font-family: "Press Start 2P", cursive;
  text-decoration: none;
  color: #fff;
  background: #3b7cff;
  border: 2px solid #1a47b8;
  padding: 6px 10px;
  box-shadow: 0 3px 0 #162d6c;
  font-size: 10px;
  transition: all 0.15s ease;
}

.grow-links a:hover {
  background: #5fa3ff;
  transform: translateY(2px);
  box-shadow: 0 1px 0 #162d6c;
}


      .Photo-bg{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
      filter: brightness (0.6);
      transition: opacity 0.5s ease-in-out;
      
      }
        /* FULL PAGE CONTAINER */
        .profile-container {
        position: relative;
        z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          background-color: #ffffffff;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* HEADER */
        .profile-header {
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .profile-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid white;
          object-fit: cover;
          margin-bottom: 15px;
        }

        .profile-header h1 {
          margin: 10px 0;
          font-size: 28px;
          font-weight: 600;
        }

        .subtitle {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 300;
        }

        /* INFO CARD */
        .info-card {
          background-color: #f8f9fc;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .info-card h2 {
          color: #667eea;
          font-size: 20px;
          margin-bottom: 12px;
          border-bottom: 2px solid #e0e6ff;
          padding-bottom: 6px;
        }

        .info-grid p {
          margin: 8px 0;
          font-size: 15px;
          color: #2d3748;
        }

        .info-grid strong {
          color: #1a202c;
          min-width: 120px;
          display: inline-block;
        }

        /* SKILLS LIST */
        .skills-list {
          list-style: none;
          padding: 0;
        }

        .skills-list li {
          background-color: #e6f0ff;
          color: #1a56db;
          padding: 8px 12px;
          margin: 6px 0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          border-left: 3px solid #1a56db;
        }

        /* RESPONSIVE? TIDAK PERLU – LAPTOP ONLY */
        /* Semua ukuran tetap, tidak berubah di HP */
      `}</style>
    </div>
  );
}

export default Profile;
