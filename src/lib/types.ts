export type SortingAlgorithmType = 
    | 'bubble'
    | 'selection'
    | 'insertion'
    | 'merge'
    | 'quick'
    | 'heap';

export type SelectOptionType = {
    value: SortingAlgorithmType;
    label: string;
};