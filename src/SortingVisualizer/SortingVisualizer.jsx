import "./SortingVisualizer.css";
import React from "react";
import Select from "./Select";
import { FaPlayCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { Slider } from "./Slider";
import { AnimationArrayType } from "../lib/propTypes";
import { generateBubbleSortAnimationArray } from "../algos/bubbleSort";


export const MIN_ANIMATION_SPEED = 10
export const MAX_ANIMATION_SPEED = 400

const algoOptions = [
    { label: "Bubble Sort", value: "bubble" },
    { label: "Selection Sort", value: "selection" },
    { label: "Insertion Sort", value: "insertion" },
    { label: "Merge Sort", value: "merge" },
    { label: "Quick Sort", value: "quick" },  
]

function generateAnimationArray( selectedAlgorithm, isSorting, array, runAnimation) {
    console.log(selectedAlgorithm);
    switch (selectedAlgorithm) {
        case "merge":
            // mergeSortAnimation
            break;
        default:
            generateBubbleSortAnimationArray(isSorting, array, runAnimation);
            break;
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.arrayBarsRef = React.createRef();

        this.state = {
            array: [],
            isSorting: false,
            isAnimationComplete: false,
            animationSpeed: MIN_ANIMATION_SPEED,
            animations: [],
            selectedAlgorithm: algoOptions[0].value,
        };


    }


    componentDidMount() { //  method is called after the component loads 
        this.resetArray();
    }

    

    resetArray() {
        const array = [];
        const containerHeight = window.innerHeight;
        const maxBarHeight = Math.max(containerHeight - 100, 100);
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, maxBarHeight));
        }
        this.setState({ array, isAnimationComplete: false, isSorting: false}); // resets the state to the new array

        // reset timeouts
        const highestID = window.setTimeout(() => {
            for (let i = highestID; i >= 0; i--) {
                window.clearTimeout(i);
            }
        }, 0);
        
        setTimeout(() => {
            const arrayBars = this.arrayBarsRef.current.getElementsByClassName("array-bar");
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.height = `${array[i]}px`;
                arrayBars[i].classList.remove("change-bar-color");
                arrayBars[i].classList.remove("complete-bar-color");
                arrayBars[i].classList.remove("sorted-bar-color");
                arrayBars[i].classList.add("default-bar-color");
            }
        }, 0);

    }

    runAnimation = (animations) => {
        this.setState({ isSorting: true });

        const inverseSpeed = (1/this.state.animationSpeed) * 200;
        const arrayBars = this.arrayBarsRef.current.getElementsByClassName("array-bar");

        const updateClassList = ( indexes, addClassName, removeClassName) => {
            indexes.forEach((idx) => {
                arrayBars[idx].classList.add(addClassName);
                arrayBars[idx].classList.remove(removeClassName);
            });
        };

        const updateHeightVal = (barIdx, newHeight) => {
            if (newHeight === undefined) return;
            arrayBars[barIdx].style.height = `${newHeight}px`;
        }

        animations.forEach((animation, idx) => {
            setTimeout(() => {
                const [values, isSwap] = animation;

                if (!isSwap) {
                    updateClassList(values, "change-bar-color", "default-bar-color");
                    setTimeout(() => {
                        updateClassList(values, "default-bar-color", "change-bar-color");
                    }, inverseSpeed)
                } else {
                    if (values.length === 1) {
                        // Handle the sorted position animation
                        updateClassList(values, "sorted-bar-color", "default-bar-color");
                    } else {
                        const [barIdx, newHeight] = values;
                        updateHeightVal(barIdx, newHeight);
                    }
                }

            }, idx * inverseSpeed);

        });

        setTimeout(() => {

            Array.from(arrayBars).forEach((bar) => {
                bar.classList.add("pulse-animation", "complete-bar-color");
                bar.classList.remove("default-bar-color");
                bar.classList.remove("sorted-bar-color");
            });

            setTimeout(() => {
                Array.from(arrayBars).forEach((bar) => {
                    bar.classList.remove("pulse-animation", "complete-bar-color");
                    bar.classList.add("default-bar-color");
                });
                this.setState({ isSorting: false, isAnimationComplete: true });
            },1000);

        }, animations.length * inverseSpeed);
    }
    

    handleSelectChange = (event) => {
        this.setState({ selectedAlgorithm: event.target.value });
    }

    render () {
        const { array, isSorting, isAnimationComplete, selectedAlgorithm } = this.state; // destructuring the array from the state
        const requiresReset = isAnimationComplete || isSorting;

        const handlePlay= () => {
            if(requiresReset) {
                this.resetArray();
                return;
            }
            console.log(selectedAlgorithm, isSorting, array, this.runAnimation);
            generateAnimationArray( selectedAlgorithm, isSorting, array, this.runAnimation);

        }
        return ( 
            <main className="absolute top-0 h-screen w-screen bg-[#000000] bg-[size:40px_40px]">
                <div className="flex h-full justify-center">
                    <div 
                        id="content-container"
                        className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4 bg-red"
                    >
                        <div className="text-gray-300 h-[66px] relative flex items-center justify-between">
                            <h1 className="me-12 text-2xl font-semibold hidden md:flex">
                                Sorting Algorithm Visualizer
                            </h1>
                            <div className="flex items-center justify-center gap-4">
                                <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-transparent px-3 hover:bg-slate-700">
                                    <button onClick={() => 
                                    this.resetArray()
                                    }>Generate New Array</button>
                                </div>
                                <Slider 
                                    isDisabled={false}
                                    handleChange={(e) => this.setState({ animationSpeed: e.target.value })}
                                    ></Slider>
                                <Select 
                                    options={algoOptions} 
                                    defaultValue={algoOptions[0]}
                                    handleSelectChange={this.handleSelectChange}
                                ></Select>
                                <button className="flex items-center justify-center" onClick={handlePlay}>
                                    {requiresReset ? (
                                    <GrPowerReset className="text-yellow-400 h-6 w-6"/> 
                                    ):(
                                    <FaPlayCircle color="mediumseagreen" className="h-8 w-8"/>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[calc(100vh-66px)] w-full">
                            <div 
                             className="absolute bottom-0 w-full mx-auto left-0 right-0 flex justify-center items-end"
                             ref={this.arrayBarsRef}
                             >
                                {array.map((value, idx) => (
                                    <div 
                                        className='array-bar relative w-1.5 mx-0.5 opacity-70 shadow-lg rounded-lg bg-indigo-500' 
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



SortingVisualizer.propTypes = {
    animations: AnimationArrayType
};
