import React from 'react'
// import getRestaurents from '../actions/data';
import RestaurentsComponent from './Restaurents';

export default class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            "city_name": "",
            "data":  [],
            "show": false,
        }
    }

    handleResSearch(e){
        this.setState({"city_name": e.target.value})
    }

    async handleSearchBTN(){
        const city_name = this.state.city_name
        if (city_name !==""){
            const url = "http://127.0.0.1:5000/city/"+city_name
            const res = await fetch(url)
            const data = await res.json()    
            const data_arr =  data["DATA"]
            this.setState({"data":data_arr, "show": true})
        }
    }



    render(){
        console.log("user from props ", this.props.user );
        
        return (
            <div className="">
                <div className="pos-f-t">
                    <nav className="navbar navbar-success bg-success">
                        <div className="input-group col-md-4">
                            <input type="text" className="form-control" placeholder="type city name here ..."  onChange={(e)=> this.handleResSearch(e)} />
                            <div className="input-group-btn">
                                <button className="btn btn-success" onClick={()=> this.handleSearchBTN()}><i className="glyphicon glyphicon-search" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </nav>
                </div>
                { this.state.show == false && <img src="https://banner2.cleanpng.com/20180515/qje/kisspng-chocolate-cake-birthday-cake-eating-cupcake-5afa85cc4af330.714314501526367692307.jpg" alt="img" className="foodie center"></img>}
                { this.state.data && this.state.data.length >0 && <div className="container"><RestaurentsComponent data={this.state.data}/></div> }
            </div>
        )
    }
}
