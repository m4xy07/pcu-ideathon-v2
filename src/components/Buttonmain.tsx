import { MoveRight } from 'lucide-react'
import React from 'react'

interface ButtonmainProps extends React.PropsWithChildren {
  href: string;
}

const Buttonmain = (props: ButtonmainProps) => {
  return (
    <a href={props.href}>
      <button className="shadow-none button-light relative py-2 px-3 hidden md:flex rounded-lg font-medium text-sm text-[#2f3031] bg-[#e6e6e6] hover:bg-white  flex-row items-center justify-center gap-2 transition ease-in-out">
        <span>{props.children}</span>
        <MoveRight className="text-black w-4 h-4" />
      </button>
    </a>
  )
}

export default Buttonmain
