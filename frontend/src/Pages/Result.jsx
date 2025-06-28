import { useLocation, useNavigate } from "react-router-dom"
import ResultCard from "../Components/ResultCard";
import MarketInova from "../Components/MarketInova";
import img from '../assets/error.png'
import Rechart from "../Components/Rechart";
import { useState } from "react";
import SplitPopup from "../Components/SpiltPopup";
import TechStack from "../Components/TechStack";
import PrintPreview from "../Components/PrintPreview";

export default function Result()
{
    const [budgetDisplay, setBudgetDisplay] = useState(false)
    const [techSplitDisplay, setTechSplitDisplay] = useState(false)
    const [printPreview, setPrintPreview] = useState(false)

    const location = useLocation()
    const {response,idea} = location.state ;
    const error = (!response || response?.message == 'Failed')
    let inev =""
    if(!response?.error)
        {
            if(response.data.innovation_score==null)  inev = response.data.invention_score
            else   inev = response.data.innovation_score
        }
        const navigate = useNavigate()
        {console.log(response)}
        return(
        <div className="bg-[#bfdbf7]  min-h-screen overflow-scroll">
            {error && <div className="w-full text-rose-600 flex flex-col justify-center items-center px-7 py-10 gap-2 ">
                <h1 className="text-6xl font-heading font-bold ">{response.message}</h1>
                <img src={img}/>
                <p className="text-2xl text-rose-600" >{response.error}</p>
            </div>}
            <button onClick={()=>navigate('/')} className="text-md fixed top-6 left-6 z-10 hover:bg-sky-900 border-2 bg-sky-950 rounded-xl border-sky-950 text-white px-3 py-1 ">Back</button>
            <button onClick={()=>navigate('/')} className="text-lg fixed bottom-6 right-6 z-10 hover:bg-sky-900 border-2 bg-sky-950 rounded-xl border-sky-950 text-white px-2 py-1 ">New Idea +</button>
            {!error && <div className="w-full flex flex-col items-center  px-3 gap-7 py-3 ">
            <button onClick={()=>setPrintPreview(true)} className="text-base fixed top-6 right-6 z-10 hover:bg-sky-900 border-2 bg-sky-950 rounded-xl border-sky-950 text-white px-3 py-1  justify-center flex items-center gap-3">
                Download as pdf 
                <span className="material-symbols-outlined">picture_as_pdf</span>
            </button>
            {printPreview && <div className="py-3 flex z-50 rounded-xl bg-sky-200 bg-opacity-80 fixed inset-0 w-full justify-center items-center"><PrintPreview data={response.data} displayFn={setPrintPreview} idea={idea} inev={inev}/></div>}
            {budgetDisplay && <div className="py-3 flex z-50 rounded-xl bg-sky-200 bg-opacity-80 fixed inset-0 w-full justify-center items-center"><SplitPopup data={response.data.budget_split} displayFn={setBudgetDisplay} title={"Budget SplitUp"}/></div>}
            {techSplitDisplay && <div className="py-3 flex z-50 rounded-xl bg-sky-200 bg-opacity-80 fixed inset-0 w-full justify-center items-center"><SplitPopup data={response.data.tech_stack_details} displayFn={setTechSplitDisplay} title={"Tech Stack Usage"}/></div>}
            <div className=" flex justify-center gap-7 w-full items-center" >
            <h1 className="text-5xl font-heading font-semibold text-center">Analysis Report</h1>
            </div>
                {/* Report */}
                <div className="flex gap-7">
                    <div className="max-w-[400px] flex gap-3 flex-col">
                    <div className="px-7 py-2 flex flex-col  rounded-xl bg-slate-100 w-96 ">
                        <p className="capitalize font-bold text-teal-900 text-sm">Your Idea: {idea}</p>
                    </div>
                        <Rechart resJson={response.data} />
                    </div>
                    <div className="flex flex-col justify-center gap-3 ">
                    <MarketInova inov ={inev} demand={response.data.market_demand_score} />
                        <div className="flex gap-7 flex-wrap">
                            <TechStack title="Recommened Tech Stack"  items={response.data.recommended_tech_stack} moreDetails={setTechSplitDisplay}/>
                            <div className="px-7 py-5 flex flex-col gap-3 rounded-xl bg-slate-100 min-w-96 justify-between">
                                <h2 className="text-lg font-general font-semibold">Metrics Summary</h2>
                                <div>
                                    <p>{ `Estimated Time: ${response.data.development_time_estimate_months} months`}</p>
                                    <p>{ `Estimated Budget (INR) : ${response.data.estimated_budget_in_inr} `}</p>
                                </div>
                                <button onClick={()=>setBudgetDisplay(true)} className="hover:text-sky-500 px-2 py-1 bg-sky-200 rounded-xl mt-2">More details...</button>
                            </div>
                        </div>
                        <div className="flex gap-7">
                            <ResultCard title="Suggested Tools and Services"  items={response.data.suggested_tools_services}/>
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