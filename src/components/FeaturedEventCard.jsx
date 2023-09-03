
function FeaturedEventCard({text,src}) {



    return <div className="flex justify-center w-full px-2">
        <div className='flex flex-col justify-between  items-center  rounded-xl '>
            <img className="rounded-tl-xl rounded-tr-xl sm:h-56 "   src={src} alt="xx"  />
            <div className='bg-white bg-opacity-20 w-full text-center rounded-bl-xl rounded-br-xl '><div className='text-white opacity-100 z-10'>{text}</div></div>
        </div>
    </div>
}


export default FeaturedEventCard
