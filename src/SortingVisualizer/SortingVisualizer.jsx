import React, { useState } from "react";
import "./SortingVisualizer.css";
import Select from "./Select";


export const MIN_ANIMATION_SPEED = 100
export const MAX_ANIMATION_SPEED = 400

const algoOptions = [
    { label: "Bubble Sort", value: "bubble" },
    { label: "Selection Sort", value: "selection" },
    { label: "Insertion Sort", value: "insertion" },
    { label: "Merge Sort", value: "merge" },
    { label: "Quick Sort", value: "quick" },  
]

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() { //  method is called after the component loads 
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array }); // resets the state to the new array
    }

    render () {
        const { array } = this.state; // destructuring the array from the state

        return ( 
            <main className="absolute top-0 h-screen w-screen bg-[#000000] bg-[size:40px_40px]">
                <div className="flex h-full justify-center">
                    <div 
                        id="content-container"
                        className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
                    >
                        <div className="text-gray-300 h-[66px] relative flex items-center justify-between">
                            <h1 className=" text-2xl font-light hidden md:flex">
                                Sorting Algorithm Visualizer
                            </h1>
                            <div className="flex items-center justify-center gap-4">
                                <button onClick={() => 
                                    this.resetArray()
                                    }>Generate New Array</button>
                                <Select options={algoOptions} defaultValue={algoOptions[0]}
                                ></Select>

                            </div>
                        </div>
                        <div className="relative h-[calc(100vh-66px)] w-full">
                            <div className="absolute bottom-0 w-full mx-auto left-0 right-0 flex justify-center items-end">
                                {array.map((value, idx) => (
                                    <div 
                                        className='array-bar relative w-1 mx-0.5 opacity-70 shadow-lg rounded-lg bg-[#3182ce]' 
                                        key={idx}
                                        style={{height: `${value}px`}}>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>                    
                </div>    
            </main> 
        );
    }

}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}