"use client";

import { useCalcStore } from "@/app/store/store";
import React, { useMemo } from "react";

const Result = () => {
    const [firstNum] = useCalcStore(state => [state.firstNum]);
    const textHeight = useMemo(() => {
        if (firstNum) {
            const textLength = firstNum.toString().length;
            if (textLength > 17) {
                return 30;
            }
            if (textLength > 13) {
                return 40;
            }
            if (textLength > 8) {
                return 50;
            }
        }
        return 70;
    }, [firstNum]);

    return (
        <div className="h-[100px] flex justify-end items-center text-white p-3">
            <span
                style={{
                    fontSize: `${textHeight}px`,
                }}
            >
                {firstNum}
            </span>
        </div>
    );
};

export default Result;
