import Image from "next/image";
import moon from '../../public/001-moon.png';
import white from '../../public/001-white-balance.png';
import {useState} from "react";

export default function Home() {
  const [modeToggle, setModeToggle] = useState(false);

  return (
    <div className={!modeToggle ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-800 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="dark:text-white text-3xl font-bold  mb-8">coming soon...</span>
          <Image src={!modeToggle ? white : moon} alt="moon" onClick={() => setModeToggle(!modeToggle)} />
        </div>
      </div>
    </div>
  )
}
