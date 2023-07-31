import { todayDate } from '../util/dateTime'

const Navbar = () => {
  return (
    <nav className="px-10 py-3 bg-purple-500 flex justify-between items-center">
      <div>
        <h1 className=" text-white font-bold text-3xl select-none">
          JOB DASHBOARD
        </h1>
      </div>

      <div className="text-white font-semibold">{todayDate}</div>
    </nav>
  )
}

export default Navbar
