import React from 'react';
import "./SortingVisualizer.css";

function Select( { options, selectedAlgorithm, handleSelectChange } ) {
    // const options = [
    //     { label: "Bubble Sort", value: "bubble" },
    //     { label: "Selection Sort", value: "selection" },
    //     { label: "Insertion Sort", value: "insertion" },
    //     { label: "Merge Sort", value: "merge" },
    //     { label: "Quick Sort", value: "quick" },
    // ]
    // const [selectedAlgorithm, setSelectedAlgorithm] = useState(options[0].value);
    // const handleSelectChange = (e) => {
    //     setSelectedAlgorithm(e.target.value);
    // }
    return (
        <>
        <div className="inline-block relative w-48">
            <select
                onChange={handleSelectChange}
                value={selectedAlgorithm}
                className="block appearance-none h-8 w-full default-bar-color border-indigo border px-4 py-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-100"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                 <svg
                    className="fill-gray-300 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
        </>
    );
};

export default Select;

