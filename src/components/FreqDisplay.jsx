import "./FreqDisplay.css"
// import React from 'react'

function FreqDisplay({viewBirdArray}) {
    
  return (
    <div className="componentBody">
        <h4>Sightings Frequency:</h4>
        <div className="dataContainer">
            {
                viewBirdArray.map(bird =>  
                    // add key to objects in array (id)
                    // key must be referenced in outer div of mapping
                    <div key={bird.id} className="displayData">
                        <h5 className="spec"> Species:&nbsp; </h5>
                        <h5> {bird.species} &nbsp; &nbsp; </h5>
                        <h5 className="spec"> Count:&nbsp; </h5>
                        <h5> {bird.count}</h5>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default FreqDisplay