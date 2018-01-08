import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
export default () => (
  <Footer className="footer">
    <p> &copy; 2018 Nate Hawley III </p>
    <ul>
      <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Nhawley"> Github </a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nathan-hawley-iii-023873112/"> Linkedin </a></li>
      <li><a href="mailto:info@natehawley3.com"> Email </a></li>
    </ul>
  </Footer>
);