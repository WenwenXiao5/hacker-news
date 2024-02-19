import axios from "axios";
import { BASE_URL, GET_STORY_URL } from "../utils/constants";

export const getStory = async (id) => {
    const getStoryUrl = `${BASE_URL}${GET_STORY_URL}${id}.json`
    try {
        const response = await axios.get(getStoryUrl);
        return response.data;
    } catch {
        console.log(`Error while getting story for id ${id}`);
    }
}

export const getStoryIds = async (type = "top") => {
    const getStoryIdsUrl = `${BASE_URL}${type}stories.json`;
    try {
        const response = await axios(getStoryIdsUrl);
        return response.data;
    } catch {
        console.log(`Error while getting storyIds for type ${type}`);
    }
}

export const getStories = async (type = "top") => {
    try {
        const storyIds = await getStoryIds(type);
        const stories = await Promise.all(storyIds.slice(0, 30).map(storyId => getStory(storyId)))
        return stories;
    } catch {
        console.log(`Error while getting stories for type ${type}`);
    }   
}