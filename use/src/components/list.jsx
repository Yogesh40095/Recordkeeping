import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const List = ({name, email, index}) =>{
    
    


    return(

        <div className='list'>
            <h4> {name} </h4>
            <h4> {email} </h4>
            <button className="remove" onClick={()=>removeItem(index)}>

            <DeleteForeverIcon/>
            </button>
          
          </div>
    )
}
export default List