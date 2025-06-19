import { useLocation } from "react-router-dom"

export default function Result()
{
    const location = useLocation()
    const response = location.state;
    return(
        <div className="h-svh w-full flex flex-col items-center justify-center text-6xl">
            <p>{response.message}</p>
            <p>{response.user}</p>
        </div>
    )
}