function Profile() {
  return (
<div>
    <div className="intro-screen" id="intro">
  <h1 className="intro-text">Welcome to Axel’s Portofolio</h1>
  </div>
    <div className="profile-container">

      

    <video autoPlay loop muted playsInline className="bg-video">
      <source src="/videobg.mp4" type="video/mp4" />
      Your Browser Does Not Support HTML5 Video
    </video>

      {/*Navbar*/}
      <nav className="navbar">
        <h1 className="nav-logo">My Profile</h1>
        <ul className="nav-links">
          <li><a href="#info">Info</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* HEADER: PHOTO & NAME */}
      <header className="profile-header">
        <img
          src="profile1.jpeg"
          alt="Profile Photo"
          className="profile-photo"
        />
        <h1>Axel Kevinsius Halim</h1>
        <p className="subtitle">High School Student | Grade 11A</p>
      </header>

      {/* PERSONAL INFORMATION */}
      <section className="info-card" id="info">
        <center>
        <h2>Personal Information</h2>
        <div className="info-grid">
          <p>
            <strong>Student ID:</strong> 24.07.5.10.0001
          </p>
          <p>
            <strong>Date of Birth:</strong> 10 May 2009
          </p>
          <p>
            <strong>Place of Birth:</strong> Samarinda, Kalimantan Timur
          </p>
          <p>
            <strong>Address:</strong> Perumahan Citraland, Tosca Tree, H5/5
          </p>
          <p>
            <strong>Hobbies:</strong> {"Playing Basketball and Jogging"}
          </p>
        </div>
        </center>
      </section>
        
      {/* EDUCATION */}
      <section className="info-card" id="education">
        <h2>Education</h2>
        <div className="info-grid">
          <p>
            <strong>School:</strong> SMA Citra Kasih Samarinda
          </p>
          <p>
            <strong>Grade:</strong> 11A
          </p>
          <p>
            <strong>Club:</strong> Coding Club
          </p>
          <p className="beaver">
            <strong>Club House:</strong> Beaver Clubhouse
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="info-card" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
        
        <div className="skill-card">
          <img src="coding.jpg" alt="coding" className="skill-image" />
          <h3>Coding</h3>
        <p>Coding: Phyton, HTML, CSS, JS, BootStrap, XIMPP</p>
        </div>

         <div className="skill-card">
          <img src="math.jpeg" alt="math" className="skill-image" />
          <h3>Math Olympiad</h3>
        <p>Analytic and Problem Solving Skills</p>
        </div>

          <div className="skill-card">
          <img src="prod.jpeg" alt="production" className="skill-image" />
          <h3>Head of Production</h3>
        <p>Leadership and Project Management</p>
        </div>
  
    <div className="skill-card">
          <img src="gimbal.jpeg" alt="gimbal" className="skill-image" />
          <h3>Proffesional in Gimbal</h3>
        <p>Video Stabilization and Visual Direction</p>
        </div>
         
          </div>
      </section>

      <section id="achievements">
  <h2 class="section-title">Achievements</h2>

  <div class="achievement-container">
    <div class="achievement-card">
      <h3>🏅 SIMOC Math Olympiad</h3>
      <p>Achieved 2 Gold Medal and 1 Bronze Medal in the Singapore International Math Olympiad Challenge 2025.</p>
    </div>

    <div class="achievement-card">
      <h3>🏅 ASTRAMATIKA (Asah Terampil Matematika)</h3>
      <p>Team Based Competition, #2 Place in Kalimantan</p>
    </div>

    <div class="achievement-card">
      <h3>🏅 IMOCSEA (International Mathematics Olympiad Competition Of Southeast Asia)				</h3>
      <p>Gold Award in National Round.</p>
    </div>

    <div class="achievement-card">
      <h3>🏅 KSR (Kompetisi Sains Ruang Guru)</h3>
      <p>Finalist of Kompetisi Sain Ruang Guru.</p>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section className="info-card" id="contact">
        <h2>Contact</h2>
        <p className="social1">
          <strong className="email-hihi"> <img src="hihi.jpg" alt="EMAIL" className="email-icon"/> Email:</strong> axel.halim@student.citrakasih.sch.id
        </p>
        <p className="social">
          <strong className="instagram"> <img src="ig.jpg" alt="instagram" className="instagram-icon" /> Instagram:</strong> @axelkevinsius
        </p>
      </section>

      <footer className="footer">
        2025 | Student Profile Design by Me 💻
      </footer>

      {/* CSS: CLEAN, PROFESSIONAL, FULL SCREEN */}
      <style jsx>{`

              #achievements {
          padding: 80px 20px;
          background: rgba(15, 23, 42, 0.9); /* biru gelap transparan */
          color: #f1f5f9;
          position: relative;
          z-index: 1;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 40px;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
        }

        .achievement-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
        }

        .achievement-card h3 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: #38bdf8;
        }

      .achievement-card p {
      color: #cbd5e1;
      line-height: 1.5;
      }

      .social1{
      display: flex;
      align-items: center;
      }

      .email-hihi{
      display: flex;
      align-items: center;
      gap: 8px;
      }

      .email-icon{
      width: 30px;
      height auto;
      padding-bottom: 0px; 
      }

      .instagram{
      display: flex;
      align-items: center;
      gap: 8px;
      }

      .social{
      display: flex;
      align-items: center;
      }

      .instagram-icon{
      width: 30px;
      height auto;
      padding-bottom: 0px; 
      }

      .skills-item-math img{
      width: 200px;
      height: auto;
      border-radius: 10px;
      }

        .skills-item-gimbal img{
      width: 200px;
      height: auto;
      border-radius: 10px;
      }

      .skills-item-prodction img{
      width: 300px;
      height: auto;
      border-radius: 10px;
      }

      .beaver{
      background-color: #2ecc71;
      color: white;
      padding: 3px 8px;
        border-radius: 6px;
        font-weight: 600;
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


        *{ box-sizing: border-box;
          scroll-behavior: smooth;
            }

            body,html{
            margin: 0;
            font-family: "Poppins", sans-serif;
            background: linear-gradient(180deg, #f5f6ff 0%, #ffffff 100%);
            }


            .navbar {
            position: sticky;
            top: 0;
            z-index: 10;
            background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 30px;
            color: white;
            border-radius: 0 0 12px 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 100;
            animation: slideDown 0.6s ease;
            }

            .nav-logo {
            font-size: 20px;
            font-weight: 600;
            }

            .nav-links {
            list-style: none;
            display: flex;
            gap: 22px;
            margin: 0;
            padding: 0;
            }

            .nav-links a{
            position: relative;
            text-decoration: none;
            color: white;
            font-weight: 500;
            transition: color 0.3 ease;
            }

            .nav-links a::after{
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            botoom: -4px;
            left:0;
            background-color: #38bdf8;
            transition: width 0.3 ease;
            }

            .nav-links a:hover {
            color: #a5f3fc;
            }
             .nav-links a:hover::after {
            width: 100%;
            }

        /* FULL PAGE CONTAINER */
        .profile-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          animation: fadeIn 1s ease;
        }

        

        /* HEADER */
        .profile-header {
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 20px;
          border-radius: 50px;
          margin-top: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease;
        }

        .profile-photo {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 5px solid white;
          object-fit: cover;
          margin-bottom: 15px;
          transition: transform 0.4 ease, box-shadow 0.4 ease;
        }

        .profile-photo:hover{
        transform: scale (1.07);
        box-shadow: 0 0 15px rgba (255,255,255,0.6);
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
          background-color: #ffffff;
          padding: 22px;
          border-radius: 14px;
          border-left: 4px solid #667eea;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          animation: fadeUp 0.8s ease;
        }

        .info-card:hover{
        transform: translateY(-4px);
        box-shadow: 0 4px 15px rgba(102,126,234,0.2);
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
        .skills-grid{
        display: grid;
        grid-template-coloumns: repeat (auto-fit, minmax(200px, 1fr));
        gap: 25px;
        margin-top: 20px;
        
        }

        .skill-card{
        background: #ffffff;
        border-radius: 14px;
        padding: 15px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.05)
        transition: a;; 0.3s ease;
        text-align: center;
        border: 2px solid #e06eff;
        }

        .skill-card:hover{
        transform: translateY(-8px) scale(1.03);
        box-shadow: 0 6px 18px rgba (102,126,234,0.3);
        border-color: #667eea;
        }

        .skill-image{
        width: 100%;
        height: 450px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover .skill-image {
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4);
  filter: brightness(1.1) saturate(1.2);
  border: 2px solid #667eea;
}


        .skill-card h3{
        color: #333;
        font-size: 1.1rem;
        margin-bottom: 5px;

        }

        .skill-card p{
        font-size: 0.9rem;
        color: #555;
        }


      


        .footer{
        text-align: center;
        padding: 20px;
        color: #555;
        font-size: 13px;
        background: #f8f9fc;
        border-top: 1px solid #e3e8ff;
        border-radius: 12px;
        margin-top: 20px;
        }
        
        


        @keyframes fadeIn{
        from {opacity: 0; transform: translateY(10px);}
        to {opacity: 1; transform: translateY(0);}
        }

        @keyframes fadeUp{
        from {opacity: 0; transform: translateY(30px);}
        to {opacity: 1; transform: translateY(0);}
        }
      
        @keyframes slideDown{
        from {opacity: 0; transform: translateY(-20px);}
        to {opacity: 1; transform: translateY(0);}
        }
        .intro-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 2s ease forwards;
  animation-delay: 2.5s;
}

    .intro-text {
      color: #ffffff;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      opacity: 0;
      animation: textFade 2s ease forwards;
      text-shadow: 0 0 15px rgba(56, 189, 248, 0.7);
    }

    @keyframes textFade {
      0% { opacity: 0; transform: scale(0.9); }
      40% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(1.05); }
    }

    @keyframes fadeOut {
      to { opacity: 0; visibility: hidden; }
    }
      
      




        /* RESPONSIVE? TIDAK PERLU – LAPTOP ONLY */
        /* Semua ukuran tetap, tidak berubah di HP */
        
      `}</style>
      
    </div>
    </div>
  );
}

export default Profile;
