import { AnimationArrayType } from "../lib/propTypes";
import PropTypes from "prop-types";

function runQuickSort(array, lo, hi, animations) {
    if (lo < hi) {
        const p = partition(array, lo, hi, animations);
        runQuickSort(array, lo, p - 1, animations);
        runQuickSort(array, p + 1, hi, animations);
    }
}

function partition(arr, lo, hi, animations) {
    const pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        animations.push([[j, hi], false]);
        if (arr[j] < pivot) {
            i++;
            animations.push([[i, arr[j]], true]);
            animations.push([[j, arr[i]], true]);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    animations.push([[i + 1, arr[hi]], true]);
    animations.push([[hi, arr[i + 1]], true]);
    const temp = arr[i + 1];
    arr[i + 1] = arr[hi];
    arr[hi] = temp;
    return i + 1;
}

export function generateQuickSortAnimationArray ( isSorting, array, runAnimation) {
    const animations = [];
    if (isSorting) return;
    if (array.length <= 1) return array;
    
    const auxArray = array.slice();
    runQuickSort(auxArray, 0, auxArray.length - 1, animations);
    runAnimation(animations);
}

generateQuickSortAnimationArray.propTypes = {
    isSorting: PropTypes.bool,
    array: PropTypes.arrayOf(PropTypes.number),
    runAnimation: PropTypes.func,
    animations: AnimationArrayType,
};