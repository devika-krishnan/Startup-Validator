import { useNavigate } from "react-router-dom"
import api from "../../api";
import { useState } from "react";
import gif from '../assets/anime.gif'
import error_img from '../assets/error.png'

 function QueryBox()
{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState("")
    const navigate=useNavigate()
    async function handleValidate(event)
    {
        event.preventDefault()
        const idea = document.querySelector('#idea').value.trim();
        try{
            setLoading(true)
            const res = await api.post('analyze/validate/',{idea:idea})
            setLoading(false)
            if (res.data && idea) {
                navigate('/result',{
                    state: {
                        response: res.data,
                        idea: idea
                    }
                })
            }
        }
        catch(err) {
            setLoading(false)
            setError(true)
            if(!err.response) setErrorText(err.message)
            else setErrorText(err.response.data.error)
        };
    }
    return( 
        <div className="flex flex-col gap-9 w-[90%] h-[95%] items-center font-general text-black bg-[#eeeff2] rounded-3xl justify-center">
            {!loading && !error && <form onSubmit={(event)=>handleValidate(event)} className="flex flex-col gap-9 w-full items-center font-general">
                <h1 className="text-6xl text-black font-heading font-bold">Startup Validator</h1>
                <p className="text-xl font-semibold text-black">Enter Your Startup Idea</p>
                <textarea id="idea" className="w-[30%] outline-none  rounded-xl  p-3 bg-[#eeeff2] text-black  border-2 border-[#9a9d9c] focus:bg-[#eeeff2]"/>
                <button type="submit"  className="text-lg duration-200 rounded-2xl bg-black px-3 py-2 text-[#eeeff2] hover:bg-[#eeeff2] hover:text-black border-black border-2 hover:border-black">Validate</button>
            </form>}
            {loading && !error && <div className="text-5xl h-svh flex flex-col items-center justify-center">
                    Analyzing your idea ... 
                <img className="w-60" src={gif} alt="Loading animation"/>
            </div>}
            {error && <div className="h-svh flex flex-col items-center justify-center">
                <p className="text-5xl text-black  font-heading">{errorText}</p>
                <img className="w-96" src={error_img} alt="Error"/>
                <button onClick={()=>setError(false)} className="text-lg duration-200 rounded-2xl bg-black px-3 py-2 text-[#eeeff2] hover:bg-[#eeeff2] hover:text-black border-black border-2 hover:border-black">New Idea</button>
            </div>}
        </div>
    )
}

export default QueryBox;