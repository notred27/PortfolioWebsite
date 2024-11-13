

export default function SectionTitle({title, color}) {


    return (
        <div className="sectionTitle">
            <div style={{backgroundColor:`${color}`}}></div>
            <h1>{title}</h1>
        </div>
    )
}