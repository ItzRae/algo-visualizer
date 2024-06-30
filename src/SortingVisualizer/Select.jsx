import React from 'react';
import { useState } from 'react';

function Select(){
    const options = [
        { label: "Bubble Sort", value: "bubble" },
        { label: "Selection Sort", value: "selection" },
        { label: "Insertion Sort", value: "insertion" },
        { label: "Merge Sort", value: "merge" },
        { label: "Quick Sort", value: "quick" },
    ]
    const [selectedAlgorithm, setSelectedAlgorithm] = useState(options[0].value);
    const handleSelectChange = (e) => {
        setSelectedAlgorithm(e.target.value);
    }
    return (
        <>
        <div className="inline-block relative w-48">
            <select
                onChange={handleSelectChange}
                className="block appearance-none h-8 w-full border px-4 py-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-300"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
        </>
    );
};

export default Select;