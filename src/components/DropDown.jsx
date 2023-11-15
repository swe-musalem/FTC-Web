import { Select, SelectItem } from "@tremor/react";
import classNames from "classnames";
import { useState } from "react";


function DropDown({value,setValue,options,placeholder,className}) {

    
    const handleSelect = (value)=>{
        setValue(value)
    }

    return (
       
        <div className={className}  >
            <Select placeholder={placeholder}   value={value} onValueChange={setValue}  >
                {options.map((item)=>{
                    return <SelectItem className="text-ftc-primary"  value={item.dbvalue} defaultValue={''} key={item.dbvalue} onSelect={()=>{handleSelect(item.dbvalue)}}>
                                {item.label}
                            </SelectItem>
                })}
               
            </Select>
        </div>
     
    );
}

export default DropDown