import { AnimationArrayType } from "../lib/propTypes";
import PropTypes from "prop-types";

function runSelectionSort(array, animations) {
    console.log("Running Selection Sort");
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            // two values we are comparing
            animations.push([[j, minIndex], false]);
            // if left value is greater than right value
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // swap the values
        animations.push([[i, array[minIndex]], true]);
        animations.push([[minIndex, array[i]], true]);
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        // Mark the last element of the pass as sorted
        animations.push([[i], true]);
    }
}


export function generateSelectionSortAnimationArray ( isSorting, array, runAnimation) {
    const animations = [];
    if (isSorting) return;
    if (array.length <= 1) return array;
    
    const auxArray = array.slice();
    runSelectionSort(auxArray, animations);
    runAnimation(animations);
}

generateSelectionSortAnimationArray.propTypes = {
    isSorting: PropTypes.bool,
    array: PropTypes.arrayOf(PropTypes.number),
    runAnimation: PropTypes.func,
    animations: AnimationArrayType,
};

