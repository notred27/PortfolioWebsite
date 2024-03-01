import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import reportWebVitals from './reportWebVitals.js';
import Desktop from './Desktop.js';
import Mobile from './Mobile.js';


class Device extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  
    render() {
      const root = ReactDOM.createRoot(document.getElementById('root'));
  
      const { width } = this.state;
      const isMobile = width <= 600;
        // if (isMobile) {}
      if(isMobile) {
        return <Mobile/>
      }
      else {
        return <Desktop/>

      }
    }
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

  <Device/>


  




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
