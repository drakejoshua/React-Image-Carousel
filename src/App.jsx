// import app dependencies
import React from 'react';
import './App.css';

// import the image modules from root folder
import  SampleImage1 from "./sample1.jpg";
import  SampleImage2 from "./sample2.jpg";
import  SampleImage3 from "./sample3.jpg";
import  SampleImage4 from "./sample4.jpg";

// import fontawesome icons and react polyfil
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



class App extends React.Component {
  constructor( props ) {
    super( props );

    // initialize state
    this.state = {
      activeSlideIndex: 0,
      slideImagesList: [ SampleImage1, SampleImage2, SampleImage3, SampleImage4 ]
    }

    // bind "this" to event handlers to avoid namespace conflicts
    this.displayNextSlide = this.displayNextSlide.bind( this );
    this.displayPreviousSlide = this.displayPreviousSlide.bind( this );
  }

  // displayNextSlide()
  // used to move to the next slide in the carousel if any
  displayNextSlide() {
  
    this.setState( function( state ) {

      if ( state.activeSlideIndex >= ( state.slideImagesList.length - 1 )  ) {

        return {
          activeSlideIndex: ( state.slideImagesList.length - 1 )
        }
      } else {

          return {
            activeSlideIndex: ( state.activeSlideIndex + 1 )
          }
      }

    })

  }

  // switchToSlideUsingIndex()
  // used to move to a specific slide in the carousel based on the given index
  switchToSlideUsingIndex( index ) {
    this.setState(
      {
        activeSlideIndex: index
      }
    )
  }
  
  // displayPreviousSlide()
  // used to move to the previous slide in the carousel if any
  displayPreviousSlide() {

    this.setState( ( state ) => {

      if ( state.activeSlideIndex <= 0 ) {

        return {
          activeSlideIndex: 0
        }
      } else {

          return {
            activeSlideIndex: ( state.activeSlideIndex - 1 )
          }
      }

    })
  }

  render() {
    // get the image object for the activeSlide from the component state
    let activeSlide = this.state.slideImagesList[ this.state.activeSlideIndex ];

    return (
      <>
        {/* the page title */}
        <h1>react image carousel</h1>

        {/* the carousel pane */}
        <div id="carousel-pane">

          {/* the previous button using fontawesome icon*/}
          {/* add a click handler to navigate to the previous slide if any */}
          <button id="prev-btn" onClick={ this.displayPreviousSlide }>
            <FontAwesomeIcon icon={ faArrowLeft }></FontAwesomeIcon>
          </button>

          {/* the image for the slides */}
          {/* update the image-src using the "activeSlide" variable */}
          <img src={ activeSlide } alt="image carousel" />

          {/* the next button using fontawesome icon*/}
          {/* add a click handler to navigate to the previous slide if any */}
          <button id="next-btn" onClick={ this.displayNextSlide }>
            <FontAwesomeIcon icon={ faArrowRight }></FontAwesomeIcon>
          </button>
        </div>

        {/* the carousel navigation pane with the dots */}
        <div id="carousel-nav-pane">
          {/* map across the slideImagesList and create the dot navigation with an onClick handler that uses "switchToSlideUsingIndex" to move to 
              to a specific slide using index from the array */}
          { 
            this.state.slideImagesList.map( ( value, index ) => 
              <span className={`nav-dot ${ ( this.state.activeSlideIndex == index ) ? "active" : "" }`} 
                    key={ index } 
                    onClick={ () => this.switchToSlideUsingIndex( index ) }></span>
            )
          }
        </div>
      </>
    );
  }
}

export default App;
