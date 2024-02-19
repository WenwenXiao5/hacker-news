import { Routes, Route } from "react-router-dom";
import { ShowStories } from '../components/ShowStories';

export const AppRouter = function() {
    return (
        <Routes>
            <Route path="/" element={<ShowStories type={"top"}/>}/>
            <Route path="/top" element={<ShowStories type={"top"}/>}/>
            <Route path="/new" element={<ShowStories type={"new"}/>}/>
            <Route path="/best" element={<ShowStories type={"best"}/>}/>
        </Routes>
    )
}
