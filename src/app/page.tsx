import LoginPage from "./sign-in/page"

const Homepage = () => {
  return (
    <div className='bg-fuchsia-200 w-full h-[710px] flex items-center relative flex-col'>
      <div className="font-bold text-[35px] relative  top-28 ">Welcome to BSA School</div>
         <div className=" relative top-40">
         <LoginPage/>
         </div>
    </div>
  )
}

export default Homepage