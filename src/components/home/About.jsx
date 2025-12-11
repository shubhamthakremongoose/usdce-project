export default function AboutUs() {
    return (
        <section className="relative w-full bg-[#0F0F0F] text-white px-4 py-16 sm:py-20 lg:py-28 overflow-hidden">

            {/* Floating Background Squares */}
            <div className="absolute inset-0 bg-[url('/assets/bg-shapes.png')] bg-repeat opacity-10"></div>

            <div className="flex items-center justify-center mb-10 relative w-full">

                {/* Left Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-gray-300 opacity-60"></div>

                {/* Center Pill */}
                <div
                    className="px-4 sm:px-6 py-2 mx-4 border border-gray-400 rounded-full bg-[#1A1A1A] text-gray-200 font-semibold tracking-wide text-xs sm:text-sm shadow-sm"
                    style={{ fontFamily: "Audiowide" }}
                >
                    Streamlined. Stable. Asset
                </div>

                {/* Right Gradient Line */}
                <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-l from-transparent via-gray-200 to-gray-300 opacity-60"></div>

            </div>

            {/* Title */}
            <h2 className="relative text-center font-semibold
                text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px]">
                About Us
            </h2>

            {/* Subtitle */}
            <p className="relative mt-4 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
                max-w-3xl mx-auto leading-snug text-gray-200">

                <span className="font-semibold text-white">USDCe</span>
                {" "}is a <span className="font-semibold text-white">Stable-Value Digital Token</span>{" "}
                built on the USDC framework and deployed on the MST Blockchain.
            </p>

            {/* Description */}
            <p className="relative mt-6 text-center 
                text-[12px] sm:text-[14px] md:text-[16px] text-gray-400 
                max-w-2xl mx-auto leading-relaxed">

                It delivers predictable, dollar-aligned value with fast, low-fee transactions across the MST ecosystem.
            </p>
        </section>
    );
}
