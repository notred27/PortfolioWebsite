import {Info} from './data.js'


export default function About(){
    return (
        <div style={{marginBottom:"5%"}}>
            

            <div style = {{display:"flex", flexDirection:"row", paddingBottom:"20px"}}>
                <img src={require(`./images/${Info.images[3]}`)} alt="me" style={{zIndex:"0", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #9BA2FF", borderRadius:"10%", width:"18%", height:"60%", transform:" translate(40%, 0%)rotate(-5deg)", minInlineSize:"100px"}}/>
            
                <div style = {{display:"flex", flexDirection:"column", alignItems:"center", height:"20%"}}>

                    <img src={require(`./images/${Info.images[0]}`)} alt="me" style={{zIndex:"1", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #BB4BE4", borderRadius:"10%", width:"30%", height:"20%", transform:"translate(0%, -15%) rotate(-6deg)", marginTop:"5%", minInlineSize:"100px"}}/>
                
                    <img src={require(`./images/${Info.images[1]}`)} alt="me" style={{zIndex:"1", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #EE4266", borderRadius:"10%", width:"60%", height:"20%", transform:"translate(0%, 0%) rotate(6deg)", marginTop:"5%", minInlineSize:"200px"}}/>
                </div>
                
                
                <img src={require(`./images/${Info.images[2]}`)} alt="me" style={{zIndex:"0", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #EE4266", borderRadius:"10%", width:"20%", height:"60%", transform:"translate(-30%, 0%) rotate(15deg)", minInlineSize:"100px"}}/>
            </div>

            <p className='About-info-mobile'>{Info.description} </p>

        </div>
    );
}