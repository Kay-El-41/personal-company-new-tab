import React from 'react'
import figmaLogo from '../../assets/figma-logo.svg'

import { BsSkype, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FiFigma } from 'react-icons/fi'

const ShortCutBox = ({ children, title, linkTo }) => {
  return (
    <div className=" shadow-md hover:shadow-lg p-5 rounded-lg w-[100px] h-[136px]">
      <Link to={linkTo} target="_blank">
        {children}
        <p className="mt-3 text-center">{title}</p>
      </Link>
    </div>
  )
}

const ShortcutTab = () => {
  return (
    <section className="flex flex-col p-4 w-full h-[250px] bg-white shadow-md rounded-md col-span-2 col-start-2">
      <div className="relative flex justify-between items-center text-xl border-b-2 pb-4 border-purple-200">
        <h2 className="font-semibold">Work Shortcuts</h2>
      </div>
      {/* ShortCut Box */}
      <div className="h-full flex items-center flex-wrap justify-start gap-3">
        <ShortCutBox
          title={'Skype'}
          linkTo={'https://web.skype.com/?openPstnPage=true'}
        >
          <BsSkype className=" text-6xl text-[#00aff0]" />
        </ShortCutBox>

        <ShortCutBox title={'Github'} linkTo={'https://github.com/'}>
          <BsGithub className=" text-6xl text-[#211f1f]" />
        </ShortCutBox>

        <ShortCutBox title={'Figma'} linkTo={'https://figma.com/'}>
          <img src={figmaLogo} alt="" className="w-10 mx-auto" />
          {/* <FiFigma className=" text-6xl text-[#fd3d39]" /> */}
        </ShortCutBox>
      </div>
    </section>
  )
}

export default ShortcutTab
