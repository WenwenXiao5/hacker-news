
export const TitleLink = (props) => {
    const {title, url} = props
    return (
        <a href={url}>
            {title}
        </a>
    )
}