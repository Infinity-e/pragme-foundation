"use client";

export default function ImpactJourneyRoadmap() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f5f5f5] min-h-[1100px] lg:min-h-[760px]">

            {/* ================= LEFT DECOR ================= */}

            {/* Grey Arrow */}
            <div
                className="absolute left-0 hidden md:block"
                style={{
                    top: "140px",
                    width: "170px",
                    height: "430px",
                    background: "#dcdcdc",
                    clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)",
                }}
            />

            {/* Yellow Arrow */}
            <div
                className="absolute left-0 hidden md:block"
                style={{
                    top: "175px",
                    width: "150px",
                    height: "370px",
                    background: "#d9b84a",
                    clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)",
                    borderRadius: "0 28px 28px 0",
                }}
            />

            {/* Green Triangle */}
            <div
                className="absolute bottom-0 left-0 hidden md:block"
                style={{
                    width: "230px",
                    height: "230px",
                    background: "#1d5038",
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                }}
            />

            {/* Dots */}
            <div className="absolute z-20 hidden md:flex gap-3 left-[65px] bottom-[60px]">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-4 h-4 rounded-full bg-white" />
            </div>

            {/* Bottom Grey Curve */}
            <div
                className="absolute bottom-0 hidden lg:block"
                style={{
                    left: "190px",
                    width: "180px",
                    height: "80px",
                    background: "#d5d5d5",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                }}
            />

            {/* Olive Bar */}
            <div
                className="absolute bottom-0 hidden lg:block"
                style={{
                    left: "450px",
                    width: "820px",
                    height: "65px",
                    background: "#5d6f2a",
                    borderTopLeftRadius: "30px",
                }}
            />

            {/* Right Road */}
            <div
                className="absolute top-0 right-0 h-full hidden lg:block"
                style={{
                    width: "80px",
                    background: "#717977",
                }}
            >
                <div
                    className="absolute left-1/2 top-0 h-full"
                    style={{
                        borderLeft: "5px dashed rgba(255,255,255,0.95)",
                        transform: "translateX(-50%)",
                    }}
                />
            </div>

            {/* ================= TITLE ================= */}

            <div className="relative z-20 px-6 pt-12 md:px-10 lg:absolute lg:left-[30px] lg:top-[70px]">
                <p className="text-sm md:text-lg font-semibold tracking-wide text-black">
                    PRAGME INDIA FOUNDATION
                </p>

                <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-black">
                    IMPACT JOURNEY &
                    <br />
                    GROWTH ROADMAP
                </h1>
            </div>

            {/* ================= MOBILE LAYOUT ================= */}

            <div className="flex flex-col gap-12 px-6 pt-14 pb-24 lg:hidden relative z-10">

                {/* Start */}
                <div className="flex items-start gap-5">
                    <div className="min-w-[80px] min-h-[80px] rounded-full border-[6px] border-[#1aa5eb] bg-[#f5f5f5]" />

                    <div>
                        <h3 className="text-xl font-bold text-black">
                            26 July 2025
                        </h3>

                        <p className="text-gray-600 mt-1">
                            Date of Incorporation
                        </p>
                    </div>
                </div>

                {/* Phase 1 */}
                <div className="flex items-start gap-5">
                    <div className="min-w-[80px] min-h-[80px] rounded-full border-[6px] border-[#bfd850] bg-[#f5f5f5]" />

                    <div>
                        <h3 className="text-xl font-bold leading-snug text-black">
                            Phase 1: Seeding Change
                        </h3>

                        <p className="text-gray-600 mt-2 leading-relaxed">
                            Building trust, piloting programs,
                            creating proof of impact
                        </p>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="flex items-start gap-5">
                    <div className="min-w-[80px] min-h-[80px] rounded-full border-[6px] border-[#e5b45e] bg-[#f5f5f5]" />

                    <div>
                        <h3 className="text-xl font-bold leading-snug text-black">
                            Phase 2: Growing Impact
                        </h3>

                        <p className="text-gray-600 mt-2 leading-relaxed">
                            Expanding reach, forming CSR partnerships,
                            strengthening systems
                        </p>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="flex items-start gap-5">
                    <div className="min-w-[80px] min-h-[80px] rounded-full border-[6px] border-[#1aa5eb] bg-[#f5f5f5]" />

                    <div>
                        <h3 className="text-xl font-bold leading-snug text-black">
                            Phase 3: Scaling Transformation
                        </h3>

                        <p className="text-gray-600 mt-2 leading-relaxed">
                            Multi-state expansion, replicating models,
                            influencing policy
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= DESKTOP ROADMAP ================= */}

            <div className="hidden lg:block">

                {/* SVG ROAD */}
                <svg
                    className="absolute inset-0"
                    viewBox="0 0 1280 720"
                    preserveAspectRatio="none"
                    style={{ width: "100%", height: "100%" }}
                >
                    {/* Road */}
                    <path
                        d="M 530 720 L 530 360 C 530 290, 690 290, 690 360 L 690 460 C 690 540, 850 540, 850 460 L 850 250 C 850 160, 1010 160, 1010 250 L 1010 360 C 1010 450, 1170 450, 1170 360 L 1170 0"
                        fill="none"
                        stroke="#717977"
                        strokeWidth="65"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Center Dash */}
                    <path
                        d="M 530 720 L 530 360 C 530 290, 690 290, 690 360 L 690 460 C 690 540, 850 540, 850 460 L 850 250 C 850 160, 1010 160, 1010 250 L 1010 360 C 1010 450, 1170 450, 1170 360 L 1170 0"
                        fill="none"
                        stroke="white"
                        strokeWidth="5"
                        strokeDasharray="22 22"
                        strokeLinecap="round"
                    />

                    {/* Circles */}
                    <circle cx="605" cy="300" r="50" fill="#f5f5f5" stroke="#1aa5eb" strokeWidth="8" />
                    <circle cx="775" cy="525" r="50" fill="#f5f5f5" stroke="#bfd850" strokeWidth="8" />
                    <circle cx="945" cy="175" r="50" fill="#f5f5f5" stroke="#e5b45e" strokeWidth="8" />
                    <circle cx="1100" cy="405" r="50" fill="#f5f5f5" stroke="#1aa5eb" strokeWidth="8" />
                </svg>

                {/* Date */}
                <div className="absolute z-20 text-center left-[520px] top-[190px] w-[180px]">
                    <h3 className="text-[22px] font-bold text-black">
                        26 July 2025
                    </h3>

                    <p className="text-gray-600 mt-2 text-[15px]">
                        Date of Incorporation
                    </p>
                </div>

                {/* Phase 2 */}
                <div className="absolute z-20 text-center right-[90px] top-[45px] w-[330px]">
                    <h3 className="text-[20px] font-bold leading-snug text-black">
                        Phase 2: Growing Impact (Years 2–3)
                    </h3>

                    <p className="text-gray-600 mt-3 leading-relaxed text-[15px]">
                        Expanding reach, forming CSR partnerships,
                        strengthening systems
                    </p>
                </div>

                {/* Phase 1 */}
                <div className="absolute z-20 text-center left-[610px] bottom-[80px] w-[330px]">
                    <h3 className="text-[20px] font-bold leading-snug text-black">
                        Phase 1: Seeding Change (Year 1)
                    </h3>

                    <p className="text-gray-600 mt-3 leading-relaxed text-[15px]">
                        Building trust, piloting programs,
                        creating proof of impact
                    </p>
                </div>

                {/* Phase 3 */}
                <div className="absolute z-20 text-center right-[70px] bottom-[105px] w-[330px]">
                    <h3 className="text-[20px] font-bold leading-snug text-black">
                        Phase 3: Scaling Transformation (Years 4–5)
                    </h3>

                    <p className="text-gray-600 mt-3 leading-relaxed text-[15px]">
                        Multi-state expansion, replicating models,
                        influencing policy
                    </p>
                </div>

                {/* Footer */}
                <div className="absolute z-20 right-[35px] bottom-[18px] text-white text-[15px] font-medium tracking-wide">
                    pragmeindiafoundation@gmail.com
                </div>
            </div>
        </section>
    );
}