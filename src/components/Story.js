import React from "react";
import { TitleLink } from "./TitleLink";
import { convertTime } from "../utils/timeConverter";

export const Story = (props) => {
    const {id, title, url, time, score, by, kids} = props;
    const timeDiffString = convertTime(time);

    return (
        <>
            <TitleLink url={url} title={title} />
            <div style = {{display: 'flex'}}>
                <span style = {{ whiteSpace: 'nowrap' }}>
                    {score} points {' '} |
                </span> 
                <span style = {{ whiteSpace: 'nowrap' }}>
                    by {by} {' '} |
                </span> 
                <span style = {{ whiteSpace: 'nowrap' }}> 
                    {timeDiffString} {' '} |
                </span>
                <span style = {{ whiteSpace: 'nowrap' }}> 
                    {kids && kids.length > 0 ? kids.length : 0 } {'comments '} |
                </span>
            </div>
        </>
    )
}