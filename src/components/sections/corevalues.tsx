// 'use client';

// import Image from 'next/image';

// import { motion } from 'framer-motion';

// export default function VisionMissionSection() {
//     return (
//         <section className="relative overflow-hidden bg-[#f5f5f3] py-28">
//             {/* TOP CENTER GOLD SHAPE */}
//             <div className="absolute left-[42%] top-0 hidden h-20 w-[340px] rounded-b-[40px] bg-[#dcbc38] xl:block" />

//             {/* LIGHT SHAPE */}
//             <div className="absolute left-[38%] top-0 hidden h-24 w-[420px] rounded-b-[40px] bg-[#dfe2df] xl:block" />

//             {/* RIGHT SIDE DESIGN */}
//             <div className="absolute right-0 top-0 hidden h-full w-[34%] overflow-hidden xl:block">
//                 {/* OUTER OLIVE */}
//                 <motion.div
//                     initial={{ x: 120, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{
//                         duration: 1,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="absolute right-0 top-[-8%] h-[115%] w-[82%] rounded-bl-[80px] bg-[#61732a]"
//                     style={{
//                         transform: 'rotate(30deg)',
//                         transformOrigin: 'top right',
//                     }}
//                 />

//                 {/* DARK GREEN */}
//                 <motion.div
//                     initial={{ x: 120, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{
//                         duration: 1,
//                         delay: 0.15,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="absolute right-[-6%] top-[18%] h-[52%] w-[72%] rounded-tl-[70px] bg-[#145235]"
//                     style={{
//                         transform: 'rotate(30deg)',
//                         transformOrigin: 'top right',
//                     }}
//                 />

//                 {/* GOLD PANEL */}
//                 <motion.div
//                     initial={{ x: 80, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{
//                         duration: 1,
//                         delay: 0.3,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="absolute right-[4%] top-[2%] h-[34%] w-[68%] rounded-[40px] border-[4px] border-white bg-[#dcbc38]"
//                     style={{
//                         transform: 'rotate(30deg)',
//                         transformOrigin: 'top right',
//                     }}
//                 />

//                 {/* DOTS */}
//                 <div className="absolute bottom-28 right-10 flex gap-3">
//                     <span className="h-4 w-4 rounded-full bg-white" />
//                     <span className="h-4 w-4 rounded-full bg-white" />
//                     <span className="h-4 w-4 rounded-full bg-white" />
//                 </div>
//             </div>

//             {/* LEFT GOLD ACCENT */}
//             <div
//                 className="absolute left-0 top-[22%] h-36 w-16 bg-[#dcbc38]"
//                 style={{
//                     clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
//                 }}
//             />

//             {/* CONTENT */}
//             <div className="relative z-20 mx-auto max-w-7xl px-6">
//                 {/* TOP LABEL */}
//                 <motion.h4
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ duration: 0.8 }}
//                     className="text-lg font-bold uppercase tracking-wide text-black"
//                 >
//                     Pragme India Foundation
//                 </motion.h4>

//                 {/* TITLE */}
//                 <motion.h2
//                     initial={{ y: 60, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{
//                         duration: 1,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="mt-16 text-4xl font-black uppercase leading-tight tracking-tight text-black md:text-6xl"
//                 >
//                     Vision, Mission & Core Values
//                 </motion.h2>

//                 {/* MAIN GRID */}
//                 <div className="mt-16 grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
//                     {/* LEFT CONTENT */}
//                     <div className="space-y-16">
//                         {/* VISION */}
//                         <motion.div
//                             initial={{ y: 60, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: false }}
//                             transition={{
//                                 duration: 1,
//                                 delay: 0.15,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className="flex flex-col gap-8 md:flex-row md:items-start"
//                         >
//                             {/* TAG */}
//                             <div className="flex-shrink-0">
//                                 <div
//                                     className="flex h-16 w-[190px] items-center justify-center bg-[#145235]"
//                                     style={{
//                                         clipPath:
//                                             'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
//                                     }}
//                                 >
//                                     <span className="text-2xl font-black uppercase tracking-wide text-white">
//                                         Vision
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* TEXT */}
//                             <p className="max-w-2xl text-xl leading-[1.8] tracking-wide text-[#333333]">
//                                 To build resilient, inclusive, and self-reliant communities
//                                 where every individual lives with dignity, access,
//                                 opportunity, and hope.
//                             </p>
//                         </motion.div>

//                         {/* MISSION */}
//                         <motion.div
//                             initial={{ y: 60, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: false }}
//                             transition={{
//                                 duration: 1,
//                                 delay: 0.3,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className="flex flex-col gap-8 md:flex-row md:items-start"
//                         >
//                             {/* TAG */}
//                             <div className="flex-shrink-0">
//                                 <div
//                                     className="flex h-16 w-[190px] items-center justify-center bg-[#145235]"
//                                     style={{
//                                         clipPath:
//                                             'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
//                                     }}
//                                 >
//                                     <span className="text-2xl font-black uppercase tracking-wide text-white">
//                                         Mission
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* TEXT */}
//                             <p className="max-w-2xl text-xl leading-[1.9] tracking-wide text-[#333333]">
//                                 To empower underserved communities through inclusive programs
//                                 focused on women and child welfare, education, health and
//                                 hygiene, clean and sustainable living, rural development, and
//                                 care-based support for vulnerable individuals including the
//                                 elderly, isolated youth, and persons recovering from trauma or
//                                 difficult home environments.
//                             </p>
//                         </motion.div>
//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <motion.div
//                         initial={{ scale: 0.85, opacity: 0 }}
//                         whileInView={{ scale: 1, opacity: 1 }}
//                         viewport={{ once: false }}
//                         transition={{
//                             duration: 1,
//                             delay: 0.3,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                         className="flex items-center justify-center"
//                     >
//                         <div className="relative">
//                             {/* HEXAGON BORDER */}
//                             <div
//                                 className="flex h-[340px] w-[340px] items-center justify-center bg-[#dcbc38] p-4"
//                                 style={{
//                                     clipPath:
//                                         'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
//                                 }}
//                             >
//                                 {/* INNER */}
//                                 <div
//                                     className="relative h-full w-full overflow-hidden border-[6px] border-white bg-[#ececec]"
//                                     style={{
//                                         clipPath:
//                                             'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
//                                     }}
//                                 >
//                                     <Image
//                                         src="/images/about/vision.jpg"
//                                         alt="Vision"
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* BOTTOM LEFT LIGHT SHAPE */}
//             <div className="absolute bottom-0 left-0 hidden h-24 w-[420px] rounded-tr-[50px] bg-[#dfe2df] xl:block" />

//             {/* BOTTOM RIGHT GOLD SHAPE */}
//             <div
//                 className="absolute bottom-0 right-0 hidden h-28 w-32 bg-[#dcbc38] xl:block"
//                 style={{
//                     clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
//                 }}
//             />
//         </section>
//     );
// }



'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionMissionSection() {
    return (
        <section className="relative overflow-hidden bg-[#f5f5f3] py-28">
            {/* TOP CENTER SHAPES */}
            <div className="absolute left-[42%] top-0 hidden h-20 w-[340px] rounded-b-[40px] bg-[#dcbc38] xl:block" />

            <div className="absolute left-[38%] top-0 hidden h-24 w-[420px] rounded-b-[40px] bg-[#dfe2df] xl:block" />

            {/* RIGHT SIDE DESIGN */}
            <div className="absolute right-0 top-0 hidden h-full w-[34%] overflow-hidden xl:block">
                {/* OUTER OLIVE */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-[-8%] h-[115%] w-[82%] rounded-bl-[80px] bg-[#61732a]"
                    style={{
                        transform: 'rotate(30deg)',
                        transformOrigin: 'top right',
                    }}
                />

                {/* DARK GREEN */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[-6%] top-[18%] h-[52%] w-[72%] rounded-tl-[70px] bg-[#145235]"
                    style={{
                        transform: 'rotate(30deg)',
                        transformOrigin: 'top right',
                    }}
                />

                {/* GOLD PANEL */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[4%] top-[2%] h-[34%] w-[68%] rounded-[40px] border-[4px] border-white bg-[#dcbc38]"
                    style={{
                        transform: 'rotate(30deg)',
                        transformOrigin: 'top right',
                    }}
                />

                {/* DOTS */}
                <div className="absolute bottom-28 right-10 flex gap-3">
                    <span className="h-3 w-3 rounded-full bg-white" />
                    <span className="h-3 w-3 rounded-full bg-white" />
                    <span className="h-3 w-3 rounded-full bg-white" />
                </div>
            </div>

            {/* LEFT GOLD ACCENT */}
            <div
                className="absolute left-0 top-[22%] h-36 w-16 bg-[#dcbc38]"
                style={{
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                }}
            />

            {/* CONTENT */}
            <div className="relative z-20 mx-auto max-w-7xl px-6">
                {/* TOP LABEL */}
                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f1f1f] md:text-base"
                >
                    Pragme India Foundation
                </motion.p>

                {/* TITLE */}
                <motion.h2
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 text-[2.6rem] font-black uppercase leading-[1.05] tracking-[-0.03em] text-black md:text-[3.5rem]"
                >
                    Vision, Mission & Core Values
                </motion.h2>

                {/* MAIN GRID */}
                <div className="mt-20 grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* LEFT CONTENT */}
                    <div className="space-y-16">
                        {/* VISION */}
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col gap-8 md:flex-row md:items-start"
                        >
                            {/* TAG */}
                            <div className="flex-shrink-0">
                                <div
                                    className="flex h-16 w-[190px] items-center justify-center bg-[#145235]"
                                    style={{
                                        clipPath:
                                            'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                                    }}
                                >
                                    <span className="text-[1.35rem] font-extrabold uppercase tracking-[0.08em] text-white">
                                        Vision
                                    </span>
                                </div>
                            </div>

                            {/* TEXT */}
                            <p className="max-w-2xl text-[1.08rem] leading-[1.9] tracking-[0.01em] text-[#3b3b3b] md:text-[1.22rem]">
                                To build resilient, inclusive, and self-reliant
                                communities where every individual lives with dignity,
                                access, opportunity, and hope.
                            </p>
                        </motion.div>

                        {/* MISSION */}
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col gap-8 md:flex-row md:items-start"
                        >
                            {/* TAG */}
                            <div className="flex-shrink-0">
                                <div
                                    className="flex h-16 w-[190px] items-center justify-center bg-[#145235]"
                                    style={{
                                        clipPath:
                                            'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                                    }}
                                >
                                    <span className="text-[1.35rem] font-extrabold uppercase tracking-[0.08em] text-white">
                                        Mission
                                    </span>
                                </div>
                            </div>

                            {/* TEXT */}
                            <p className="max-w-2xl text-[1.05rem] leading-[1.95] tracking-[0.01em] text-[#3b3b3b] md:text-[1.18rem]">
                                To empower underserved communities through inclusive
                                programs focused on women and child welfare, education,
                                health and hygiene, clean and sustainable living,
                                rural development, and care-based support for vulnerable
                                individuals including the elderly, isolated youth,
                                and persons recovering from trauma or difficult
                                home environments.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* HEXAGON */}
                            <div
                                className="flex h-[340px] w-[340px] items-center justify-center bg-[#dcbc38] p-4"
                                style={{
                                    clipPath:
                                        'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                                }}
                            >
                                {/* INNER */}
                                <div
                                    className="relative h-full w-full overflow-hidden border-[6px] border-white bg-[#ececec]"
                                    style={{
                                        clipPath:
                                            'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
                                    }}
                                >
                                    <Image
                                        src="/logo.jpeg"
                                        alt="Vision"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* BOTTOM SHAPES */}
            <div className="absolute bottom-0 left-0 hidden h-24 w-[420px] rounded-tr-[50px] bg-[#dfe2df] xl:block" />

            <div
                className="absolute bottom-0 right-0 hidden h-28 w-32 bg-[#dcbc38] xl:block"
                style={{
                    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                }}
            />
        </section>
    );
}
