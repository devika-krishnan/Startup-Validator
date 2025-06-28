import { useRef } from "react";
import { useState } from "react"


export default function ResultCard({title, items})
{
    const [copied,setCopied] = useState(false)
    const textRef = useRef(null)
    async function copy()
    {
        const textBox = textRef.current.innerText
        setCopied(true);
        await navigator.clipboard.writeText(textBox)
        setTimeout(()=>setCopied(false),1000)
    }
    return(
        <div className="px-7 py-5 flex flex-col  rounded-xl bg-slate-100 w-96 overflow-scroll" >
            <div className="flex justify-between gap-5">
                <h2 className="text-lg font-general font-semibold pb-1">{title}</h2>
                <div className="flex gap-1 items-center">
                    {!copied && <button onClick={copy}><span className="material-symbols-outlined text-base hover:text-emerald-700" >content_copy</span></button>}
                    {copied && <p className="text-xs text-emerald-700 font-semibold">Copied!</p>}
                </div>
            </div>
            <div id="text" className="font-space-grotesk text-base flex flex-col" ref={textRef} >
                {items.map((item ,index)=> (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}