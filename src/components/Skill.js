import React from 'react';
import skillsStrip1 from './assets/skills_strip1.png'
import reactBubble from './assets/react_bubble.png'
import jsBubble from './assets/js_bubble.png'
import htmlBubble from './assets/html_bubble.png'
import cssBubble from './assets/css_bubble.png'
import bootstrapBubble from './assets/bootstrap_bubble.png'
import xdBubble from './assets/XD_bubble.png'
import figmaBubble from './assets/figma_bubble.png'

const Skills = () => {
  return (
    <section className="skills">
      <div className="skill_strip">
        <img src={skillsStrip1} alt="" />
      </div>
      <div className="skills_sec_outterwrap">
        <div className="skills_Sec_inner_wrap site_container">
          <div className="skills_heading_block">
            <h2>
              Skills
              <pre>/></pre>
            </h2>
            <p>Programming Languages/ Management</p>
          </div>
          <div className="buuble_block" id="bubble_1">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={reactBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_2">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={jsBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_3">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={htmlBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_4">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={cssBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_5">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={bootstrapBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_6">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={xdBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buuble_block" id="bubble_8">
            <div className="skill_bubbble_wrap">
              <div className="skil_bubble">
                <img src={figmaBubble} alt="" />
              </div>
              <div className="skill_buble_desc">
                <div className="desc_block">
                  <h3>Level</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-75"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="desc_block">
                  <h3>Years of Experience</h3>
                  <div className="progress">
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
