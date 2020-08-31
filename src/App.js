
import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
// import About from './components/about';
// import Services from './components/services';
import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import About_us from './components/About_us';
import About_SVVV from './components/About_SVVV';
import Wwer from './components/Wwer';
import Events from './components/events';
export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About_SVVV data={this.state.landingPageData.Features} />
        <Wwer data={this.state.landingPageData.Features} />
        <Features data={this.state.landingPageData.Features} />
        {/* <About data={this.state.landingPageData.About} /> */}
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Gallery data={this.state.landingPageData.Features} />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
      
        <About_us data={this.state.landingPageData.Features} />
        
        <Team data={this.state.landingPageData.Team} /> 
        <Events data={this.state.landingPageData.Features} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
