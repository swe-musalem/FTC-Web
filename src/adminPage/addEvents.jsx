
import {  useState } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase,set,ref } from "firebase/database";
import { Label,Textarea,Dropdown } from "flowbite-react";
import Button from '../components/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function AddEvents() {
    
    
   
    const [label,setLabel] = useState('');
    
    const [type,setType] = useState('event');


    const dropDown = [
      {value:'email'},
      {value:'share'},
      {value:'event'},
    ]

    const renderDropdown = dropDown.map( (item) => {

      return <Dropdown.Item key={item.value} onClick={()=>{setType(item.value)}} >{item.value}</Dropdown.Item>
    })


    const [startDate,setStartDate] = useState(new Date());
    const [name,setName] = useState('');

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
          'startDate':startDate.toDateString(),
          'name':name,
          }
        })
        setLabel('')
        setName('')
        
      }
      


    const handelLabel = (e) =>{
        setLabel(e.target.value)
    }

    const handelSelectChange = (data)=> {
      setStartDate(data)
    }

    const handleDateChange = (data)=>{
      setStartDate(data)
      

    }
   
    const handelName = (e)=>{
      setName(e.target.value)
    }


    return <div className=" p-4 flex flex-col justify-around gap-y-8 w-1/2">
      
           
            <Textarea 
            onChange={handelLabel} 
            value={label}
            className="w-1/2"
            id="name"
            placeholder="Enter event Title:  "
             />
            <Dropdown
              label={type}
              size="sm"
              
              >
                {renderDropdown}
                
              </Dropdown>

            <DatePicker
              className="text-tertiary rounded-md"
              onSelect={handelSelectChange}
              selected={startDate}
              onChange={handleDateChange}/>
              
              <Textarea 
            onChange={handelName} 
            value={name}
            className="w-1/2"
            id="name"
            placeholder="Enter Name :  "
             />
            <Button primary  onClick={handleSubmit}  >Add event</Button>

            
    </div>
    
}

export default AddEvents