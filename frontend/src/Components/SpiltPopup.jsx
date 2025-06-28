import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function SplitPopup({title,data,displayFn})
{
    const [copied,setCopied] = useState(false)
    const textRef = useRef(null)
    async function copy()
    {
        const textBox = textRef.current.innerText
        await navigator.clipboard.writeText(textBox)
        setCopied(true);
        setTimeout(()=>setCopied(false),1000)
    }
    const [splitUp, setSplitUp] = useState([])
    useEffect(()=>{
        const split = Object.entries(data).map(([key, value])=>({key,value}))
        setSplitUp(split)
    },[data])
    console.log(splitUp)
    return(
        <div className="px-10 py-7 flex flex-col  rounded-xl overflow-scroll min-w-96 bg-slate-100 font-general" >
            <div className="gap-7 flex justify-center items-center pb-7">
                <p className=" font-semibold text-xl text-center">{title}</p>
                <div className="flex gap-1 items-center">
                        {!copied && <button onClick={copy}><span className="material-symbols-outlined text-base hover:text-emerald-700" >content_copy</span></button>}
                        {copied && <p className="text-xs text-emerald-700 font-semibold">Copied!</p>}
                </div>
            </div>
            <div ref={textRef}>
                {splitUp && splitUp.map((item,index)=> <div key={index}  className=" flex gap-7 text-black justify-between">
                    <p className="text-black font-semibold text-lg ">{item.key}: </p>
                    <p className="">{item.value}</p>
                </div>)}
            </div>
            <div className="flex justify-center"><button onClick={()=>displayFn(false)}className="hover:text-rose-500 px-2 py-1 bg-sky-200 rounded-xl mt-5 w-fit text-lg">Close</button></div>
        </div>
    )
}