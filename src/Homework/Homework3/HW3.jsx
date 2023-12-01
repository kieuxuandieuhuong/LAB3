import React from 'react';
import './style.css';
import avatarImage from './Image/gentleman (17).png';

const Profile = () => {
  return (
    <>
      <header>
        <div className="img-container">
          <img src={avatarImage} alt="" className="img avatar" />
        </div>
        <div className="title-container">
          <h1>Kiều Xuân Diệu Hương</h1>
          <h2>UI/UX Designer</h2>
        </div>
      </header>

      <div className="container">
        <div className="sider">
          <div className="sider-content">
            <h1 className="tag-fill">Contact</h1>
            <div className="tag-content">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/h%C6%B0%C6%A1ng-ki%E1%BB%81u-xu%C3%A2n-di%E1%BB%87u-3488b1270/">
                    <img src="./image/linkedin.png" alt="LinkedIn Icon" className="linkedin-icon" />
                  </a>
                  <a href="https://github.com/kieuxuandieuhuong">
                    <img src="./Image/github.jpg" alt="github Icon" className="github-icon" />
                  </a>
                  <a href="https://www.notion.so/dhbee/Hi-I-m-Ki-u-Xu-n-Di-u-H-ng-76a5fcee7c9746818b2932ce785b35f7?pvs=4">
                    <img src="./Image/Notion_App_Logo.png" alt="Notion Icon" className="Notion-icon" />
                  </a>
                </li>
                <li><img src="./Image/calendar.png" alt="Calendar Icon" /> 24/03/2002</li>
                <li><img src="./Image/telephone.png" alt="Phone Icon" /> +84 393947629</li>
                <li><img src="./Image/icons8-gmail-144.png" alt="Email Icon" /> 20521381@gm.uit.edu.vn</li>
                <li><img src="./Image/location-pin.png" alt="Address Icon" /> Thủ Đức, HCM city</li>
              </ul>
            </div>
          </div>
          <div className="sider-content">
            <h1 className="tag-fill">Skill</h1>
            <div className="tag-content progress-container">
              <p className="progress-title">English</p>
              <div className="progress-wrap">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="tag-content progress-container">
              <p className="progress-title">Front-end</p>
              <div className="progress-wrap">
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="tag-content progress-container">
              <p className="progress-title">UX Research</p>
              <div className="progress-wrap">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="tag-content progress-container">
              <p className="progress-title">UI Design</p>
              <div className="progress-wrap">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          <div className="sider-content">
            <h1 className="tag-fill">Certificate</h1>
            <div className="tag-content">
              <ul className="text-content">
                <li>- TOEIC 700+</li>
                <li>- Google UX Design Specialization of Cousera</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <h1 className="tag">CAREER GOALS</h1>
            <p className="text-content">I am a UI/UX design intern with experience in website projects. My work focuses on analyzing functions and simulating them using tools like Figma...</p>
          </div>
          <div className="description-content">
            <h1 className="tag">EDUCATION LEVEL</h1>
            <ul>
              <li>
                <div className="tabbar-title">
                  <p className="text-date">10/2020 - now</p>
                </div>
                <h3>Fourth-year student in Advance Program at Information Systems</h3>
                <p className="text-content">
                  Institution: University of Information and Technology - Vietnam National University Ho Chi Minh City.
                </p>
                <ul>
                  <li>GPA: 3.5/10</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description-content">
            <h1 className="tag">WORK EXPERIENCE</h1>
            <ul>
              <li>
                <h3>A BIG BITE APP Project</h3>
                <p className="text-content">
                  UI/UX Designer
                </p>
                <ul>
                  <li>Do the UX research to find the users' pain point and create user journey map for the user.</li>
                  <li>Create digital wireframes, low-fidelity prototype, and analyze usability studies.</li>
                  <li>Use Figma to design a fast food app and responsive website and create a high-fidelity prototype for the app.</li>
                  <li>Use Canva to design the poster and redesign the logo of A BIG BIE.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description-content">
            <ul>
              <li>
                <h3>WEBSITE FOR CLOTH SHOP</h3>
                <p className="text-content">
                  UI DESIGNER
                </p>
                <ul>
                  <li>Conduct a survey and analyze customer requirements.</li>
                  <li>Use the modified DFD diagram to create wireframes.</li>
                  <li>Design an icon that aligns with the store's brand.</li>
                  <li>Design the UI for a clothing website and responsive website.</li>
                  <li>Achieve a score of 9.5 for the project.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="description-content">
            <ul>
              <li>
                <h3>WEBSITE FOR HOTEL</h3>
                <p className="text-content">
                  UI DESIGNER
                </p>
                <ul>
                  <li>Analyze the primary functionalities of a hotel website to create a use case diagram, user flow diagram.</li>
                  <li>Draw Wireframe and use Figma to design components and prototypes for simulating the hotel website.</li>
                  <li>Achieve a score of 9.0 for the project.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
