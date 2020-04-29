import React from 'react';

export default class RestaurentsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    render(){
        return(
            <div className="">
               <div className="row main">
                    {this.props.data.map((res, i)=>{
                        return(
                           <div className="col-md-12 devision" key={i}>
                                <div className="col-md-6">
                                    { res["img"] != "" ? 
                                        <img src={res["img"]} alt="img not found" className="image"></img> :
                                        <img src="https://restaurantden.com/wp-content/uploads/2017/09/unsplash.jpg" className="image" alt=""/> }
                                </div>
                                <div className="col-md-6">
                                    {/* <h3>
                                        <a href={res['url']} className="link">{res["name"]}</a> 
                                        <h3 style={{float: "right", "marginTop": "0px", "color": "#3F7E00" }}>{res["rating"]}</h3>
                                    </h3> */}
                                    <h3>
                                        <a href={res['url']} className="link">{res["name"]}</a> 
                                            <span className="label label-success" style={{float: "right", "marginTop": "0px", "fontWeight":"bold" }}><h5>{res["rating"]}</h5>
                                            </span>
                                    </h3><br></br>
                                    {res["address"]}<br />
                                    <span className="text-muted"> {res["locality"]}</span><br/>
                                    <h5>Average Cost</h5> <span>{res["average_cost"]} {res["currency"]} For Two</span> <br/>
                                    <h5>Cuisine  </h5> <span> {res["cuisines"]}</span> <br></br>

                                </div>
                           </div>
                        )
                    })}
               </div>
            </div>
        )
    }
}