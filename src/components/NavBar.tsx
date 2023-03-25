import Login from "./Login";


export default function NavBar() {
  return (
    <div className="flex fixed h-[100px] items-center bg-maristblack w-screen">
      <img
        src="/src/assets/marist-logo.png"
        className="w-[230px] h-[50px]"
      />
      <h1 className="font-marist pl-4 text-[60px] text-redfox pt-[13px]" >FoxMarket</h1>
      <Login />
    </div>
  )
}