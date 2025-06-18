import { useNavigate } from "react-router-dom"

export default function QueryBox()
{
    const navigate=useNavigate()
    return(
        <form className="flex flex-col gap-9 w-full items-center font-general">
            <p className="text-xl font-semibold text-slate-700">Enter Your Startup Idea</p>
            <textarea className="w-[30%] outline-none  rounded-xl  p-3 bg-[#F7F7F8] text-slate-700 border-2 border-[#E1E1E1] focus:bg-slate-200"/>
            <button onClick={()=>navigate('/result')} className="duration-200 rounded-2xl bg-slate-700 px-3 py-2 text-[#F7F7F8] hover:bg-[#F7F7F8] hover:text-slate-700 border-slate-700 border-2 hover:border-slate-700">Validate</button>
        </form>
    )
}