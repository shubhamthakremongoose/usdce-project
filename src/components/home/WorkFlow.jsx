import workflow1 from "../../assets/Frame 61.png";
import workflow2 from "../../assets/Frame 63.png";
import workflow3 from "../../assets/Group 11.png";

export default function Workflow() {
    return (
        <section className="relative w-full px-4 md:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 text-center overflow-hidden">
            <div className="hidden md:block">
                <div className="absolute -left-[157px] bottom-[155px] w-[350px] h-[350px] bg-red-400 opacity-30 blur-3xl rounded-full -z-10"></div>

                <div className="absolute -right-[150px] -bottom-[10px] w-[350px] h-[350px] bg-red-400 opacity-60 blur-3xl rounded-full -z-10"></div>
            </div>
            {/* Background shapes */}
            <div className="absolute inset-0 bg-[url('/assets/bg-shapes.png')] bg-repeat opacity-10 pointer-events-none"></div>

            <div className="flex items-center justify-center my-10 relative w-full">

                {/* Left Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-red-600 opacity-60"></div>

                {/* Center Pill */}
                <div
                    className="px-4 sm:px-6 py-2 mx-4 border border-red-400 rounded-full bg-red-50 text-red-600 font-semibold tracking-wide text-xs sm:text-sm shadow-sm"
                    style={{ fontFamily: "Audiowide" }}
                >
                    Workflow Path
                </div>

                {/* Right Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-l from-transparent via-red-400 to-red-600 opacity-60"></div>

            </div>

            {/* TITLE */}
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold">
                Our Working Process
            </h2>

            <p className="mt-3 text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto">
                A guided sequence that makes the entire experience effortless.
            </p>

            {/* WORKFLOW STEPS */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mt-16 gap-16 md:gap-0 px-4 sm:px-10 lg:px-28">

                {/* Step 1 */}
                <div className="flex flex-col items-center w-full md:w-1/3">
                    <img src={workflow1} alt="Step 1" className="w-[90px] h-[90px]" />
                    <p className="mt-3 text-[18px] sm:text-[20px] font-semibold">
                        Lock<br />asset
                        <span className="text-gray-500 text-[14px] sm:text-[15px]"> on supported chain</span>
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center w-full md:w-1/3">
                    <p className="mt-3 text-[18px] sm:text-[20px] font-semibold leading-snug">
                        Mint USDCe<br />on MST Blockchain
                    </p>
                    <img src={workflow2} alt="Step 2" className="w-[90px] h-[90px]" />
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center w-full md:w-1/3">
                    <img src={workflow3} alt="Step 3" className="w-[90px] h-[90px]" />

                    <p className="mt-3 text-[18px] sm:text-[20px] font-semibold leading-snug">
                        Use across MST<br />dApps, wallets,<br />and platforms
                    </p>
                </div>

            </div>
        </section >
    );
}
