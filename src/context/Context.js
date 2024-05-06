import { createContext, useState } from "react";
import runChat from "../utils/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentprompt,setRecentprompt] = useState("");
    const [prevprompt,setPrevprompt] = useState([]);
    const [show,setShow] = useState(false);
    const [loading,setLoading] = useState(false);
    const [result,setResult] = useState([]);
    
    const newChat = () => {
        setLoading(false);
        setShow(false)
    }
     
    const onSent = async(prompt) => {
        setResult("");
        setLoading(true);
        setShow(true);
        let response;
        if(prompt!== undefined) {
            response = await runChat(prompt);
            setRecentprompt(prompt)
        }
        else{
            setPrevprompt((prev) => [...prev,input])
            setRecentprompt(input)
            response = await runChat(input)
        }
        
        
        let responseArray = ( response.split("**") && response.split('*'));
        setResult(responseArray);
       
        setInput("");
        setLoading(false);
                
    }

    const contextvalue = {
        prevprompt,setPrevprompt,onSent,setRecentprompt,recentprompt,show,
        loading,result,input,setInput,newChat
    }

    return (
        <Context.Provider value={contextvalue}>
            {
                props.children
            }
        </Context.Provider>
    )
}

export default ContextProvider