import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';





class SquadStats extends Component{
    strength(){
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength );
        return strength;
    }


    speed(){
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed );
        return speed;
    }

  render(){
      return (
        <div class="portlet  ">
        <div class="portlet-title">
            <div >
                
            <h4 class=" last_title">
                 TEAM STATS
              </h4>
            </div>
         
        </div>
        <div class="portlet-body">
            
        <div>
              
              <div id="bs-pricing-six" className="bs-pricing-four   fix">
            
                
                   
                        <div className="bs bs-pricing">
                            <div className="cotent">
                                
                                <ul>
                                    <li ><b className="s_title">Overall Strength: <span className="l_title">{this.strength()}</span> </b> </li>
                                    <li ><b className="s_title">Overall Speed: <span className="l_title">{this.speed()}</span> </b> </li>
                                     
                                </ul>
                                <Link to="/AddPhoto" className="btn btn-danger  ">Fight</Link>  
                               
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
    return{
        heroes:state.heroes
    }
}


export default connect(mapStateToProps, null)(SquadStats);
