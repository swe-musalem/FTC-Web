import { initializeApp } from "firebase/app";
import { getDatabase,set,ref } from "firebase/database";



function AddEvents(params) {
    
}



function DBContext() {
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
      set(ref(database,'events'),{
        event:'someevent'
      })
}
export default DBContext