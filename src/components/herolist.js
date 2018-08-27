import React, {Component} from 'react';
import  {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {removeCharacterById} from '../actions';


class HeroList extends Component{
    render(){
        return(
            <div>
                
                <div className="portlet">
					<div className=" portlet-title">
						<div className=" ">
                        <h4>MY TEAM</h4>
						 
							 
						</div>
					 
					</div>
					<div className="portlet-body">
                    <ul className="list-group">
                <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout ={300}
                transitionAppearTimeout = {1000}
                >
                    {
                        this.props.heroes.map((hero,index) =>{
                            return(
 
                                    <div className="col-md-4">
                                        <li key={index}>
                                      <div className="card">
                                <h4 className="card-header bg-dark text-white ">  {hero.name}
                                <div className="float-right small">
                                   
                                    <div className="btn btn-raised btn-danger  "  onClick={() => this.props.removeCharacterById(hero.id) }>
                                     x
                                    </div>
                                    
                                </div>
                                </h4>
                                <div className="card-body">
                                    <div className="image float-left user-l">
                                      <img src={hero.c_image} className="img-responsive mytitle40" alt="avatar"/>
                                    </div>
                                  
                                    <span className="power" >Strengh: <span className="label label-warning">{hero.strength}</span></span> 
                                    <span   className="power" href="#">Speed <span className="label label-info">{hero.speed}</span></span> 
                                </div>
                              </div>
                                </li>
                                    </div>
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

export default connect(mapStateToProps, {removeCharacterById})(HeroList);













