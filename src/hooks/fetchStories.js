import { useState, useEffect } from "react";
import { getStories } from "../apis/apis";

export const useFetchStories = (type = "top") => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStories(type).then((res) => {
            setIsLoading(false);
            setStories(res);
        }).catch(() => {
            setIsLoading(false);
        })
    }, [type])

    return {stories, isLoading};
}
