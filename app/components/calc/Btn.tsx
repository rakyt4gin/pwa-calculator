"use client";

import { IBtn } from "@/app/data/btns";
import cn from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    IBtn;

const GridBtn = ({ btnContent, rowPos, colPos, color, ...props }: IProps) => {
    return (
        <button
            style={{
                gridRow: rowPos,
                gridColumn: colPos,
            }}
            className={cn("p-4 text-white", `bg-${color} active:bg-gray-400`)}
            {...props}
        >
            {btnContent}
        </button>
    );
};

export default GridBtn;
