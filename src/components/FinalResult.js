import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';





class FinalResult extends Component{
   


    speed(){
        let speed = this.props.heroes;
        
        return speed;
    }

  render(){
      return (
          <div>


	<div className="portlet">
					<div className="portlet-title">
						<div className=" ">
							 
							<h4  > <b className="s_title">Your Team <span className="l_title">{this.speed()}</span> </b></h4>
                            <div >
                                       {this.speed() ==="win"  &&
                                           <h1 className="final_result"> <b>ASK YOUR WISH!!</b> </h1>
                                       }
                                        {this.speed() ==="lose"  &&
                                           <h1 className="final_result"> <b>EVIL HAS WON!!</b> </h1>
                                       }
                                    </div>
						</div>
					 
					</div>
					<div className="portlet-body">
                   
              <div id="bs-pricing-six" className="bs-pricing-four   fix">
            
                
                   
                        <div className="bs bs-pricing">
                            <div className="cotent">
                                
                                <ul>
                                     
                                  
                                    <li > 
                                    { this.speed() ==="win"  &&

                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lF0uA5HBJyo?autoplay=1&start=22&end=45" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            }

                                      { this.speed() ==="lose"  &&
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qOuk02e5q5s?autoplay=1&start=0&end=45" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                 
                                        }
                                     </li>
                                </ul>
                                <Link to="/" className="btn btn-danger  ">PLay Again</Link>  
                               
                            </div>
                        </div>
                   
                 
               
                
            </div>
					</div>
				</div>



          </div>
      )
  }
}

function mapStateToProps(state){

    const my_heroes = state.heroes;
    let winning_counter =0;
    let lose_counter =0;   
    let user_final_score= "winner";
    my_heroes.forEach(function(element) {
      
        if (element.status ==="win"){
            winning_counter = winning_counter +1
            
        }
        if (element.status ==="lose"){
            lose_counter = lose_counter +1
        }
      });
      if(lose_counter === winning_counter){
        user_final_score ="Draw";
      }
      if(lose_counter > winning_counter){
        user_final_score ="lose";
      }
      if(lose_counter < winning_counter){
        user_final_score ="win";
      }
      console.log("john is here",user_final_score );    
    return{
        heroes:user_final_score
    }
}


export default connect(mapStateToProps, null)(FinalResult);
