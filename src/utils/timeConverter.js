import { DAY_IN_SEC, HOUR_IN_SEC, MIN_IN_SEC } from "./constants";

export const convertTime = (time) => {
    const currTime = Date.now();
    const dateObject = new Date(time * 1000);
    const timeDiffInSec = (currTime - dateObject) / 1000;

    const days = Math.floor(timeDiffInSec / DAY_IN_SEC);
    const hours = Math.floor(timeDiffInSec / HOUR_IN_SEC);
    const minutes = Math.floor(timeDiffInSec / MIN_IN_SEC);
    const seconds = Math.floor(timeDiffInSec);
    
    if (days > 0) {
        return `${days} days ago`;
    } else if (hours > 0) {
        return `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}