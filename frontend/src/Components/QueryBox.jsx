import { useNavigate } from "react-router-dom"
import api from "../../api";

 function QueryBox()
{
    const navigate=useNavigate()
    async function handleValidate(event)
    {
        event.preventDefault()
        const idea = document.querySelector('#idea').value;
        try{
            const res = await api.post('analyze/validate/',{name:idea})
            navigate('/result',{state:res.data})
        }
        catch(err) {
            console.log(err)
        };
    }
    return(
        <form onSubmit={(event)=>handleValidate(event)} className="flex flex-col gap-9 w-full items-center font-general">
            <p className="text-xl font-semibold text-slate-700">Enter Your Startup Idea</p>
            <textarea id="idea" className="w-[30%] outline-none  rounded-xl  p-3 bg-[#F7F7F8] text-slate-700 border-2 border-[#E1E1E1] focus:bg-slate-200"/>
            <button type="submit"  className="duration-200 rounded-2xl bg-slate-700 px-3 py-2 text-[#F7F7F8] hover:bg-[#F7F7F8] hover:text-slate-700 border-slate-700 border-2 hover:border-slate-700">Validate</button>
        </form>
    )
}

export default QueryBox;