import React from 'react';
import Calculator from './Calculator';

const Projects = () => (
  <main id="main">
    <section>
                <h2>Projects</h2>
                <h3>
                    <a href="https://shabi.website/" target="_blank">Sound playback web page</a>
                </h3>            
                <p>A personal practice project using React for web navigation, inline video playback, motion effects and sound playback.</p>
                <h3>
                    <a href="https://drive.google.com/file/d/111jKE4NsE0Fx1pMAmfPI7q12_-m6uSPF/view" target="_blank">Food Ingredient Recommendation Site</a>
                </h3>  
                <p>A collaborative group project, the page allows the user to enter a nutritional content and suggests recipes for dishes that contain this nutritional content. Multiple api calls were made, and I was responsible for the front-end.</p>
            </section>
    <section>
      <Calculator />
    </section>
  </main>
);

export default Projects;
