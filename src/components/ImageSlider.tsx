"use client";

import { useState, ChangeEvent } from "react";

interface ImageSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
}

export default function ImageSlider({
                                        beforeImage,
                                        afterImage,
                                        beforeAlt = "Before",
                                        afterAlt = "After",
                                    }: ImageSliderProps) {
    const [sliderPosition, setSliderPosition] = useState<number>(50);

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className="relative w-full max-w-[900px] aspect-[16/9] overflow-hidden select-none rounded-xl shadow-2xl bg-neutral-800 group">

            {/* After Image (Base Layer) */}
            <img
                src={afterImage}
                alt={afterAlt}
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
            />

            {/* Before Image (Overlay Layer via Clip Path) */}
            <div
                className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable="false"
                />
            </div>

            {/* The Vertical Divider Line */}
            <div
                className="absolute inset-y-0 w-0.5 bg-white pointer-events-none z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Visual Center Handle Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white text-neutral-800 rounded-full shadow-xl flex items-center justify-center font-bold text-sm border border-neutral-200 transition-transform group-hover:scale-110">
                    ↔
                </div>
            </div>

            {/* Invisible Transparent Range Input Overlay for Drag Controls */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 custom-slider-thumb"
            />
        </div>
    );
}