import React from 'react';
import { Element } from 'react-scroll';
import { Row, Col } from 'antd';

import '../../styles/about.css';
import pro_pic from '../../images/pro_pic.jpg';

export default class AboutMe extends React.Component {
  render() {
    return (
      <Element name="about">
        <div id="about" className="section">
          <h1 className="title">About Me</h1>
          <Row className="about-content">
            <Col span={7} className="pic-container">
              <img src={pro_pic} alt="bio picture"/>
            </Col>
            <Col span={12} className="bio-container">
              <div>
                <h3>I'm Nate, a freelance web and mobile developer.</h3> 
                <p>
                  I enjoy making content more accessible through digital means.
                  My skills are broad from the back-end to the front-end.
                  I love taking projects from concept to code to created. 
                  Scroll down to see some of my recent work.
                </p>
              </div>
              <p>
                I'm available for remote work.
                If you're interested, <a href="mailto:info@natehawley3.com">let's work! </a>
              </p>
            </Col>
            <Col span={5}>
              <h2>What I Use</h2>
              <h4>Front-End</h4>
              <p>
                HTML5, CSS, SCSS, Javascript, ES6, React, Vue.js, Angular 2, ThreeJS, JQuery, Wordpress
              </p>
              <h4>Back-End</h4>
              <p>
                Node.js, PHP, MySQL, PostgrSQL, MongoDB
              </p>
              <h4>Mobile</h4>
              <p>
                React Native, Swift, Kotlin
              </p>
              <h4>Cloud</h4>
              <p>
                AWS, Google Cloud, WHM, Cpanel, Docker
              </p>
            </Col>
          </Row>
        </div>
      </Element>
    );
  }
}