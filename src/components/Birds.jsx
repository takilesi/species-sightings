import React, { useState, useEffect } from 'react'
import "./Birds.css"
import FreqDisplay from './FreqDisplay'

function Birds() {
    const [birdData, setBirdData] = useState([3,3,4,1,2,1,1,1,4,4,4])
    const [visualizeBirdData, setVisualizeBirdData] = useState([])
    const [viewBirdArray, setViewBirdArray] = useState([])
    console.log("current birdData: ", birdData)
    console.log("visualizeBirdData: ", visualizeBirdData)
    // executes on 
    useEffect(() => {
        // do this to display data as comma separated on mount 
        setVisualizeBirdData(birdData.toString())
        console.log("loaded");
    },[birdData]);

    const handleAdd = () => {
       
        let stringArr = birdData
        // use map function, 
        // iterate over string array, 
        // and typecast into int using Number 
        // (and push to new array)
        let numberArr = stringArr.map(Number)
        let birdArr = []
        let bird = {}

        // eliminate duplicates and sort 
        let shortArr = numberArr.filter((item,index) => numberArr.indexOf(item) === index)
        shortArr.sort()
        
        // shows sorted unique species 
        console.log("\nshortArr: ", shortArr)
        
        for (let i=0; i<shortArr.length; i++) {
    
            let count = 0
            
            for (let j=0; j<numberArr.length; j++){
                
                if (shortArr[i] === numberArr[j]) {
                    count ++
                }
            }
            bird = {species : shortArr[i], 
                    count : count,
                    id : i
                   } 
            console.log("bird.species: ", bird.species, "bird.count: ", bird.count)
            birdArr.push(bird)           
        }
        
        birdArr.sort(
            (c1, c2) => (c1.count < c2.count) ? 1 : (c1.count > c2.count) ? -1 : 0);
        console.log("\nbirdArr: ", birdArr)
        
        setViewBirdArray(birdArr)
        
    }

  return (
    <div className="birdsBody">
        <h3 className="currentData">Current Data:</h3>
        <h3 className="data"> {visualizeBirdData}</h3>
        <input type="text" placeholder="paste or type your data" onChange={(e) => setBirdData(e.target.value.split(","))} />
        <button type="button" onClick={handleAdd}>Click to view frequency </button>
        <FreqDisplay viewBirdArray={viewBirdArray} />
    </div>
  )
}

export default Birds