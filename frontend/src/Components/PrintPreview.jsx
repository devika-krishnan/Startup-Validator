import { usePDF } from "react-to-pdf";
import Rechart from './Rechart'

export default function PrintPreview({data,displayFn,idea,inev})
{
    const { toPDF, targetRef } = usePDF({
            filename: "simple-receipt.pdf",
            page: {orientation: 'landscape' }, // OR landscape
            canvas: { scale: 2 },
        });
    
    return(
        <div className="px-10 py-5 flex flex-col  rounded-xl min-w-96 bg-slate-100 font-general h-full"  >
            <div className="flex justify-between items-center">
                <div className="flex justify-center"><button onClick={()=>toPDF()}className="hover:text-rose-500 px-2 py-1 bg-sky-200 rounded-xl w-fit text-lg">Download</button></div>
                <div className="flex justify-center"><button onClick={()=>displayFn(false)}className="hover:text-rose-500 px-2 py-1 bg-sky-200 rounded-xl w-fit text-lg">Cancel</button></div>
            </div>
            <div className="flex flex-col justify-center items-center px-3" ref={targetRef}>
            <p className=" font-bold text-4xl text-center font-heading py-2 mb-5">Startup Analysis Report</p>
                <p className="capitalize font-bold text-teal-900 pb-2 ">Your Idea: {idea}</p>
                <div className="flex gap-3 ">
                    <Rechart resJson={data} />
                    <div className="flex flex-col gap-3 p-4">
                            <div className="font-space-grotesk text-base flex gap-2 items-center">
                                <p className="font-semibold text-lg">1. Innovation Score:</p>
                                <p>{inev}/10 ,</p>
                                <p className="font-semibold text-lg">Market Demand:</p>
                                <p>{data.market_demand_score}/10</p>
                            </div>
                            <div id="text" className="font-space-grotesk text-base flex gap-3 items-center">
                                <p className="font-semibold text-lg">2. Suggested Tools and Services:</p>
                                {data.suggested_tools_services.map((item ,index)=> (
                                    <p key={index}>{item}</p>))}
                            </div>
                            <div id="text" className="font-space-grotesk text-base flex flex-col ">
                                <p className="font-semibold text-lg ">2. Recomended Idea improvements</p>
                                {data.recommended_idea_improvements.map((item ,index)=> (
                                    <p key={index}>{item}</p>))}
                            </div>
                            <div id="text" className="font-space-grotesk text-base flex flex-col">
                                <p className="font-semibold text-lg">3. Top Risks</p>
                                {data.risks_and_mitigation.top_risks.map((item ,index)=> (
                                    <p key={index}>{item}</p>))}
                        </div>
                            <div id="text" className="font-space-grotesk text-base flex flex-col">
                                <p className="font-semibold text-lg">4. Mitigation Strategies</p>
                                {data.risks_and_mitigation.mitigation_strategies.map((item ,index)=> (
                                    <p key={index}>{item}</p>))}
                            </div>
                            <div id="text" className="font-space-grotesk text-base flex flex-col">
                                <p className="font-semibold text-lg">5. Tech Stack Details</p>
                                {Object.entries(data.tech_stack_details).map(([key, value])=>({key,value})).map((item,index)=> <div key={index}  className=" flex gap-3 text-black">
                                    <p className="text-black font-semibold ">{item.key}: </p>
                                    <p className="">{item.value}</p>
                                </div>)}
                            </div>
                        <div className="flex gap-2 items-center ">
                            <p className=" font-semibold text-lg">6. Budget Splitup: </p>
                            {Object.entries(data.budget_split).map(([key, value])=>({key,value})).map((item,index)=> <div key={index}  className=" flex gap-3 text-black">
                                <p className="text-black font-semibold">{item.key}: </p>
                                <p className="">{item.value}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}