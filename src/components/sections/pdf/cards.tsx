// 'use client';

// import { motion } from 'framer-motion';

// const beneficiaries = [
//     {
//         number: '01',
//         title: 'Children\nwithout family\nsupport',
//         text:
//             'those in need\nof care,\nprotection,\neducation,\nand a\nnurturing\nenvironment\nto rebuild their\nfuture',
//         bg: '#98D31B',
//         textColor: '#000000',
//     },
//     {
//         number: '02',
//         title:
//             'Elderly\nindividuals left\nwithout family\nor support\nsystems',
//         text:
//             'seeking dignity,\ncare, and\ncompanionship\nin their later\nyears',
//         bg: '#13C1A0',
//         textColor: '#000000',
//     },
//     {
//         number: '03',
//         title:
//             'Women and\nchildren from\nvulnerable\nbackgrounds',
//         text:
//             'striving for\nsafety,\nindependence\n, and a better\nquality of life',
//         bg: '#14A5C8',
//         textColor: '#000000',
//     },
//     {
//         number: '04',
//         title:
//             'Rural and\neconomically\ndisadvantaged\ncommunities',
//         text:
//             'battling\npoverty and\nstriving for\nsustainable\nlivelihoods',
//         bg: '#1878EB',
//         textColor: '#000000',
//     },
//     {
//         number: '05',
//         title:
//             'Small farmers,\nrural\nentrepreneurs,\nand food\nprocessing\nworkers',
//         text:
//             'working\ntowards\neconomic\nresilience and\ngrowth',
//         bg: '#245FC3',
//         textColor: '#FFFFFF',
//     },
//     {
//         number: '06',
//         title:
//             'Individuals\nlacking access\nto healthcare\nand basic\nhygiene',
//         text:
//             'requiring\nawareness,\nsupport, and\nessential\nservices',
//         bg: '#21499B',
//         textColor: '#FFFFFF',
//     },
//     {
//         number: '07',
//         title:
//             'Communities\naffected by\nenvironmental\nchallenges',
//         text:
//             'living in\nconditions\nwhere\nsustainability\nand basic\nresources are\nat risk',
//         bg: '#162D6B',
//         textColor: '#FFFFFF',
//     },
// ];

// export default function TargetCardSection() {
//     return (
//         <section className="relative overflow-hidden bg-[#f3f3f2] py-[70px]">
//             {/* TOP SHAPES */}
//             <div className="absolute left-0 top-0 hidden h-[48px] w-[130px] rounded-br-[35px] bg-[#dfe1df] xl:block" />

//             <div className="absolute left-0 top-0 hidden h-[54px] w-[74px] rounded-br-[28px] bg-[#dcbc38] xl:block" />

//             <div className="absolute left-[33%] top-0 hidden h-[48px] w-[420px] rounded-b-[32px] bg-[#dcbc38] xl:block" />

//             <div className="absolute right-0 top-0 hidden h-[48px] w-[130px] rounded-bl-[35px] bg-[#dfe1df] xl:block" />

//             <div className="absolute right-0 top-0 hidden h-[60px] w-[72px] rounded-bl-[28px] bg-[#dcbc38] xl:block" />

//             {/* MAIN */}
//             <div className="relative z-20 mx-auto max-w-[1280px] px-6">
//                 {/* TOP LABEL */}
//                 <motion.h4
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ duration: 0.8 }}
//                     className="text-[20px] font-[700] uppercase tracking-[-0.03em] text-black"
//                 >
//                     PRAGME INDIA FOUNDATION
//                 </motion.h4>

//                 {/* TITLE */}
//                 <motion.h2
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: false }}
//                     transition={{
//                         duration: 1,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="mt-[18px] ml-[75px] text-[28px] font-[900] uppercase leading-none tracking-[-0.04em] text-black"
//                 >
//                     TARGET BENEFICIARIES
//                 </motion.h2>

//                 {/* CARDS */}
//                 <div className="relative mt-[100px] overflow-x-auto pb-[30px] xl:overflow-visible">
//                     <div className="flex min-w-max justify-center px-[20px] xl:min-w-0">
//                         {beneficiaries.map((item, index) => {
//                             const floatOffsets = [
//                                 'translate-y-[0px]',
//                                 'translate-y-[28px]',
//                                 'translate-y-[8px]',
//                                 'translate-y-[-18px]',
//                                 'translate-y-[10px]',
//                                 'translate-y-[30px]',
//                                 'translate-y-[0px]',
//                             ];

//                             return (
//                                 <motion.div
//                                     key={item.number}
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     whileHover={{
//                                         y: -10,
//                                     }}
//                                     transition={{
//                                         duration: 0.5,
//                                         delay: index * 0.06,
//                                     }}
//                                     viewport={{ once: true }}
//                                     className={`
//                         relative
//                         h-[360px]
//                         w-[190px]
//                         flex-shrink-0

//                         rounded-[32px]

//                         px-[22px]
//                         pt-[72px]

//                         transition-all
//                         duration-300

//                         ${floatOffsets[index]}

//                         ${index !== 0
//                                             ? 'ml-[-18px] xl:ml-[-28px]'
//                                             : ''
//                                         }
//                     `}
//                                     style={{
//                                         background: item.bg,
//                                         boxShadow:
//                                             '0 12px 30px rgba(0,0,0,0.08)',
//                                         zIndex: 20 - index,
//                                     }}
//                                 >
//                                     {/* TOP GLOW */}
//                                     <div
//                                         className="absolute inset-0 rounded-[32px]"
//                                         style={{
//                                             background:
//                                                 'linear-gradient(to bottom right, rgba(255,255,255,0.18), transparent 40%)',
//                                         }}
//                                     />

//                                     {/* NUMBER */}
//                                     <div className="absolute left-1/2 top-[-26px] z-20 -translate-x-1/2">
//                                         <div
//                                             className="
//                                 flex
//                                 h-[54px]
//                                 w-[54px]
//                                 items-center
//                                 justify-center
//                                 rounded-full
//                                 border-[4px]
//                                 border-white
//                                 text-[16px]
//                                 font-[800]
//                                 text-white
//                                 shadow-md
//                             "
//                                             style={{
//                                                 background: item.bg,
//                                             }}
//                                         >
//                                             {item.number}
//                                         </div>
//                                     </div>

//                                     {/* TITLE */}
//                                     <h3
//                                         className={`
//                             relative z-10
//                             whitespace-pre-line
//                             text-center
//                             text-[17px]
//                             font-[800]
//                             leading-[1.15]
//                             tracking-[-0.03em]

//                             ${item.textColor === '#FFFFFF'
//                                                 ? 'text-white'
//                                                 : 'text-black'
//                                             }
//                         `}
//                                     >
//                                         {item.title}
//                                     </h3>

//                                     {/* TEXT */}
//                                     <p
//                                         className={`
//                             relative z-10
//                             mt-[18px]
//                             whitespace-pre-line
//                             text-center
//                             text-[14px]
//                             leading-[1.2]

//                             ${item.textColor === '#FFFFFF'
//                                                 ? 'text-white'
//                                                 : 'text-black'
//                                             }
//                         `}
//                                     >
//                                         {item.text}
//                                     </p>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* BOTTOM LEFT GREEN */}
//             <div
//                 className="absolute bottom-0 left-0 hidden h-[200px] w-[160px] bg-[#145235] xl:block"
//                 style={{
//                     clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
//                 }}
//             />

//             {/* BOTTOM BAR */}
//             <div className="absolute bottom-0 left-0 hidden h-[72px] w-full bg-[#61732a] xl:block" />

//             {/* EMAIL */}
//             <div className="absolute bottom-[18px] left-1/2 z-30 hidden -translate-x-1/2 xl:block">
//                 <p className="text-[17px] font-[400] tracking-[0.01em] text-white">
//                     pragmeindiafoundation@gmail.com
//                 </p>
//             </div>

//             {/* BOTTOM RIGHT GREEN */}
//             <div
//                 className="absolute bottom-0 right-0 hidden h-[190px] w-[160px] bg-[#145235] xl:block"
//                 style={{
//                     clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
//                 }}
//             />

//             {/* BOTTOM RIGHT YELLOW */}
//             <div
//                 className="absolute bottom-0 right-0 hidden h-[58px] w-[58px] bg-[#dcbc38] xl:block"
//                 style={{
//                     clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
//                 }}
//             />
//         </section>
//     );
// }

'use client';

import { motion } from 'framer-motion';

const beneficiaries = [
    {
        number: '01',
        title: 'Children\nwithout family\nsupport',
        text:
            'those in need\nof care,\nprotection,\neducation,\nand a\nnurturing\nenvironment\nto rebuild their\nfuture',
        bg: '#98D31B',
        textColor: '#000000',
    },
    {
        number: '02',
        title:
            'Elderly\nindividuals left\nwithout family\nor support\nsystems',
        text:
            'seeking dignity,\ncare, and\ncompanionship\nin their later\nyears',
        bg: '#13C1A0',
        textColor: '#000000',
    },
    {
        number: '03',
        title:
            'Women and\nchildren from\nvulnerable\nbackgrounds',
        text:
            'striving for\nsafety,\nindependence,\nand a better\nquality of life',
        bg: '#14A5C8',
        textColor: '#000000',
    },
    {
        number: '04',
        title:
            'Rural and\neconomically\ndisadvantaged\ncommunities',
        text:
            'battling\npoverty and\nstriving for\nsustainable\nlivelihoods',
        bg: '#1878EB',
        textColor: '#FFFFFF',
    },
    {
        number: '05',
        title:
            'Small farmers,\nrural\nentrepreneurs,\nand food\nprocessing\nworkers',
        text:
            'working\ntowards\neconomic\nresilience and\ngrowth',
        bg: '#245FC3',
        textColor: '#FFFFFF',
    },
    {
        number: '06',
        title:
            'Individuals\nlacking access\nto healthcare\nand basic\nhygiene',
        text:
            'requiring\nawareness,\nsupport, and\nessential\nservices',
        bg: '#21499B',
        textColor: '#FFFFFF',
    },
    {
        number: '07',
        title:
            'Communities\naffected by\nenvironmental\nchallenges',
        text:
            'living in\nconditions\nwhere\nsustainability\nand basic\nresources are\nat risk',
        bg: '#162D6B',
        textColor: '#FFFFFF',
    },
];

export default function TargetCardSection() {
    return (
        <section className="relative overflow-hidden bg-[#f3f3f2] py-[70px]">
            {/* TOP SHAPES */}
            <div className="absolute left-0 top-0 hidden h-[48px] w-[130px] rounded-br-[35px] bg-[#dfe1df] xl:block" />

            <div className="absolute left-0 top-0 hidden h-[54px] w-[74px] rounded-br-[28px] bg-[#dcbc38] xl:block" />

            <div className="absolute left-[33%] top-0 hidden h-[48px] w-[420px] rounded-b-[32px] bg-[#dcbc38] xl:block" />

            <div className="absolute right-0 top-0 hidden h-[48px] w-[130px] rounded-bl-[35px] bg-[#dfe1df] xl:block" />

            <div className="absolute right-0 top-0 hidden h-[60px] w-[72px] rounded-bl-[28px] bg-[#dcbc38] xl:block" />

            {/* MAIN */}
            <div className="relative z-20 mx-auto max-w-[1400px] px-6">
                {/* TOP LABEL */}
                <motion.h4
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="text-[20px] font-[700] uppercase tracking-[-0.03em] text-black"
                >
                    PRAGME INDIA FOUNDATION
                </motion.h4>

                {/* TITLE */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="mt-[18px] ml-0 text-[28px] font-[900] uppercase leading-none tracking-[-0.04em] text-black md:ml-[75px]"
                >
                    TARGET BENEFICIARIES
                </motion.h2>

                {/* CARDS */}
                <div className="relative mt-[130px] overflow-visible pb-[35px]">
                    <div className="flex justify-center items-end px-[20px]">
                        {beneficiaries.map((item, index) => {
                            const floatOffsets = [
                                'translate-y-[0px]',
                                'translate-y-[20px]',
                                'translate-y-[8px]',
                                'translate-y-[-14px]',
                                'translate-y-[10px]',
                                'translate-y-[18px]',
                                'translate-y-[0px]',
                            ];

                            return (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -8 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 90,
                                        damping: 16,
                                        delay: index * 0.04,
                                    }}
                                    className={`
                        relative
                        h-[360px]
                        w-[185px]
                        flex-shrink-0
                        rounded-[30px]
                        px-[20px]
                        pt-[70px]
                        transform-gpu
                        will-change-transform
                        ${floatOffsets[index]}
                        ${index !== 0 ? 'xl:-ml-[22px]' : ''}
                    `}
                                    style={{
                                        background: item.bg,
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                                        zIndex: index + 10,
                                    }}
                                >
                                    {/* NUMBER */}
                                    <div className="absolute left-1/2 top-[-26px] -translate-x-1/2">
                                        <div
                                            className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[4px] border-white text-white font-bold"
                                            style={{ background: item.bg }}
                                        >
                                            {item.number}
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="relative z-10 text-center text-[16px] font-bold leading-tight text-white">
                                        {item.title}
                                    </h3>

                                    {/* TEXT */}
                                    <p className="relative z-10 mt-[18px] text-center text-[14px] leading-snug text-white">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* BOTTOM LEFT GREEN */}
            <div
                className="absolute bottom-0 left-0 hidden h-[200px] w-[160px] bg-[#145235] xl:block"
                style={{
                    clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                }}
            />

            {/* BOTTOM BAR */}
            <div className="absolute bottom-0 left-0 hidden h-[72px] w-full bg-[#61732a] xl:block" />

            {/* EMAIL */}
            <div className="absolute bottom-[18px] left-1/2 z-30 hidden -translate-x-1/2 xl:block">
                <p className="text-[17px] font-[400] tracking-[0.01em] text-white">
                    pragmeindiafoundation@gmail.com
                </p>
            </div>

            {/* BOTTOM RIGHT GREEN */}
            <div
                className="absolute bottom-0 right-0 hidden h-[190px] w-[160px] bg-[#145235] xl:block"
                style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                }}
            />

            {/* BOTTOM RIGHT YELLOW */}
            <div
                className="absolute bottom-0 right-0 hidden h-[58px] w-[58px] bg-[#dcbc38] xl:block"
                style={{
                    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                }}
            />
        </section>
    );
}