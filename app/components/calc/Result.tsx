"use client";

import { useCalcStore } from "@/app/store";
import React, { useCallback, useEffect, useMemo, useRef } from "react";

const Result = () => {
    const { firstNum, secondNum, currentOperation } = useCalcStore();

    const ref = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const refFontSize = useRef<number>(70);

    const parentRefWidth = useCallback(
        () => parentRef && parentRef.current?.offsetWidth,
        [parentRef]
    );
    const refWidth = useCallback(() => ref && ref.current?.offsetWidth, [ref]);

    useEffect(() => {
        while (refWidth()! > parentRefWidth()! - 30) {
            refFontSize.current -= 5;
            if (ref && ref.current) {
                ref.current.style.fontSize = `${refFontSize.current}px`;
            }
        }
    }, [refWidth()]);

    useEffect(() => {
        if (!currentOperation) {
            if (firstNum === "0") {
                refFontSize.current = 70;
                if (ref && ref.current) {
                    ref.current.style.fontSize = `${refFontSize.current}px`;
                }
            }
        }
    }, [currentOperation, firstNum]);

    useEffect(() => {
        if (secondNum !== "0" && parseFloat(secondNum) < 20) {
            refFontSize.current = 70;
            if (ref && ref.current) {
                ref.current.style.fontSize = `${refFontSize.current}px`;
            }
        }
    }, [secondNum]);

    const resultContent = useMemo(() => {
        if (currentOperation) {
            if (secondNum !== "0") {
                return secondNum;
            }
        }
        return firstNum;
    }, [currentOperation, firstNum, secondNum]);

    return (
        <div
            ref={parentRef}
            className="h-[100px] flex justify-end items-center text-white p-3"
        >
            <div className="text-[70px] block" ref={ref}>
                {resultContent}
            </div>
        </div>
    );
};

export default Result;
