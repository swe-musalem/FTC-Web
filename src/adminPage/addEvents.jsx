
import { createContext, useState } from "react";
import useDB from "../customHooks/useDB";
import Button from "../components/Button";
import { useContext } from "react";
import DBContext from "../firebase/DBContext";

function AddEvents() {


    const {handelSubmit} = useContext(DBContext);


    const [labelInput,setLabelInput] = useState('');

    const handelLabelInput = (e) =>{
        setLabelInput(e.target.value)
    }

    const handelSendToDBButton = ()=>{
        handelSubmit(labelInput,labelInput,labelInput,labelInput)
    }


    return <div>
            <input type="text" onChange={handelLabelInput} />
            {/* <Button primary onClick={handelSendToDBButton}>Add event</Button> */}
            <button onClick={handelSendToDBButton}>SEND</button>
    </div>
    
}

export default AddEvents