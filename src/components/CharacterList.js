import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


 


class CharacterList extends Component{
    render(){
        console.log('this.props',this.props);
        return (
            <div>

        <div className="portlet">
					<div className="portlet-title">
						<div className=" ">
						 
							<h4  > FIGHTERS</h4>
							 
						</div>
					 
					</div>
					<div className="portlet-body">
						 
						 
                  
                <ul className="list-group">
                <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout ={300}
                transitionAppear={true}
                transitionAppearTimeout = {3000}
                > 
                    {
                        this.props.characters.map((character, index) => {
                            return(
                                    <div className="col-md-3">
                                                                      <li key={index}>
                                   
                                   <div className="card">
                                          <h4 className="card-header bg-dark text-white"> {character.name}
                                          <div className="float-right small">
                                              <div className="btn btn-raised btn-danger"   onClick ={() => this.props.addCharacterById(character.id)} >
                                                   +
                                              </div>
                                               
                                              
                                          </div>
                                          </h4>
                                          <div className="card-body">
                                              <div className="image float-left user-l">
                                                  <img src={character.c_image} className="img-thumbnail" alt="avatar"/>
                                              </div>
                                              <h4 className="card-title">Description</h4>
                                              <p className="card-text">{character.description.substring(0, 100)}</p>
                                              <span   className="power" >Strengh: <span className="label label-warning">{character.strength}</span></span> 
                                              <span   className="power">Speed <span className="label label-info">{character.speed}</span></span> 
                                          </div>
                                          </div>
                                            
                                        </li>
                                    </div>
                            )
                        })
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
    console.log('state', state);
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({  addCharacterById},dispatch);
      
  


}





export default connect(mapStateToProps, mapDispatchToProps)(CharacterList) ;

















