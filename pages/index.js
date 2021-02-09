import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFrog } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

library.add(fab,faLinkedin,faGithubSquare);
library.add(fas,faEnvelope,faFrog,faPuzzlePiece);

export default function Home({ allPostsData }) {
  return (

    <div>
      <body>
        <header className="header">
          <nav>
            <div className="name">S A R A H | J U N G</div>
            <div className="navtags">
              <h2 class="nav"> <a class = "link-one" href="#About">About</a></h2>
              <h2 class="nav"> <a class = "link-one" href="#Gallery">Projects</a></h2>
              <h2 class="nav"> <a class = "link-one" href="/documents/Resume2020.pdf">Resume</a></h2>
            </div>
          </nav>
        </header>

        <main>
          <div className="mainel" id="About">
            <h1>About</h1>
            <div className="picBio">
              <div className="aboutpic">
                <img src="/images/profile.jpg" width="400" height="400" />
                
                <div className="links">
                  <div className='singleLinks'>
                    <a href='https://www.linkedin.com/in/jungsarah1926/' title='Linkedin Profile' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                  </div>
                  <div className="singleLinks">
                    <a href='https://github.com/Sarahbear1926' title='github profile' target='_blank'>  
                      <FontAwesomeIcon icon={['fab', 'github-square']}/>
                    </a>
                  </div>
                  <div className="singleLinks">
                    <a href='mailto:srjung@ucsd.edu' title='mail' target='_blank'>
                      <FontAwesomeIcon icon={['fas', 'envelope']}/>
                    </a>
                  </div>
                </div>
              </div>
              <div className='bio'>
                <p>Hi! I'm Sarah. Check back soon for my bio!</p>
                
              </div>
              
            </div>
          </div>
          <div class="mainel" id="Gallery">
            <h1>Projects</h1>

              <div class="imgTag3">
                <div class="imgTag">
                  <div className="img">
                  
                    <img src="/images/gary.jpg" width="310" height="340" alt="garyiswin"/>
                    <div className="overlay">
                      <div class="text">A mobile app multiplayer puzzle game based on BabaIsYou. </div>
                      <div class="text">Developed the screen sequence designs, implemented the frontend and contributed to the game logic and board design.</div>
                      <div class="text">Technical Skills: React-Native, Node.js, MongoDB, AWS </div>
                      <div className="text"><a href='https://appstore.com/garyiswin' title='gary' target='_blank'><FontAwesomeIcon icon={['fas', 'puzzle-piece']}/></a></div>
                    </div>
                  </div>
                  <a href="https://appstore.com/garyiswin"><h2>GaryIsWin</h2></a>
                </div>
                    
                <div className="imgTag">
                  <div className="img">
                    <img src="/images/ribbit.jpg" width="310" height="340" alt="ribbit" />
                    <div className="overlay">
                      <div class="text">Full-stack web app that organizes learning by letting students filter practice problems by topic or difficulty.</div>
                      <div class="text">Designed and implemented screen layouts and navigational flow. Integrated AWS Textract API into back-end. </div>
                      <div class="text">Technical Skills: CSS, HTML, Javascript, JQuery, MongoDB, Node.js, AWS </div>
                      <div className="text"><a href='https://devpost.com/software/ribbit-oc6vb2' title='ribbit' target='_blank'><FontAwesomeIcon icon={['fas', 'frog']}/></a></div>
                    </div>
                  </div>
                  <a href="https://devpost.com/software/ribbit-oc6vb2"><h2>ribbit</h2></a>
                </div>
              </div>
              <div className="imgTag3">
                <div class="imgTag">
                  <div className="img">
                    <img src="/images/srj.jpg" width="310" height="340" alt="srj" />
                    <div className="overlay">
                      <div class="text">Personal website</div>
                      <div class="text"></div>
                      <div class="text">Technical Skills: Next.js, React-Native</div>
                    </div>
                  </div>
                  <a href="https://devpost.com/software/ribbit-oc6vb2"><h2>Website</h2></a>
                </div>
                <div class="imgTag">
                  <div className="img">
                    <img src="/images/tbd.jpg" width="310" height="340" alt="tbd" />
                    <div className="overlay">
                      <div class="text">t.b.d.</div>
                    </div>
                  </div>
                  <a href="#"><h2>t.b.d</h2></a>
                </div>
              </div>
              
          </div>

         
          
        </main>
        <footer className="footer">
         
                  <div className='singleLinks'>
                    <a href='https://www.linkedin.com/in/jungsarah1926/' title='Linkedin Profile' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                  </div>
                  <div className="singleLinks">
                    <a href='https://github.com/Sarahbear1926' title='github profile' target='_blank'>  
                      <FontAwesomeIcon icon={['fab', 'github-square']}/>
                    </a>
                  </div>
                  <div className="singleLinks">
                    <a href='mailto:srjung@ucsd.edu' title='mail' target='_blank'>
                      <FontAwesomeIcon icon={['fas', 'envelope']}/>
                    </a>
                  </div>
                
        </footer>
        
      </body>

      </div>
      
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
