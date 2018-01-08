import React from 'react';
import * as Scroll from 'react-scroll';
import { Layout } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import ThreeJS from '../components/3d-app';
import About from '../components/about-me';
import Work from '../components/recent-work';
import Contact from '../components/contact';
import '../styles/home.css';

let scroller = Scroll.scroller;
let scroll = Scroll.animateScroll;
const { Content } = Layout;
class Home extends React.Component {
  scrollToSection(url) {
    scroller.scrollTo(url.toString(), {
      duration: 500,
      delay: 100,
      smooth: "easeInOutQuart",
    });
  }

  componentWillReceiveProps({ match: { params: section } }){
    let url = section.section;
    if (url) {
      this.scrollToSection(url);
    }
  }
  componentDidMount(){
    let url = this.props.match.params.section;
    if (url) {
      this.scrollToSection(url);
    } else {
      scroll.scrollToTop({duraction: 300});
    }
  }

  render() {
    return (
      <Layout className="home-layout">
        <Header />

        <Content>
          <ThreeJS/>
          <About />
          <Work />
          <Contact />
        </Content>

        <Footer />
      </Layout>
    );
  }
}

export default Home
