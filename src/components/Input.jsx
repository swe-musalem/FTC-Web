import classNames from "classnames"



function Input({textarea,label,className,invalid,formHook,...rest}) {

    const classname = classNames(className,'w-full text-sm bg-ftc-surface py-1 focus:outline-none text-black')


    

    return <div className={`border p-2 px-4 rounded-lg my-2 ${invalid && 'border-red-400'}`}>
        <div className="text-ftc-secondary text-sm">{label}</div>
        
        {!textarea && <input {...rest}  {...formHook} className={classname}    />}
        {textarea && <textarea  {...formHook} className="w-full bg-ftc-surface text-black h-24" rows="2"></textarea>}
    </div>
}

export default Input