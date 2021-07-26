import {useEffect, useState} from "react";
import axios from "axios";

const useGETapi = (url, mapResponseToData, initialData) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(initialData);
    const [error, setError] = useState('')

    useEffect(() => {
        let didCancel = false;
        axios.get(url).then(response => {
            // console.log('response = ', response);
            if(!didCancel) {
                setIsLoading(false);
                setData(mapResponseToData(response))
            }
        })
            .catch(error => {
                setError('Something went wrong')
                setIsLoading(false)
            })
        return () => didCancel = true;
    }, [url, mapResponseToData]);

    return {
        isLoading,
        data
    }
};
export default useGETapi;