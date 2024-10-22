import { AnimationArrayType } from "../lib/propTypes";
import PropTypes from "prop-types";

function runInsertionSort(array, animations) {
    console.log("Running Insertion Sort");
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            animations.push([[j, j + 1], false]);
            animations.push([[j + 1, array[j]], true]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([[j + 1, key], true]);
        array[j + 1] = key;
    }
}

export function generateInsertionSortAnimationArray ( isSorting, array, runAnimation) {
    const animations = [];
    if (isSorting) return;
    if (array.length <= 1) return array;
    
    const auxArray = array.slice();
    runInsertionSort(auxArray, animations);
    runAnimation(animations);
}

generateInsertionSortAnimationArray.propTypes = {
    isSorting: PropTypes.bool,
    array: PropTypes.arrayOf(PropTypes.number),
    runAnimation: PropTypes.func,
    animations: AnimationArrayType,
};