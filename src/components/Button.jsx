import classNames from "classnames"

export default function Button({children,className,primary,secondary,surface,...rest}) {
    console.log(primary)

    const x = 'bg-black'

    //  ? lookUp https://www.npmjs.com/package/classnames for more about classnames package

    const classname = classNames(rest.className,'rounded-[8px] w-auto p-2 drop-shadow-lg text-center',{
        'bg-btncolor-primary text-white' : primary, 
        'bg-btncolor-secondary text-white':secondary,
        'bg-btncolor-surface text-primary ':surface,
    })

    return <button className={classname} {...rest}>
        {children}
       
    </button>
}