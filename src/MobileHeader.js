

export default function MobileHeader({title, color, side}) {
    if (side == "right"){
        return (
            <div style={{display:"flex", width:"100%", justifyContent:"right"}}>
                <div style={{height:"fit-content", display:"flex", flexDirection:"column", width:"50vw", minWidth:"fit-content", float:"right"}}>
                    <div style={{zIndex:"1", position:"relative", backgroundColor:"#1E1E1E", width:"97%", marginLeft:"3%", height:"100%", borderBottomLeftRadius:"30px", borderTopLeftRadius:"30px", textAlign:"left"}}>
                    {/* <div style={{zIndex:"1", position:"relative", backgroundColor:"#1E1E1E", width:"97%", marginLeft:"3%", height:"100%", borderBottomLeftRadius:"30px", borderTopLeftRadius:"30px", textAlign:"left", boxShadow:`-15px 15px ${color}`}}>  */}

                        <h1 style={{color:"white", float:"left", margin:"10px", marginLeft:"30px",paddingRight:"30px", whiteSpace:"nowrap"}}>{title}</h1>
                    </div>
    
                    <div style={{zIndex:"0",position:"relative",backgroundColor:`${color}`, width:"100%", height:"50px", top:"-30px", borderBottomLeftRadius:"30px", borderTopLeftRadius:"30px"}} />
                </div>
            </div>
        );
    } else {
        return (
        <div style={{display:"flex", width:"100%", justifyContent:"left"}}>
            <div style={{height:"fit-content", display:"flex", flexDirection:"column", width:"50vw", minWidth:"fit-content"}}>
                <div style={{zIndex:"1", position:"relative", backgroundColor:"#1E1E1E", width:"100%", height:"100%", borderBottomRightRadius:"30px", borderTopRightRadius:"30px", textAlign:"left"}}> 
                    <h1 style={{color:"white", float:"right", margin:"10px", marginRight:"30px",paddingLeft:"30px", whiteSpace:"nowrap"}}>{title}</h1>
                </div>

                <div style={{zIndex:"0",position:"relative",backgroundColor:`${color}`, width:"95%", height:"50px", top:"-30px", borderBottomRightRadius:"30px"}}/>
            </div>
        </div>
        );
    }
    
}