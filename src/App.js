import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const app = new Clarifai.App({
  apiKey: '3f309dd9f74144cba75d737790a70adb'
 });

const particlesOption = {
  particles: {
    number: {
      value: 100
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "repulse"
        }
    }
}
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:'',
      box:{},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState(
      {input: event.target.value}
    )
  }

  onSubmit = () => {
    this.setState(
      {imageUrl: this.state.input}
    )
   app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  } 

  calculateFaceLocation = (data) => {
    // returns cordinates of where the box needs to be displayed
   const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
   console.log('data: ');
   console.log(data);

   const image = document.getElementById('inputImage');
   const width = Number(image.width);
   const height = Number(image.height);
   return {
     leftCol: clarifaiFace.left_col*width,
     topRow: clarifaiFace.top_row*height,
     bottomRow: height - (clarifaiFace.bottom_row*height),
     rightCol: width-(clarifaiFace.right_col*width)

   }
  }

  displayFaceBox = (box) => {
    // sets the box state
    console.log(box)
    this.setState({box:box})
  }

  routeChange = (route) => {
    if(route==='home') {
      this.setState({isSignedIn:true})
    } else {
      this.setState({isSignedIn:false})
    }
    this.setState({route:route})
  }

  render() {
   const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div className="App">
          <Particles className='particles'
            params={particlesOption}/>
          <Navigation onRouteChange={this.routeChange} isSignedIn={isSignedIn}/>
          { route === 'home' 
            ? <div>
                <Logo></Logo>
                <Rank></Rank>
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}></ImageLinkForm>
                <FaceRecognition url={imageUrl} box={box}></FaceRecognition>
              </div>
            :  (
              route === 'signin'
              ? <SignIn onRouteChange={this.routeChange}/>
              : <Register onRouteChange={this.routeChange}></Register>
            )
          }
      </div>
    );
  }
}

export default App;
