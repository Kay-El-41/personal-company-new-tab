import { MdNotificationsNone, MdNotificationsActive } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="px-10 py-3 bg-purple-500 flex justify-between items-center">
      <div>
        <h1 className=" text-white font-bold text-3xl select-none">DoraTAB</h1>
      </div>
      <div>
        <MdNotificationsNone className='text-3xl text-white'/>
      </div>
    </nav>
  )
}

export default Navbar
