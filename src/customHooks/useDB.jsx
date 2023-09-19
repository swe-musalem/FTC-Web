

import { useContext } from "react";
import DBContext from "../firebase/DBContext";

function useDB() {
    return useContext(DBContext);
}

export default useDB