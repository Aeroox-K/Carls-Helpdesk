import Image from 'next/image'
import Link from 'next/link'
import Logo from './Carlshelpdesk.png'


export default function Home() {
    return (
      <nav className='flex justify-between bg-white'>
       <div className='flex items-center gap-3'>
       <Link href="/">
        <Image 
          src={Logo}
          alt='Dojo Helpdest logo'
          width={100}
          quality={100}
          placeholder='blur'
        />
        </Link>

        <div className='md:visible max-md:hidden' >
        <Link href="/"><h1 className='text-2xl'>Carls Helpdesk</h1></Link>
        </div>

       </div>

        <div className='flex md:gap-14 gap-5 md:mr-10 mr-5 font-semibold text-xl'>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        </div>
      </nav>
    )
  }
  