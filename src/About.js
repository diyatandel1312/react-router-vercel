import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    
  return (
        <div>

            <header>
   
        <div className='login-menu'>
                  
                    <Link className='login-item' to='/about/abouthistory' >About History</Link>
                
                    <Link  className='login-item' to='/about/aboutoverview' >About Overview</Link>
               
                    <Link className='login-item' to='/about/aboutteam' >About Team</Link>
                
                     <Link className='login-item' to='/' >Back to Home page</Link>
            </div>
  </header>

  <main class="about-us">
    <section class="about-content">
      <h1>About Us</h1>
      <p>
        Welcome to our application! We are a team of passionate developers dedicated to creating awesome web applications that make a difference. Our mission is to provide seamless and user-friendly experiences to our users.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere ultrices sapien ut venenatis. Nulla ut malesuada nisl. Sed finibus nulla sed odio iaculis, et tincidunt mi consectetur. Maecenas congue aliquam ligula non eleifend. Quisque rhoncus risus vel elit fermentum dignissim.
      </p>
      <p>
        Integer non mi id elit ullamcorper venenatis. Proin ultricies id lectus nec semper. Sed dictum odio non nunc luctus, non luctus massa rhoncus. Nullam congue euismod felis vel tincidunt. Cras at neque ut odio feugiat pharetra.
      </p>
    </section>
  </main>

  <footer>
    <div>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
        </div>
      );
}

export default About