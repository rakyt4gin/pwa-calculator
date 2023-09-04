import { OPERATIONS } from "../data/operations";

export const checkSymbolInStr = (str: string, symbol: string) => {
    return str.toLowerCase().indexOf(symbol.toLowerCase()) !== -1;
};

export const getOppositeNum = (str: string) => {
    return `${parseFloat(str) * -1}`;
};
export const getPercentNum = (str: string) => {
    return `${parseFloat(str) / 100}`;
};

export const getResult = (
    firstStr: string,
    secondStr: string,
    operation: OPERATIONS
) => {
    const firstNum = parseFloat(firstStr);
    const secondNum = parseFloat(secondStr);
    let result: number = 0;
    if (operation === OPERATIONS.SUM) {
        result = firstNum + secondNum;
    }
    if (operation === OPERATIONS.MIN) {
        result = firstNum - secondNum;
    }
    if (operation === OPERATIONS.DIVIDE) {
        result = firstNum / secondNum;
    }
    if (operation === OPERATIONS.MULTIPLE) {
        result = firstNum * secondNum;
    }

    return `${result}`;
};
