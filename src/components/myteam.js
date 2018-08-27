import React, {Component} from 'react';
import  {connect} from 'react-redux';
 
import {removeCharacterById} from '../actions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class MyTeam extends Component{
    render(){
        return(
            <div>
                
                <div class="portlet">
					<div class="portlet-title">
						<div class=" ">
							 
							<h4  > MY TEAM</h4>
						 
						</div>
					 
					</div>
					<div class="portlet-body">
                    <ul className="list-group">  
                  
                   <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout ={300}
                transitionAppear={true}
                transitionAppearTimeout = {300}
                >  
                    {
                        this.props.heroes.map((hero,index) =>{
                            return(
 
                                <li key ={index}>
                                                                   <div className="card">
                                <h4 className="card-header bg-dark text-white ">  {hero.name}
                                <div className="float-right small">
                                   
                                   
                                    
                                </div>
                                </h4>
                                <div className="card-body">
                                { hero.status ==="lose"  &&
                                       <div className="tag">
                                       <img src=" https://png2.kisspng.com/20180328/opq/kisspng-club-penguin-treasure-map-x-mark-clip-art-x-5abbd5e6e9a8d6.2019445915222594309571.png" className="img-responsive myimg" alt="avatar"/>
                                       </div>
                                  }
                                    <div className="image float-left user-l">
                                      <img src={hero.c_image} className="img-thumbnail" alt="avatar"/>
                                    </div>
                                  <h4 className="card-title">Description</h4>
                                    <p className="card-text">{hero.description.substring(0, 100)}</p>
                                    <span  >Strengh: <span className="label label-warning">{hero.strength}</span></span> 
                                    <span href="#">Speed <span className="label label-info">{hero.speed} {hero.status} </span></span> 
                                </div>
                              </div>
                                </li>
                            )
                        }  )
                    }
                    </ReactCSSTransitionGroup>
                </ul>
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

export default connect(mapStateToProps, {removeCharacterById})(MyTeam);













