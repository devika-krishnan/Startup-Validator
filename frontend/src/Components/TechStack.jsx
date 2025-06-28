export default function TechStack({title, items, moreDetails})
{
    return(
        <div className="px-7 py-5 flex flex-col  rounded-xl bg-slate-100 w-96 overflow-scroll justify-between">
            <div className="flex justify-between gap-5">
                <h2 className="text-lg font-general font-semibold pb-1">{title}</h2>
            </div>
            <div className="font-space-grotesk text-base flex flex-col ">
                {items.map((item ,index)=> (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <button onClick={()=>moreDetails(true)} className="hover:text-sky-500 px-2 py-1 bg-sky-200 rounded-xl mt-2">More details...</button>
        </div>
    )
}