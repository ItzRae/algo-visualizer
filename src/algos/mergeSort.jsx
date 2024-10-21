import { AnimationArrayType } from "../lib/propTypes";
import PropTypes from "prop-types";

function runMergeSort(array, left, right, animations) {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    runMergeSort(array, left, mid, animations);
    runMergeSort(array, mid + 1, right, animations);
    merge(array, left, mid, right, animations);

}

function merge(array, left, mid, right, animations) {
    const leftArray = new Array(mid - left + 1);
    const rightArray = new Array(right - mid);

    for (let i = 0; i < leftArray.length; i++) {
        leftArray[i] = array[left + i];
    }
    for (let j = 0; j < rightArray.length; j++) {
        rightArray[j] = array[mid + 1 + j];
    }
    let i = 0, j = 0, k = left;
    while (i < leftArray.length && j < rightArray.length) {
        // two values we are comparing
        animations.push([[left + i, mid + 1 + j], false]);
        if (leftArray[i] <= rightArray[j]) {
            animations.push([[k, leftArray[i]], true]);
            array[k++] = leftArray[i++];
        } else {
            animations.push([[k, rightArray[j]], true]);
            array[k++] = rightArray[j++];
        }
    }
    // copy the remaining elements of leftArray
    while (i < leftArray.length) {
        animations.push([[k, leftArray[i]], true]);
        array[k++] = leftArray[i++];
    }
    // copy the remaining elements of rightArray
    while (j < rightArray.length) {
        animations.push([[k, rightArray[j]], true]);
        array[k++] = rightArray[j++];
    }
    
}

export function generateMergeSortAnimationArray ( isSorting, array, runAnimation) {
    const animations = [];
    if (isSorting) return;
    if (array.length <= 1) return array;
    
    const auxArray = array.slice();
    runMergeSort(auxArray, 0, auxArray.length - 1, animations);
    runAnimation(animations);
}

generateMergeSortAnimationArray.propTypes = {
    isSorting: PropTypes.bool,
    array: PropTypes.arrayOf(PropTypes.number),
    runAnimation: PropTypes.func,
    animations: AnimationArrayType,
};