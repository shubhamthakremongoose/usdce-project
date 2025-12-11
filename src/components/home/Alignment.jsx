import { ArrowRight } from "lucide-react";

export default function Alignment() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10">

            {/* Inspired by */}
            <div className="flex items-center justify-center my-10 relative w-full">

                {/* Left Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-red-600 opacity-60"></div>

                {/* Center Pill */}
                <div className="px-4 sm:px-6 py-2 mx-4 border border-red-400 rounded-full bg-red-50 text-red-600 font-semibold tracking-wide text-xs sm:text-sm shadow-sm"
                    style={{ fontFamily: "Audiowide" }}
                >
                    Inspired By: USDC
                </div>

                {/* Right Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-l from-transparent via-red-400 to-red-600 opacity-60"></div>

            </div>

            {/* Heading */}
            <h2 className="text-hero font-semibold text-center">
                USDC Standard Alignment
            </h2>

            <p className="
                mt-4 text-center 
                text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
                text-gray-600 max-w-2xl mx-auto"
            >
                USDCe follows the{" "}
                <span className="text-red-600 font-bold">Transparency</span>,{" "}
                <span className="text-red-600 font-bold">Reserve Logic</span>, and{" "}
                <span className="text-red-600 font-bold">Structural Guidelines</span>{" "}
                inspired by USDC.
            </p>

            {/* Two-column layout */}
            <div
                className="flex flex-col md:flex-row justify-between my-10 md:my-20 gap-10 md:gap-0"
            >

                {/* Left box */}
                <div className="col-span-1">
                    <h3 className="text-heo xl:text-[48px] font-semibold">
                        Mint USDCE
                    </h3>
                    <p className="text-gray-500 mt-2 text-[14px] sm:text-[16px] md:text-[18px]">
                        Mint USDCe using the official secure bridge.
                    </p>
                </div>

                {/* Right box */}
                <div className="col-span-1 flex items-center gap-3 md:gap-2">
                    <p className="text-gray-700 font-medium flex items-center gap-2 text-[14px] sm:text-[16px]">
                        Mint Here
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </p>

                    <a
                        href="#"
                        className="text-[18px] sm:text-[22px] md:text-[24px] text-blue-600 underline hover:text-blue-800"
                    >
                        BRIDGE.ONESTABLE.IO
                    </a>
                </div>

            </div>
        </section>
    );
}
