
import { createContext, useState } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase,set,ref } from "firebase/database";
import { Label,Textarea } from "flowbite-react";


function AddEvents() {
    
    
    // const {handleSubmit} = useContext(DBContext);
    
    // console.log(typeof handleSubmit)
    const [label,setLabel] = useState('');
    const [type,setType] = useState('email');
    const [date,setDate] = useState('2022');
    const [name,setName] = useState('aoo');

    const firebaseConfig = {
        apiKey: "AIzaSyBuU9wYwa3AYahH84g2WYokGprKZR2uqXs",
        authDomain: "fir-demo-256e4.firebaseapp.com",
        databaseURL: "https://fir-demo-256e4-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fir-demo-256e4",
        storageBucket: "fir-demo-256e4.appspot.com",
        messagingSenderId: "339114392806",
        appId: "1:339114392806:web:561ffbfe47e464542e0f27",
        measurementId: "G-8JYN4MTYRF"
      };
      
      const app = initializeApp(firebaseConfig);
      const database = getDatabase()

      const handleSubmit = () => {
         set(ref(database,'events/'+label),{
            data:{
          'label':label,
          'type':type,
          'date':date,
          'name':name,
          }
        })
      }
      


    const handelLabel = (e) =>{
        setLabel(e.target.value)
    }

   



    return <div>
            <Textarea onChange={handelLabel} helperText={'Event name that will appear to users'} className="w-1/2" />
            {/* <Button primary onClick={handelSendToDBButton}>Add event</Button> */}
            <button onClick={handleSubmit}>SEND</button>
            
    </div>
    
}

export default AddEvents