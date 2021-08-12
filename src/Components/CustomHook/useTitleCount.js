import { useEffect } from "react";

// file name should be as useAnyName.js
// function name also be same

const useTitleCount = (count) => {
    useEffect(() => {
        console.log("useEffect First");
        // change title in js
        if(count>=1){
            document.title = `Chats (${count})`
        }else{
            document.title = `Chat`
        }
        // dependency list is use to run conditionaly 
        // in this case when count value is updated this useEffect will run
    }, [count])
}

export default useTitleCount