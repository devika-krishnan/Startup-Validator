import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell, Legend } from "recharts";
import Radialbar from "./RadialBar";

export default function Mermaid({ resJson }) {
  const [res, setRes] = useState([]);
  const[tot,setTot] = useState(0)

  useEffect(() => {
    if (typeof resJson.success_probability_pie === 'object') {
      const converted = Object.entries(resJson.success_probability_pie).map(([name, value]) => ({
        name,
        value
      }));
      setRes(converted);
    }
  }, [resJson.success_probability_pie]);
  
  useEffect(()=>{
      const chart = {
          Great: 1.0,
          Good : 0.75,
          Moderate: 0.5,
          Low: 0.25,
          "Very Low": 0.15,
      };
      let total  = 0;
          res.forEach((item)=>{
              const tag = item.name.split('(')[1].split(')')[0]
              const val = parseFloat(item?.value);
              const modifier = chart[tag];
              total += val * modifier;
              {console.log(total)}
          })
          setTot(Number.isFinite(total) ? total : 0);
  },[res])
  const COLORS = [
  "#022b3a", // gunmetal
  "#1f7a8c", // teal
  "#007ea7" , 
  "#13315c",
  "#bfdbf7", // columbia_blue
  ];

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="p-4 rounded-xl bg-slate-100">
        <h1 className="font-general font-semibold text-lg text-center">Success Probability Breakdown</h1>
        <PieChart width={300} height={300}>
          <Pie
              data={res}
              dataKey="value"
              nameKey="name"
              fill="#8884d8"
              outerRadius={70} 
              label
            >
            {res.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
          </Pie>
          <Legend/>
          <Tooltip />
        </PieChart>
      </div>
      {/* {console.log(data)} */}
    <div className="px-5 py-3 rounded-xl bg-slate-100 h-full flex flex-col items-center justify-center">
      {<Radialbar data={tot} />}
    </div>
    </div>
  );
}
