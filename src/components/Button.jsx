import classNames from "classnames"

export default function Button({children,className,primary,secondary,outline,surface,disabled,type,...rest}) {

    //  ? lookUp https://www.npmjs.com/package/classnames for more about classnames package


    const classname = classNames(className,'rounded-[8px] w-auto p-2 drop-shadow-lg text-center',{
        'bg-btncolor-primary text-white' : primary, 
        'bg-btncolor-secondary text-white':secondary,
        'bg-btncolor-surface text-ftc-primary ':surface,
        'bg-transparent border border-ftc-surface text-ftc-surface': outline ,
        'cursor-not-allowed opacity-25':disabled
    })

    return <button type={type} disabled={false || disabled} className={classname} {...rest}>
        {children}
       
    </button>
}