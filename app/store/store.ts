import { create } from "zustand";

interface ICalcStore {
    firstNum: number;
    secondNum: number;
}

const calcStore = create<ICalcStore>()(() => ({
    firstNum: 0,
    secondNum: 0,
}));

export const useCalcStore = calcStore;
