import { useEffect , useState } from "react"

const useCounter = ( initialValue : number = 0 ) : [ number , () => void , () => void ] => {
    const [ count , setCount ] = useState<number> ( initialValue );

    const increment = () => setCount ( (prev) => prev + 1 )
    const decrement = () => setCount ( (prev) => prev - 1 )
    return [ count , increment , decrement ];
}

const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect ( () => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const response = await fetch(url);
                if (!response.ok) { // noinspection ExceptionCaughtLocallyJS
                    throw new Error("Could not fetch data");
                }
                const result: T = await response.json();
                setData(result);
            }catch (e){
                setError(e instanceof Error? e.message : "Unknown error")
            }finally{
                setLoading(false)
            }
        }
        fetchData().then()
    } , [url] );
    return [data,loading,error]
}
const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(()=>{
        try{
            const item = localStorage.getItem(key);
            return item? JSON.parse(item) : initialValue;
        }catch (e) {
            return initialValue;
        }
    })
    useEffect ( () => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    } , [key,storedValue] );
    return [storedValue,setStoredValue];
}

export { useCounter,useFetch ,useLocalStorage}