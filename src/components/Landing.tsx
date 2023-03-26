

export interface LoggingIn {
  flipper: () => void
}
export default function Landing({flipper}: LoggingIn) {
  return (
    <div>
      <span className="flex fixed h-[100px] items-center bg-maristblack w-screen">
        <img
          src="/src/assets/marist-logo.png"
          className="w-[230px] h-[50px]"
        />
        <h1 className="font-marist pl-4 text-[60px] text-redfox pt-[13px]" >FoxMarket</h1>
      </span>
      <div className="flex font-thin flex-col gap-4 items-center justify-center bg-gray-400 h-screen">
        <p className="text-3xl">Welcome to FoxMarket! This is a platform for students to buy and sell items from other students.</p>
        <button className="bg-redfox rounded-lg" onClick={() => flipper()}>
          <p className="px-10 py-4 font-bold">Login</p>
        </button>
      </div>

    </div>
  )
}