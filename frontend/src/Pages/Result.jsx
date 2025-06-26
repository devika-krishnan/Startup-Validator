import { useLocation, useNavigate } from "react-router-dom"
import ResultCard from "../Components/ResultCard";
import MarketInova from "../Components/MarketInova";
import img from '../assets/error.png'
import Rechart from "../Components/Rechart";

export default function Result()
{
    const location = useLocation()
    const response = location.state;
    const error = (!response || response?.message == 'Failed')

    let inev =""
    if(!response?.error)
    {
        if(response.data.innovation_score==null)  inev = response.data.invention_score
        else   inev = response.data.innovation_score
    }
    const navigate = useNavigate()
    return(
        <div className="bg-[#bfdbf7]  min-h-screen overflow-scroll">
            {error && <div className="w-full text-rose-600 flex flex-col justify-center items-center px-7 py-10 gap-2 ">
                <h1 className="text-6xl font-heading font-bold ">{response.message}</h1>
                <img src={img}/>
                <p className="text-2xl text-rose-600" >{response.error}</p>
            </div>}
            {!error && <div className="w-full flex flex-col items-center  px-3 gap-7 my-3 ">
            <button onClick={()=>navigate('/')} className="text-md fixed top-6 left-6 z-50 hover:bg-sky-900 border-2 bg-sky-950 rounded-xl border-sky-950 text-white px-3 py-1 ">Back</button>
            <button onClick={()=>navigate('/')} className="text-lg fixed bottom-6 right-6 z-50 hover:bg-sky-900 border-2 bg-sky-950 rounded-xl border-sky-950 text-white px-2 py-1 ">New Idea +</button>
            <div className=" flex justify-center gap-7 w-full items-center">
            <h1 className="text-5xl font-heading font-bold text-center">Analysis Report</h1>
            </div>
                {/* Report */}
                <div className="flex gap-7">
                    <div className="max-w-[400px]">
                        <Rechart resJson={response.data} />
                    </div>
                    <div className="flex flex-col justify-center gap-3 ">
                    <MarketInova inov ={inev} demand={response.data.market_demand_score} />
                        <div className="flex gap-7 flex-wrap">
                            <ResultCard title="Recommened Tech Stack"  items={response.data.recommended_tech_stack}/>
                            <ResultCard title="Suggested Tools and Services"  items={response.data.suggested_tools_services}/>
                        </div>
                        <div className="flex gap-7">
                            <div className="px-7 py-5 flex flex-col gap-3 rounded-xl bg-slate-100 min-w-96">
                                <h2 className="text-lg font-general font-semibold">Metrics Summary</h2>
                                <p>{ `Estimated Time: ${response.data.development_time_estimate_months} months`}</p>
                                <p>{ `Estimated Budget (INR) : ${response.data.estimated_budget_in_inr} `}</p>
                            </div>
                            <ResultCard title="Recommened Idea Improvements"  items={response.data.recommended_idea_improvements}/>
                        </div>
                        <div className="flex gap-7">
                            <ResultCard title="Top Risks"  items={response.data.risks_and_mitigation.top_risks}/>
                            <ResultCard title="Mitigation Strategies"  items={response.data.risks_and_mitigation.mitigation_strategies}/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}