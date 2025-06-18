import QueryBox from "../Components/QueryBox"
export default function Home(){
    return(
    <div className="bg-[#FAFAFB] h-svh py-10 w-full flex flex-col items-center gap-16 justify-center">
      <h1 className="text-6xl text-slate-700 font-heading font-bold">Startup Validator</h1>
      <div className="flex flex-col justify-center items-center w-full ">
        <QueryBox/>
      </div>
    </div>
    )
}