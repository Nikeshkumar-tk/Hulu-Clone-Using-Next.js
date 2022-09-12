import Image from "next/image"
import {HomeIcon,LightningBoltIcon,CollectionIcon,BadgeCheckIcon,SearchIcon,UserIcon} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"
const Header = () => {
  return (
    <header className="flex flex-col  sm:flex-row m-5 justify-between items-center h-auto pt-3">
        <div className="flex flex-grow justify-evenly max-w-2xl space-x-2">
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        
        <img src="https://firebasestorage.googleapis.com/v0/b/miniprojectprofile.appspot.com/o/hulu-white-logo-alphabet-text-word-symbol-transparent-png-1493374.png?alt=media&token=0e658e83-9c05-487d-a629-8102fa47bc98" 
        width={90} height={70}className="object-contain"></img>
        
    </header>
  )
}

export default Header