

export default function Header({title, color}) {
    return (
        <div className="subtitleHeader" style={{boxShadow:`-20px 20px ${color}`}}>
            <h1 style={{padding:"10px", margin:"0px 0px 30px 0px"}}>{title}</h1>
        </div>
    )
}