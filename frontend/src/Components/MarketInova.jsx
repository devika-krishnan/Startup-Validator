import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

export default function MarketInova({inov,demand})
{
    return(
                <div className="px-6 py-5 flex gap-20 rounded-xl bg-slate-100 items-center ">
                    <h1 className="text-xl font-general font-semibold text-center">Innovation & Market Analysis</h1>
                    <div className="flex flex-col gap-5 items-center font-semibold justify-center">
                        Innovation Score:
                        <div className="w-28">
                            <CircularProgressbar 
                                text={`${inov} / 10`}
                                value={inov*10} 
                                styles={{
                                    path: { stroke: "#1f7a8c"},
                                    text: { fill: "#022b3a", fontSize: '18px', fontWeight: 'bold' }
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center font-semibold ">
                        Market Demand
                        <div className="w-28">
                        <CircularProgressbar 
                            text={`${demand} / 10`}
                            value={demand*10} 
                            styles={{
                                path: { stroke: "#1f7a8c"},
                                text: { fill: "#022b3a", fontSize: '18px', fontWeight: 'bold' }
                            }}
                            />
                        </div>
                    </div>
                </div>
    )
}