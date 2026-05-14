"use client";

export default function ImpactJourneyRoadmap() {
    return (
        <section className="relative w-full overflow-hidden bg-[#f5f5f5]" style={{ height: "720px" }}>
            {/* ========== LEFT DECORATIVE ELEMENTS ========== */}

            {/* Grey Arrow Behind */}
            <div
                className="absolute left-0"
                style={{
                    top: "150px",
                    width: "170px",
                    height: "440px",
                    background: "#dcdcdc",
                    clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)",
                }}
            />

            {/* Yellow Arrow Front */}
            <div
                className="absolute left-0"
                style={{
                    top: "180px",
                    width: "150px",
                    height: "380px",
                    background: "#d9b84a",
                    clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)",
                    borderRadius: "0 28px 28px 0",
                }}
            />

            {/* Bottom Green Triangle */}
            <div
                className="absolute bottom-0 left-0"
                style={{
                    width: "250px",
                    height: "250px",
                    background: "#1d5038",
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                }}
            />

            {/* Three White Dots */}
            <div className="absolute z-20" style={{ left: "68px", bottom: "65px", display: "flex", gap: "12px" }}>
                <div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "white" }} />
                <div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "white" }} />
                <div style={{ width: "15px", height: "15px", borderRadius: "50%", background: "white" }} />
            </div>

            {/* Grey Curve Bottom */}
            <div
                className="absolute bottom-0 left-0"
                style={{
                    left: "195px",
                    width: "185px",
                    height: "85px",
                    background: "#d5d5d5",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                }}
            />

            {/* Olive Bar Bottom */}
            <div
                className="absolute bottom-0"
                style={{
                    left: "465px",
                    width: "820px",
                    height: "65px",
                    background: "#5d6f2a",
                    borderTopLeftRadius: "30px",
                }}
            />

            {/* Right Grey Vertical Road */}
            <div
                className="absolute top-0 right-0 h-full"
                style={{
                    width: "80px",
                    background: "#717977",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "0",
                        height: "100%",
                        borderLeft: "5px dashed rgba(255, 255, 255, 0.95)",
                        transform: "translateX(-50%)",
                    }}
                />
            </div>

            {/* ========== TITLE ========== */}

            <div className="absolute z-20" style={{ left: "25px", top: "70px" }}>
                <p style={{ fontSize: "21px", fontWeight: "600", color: "black", margin: 0, letterSpacing: "0.5px" }}>
                    PRAGME INDIA FOUNDATION
                </p>
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "900",
                        color: "black",
                        margin: "20px 0 0 0",
                        lineHeight: "1.15",
                        letterSpacing: "-0.5px",
                    }}
                >
                    IMPACT JOURNEY &<br />
                    GROWTH ROADMAP
                </h1>
            </div>

            {/* ========== ROAD SVG ========== */}

            <svg
                className="absolute inset-0"
                viewBox="0 0 1280 720"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "100%" }}
            >
                {/* Main Road */}
                <path
                    d="M 530 720 L 530 360 C 530 290, 690 290, 690 360 L 690 460 C 690 540, 850 540, 850 460 L 850 250 C 850 160, 1010 160, 1010 250 L 1010 360 C 1010 450, 1170 450, 1170 360 L 1170 0"
                    fill="none"
                    stroke="#717977"
                    strokeWidth="65"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Dashed Center Line */}
                <path
                    d="M 530 720 L 530 360 C 530 290, 690 290, 690 360 L 690 460 C 690 540, 850 540, 850 460 L 850 250 C 850 160, 1010 160, 1010 250 L 1010 360 C 1010 450, 1170 450, 1170 360 L 1170 0"
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                    strokeDasharray="22 22"
                    strokeLinecap="round"
                />

                {/* Circle 1 - TOP BLUE (START - 26 July) */}
                <circle cx="605" cy="300" r="50" fill="#f5f5f5" stroke="#1aa5eb" strokeWidth="8" />

                {/* Circle 2 - BOTTOM GREEN (Phase 1) */}
                <circle cx="775" cy="525" r="50" fill="#f5f5f5" stroke="#bfd850" strokeWidth="8" />

                {/* Circle 3 - TOP RIGHT ORANGE (Phase 2) */}
                <circle cx="945" cy="175" r="50" fill="#f5f5f5" stroke="#e5b45e" strokeWidth="8" />

                {/* Circle 4 - BOTTOM RIGHT BLUE (Phase 3) */}
                <circle cx="1100" cy="405" r="50" fill="#f5f5f5" stroke="#1aa5eb" strokeWidth="8" />
            </svg>

            {/* ========== TEXT LABELS ========== */}

            {/* Date & Incorporation */}
            <div
                className="absolute text-center z-10"
                style={{
                    left: "560px",
                    top: "200px",
                }}
            >
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "black", margin: 0 }}>
                    26 July 2025
                </h3>
                <p style={{ fontSize: "15px", color: "#555", margin: "6px 0 0 0" }}>
                    Date of Incorporation
                </p>
            </div>

            {/* Phase 2 - Top Right */}
            <div
                className="text-center z-10"
                style={{
                    position: "absolute",
                    right: "100px",
                    top: "50px",
                    width: "330px",
                }}
            >
                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "black", margin: 0, lineHeight: "1.35" }}>
                    Phase 2: Growing Impact (Years 2–3)
                </h3>
                <p style={{ fontSize: "15px", color: "#666", margin: "10px 0 0 0", lineHeight: "1.5" }}>
                    Expanding reach, forming CSR
                    <br />
                    partnerships, strengthening systems
                </p>
            </div>

            {/* Phase 1 - Bottom Left */}
            <div
                className="text-center z-10"
                style={{
                    position: "absolute",
                    left: "640px",
                    bottom: "85px",
                    width: "330px",
                }}
            >
                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "black", margin: 0, lineHeight: "1.35" }}>
                    Phase 1: Seeding Change (Year 1)
                </h3>
                <p style={{ fontSize: "15px", color: "#666", margin: "10px 0 0 0", lineHeight: "1.5" }}>
                    Building trust, piloting programs,
                    <br />
                    creating proof of impact
                </p>
            </div>

            {/* Phase 3 - Bottom Right */}
            <div
                className="text-center z-10"
                style={{
                    position: "absolute",
                    right: "95px",
                    bottom: "110px",
                    width: "330px",
                }}
            >
                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "black", margin: 0, lineHeight: "1.35" }}>
                    Phase 3: Scaling Transformation (Years 4–5)
                </h3>
                <p style={{ fontSize: "15px", color: "#666", margin: "10px 0 0 0", lineHeight: "1.5" }}>
                    Multi-state expansion, replicating
                    <br />
                    models, influencing policy
                </p>
            </div>

            {/* Email Footer */}
            <div
                className="absolute text-white font-medium z-20"
                style={{
                    right: "40px",
                    bottom: "18px",
                    fontSize: "16px",
                    letterSpacing: "0.3px",
                }}
            >
                pragmeindiafoundation@gmail.com
            </div>
        </section>
    );
}