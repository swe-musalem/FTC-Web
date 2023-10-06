import {FaLinkedin} from 'react-icons/fa'
import {RiTwitterXFill} from 'react-icons/ri'
 
function GraduetsCard({name,skills,gradDate,img,linkedin,twitter}) {

    return <div className="bg-surface sm:w-52 w-44 drop-shadow-lg rounded-md text-black">
        <img src={img} className="w-52 h-52 rounded-t-md" alt="" />
        <div className="flex flex-col items-center gap-y-2 py-2">
            <div className="text-primary">{skills}</div>
            <div className="text-sm">{name}</div>
            <div className="text-tertiary">{gradDate} خريج</div>
            <hr className="w-1/2 border-1 border-gray-400" />
            <div className='flex gap-x-4 text-2xl text-secondary'>
                {linkedin !== "" &&<a href={linkedin}><FaLinkedin/></a>}
                {twitter !== "" && <a href={twitter}><RiTwitterXFill/></a>}
            </div>
        </div>
      
    </div>
    
}


export default GraduetsCard