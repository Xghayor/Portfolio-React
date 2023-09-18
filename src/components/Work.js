import React from 'react';
import sampleImage from './assets/Alter-Ego.png'
import sampleTwo from './assets/lorient_capital.png'
import sampleThree from './assets/Value-Center-Market.png'

const Work = () => {
  return (
    <section className="work" id='work-section'>
      <div className="with_perfection site_container">
        <h2>
          crafted with perfection
          <pre>/&gt;</pre>
        </h2>
        <p>These are selections of my recent works</p>
      </div>
      <div className="work_sample_outter_wrap">
        <div className="work_sample_inner_Wrap">
          <div className="work_sample_block_outterwrap">
            <div className="work_sample_block site_container">
              <div className="work_sample_title">
                <h3><span>01</span>Country Metrics</h3>
                <p>All Country Stats Webapp</p>
              </div>
              <div className="work_sample_site">
                <div className="work_sample_image">
                  <img src={sampleImage} alt="" />
                </div>
                <div className="work_sample_site_btn">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="work_sample_site_btn over">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="work_sample_block_outterwrap">
            <div className="work_sample_block site_container">
              <div className="work_sample_title">
                <h3><span>02</span>Portfolio Sample</h3>
                <p>Portfolio website</p>
              </div>
              <div className="work_sample_site">
                <div className="work_sample_image">
                  <img src={sampleTwo} alt="" />
                </div>
                <div className="work_sample_site_btn">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="work_sample_site_btn over">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="work_sample_block_outterwrap">
            <div className="work_sample_block site_container">
              <div className="work_sample_title">
                <h3><span>02</span>Music Festival Event</h3>
                <p>Music Festival Website</p>
              </div>
              <div className="work_sample_site">
                <div className="work_sample_image">
                  <img src={sampleThree} alt="" />
                </div>
                <div className="work_sample_site_btn">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="work_sample_site_btn over">
                  <a href="#"
                    >view project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Work;
