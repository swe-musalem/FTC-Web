import { Card } from "@tremor/react"
import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import axios from "axios";
import { parseISO, format } from 'date-fns';
function Logs() {


  const [data, setData] = useState([]);

  const token = Cookies.get('token')

  useEffect(() => {
    const getData = async ()=>{
      const response = await axios.get('https://ftc-fast-api.onrender.com/logger',{
            headers:{
              Authorization: `Bearer ${token}`
            }
          }
      )
      setData(response.data.data)
    }
    
    getData();
    // const intervalId = setInterval(getData, 1000);
    // return ()=>clearInterval(intervalId)
    
    
  }, []);

  

  return <div className="h-screen bg-ftc-gray flex flex-col gap-y-2 p-20 px-10 w-full" >
    <div className="text-3xl">السجل</div>
    <Card>
      <div className="text-gray-400 flex flex-col-reverse divide-y gap-y-2">
      {data.map((log)=>{
        return <div className="flex justify-between w-full flex-row-reverse " key={log.id}>
          <div>{log.data}</div>
          <div>{format(parseISO(log.created_at), 'MMMM do, yyyy, h:mm a')}</div>
        </div>
          })}
      </div>
    </Card>
  </div>
}

export default Logs