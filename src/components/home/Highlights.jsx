import { useEffect, useRef, useState } from 'react';
import leftWave from '../../assets/wave-left.png'
import rightWave from '../../assets/wave-right.png'

const items = [
  {
    id: 1,
    text:
      <>
        Follows <span className="text-red-500 font-bold">USDC</span> <br className='hidden md:block' /> operational standards
      </>
  },
  {
    id: 2,
    text:
      <>
        <span className="text-red-500 font-bold">Stable, </span>
        predictable USD-aligned value
      </>
  },
  {
    id: 3,
    text:
      <>
        Runs on MST Blockchain’s secure,
        <span className="text-red-500 font-bold">high-speed </span>
        infrastructure
      </>
  },
  {
    id: 4,
    text:
      <>
        <span className="text-red-500 font-bold">Binance-supported </span>
        lock-and-mint mechanism
      </>
  },
  {
    id: 5,
    text:
      <>
        <span className="text-red-500 font-bold">Low fees </span>
        Low fees with quick settlement
      </>
  },
  {
    id: 6,
    text:
      <>
        <span className="text-red-500 font-bold">Easy integration </span>
        for wallets, exchanges, and dApps
      </>
  }
];

export default function Highlights() {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndex(index);
          }
        });
      },
      { threshold: 0.6 } // Center visibility
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden w-full min-h-[700px] px-4 md:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="hidden md:block">
        <div className="absolute -left-[157px] bottom-[155px] w-[350px] h-[350px] bg-red-400 opacity-30 blur-3xl rounded-full -z-10"></div>

        <div className="absolute -right-[150px] -bottom-[10px] w-[350px] h-[350px] bg-red-400 opacity-60 blur-3xl rounded-full -z-10"></div>
      </div>

      {/* Background wave */}
      <img
        src={leftWave}
        className="absolute inset-0 w-[55%] opacity-100 -z-10"
        alt="wave background"
      />

      <img
        src={rightWave}
        className="absolute right-0 -top-2 w-[60%] opacity-100 -z-10"
        alt="wave background"
      />

      <div className='flex md:flex-row flex-col justify-between'>
        <div>
          <h2 className="text-hero text-center font-semibold">Key Highlights</h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Pellentesque sapien sed sed metus.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-14 md:w-[50%] overflow-y-auto">
          {items.map((item, i) => {
            const isActive = visibleIndex === i;

            return (
              <div
                key={i}
                data-index={i}
                ref={(el) => (refs.current[i] = el)}
                className={`
                transition-all duration-500
                ${isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"}
              `}
              >
                <p className={`${isActive ? 'text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px]'
                  : 'text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]'} text-gray-700`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
