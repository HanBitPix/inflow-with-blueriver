import React from 'react';

const Locations = (props) => {
  
 let location = props.location;
  let displayLocation = location.map(location => 
    <div className="col-4">
    <div key={location.id} className="card mb-5 bg-light">
    <div class="card-header">{location.buildingname}</div>
    <ul class="list-group list-group-flush">
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="row">Building ID:</th>
          <td>{location.buildingid}</td>
        </tr>
        <tr>
          <th scope="row">Building Abbr:</th>
          <td>{location.buildingabbr}</td>
        </tr>
        <tr>
          <th scope="row">Lat</th>
          <td>{location.lat}</td>
        </tr>
        <tr>
          <th scope="row">Lng:</th>
          <td>{location.lng}</td>
        </tr>
      </tbody>
</table>
      </ul>
    </div>
    </div>
  );
    
  return(
    <div>
      <div>
        <h1 className="round-corner display-1 mb-4 text-light bg-info p-4">{props.title} </h1>
        <h4 className="mb-5 bg-white">Found: {location.length} buildings</h4>
      </div>
      <div className="row">
      {displayLocation}
      </div>
    </div>
  )
}

export default Locations;