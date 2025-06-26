import QueryBox from "../Components/QueryBox"
export default function Home(){
    return(
    <div className=" bg-[#bfdbf7] h-svh py-10 w-full flex flex-col items-center gap-16 justify-center">
      <div className="flex flex-col justify-center items-center w-full h-full  ">
        <QueryBox/>
      </div>
    </div>
    )
}