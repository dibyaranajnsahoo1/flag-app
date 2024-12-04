import React from "react"

const FlagIteams = ({name,flag,abbr}) =>{
    
    return(
        <div className="card " style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',height:'200px', width:'200px', padding:'10px',
                                       textAlign:'center'
        }}>
            <img src={flag} alt="" style={{height:'100px', width:'100px'}} />
            <h3 style={{marginTop:'20px'}}>{name}</h3>
        </div>
    )



}
export default FlagIteams;