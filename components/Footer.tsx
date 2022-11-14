import { FC } from "react"
import Image from 'next/image'
import elonDAOLogo from '../public/elonDAOLogo.png'

const Footer: FC = () => {


  return (
    <footer className="text-center p-5">
     <p>Visually see Anybodies holder around you</p>
     <p>Ease meet-ups with fellow Anybodies</p>

     {/* desktop */}
     <div className="hidden md:inline">
      <div className="flex items-center justify-center space-x-4 pt-5">
          <p>Brought to you by</p>
          <a href="https://twitter.com/AnybodiesDAO" target="_blank">
            <Image 
              src={elonDAOLogo}
              alt="elonDaoLogo"
            />
          </a>
          <p>Developed by  <a href="https://twitter.com/t0n1zz" target="_blank">PamanBeruang</a></p>
      </div>
     </div>

     {/* mobile */}
     <div className="md:hidden">
      <div className="text-center pt-5">
        <p>Brought to you by</p>
        <a href="https://twitter.com/AnybodiesDAO" target="_blank">
          <Image 
            src={elonDAOLogo}
            alt="elonDaoLogo"
            className="mx-auto pt-2 pb-2"
          />
        </a>
        <p>Developed by <a href="https://twitter.com/t0n1zz" target="_blank">PamanBeruang</a></p>
      </div>
     </div>
    </footer>
  )
}

export default Footer