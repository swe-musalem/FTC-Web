import { useEffect } from "react"

function Gradutes({title}) {
    useEffect(() => {
        document.title = title
      
        return () => null }, [])


    return <div className="animate-fade-down animate-once animate-ease-linear">coming soon</div>
}

export default Gradutes