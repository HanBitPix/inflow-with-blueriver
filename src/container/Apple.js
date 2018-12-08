import React, { Component } from 'react';
import Axios from 'axios';
import Locations from '../components/Locations';
import {BrowserRouter, Route, Link } from 'react-router-dom';

class Apple extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount(){
    Axios.get('https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode[0]=sqo&or&locationCode[2]=nwr&or&locationCode[4]=scv&or&locationCode[6]=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600')
    .then(res => {
      this.setState({ data: res.data.data.items});
    });
  }
  render() {
    let items = this.state.data;
    
    let applePark = [];
    let bubbResultsWay = [];
    let infiniteLoop = [];
    let sunnyValeEast = [];
    let sunnyValeWest = [];
    let otherBayArea = [];

    // "Apple Park"
    applePark = items.filter(locations => 'Apple Park' == locations.buildingzone);

    // "Bubb / Results Way"
    bubbResultsWay = items.filter(locations => 'Bubb / Results Way' == locations.buildingzone);

    // "Infinite Loop"
    infiniteLoop = items.filter(locations => 'Infinite Loop' == locations.buildingzone);

    // "Sunnyvale East"
    sunnyValeEast = items.filter(locations => 'Sunnyvale East' == locations.buildingzone);

     // "Sunnyvale West"
     sunnyValeWest = items.filter(locations => 'Sunnyvale West' == locations.buildingzone);

      // "Other Bay Area"
      otherBayArea = items.filter(locations => 'Other Bay Area' == locations.buildingzone);
    

    return (
      <BrowserRouter>
        <div className="mt-5">
        <div class="dropdown mb-5">
  <button class="btn btn-primary btn-block btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Apple Building Locaition
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to="/apple-park">Apple Park</Link>

   <Link class="dropdown-item" to="/bubb-results-way">Bubb / Results Way</Link>

    <Link class="dropdown-item" to="/infinite-loop">Infinite Loop</Link>

     <Link class="dropdown-item" to="/sunnyvale-east">Sunnyvale East</Link>

      <Link class="dropdown-item" to="/sunnyvale-west">Sunnyvale West</Link>
      
      <Link class="dropdown-item" to="/other-bay-area">Other Bay Area</Link>


  </div>
</div>

      <Route path="/apple-Park" component={ () => <Locations title='ApplePark' location={applePark}/>} />
      
      <Route path="/bubb-results-way" component={ () => <Locations title='Bubb / Results Way' location={bubbResultsWay}/>} />

      <Route path="/infinite-loop" component={ () => <Locations title='Infinite Loop' location={infiniteLoop}/>} />

       <Route path="/sunnyvale-east" component={ () => <Locations title='Sunnyvale East' location={sunnyValeEast}/>} />

        <Route path="/sunnyvale-west" component={ () => <Locations title='Sunnyvale West' location={sunnyValeWest}/>} />

       <Route path="/other-bay-area" component={ () => <Locations title='Other Bay Area' location={otherBayArea}/>} />
  
      </div>
     </BrowserRouter>
    );
  }
}

export default Apple;

