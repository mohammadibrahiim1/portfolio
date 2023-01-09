import React from 'react';

const About = () => {
    return (
        <div>
            <div className='about-section'>
                <h4 className='about-title'><span className='number'>0.1</span> About Me</h4> 
                <hr className='text-white ' />
                <div className='about-section-container'>
                  <div className='about-section-text w-75'>
                  <p>
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p>
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                    <p>
                    Here are a few technologies I’ve been working with recently:
                        <ul className='technologies'>
                            <li>html</li>
                            <li>html</li>
                            <li>html</li>
                            <li>html</li>
                            <li>html</li>
                            <li>html</li>
                        </ul>
                    </p>
                  </div>
                  <div className='about-img-container'>
                    <img src="https://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png" alt="" />
                  </div>
                </div>
            </div>
        </div>
    );
};

export default About;