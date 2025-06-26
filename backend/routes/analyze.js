const express = require('express');
const router = express.Router();
const axios = require('axios');
const { jsonrepair } = require('jsonrepair');

async function prompt(idea)
{
const template = 
    `You are an expert startup evaluation assistant. Your task is to analyze the startup idea provided and return ONLY a valid JSON object in the following exact format:
    {
    "recommended_tech_stack": ["<tech1>", "<tech2>", "..."],
    "estimated_budget_in_inr": "<range in lakhs>",
    "innovation_score": <1 to 10>,
    "development_time_estimate_months": <number>,
    "market_demand_score": <1 to 10>,
    "suggested_tools_services": ["<tool1>", "<tool2>", "..."],
    "recommended_idea_improvements": ["<improvement1>", "<improvement2>", "..."],
    "risks_and_mitigation": {
        "top_risks": ["<risk1>", "<risk2>", "<risk3>"],
        "mitigation_strategies": ["<strategy1>", "<strategy2>", "<strategy3>"]
    },
    "success_probability_pie": {
        "Market Fit (Great)": 35,
        "Innovation (Moderate)": 30,
        "Feasibility (Great)": 20,
        "Risk Factors (Low)": 15
    }
    }
    - The success_probability_pie field must be a JSON object where keys are labels ('Great','Good','Moderate', 'Low' , 'Very Low') and values are numbers (representing percentages).
    - If the startup idea is empty, nonsensical, or lacks substance if its one word or not clear, respond ONLY with:
    { "error": "Invalid startup idea. Please provide a meaningful description." }

    - Do NOT include explanations, markdown, or any text outside the JSON.
    - Ensure the entire response is a valid JSON object.
    - Return ONLY the JSON object.

    Startup Idea: ${idea}
    Return ONLY the JSON object.`;


    try{
        const data = {
            model : 'llama3:8b',
            prompt : template,
            stream : false
        }
        res = await axios.post('http://localhost:11434/api/generate', data)
        res = res.data.response.trim()
        const repaired = jsonrepair(res)
        const parsed = JSON.parse(repaired)
        console.log(parsed)
        if(parsed.error) throw new Error(parsed.error); 
        return parsed
    }
    catch(err){
        console.error("Error in prompt function:", err);
        throw err;  // Re-throw to be handled by the route
    }
}

router.post('/validate', async (req, res)=>{
    if(!req.body.idea){
        return res.status(404).json({
            error: 'Idea field empty'
        })
    }

    try{
        const response = await prompt(req.body.idea)
        return res.json({
            message: 'Success',
            data: response
        })
    }
    catch(err){
        console.log(err.error)
        console.log('blehhhhhh')
        return res.json({
            message: 'Failed',
            error:err.message
        })
    }
})

module.exports = router;