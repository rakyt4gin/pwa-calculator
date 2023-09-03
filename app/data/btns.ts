import { CSSProperties } from "react";
import { OPERATIONS } from "./operations";

interface IBaseBtn {
    colPos: CSSProperties["gridColumn"];
    rowPos: CSSProperties["gridRow"];
    color: "orange" | "grey-200" | "grey-400";
}

type IIsOperationBtn = IBaseBtn & {
    isOperation: true;
    btnContent: string;
    operation: OPERATIONS;
};

type INumberBtn = IBaseBtn & {
    isOperation: false;
    btnContent: number;
    operation?: never;
};

export type IBtn = IIsOperationBtn | INumberBtn;

export const btns: IBtn[] = [
    {
        btnContent: "C",
        isOperation: true,
        operation: OPERATIONS.CLEAR,
        colPos: "1 / 2",
        rowPos: "1 / 2",
        color: "grey-400",
    },
    {
        btnContent: "±",
        isOperation: true,
        operation: OPERATIONS.PLUS_MINUS,
        colPos: "2 / 3",
        rowPos: "1 / 2",
        color: "grey-400",
    },
    {
        btnContent: "%",
        isOperation: true,
        operation: OPERATIONS.PERCENT,
        colPos: "3 / 4",
        rowPos: "1 / 2",
        color: "grey-400",
    },
    {
        btnContent: "/",
        isOperation: true,
        operation: OPERATIONS.DIVIDE,
        colPos: "4 / 5",
        rowPos: "1 / 2",
        color: "orange",
    },
    {
        btnContent: 7,
        isOperation: false,
        colPos: "1 / 2",
        rowPos: "2 / 3",
        color: "grey-200",
    },
    {
        btnContent: 8,
        isOperation: false,
        colPos: "2 / 3",
        rowPos: "2 / 3",
        color: "grey-200",
    },
    {
        btnContent: 9,
        isOperation: false,
        colPos: "3 / 4",
        rowPos: "2 / 3",
        color: "grey-200",
    },
    {
        btnContent: "*",
        isOperation: true,
        operation: OPERATIONS.MULTIPLE,
        colPos: "4 / 5",
        rowPos: "2 / 3",
        color: "orange",
    },
    {
        btnContent: 4,
        isOperation: false,
        colPos: "1 / 2",
        rowPos: "3 / 4",
        color: "grey-200",
    },
    {
        btnContent: 5,
        isOperation: false,
        colPos: "2 / 3",
        rowPos: "3 / 4",
        color: "grey-200",
    },
    {
        btnContent: 6,
        isOperation: false,
        colPos: "3 / 4",
        rowPos: "3 / 4",
        color: "grey-200",
    },
    {
        btnContent: "-",
        isOperation: true,
        operation: OPERATIONS.MIN,
        colPos: "4 / 5",
        rowPos: "3 / 4",
        color: "orange",
    },
    {
        btnContent: 1,
        isOperation: false,
        colPos: "1 / 2",
        rowPos: "4 / 5",
        color: "grey-200",
    },
    {
        btnContent: 2,
        isOperation: false,
        colPos: "2 / 3",
        rowPos: "4 / 5",
        color: "grey-200",
    },
    {
        btnContent: 3,
        isOperation: false,
        colPos: "3 / 4",
        rowPos: "4 / 5",
        color: "grey-200",
    },
    {
        btnContent: "+",
        isOperation: true,
        operation: OPERATIONS.SUM,
        colPos: "4 / 5",
        rowPos: "4 / 5",
        color: "orange",
    },
    {
        btnContent: 0,
        isOperation: false,
        colPos: "1 / 3",
        rowPos: "5 / 6",
        color: "grey-200",
    },
    {
        btnContent: ",",
        isOperation: true,
        operation: OPERATIONS.COLON,
        colPos: "3 / 4",
        rowPos: "5 / 6",
        color: "grey-200",
    },
    {
        btnContent: "=",
        isOperation: true,
        operation: OPERATIONS.RESULT,
        colPos: "4 / 5",
        rowPos: "5 / 6",
        color: "orange",
    },
];
