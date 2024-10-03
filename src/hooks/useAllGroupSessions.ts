import axios from "axios";
import { useEffect, useState } from "react";
import { Groupsession } from "../utils/groupsession";

export const useAllGroupSessions = () => {
    const [data, setData] = useState<Groupsession[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/json/response.json');
                setData(response.data.results);
                setLoading(false)
            } catch (err) {
                console.error(err); 
                setError('Error fetching data');
            } 
        };
        
        fetchData();
    }, []);

    return { data, error, loading }; 
};
