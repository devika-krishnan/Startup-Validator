export default function ResultCard({title, items})
{
    return(
        <div className="px-7 py-5 flex flex-col  rounded-xl bg-slate-100 w-96 overflow-scroll">
            <h2 className="text-lg font-general font-semibold pb-1">{title}</h2>
            <div className="font-space-grotesk text-base flex flex-col">
                {items.map((item ,index)=> (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}