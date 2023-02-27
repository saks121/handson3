import React from "react";
class EmpData extends React.Component{
     
    render(props){
        return(
            <div className="Shw-b" >
                {this.props.dataprop.map((item,index)=>{
                    return(
                        <div className="cont-b" key={index}>
                                
                                <p>Name:{item.name}&nbsp;|| Department:{item.department}&nbsp;|| Rating:{item.rating}</p>

                        </div>
                            
                    );
                
                })}

            <button className="sub-btn" onClick={this.props.toggleFunc}>Back</button>    
            </div> 
        );
    }
}
export default EmpData;