import github from './../images/github-mark.svg'



export default function ProjectItem({title, subtitle, link, tags, style, children}){

    const tagList = tags.map(t => {
        return <span className="tag">{t}</span>
    })

    return (
        <div className="infoContainer" style={style}>
        <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <h1>{title}</h1>

            <a href={link}>
                <img loading="lazy" src={github} alt="github" className="githubMark" />
            </a>

        </span>

        <p>{subtitle}</p>

        <div >
            Tags:
            {tagList}
        </div>

        {children}

        
    </div>

    
    );
};