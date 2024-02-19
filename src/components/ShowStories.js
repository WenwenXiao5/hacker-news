import { Story } from "../components/Story";
import { useFetchStories } from "../hooks/fetchStories";

export const ShowStories = function(props) {
    const {type} = props
    const {stories, isLoading} = useFetchStories(type);
    
    return (
        <>
            {isLoading ? (
                <p> Loading ... </p>
            ) : (
                stories.map(story => 
                    <Story key={story.id} id={story.id} title={story.title} url={story.url} time={story.time} score={story.score} by={story.by} kids={story.kids}/>
                )
            )}
        </>
    )
}