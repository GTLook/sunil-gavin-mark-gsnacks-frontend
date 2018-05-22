import React from 'react';

//import components
import Navbar from './Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

//import CSS
import '../css/App.css';
import {Col, Row, Modal, Button} from 'react-materialize'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App;