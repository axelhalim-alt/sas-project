function Profile() {
  return (
  <div className="page">
      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/filbots.mp4" type="video/mp4" />
      </video>



    <div className="profile-container">
      {/* HEADER: PHOTO & NAME */}
      <header className="profile-header">
        <img
          src="term1.jpg"
          alt="Profile Photo"
          className="profile-photo"
        />
        <h1>Ryan Austin Cooper</h1>
        <p className="subtitle">High School Student | Grade 11</p>
      </header>

      {/* PERSONAL INFORMATION */}
      <section className="info-card">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <p>
            <strong>Student ID:</strong> 24.07.5.10.0033
          </p>
          <p>
            <strong>Date of Birth:</strong> 23rd July 2009
          </p>
          <p>
            <strong>Place of Birth:</strong> Duncraig, Australia
          </p>
          <p>
            <strong>Address:</strong> Jl. Gerilya Gg. Keluarga No. 100
          </p>
          <p>
            <strong>Hobbies:</strong> 8 Ball Pool{" "}
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="info-card">
        <h2>Education</h2>
        <div className="info-grid">
          <p>
            <strong>School:</strong> Sekolah CitraKasih Samarinda
          </p>
          <p>
            <strong>Grade:</strong> Grade 11
          </p>
          <p>
            <strong>Extracurricular:</strong> -
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="info-card">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Basketball</li>
          <li>8 Ball Pool</li>
          <li>Team Work</li>
          <li>Good Problem Sloving Skills</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="info-card">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> Ryan.cooper@student.citrakasih.sch.id
        </p>
        <p>
          <strong>Instagram:</strong> @ryanaustincooper
        </p>
      </section>

      {/* CSS: CLEAN, PROFESSIONAL, FULL SCREEN */}
      <style jsx>{`

       /* VIDEO BACKGROUND */
        .bg-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1; /* di belakang semua content */
        }

        .page {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        /* FULL PAGE CONTAINER */
        .profile-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          
          min-height: 100vh;
          
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
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.10);
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
     </div>
  );
}

export default Profile;
