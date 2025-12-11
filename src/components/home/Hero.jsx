import { motion } from "framer-motion";
import coinLeft from '../../assets/coin-left.png'
import coinRight from '../../assets/coin-right.png'
import checkerBG from '../../assets/Group 2.png'
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full sm:min-h-screen pt-20 px-4 text-center">
            <div className="hidden md:block">
                <div className="absolute -left-[57px] top-[5px] w-[350px] h-[350px] bg-red-400 opacity-30 blur-3xl rounded-full -z-10"></div>
                <div className="absolute -right-[57px] top-[255px] w-[350px] h-[350px] bg-red-400 opacity-30 blur-3xl rounded-full -z-10"></div>
            </div>

            {/* Floating small shapes */}
            <div
                className="absolute inset-0 bg-[url('/assets/bg-shapes.png')] bg-repeat opacity-10 -z-10"
            ></div>


            {/* Floating left coin */}
            <div className="hidden sm:block">
                <motion.img
                    src={coinRight}
                    className="absolute left-[120px] top-[180px] md:left-[180px] md:top-[200px] 
                    lg:left-[220px] lg:top-[220px] w-[40px] h-[40px] md:w-[55px] md:h-[55px]
                    lg:w-[65px] lg:h-[65px] rotate-[-50deg]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                    src={coinRight}
                    className="absolute left-[40px] top-[260px] md:left-[80px] md:top-[300px]
                    lg:left-[160px] lg:top-[320px] w-[55px] h-[55px] md:w-[80px] md:h-[80px] lg:w-[98px] 
                    lg:h-[98px] rotate-[-50deg]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                    src={coinLeft}
                    className="absolute left-[120px] top-[340px] md:left-[150px] md:top-[380px]
                     lg:left-[180px] lg:top-[420px] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]
                     md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[250px] xl:h-[250px]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Floating right coin */}
                <motion.img
                    src={coinLeft}
                    className=" absolute right-[40px] top-[260px] md:right-[80px] md:top-[300px]
                        lg:right-[160px] lg:top-[320px] w-[55px] h-[55px] md:w-[80px] md:h-[80px]
                         lg:w-[98px] lg:h-[98px] rotate-[20deg]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                    src={coinRight}
                    className=" absolute right-[120px] top-[340px] md:right-[150px] md:top-[380px]
                    lg:right-[180px] lg:top-[420px] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]
                    md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[250px] xl:h-[250px]"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Main hero content */}
            <div
                className="relative z-10"
            >
                <h1 className="leading-snug tracking-wide text-hero leading-snug">
                    A USDC Standard Stable <br className="hidden sm:block" /> Coins On
                    <span className="text-red-600 font-semibold ml-4"
                        style={{ fontFamily: "Audiowide" }}
                    > MST Blockchain</span>
                </h1>

                <div className="relative inline-block px-6 md:px-10 my-6 md:my-10">
                    <img
                        src={checkerBG}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
                    />

                    <h2 className="text-hero scale-y-[1.2] font-semibold relative z-10 tracking-widest">
                        USDCE
                    </h2>
                </div>

                <p className="md:mt-4 text-gray-600 max-w-xl mx-auto lg:text-xl">
                    Digital Stability Built on USDC Principles, Performance Powered by MST Blockchain.
                </p>

                <button className="flex items-center cursor-pointer tracking-wide font-semibold gap-2 mx-auto mt-6 px-6 py-2 border hover:bg-gray-100 transition-all">
                    Mint USDCE
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
