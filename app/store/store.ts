import { create } from "zustand";
import { OPERATIONS } from "../data/operations";
import {
    checkSymbolInStr,
    getOppositeNum,
    getPercentNum,
    getResult,
} from "../helpers/calcHelper";

interface ICalcStore {
    firstNum: string;
    secondNum: string;
    currentOperation: OPERATIONS | null;
    addNum: (num: number) => void;
    addOperation: (selector: OPERATIONS) => void;
}

const calcStore = create<ICalcStore>()((set, get) => ({
    firstNum: "0",
    secondNum: "0",
    currentOperation: null,

    addNum: num => {
        const { currentOperation } = get();
        if (!currentOperation) {
            return set(state => ({
                firstNum: `${
                    state.firstNum === "0" ? "" : state.firstNum
                }${num}`,
            }));
        }
        return set(state => ({
            secondNum: `${
                state.secondNum === "0" ? "" : state.secondNum
            }${num}`,
        }));
    },

    addOperation: selector => {
        const { currentOperation, firstNum, secondNum } = get();
        if (selector === OPERATIONS.CLEAR) {
            return set(() => ({
                firstNum: "0",
                secondNum: "0",
                currentOperation: null,
            }));
        }
        if (selector === OPERATIONS.COLON) {
            if (!!currentOperation === false) {
                if (!checkSymbolInStr(firstNum, ".")) {
                    return set(state => ({ firstNum: `${state.firstNum}.` }));
                }
            } else if (!checkSymbolInStr(secondNum, ".")) {
                return set(state => ({ secondNum: `${state.secondNum}.` }));
            }
        }
        if (selector === OPERATIONS.PLUS_MINUS) {
            if (!!currentOperation === false) {
                return set(state => ({
                    firstNum: getOppositeNum(state.firstNum),
                }));
            }
            return set(state => ({
                secondNum: getOppositeNum(state.secondNum),
            }));
        }
        if (selector === OPERATIONS.PERCENT) {
            if (!!currentOperation === false) {
                return set(state => ({
                    firstNum: getPercentNum(state.firstNum),
                }));
            }
            return set(state => ({
                secondNum: getPercentNum(state.secondNum),
            }));
        }
        if (selector === OPERATIONS.RESULT) {
            if (currentOperation && secondNum !== "0") {
                return set(state => ({
                    firstNum: getResult(
                        state.firstNum,
                        state.secondNum,
                        currentOperation
                    ),
                    secondNum: "0",
                    currentOperation: null,
                }));
            }
        }
        if (secondNum !== "0" && currentOperation) {
            return set(state => ({
                firstNum: getResult(
                    state.firstNum,
                    state.secondNum,
                    currentOperation
                ),
                secondNum: "0",
                currentOperation: selector,
            }));
        }

        return set(() => ({ currentOperation: selector }));
    },
}));

export const useCalcStore = calcStore;
