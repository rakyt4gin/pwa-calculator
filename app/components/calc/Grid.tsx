import { btns } from "@/app/data/btns";
import React from "react";
import GridBtn from "./Btn";

const Grid = () => {
    return (
        <div className="grid gap-[2px]">
            {btns.map(btn => {
                return <GridBtn key={btn.btnContent} {...btn} />;
            })}
        </div>
    );
};

export default Grid;
