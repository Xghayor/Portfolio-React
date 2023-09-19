import React from 'react';
import bannerImage from './assets/banner_image.png';

const Banner = () => {
  return (
    <section className="banner site_container">
      <div className="banner_sec_outterwrap">
        <div className="banner_content_block">
          <h1>Ghayoor Ul Baqir</h1>
          <h3>Full Stack Developer</h3>
          <p>
          Dive into the world of a Full Stack Developer, 
          where I blend front-end finesse and back-end prowess. 
          Crafting robust web solutions with JavaScript, React, Ruby, 
          I deliver captivating user experiences. 
          My portfolio reflects the seamless marriage of design and functionality. Explore my work today.
          </p>
          <div className="banner_btn"><a href="https://www.linkedin.com/in/ghayoorulbaqir/">Let's Talk</a></div>
        </div>
        <div className="banner_image_block">
          <img src={bannerImage} alt="banner-image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
