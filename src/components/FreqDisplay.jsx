import React, {useState} from 'react'
import "./FreqDisplay.css"

function FreqDisplay({viewBirdArray}) {

    console.log("here is bird array", viewBirdArray)

  return (
    <div className="componentBody">
        <h4>Sightings Frequency:</h4>
        <div className="dataCont">
            {
                viewBirdArray.map((bird,key) => 
                    <>
                        <div className="displayData">
                            <h5 className="spec"> Species:&nbsp; </h5>
                            <h5>{bird.species} &nbsp; &nbsp;</h5>
                            <h5 className="spec"> Count:&nbsp; </h5>
                            <h5>{bird.count}</h5>
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default FreqDisplay