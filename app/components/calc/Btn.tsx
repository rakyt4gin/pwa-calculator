"use client";

import { IBtn } from "@/app/data/btns";
import { useCalcStore } from "@/app/store/store";
import cn from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    IBtn;

const GridBtn = ({
    btnContent,
    rowPos,
    colPos,
    isOperation,
    operation,
    color,
    ...props
}: IProps) => {
    const [addNum, addOperation] = useCalcStore(state => [
        state.addNum,
        state.addOperation,
    ]);
    const onClick = () => {
        if (!isOperation) {
            addNum(btnContent);
        } else {
            addOperation(operation);
        }
    };

    return (
        <button
            style={{
                gridRow: rowPos,
                gridColumn: colPos,
            }}
            onClick={onClick}
            className={cn("p-4 text-white", `${color} active:bg-gray-400`)}
            {...props}
        >
            {btnContent}
        </button>
    );
};

export default GridBtn;
