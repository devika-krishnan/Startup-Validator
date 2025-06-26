export default function Radialbar({data})
{
    return(
        <div className="flex flex-col gap-2 w-full justify-center">
            <h1 className="font-general font-semibold text-lg text-center">Viability Score:  </h1>
            <p className="font-general font-semibold text-lg text-center">{`${data}/100`}</p>
            <div className="border-2 border-teal-950 rounded-full h-6 w-full my-2">
                <div className="bg-teal-950 rounded-full h-full ease-in duration-700 " style={{width : `${data}%`}}>.</div>
           </div>
           <div className="bg-sky-100 rounded-xl py-1">
                <h2 className="font-general font-semibold text-lg text-center pb-2">Score Guide</h2>
                <div className="flex flex-col text-base items-center">
                    <div className="flex gap-1 justify-center items-center"><div className="bg-emerald-900 w-2 rounded-full h-2"></div>70–100: Strong</div>
                    <div className="flex gap-1 justify-center items-center"><div className="bg-yellow-500 w-2 rounded-full h-2"></div>50–70: Promising</div>
                    <div className="flex gap-1 justify-center items-center"><div className="bg-rose-600 w-2 rounded-full h-2"></div>50: Risky</div>
                </div>
           </div>
        </div>
    )
}