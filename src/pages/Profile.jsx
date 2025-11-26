function Profile() {
  return (
    <div className="page">
      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop playsInLine className="bg-video">
        <source src="/guts.mp4" type="video/mp4" />
      </video>

    <div className="profile-container">
      {/* HEADER: PHOTO & NAME */}
      <header className="profile-header">
        <img
          src="pict.jpg"
          alt="Profile Photo"
          className="profile-photo"
        />
        <h1>Elbert Wijaya</h1>
        <p className="subtitle">High School Student | Grade 11</p>
      </header>

      {/* PERSONAL INFORMATION */}
      <section className="info-card">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <p>
            <strong>Student ID:</strong> 24.07.5.10.0009
          </p>
          <p>
            <strong>Date of Birth:</strong> 21 March 2009
          </p>
          <p>
            <strong>Place of Birth:</strong> Samarinda
          </p>
          <p>
            <strong>Address:</strong> Jl. Pm Noor Perumahan tepian 6
          </p>
          <p>
            <strong>Hobbies:</strong> Sports
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="info-card">
        <h2>Education</h2>
        <div className="info-grid">
          <p>
            <strong>School:</strong> Sekolah Citrakasih Samarinda
          </p>
          <p>
            <strong>Grade:</strong> 11A
          </p>
          <p>
            <strong>Club:</strong> Basketball Club
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="info-card">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Basketball</li>
          <li>Bowling</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="info-card">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> elbert.wijaya@student.citrakasih.sch.id
        </p>
        <p>
          <strong>Instagram:</strong> @elbert__wijaya
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
  z-index: -2;
  filter: brightness(0.8);
  transition: opacity 0.5s ease-in-out;
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
    </div>
  );
}

export default Profile;
