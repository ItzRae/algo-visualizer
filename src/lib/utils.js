

export const MIN_ANIMATION_SPEED = 40
export const MAX_ANIMATION_SPEED = 400

export const algoOptions = [
    { label: "Bubble Sort", value: "bubble" },
    { label: "Selection Sort", value: "selection" },
    { label: "Insertion Sort", value: "insertion" },
    { label: "Merge Sort", value: "merge" },
    { label: "Quick Sort", value: "quick" },  
]

export const sortingAlgoData = {
    bubble: {
        name: "Bubble Sort",
        description: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
        worstCase: "O( n² )",
        averageCase: "O( n² )",
        bestCase: "O( n )",
        pseudocode: "bubble blah"
    },
    selection: {
        name: "Selection Sort",
        description: "Selection sort is a simple sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the list.",
        worstCase: "O( n² )",
        averageCase: "O(n^2)",
        bestCase: "O(n^2)",
        pseudocode: "selection blah"
    },
    insertion: {
        name: "Insertion Sort",
        description: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
        worstCase: "O(n^2)",
        averageCase: "O(n^2)",
        bestCase: "O(n)",
        pseudocode: "insertion blah"
    },
    merge: {
        name: "Merge Sort",
        description: "Merge sort is an efficient, stable, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.",
        worstCase: "O(n log n)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
        pseudocode: "merge blah"
    },
    quick: {
        name: "Quick Sort",
        description: "Quick sort is an efficient sorting algorithm. It is a comparison-based algorithm that uses divide-and-conquer to sort an array. It first divides the array into two smaller sub-arrays: the low elements and the high elements.",
        worstCase: "O(n^2)",
        averageCase: "O(n log n)",
        bestCase: "O(n log n)",
        pseudocode: "quick blah"
    }
    
}
