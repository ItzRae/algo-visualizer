import { AnimationArrayType } from "../lib/propTypes";
import PropTypes from "prop-types";

function runBubbleSort(array, animations) {
    console.log("Running Bubble Sort");
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            // two values we are comparing
            animations.push([[j, j + 1], false]);
            // if left value is greater than right value
            if (array[j] > array[j + 1]) {
                // swap the values
                animations.push([[j, array[j + 1]], true]);
                animations.push([[j + 1, array[j]], true]);
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true
            }
        }

        // Mark the last element of the pass as sorted
        animations.push([[array.length - 1 - i], true]);
        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }
}

export function generateBubbleSortAnimationArray ( isSorting, array, runAnimation) {
    const animations = [];
    if (isSorting) return;
    if (array.length <= 1) return array;
    
    const auxArray = array.slice();
    runBubbleSort(auxArray, animations);
    runAnimation(animations);
}

generateBubbleSortAnimationArray.propTypes = {
    isSorting: PropTypes.bool,
    array: PropTypes.arrayOf(PropTypes.number),
    runAnimation: PropTypes.func,
    animations: AnimationArrayType,
};