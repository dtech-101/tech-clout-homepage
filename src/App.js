import logo from './logo.svg';
import './App.css';
import { BsLinkedin,BsTwitter,BsInstagram,BsFacebook,BsYoutube} from 'react-icons/bs';
import {BiSolidContact} from 'react-icons/bi';
import {RiMailOpenLine} from 'react-icons/ri';
import {FaPeopleArrows} from 'react-icons/fa';
function App() {
  return (
    <div className="App">
        <header>
        <div className='nav'>
        <a href="#"><img src="https://techclout.africa/wp-content/uploads/2023/03/cropped-Group-95.png" width="70px"/></a>
          <ul className='headerlink'>
            <a href="#"><li>HOME</li></a>
            <a href="#"><li>ABOUT</li></a>
            <a href="#"><li>SERVICES</li></a>
            <a href="#"><li>TEAM</li></a>
          </ul>
          <span className='headerNavBtn'>
            <button>contact us</button>
            <button>Blog</button>
            </span>
          </div>
          <div className='headerbody'>
            <h1>Connecting Africa to <br/> the world of <br/>Innovation</h1>
            <p>Techclout Africa is a Leading global tech media brand,<br/> delivering unparalled insights and perspectives to a<br/> worldwide audience.</p>
            <p>We Connect</p>
            <button>Learn More</button>
            <ul className='headerIcons'>
            <a href='#'><BsLinkedin/></a>
            <a href="#"><BsTwitter/></a>
            <a href="#"><BsInstagram/></a>
            <a href="#"><BsFacebook/></a>
            <a href="#"><BsYoutube/></a>
            </ul>
          </div>
          <div className='headerfoot'>
          </div>
        </header>
        <body>
          <div className='whoWeAre'>
            <span className='subWhoWeAre'>
              <h2>Who We Are</h2>
              <p>The objective of Techclout Africa is to connect Africa to the<br/> world of innovation. As a start-up tech industry in Africa, we<br/> aim to carry out this objective through creation, connection,<br/> and innovation. As a Tech Media Brand, we will cover tech<br/>events, organize tech live shows with industry experts as<br/> guests, and leverage both the audio, visual,<br/>and audio-visual means of communication to enlighten and re-orientate many<br/> who have the wrong and insufficient information about Tech.</p>
            </span>
            <img src="https://techclout.africa/wp-content/uploads/2023/03/image-41.png"width={500}/>
          </div>
          <div className='aboutus'>
          <span className='subAboutUs'>
            <h2>About Us |</h2>
            <p>We look out across the horizon to anticipate<br/>needs and delivers advanced solutions.</p>
          </span>
          <span className='vision'>
          <span className='subVision'>
            <h2>Vision</h2>
            <p>Our goal is to become a leading global tech media brand,<br/>delivering unparalleled insights and perspectives to a<br/> worldwide audience.</p>
          </span>
            <img src="https://techclout.africa/wp-content/uploads/2023/03/Frame-24.png"width={650}/>
          </span>
          <span className='mission'>
          <span className='subMission'>
            <h2>Mission</h2>
            <p>We are unraveling the mysteries surrounding tech<br/>through the media space to improve tech adoption by<br/>creating awareness and opportunities in TECH. Our<br/> unwavering commitment is aimed at delivering high-<br/>quality content, coupled with our passion for technology,<br/>will drive us forward as we strive to be the go-to source<br/>for tech news and analysis.</p>
          </span>
            <img src="https://techclout.africa/wp-content/uploads/2023/04/Frame-75.png"width={650}/>
          </span>
          <div className='achivement'>
          <span className='subAchivement'>
            <h2>Our Achievements</h2>
            <p>Our tech website has reached over one million<br/>monthly visitors, a testament to our commitment<br/>to delivering high-quality content and valuable<br/>resources. Our expert team has worked tirelessly<br/>to establish us as a trusted source of information<br/>on tech trends, products, and innovations. We’re <br/>grateful for our readers’ support and remain<br/>dedicated to providing them with the latest<br/>developments in the industry. Thanks to our talented<br/>team, we’ll continue to achieve even greater<br/>milestones in the future.</p>
          </span>
            <img src="https://techclout.africa/wp-content/uploads/2023/03/Frame-76.png"width={400}/>
          </div>
          <div className='figures'>
              <span className='subfigureOne'>
              <p><BiSolidContact/></p>
              <span className='subSubfigrueOne'>
                <p>22K+</p>
                <p>Active Followers</p>
              </span>
              </span>
              <span className='subfigureTwo'>
                <p><RiMailOpenLine/></p>
                <span className='subSubfigureTwo'>
                  <p>10K+</p>
                  <p>Subscribers</p>
                </span>
              </span>
              <span className='subfigureThree'>
                <p><FaPeopleArrows/></p>
                <span className='subSubfigureThree'>
                  <p>50K+</p>
                  <p>Partners</p>
                </span>
              </span>
          </div>
          </div>
          <span className='whyTechClout'>
            <h2>Why Techclout<br/>Africa?</h2>
            <img src="https://techclout.africa/wp-content/uploads/2023/04/Group-5.png"width={800}/>
          </span>
          <div className='partners'>
            <p>OUR PARTNERS</p>
            <span className="subPartner">
              <img src="https://techclout.africa/wp-content/uploads/2023/04/NAT-FOUNDATION-LOGO_050053-1-300x300.png"/>
              <img src="https://techclout.africa/wp-content/uploads/2023/04/Untitled-design-2-300x300.png"/>
              <img src="https://techclout.africa/wp-content/uploads/2023/04/Add-a-heading-1-300x300.png"/>
            </span>
          </div>
          <div className='stayingUpdated'>
            <img src="https://techclout.africa/wp-content/uploads/2023/03/Group-105.png"width={300}/>
            <p>Stay up-to-date with our newsletter, job openings and upcoming tech events</p>
            <form>
            <input type="email"placeholder='Email Address'/>
            <button>Subscribe</button>
            </form>
          </div>
        </body>
        
    </div>
  );
}

export default App;
