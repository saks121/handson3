
import React from 'react';
import EmpData from './EmpData';
class FormCompo extends React.Component{

    state={
        name:"",
        department:"",
        rating:"",
        data:[],
        clicked:false
    }

    ClickHandle =(event)=>{
        this.setState({[event.target.name]:event.target.value});
        this.setState({[event.target.department]:event.target.value});
        this.setState({[event.target.rating]:event.target.value});
    }

    HandleSubmit=(e)=>{
        e.preventDefault();
        const FormData={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        console.log(FormData);

        const arr =this.state.data;
        console.log(arr);
        arr.push(FormData);
        console.log("Now the arr is:",arr);

        this.setState({[this.state.data]:arr});
        this.setState({[this.state.clicked]:!(this.state.clicked)});
        console.log("Submit called Success!!");
        console.log("click status chnaged",this.state.clicked);

    }

    ToggleOnClick =()=>{
        this.setState({[this.state.clicked]:true});
    }
    
    render(){
        return(            
            <div className="form-main">
            {/* {!this.state.clicked ? */}
                <form className="form-m">
                <label>Name :</label>
                <input  className="text-f" type={"text"} name={"name"} placeholder="Enter the Name here" onChange={this.ClickHandle} />
                <br /><br />
                <label>Department :</label>
                <input className="text-f" type={"text"} name={"department"} placeholder="Enter text here.." onChange={this.ClickHandle} />
                <br /><br />
                <label>Rating :</label>
                <input className="text-f" type={"number"} name={"rating"} placeholder ="Enter num here..." onChange={this.ClickHandle} />
                <br /><br />
                <button className="sub-b" type="Submit" onClick={this.HandleSubmit}>Submit</button>
                </form>
            {/* : */}
                <>
                    {console.log("data wull be shown ")}
                    <EmpData dataprop={this.state.data} toggleFunc={this.ToggleOnClick} />
                </>
                
                
                  
            {/* } */}
                      
            </div>
        )
    }
}
export default FormCompo;