import React from "react";
import { MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED } from "../lib/utils";

export const Slider = ({
    min = MIN_ANIMATION_SPEED,
    max = MAX_ANIMATION_SPEED,
    step = 10,
    value,
    handleChange,
    isDisabled = false,
}) => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <span className="text-center text-gray-900">Slow</span>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                disabled={isDisabled}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-400"
            />
            <span className="text-center text-gray-900">Fast</span>
        </div>
    );
};