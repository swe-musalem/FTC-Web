import { useEffect, useState } from "react";
import  Button  from "../components/Button";
import axios from "axios";
import Content from '../components/Content'
import { PongSpinner } from "react-spinners-kit";



// import FeaturedEventCard from "../components/FeaturedEventCard";


function Events({title}) {

   const [isloading, setIsLoading] = useState(true);


    useEffect(() => {
        document.title = title
        setIsLoading(true)
        axios.get('https://web-production-7c8a.up.railway.app/api/events/').then( response =>{
            setTimeout(() => {
                setData([...response.data])
                setIsLoading(false)
            }, 2000);

        }
           
        ).catch(error => 
            console.log(error)
            ).finally(()=>{
            })
       
        return () => {
            
        };
    }, []);

    const [data, setData] = useState([]);

    const [selectValue, setSelectValue] = useState('scaleup');

    

    // at first render before user choses is set to true to list all

    const handleSelect = (event,choice)=>{
        setSelectValue(choice.value)
    }

    const choices = [
        {label:'الفعاليات',value:'events',},
        {label:'سكيل اب',value:'scaleup',},
        {label:'مشاركات المدونة',value:'blog'},
    ]

    return (
        <div className="flex flex-col items-center w-full text-center animate-fade-down animate-once animate-ease-linear">
            <div className="p-10">
                <div className="text-3xl font-bold">الاحداث والفعاليات</div>
                <div></div>
                <div className="pt-8">تسلسل زمني يستعرض انجازات النادي واهم الاحداث والفعاليات</div>
            </div>
            <div className="bg-ftc-surface w-full h-screen text-ftc-primary flex  flex-col items-start py-4">
                <div className="text-ftc-primary flex w-full justify-around items-start">
                    {choices.map((choice)=>{
                        return <Button key={choice.value} className={`${selectValue === choice.value && 'bg-btncolor-secondary' }`} primary onClick={(event)=>{handleSelect(event,choice);}}   >{choice.label}</Button>
                    })}
                </div>
                <div className="w-full flex flex-col items-center animate-fade-down animate-once animate-ease-linear">
                {!isloading ? (
                        data.map((value) => {
                            if (value.category === selectValue) {
                            return (
                                <Content
                                key={value.id}
                                type={value.category}
                                date={value.date}
                                title={value.title}
                                /> 
                                
                            );
                            }
                            return null;
                        })
                        ) : (
                        <div className="h-screen">
                           <PongSpinner size={150} className='mx-auto mt-12' color="#6535BB" />
                        </div>
                        )}                                      

                </div>
                
            </div>
        </div>
    )
}


export default Events