import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
class Rival extends Component{
    render(){
       return(
           <div>   

	<div class="portlet">
					<div class="portlet-title">
						<div class=" ">
							 
							<h4 class=" "> RIVAL TEAM</h4>
						 
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
                        this.props.characters.map((character, index) => {
                            return(
                              <li key = {index}>
                                   
                                <div className= " ">
                                <div className="card">
                                <h4 className="card-header bg-dark text-white"> {character.name}
                                <div className="float-right small">
                                   
                                    
                                </div>
                                </h4>
                                <div className="card-body">
                                  
                                  { character.status ==="lose"  &&
                                       <div className="tag">
                                       <img src=" https://png2.kisspng.com/20180328/opq/kisspng-club-penguin-treasure-map-x-mark-clip-art-x-5abbd5e6e9a8d6.2019445915222594309571.png" className="img-responsive myimg" alt="avatar"/>
                                       </div>
                                  }
                                 
                                    
                                    <div className="image float-left user-l">
                                    
                                        <img src={character.c_image} className="img-thumbnail" alt="avatar"/>
                                        
                                    </div>
                                    <span className="card-title">Description</span>
                                    <p className="card-text">{character.description.substring(0, 100)}</p>
                                    <span  >Strengh: <span className="label label-warning">{character.strength}</span></span> 
                                    <span href="#">Speed <span className="label label-info">{character.speed}  </span></span> 
                                </div>
                                </div>
                                </div>
                                  
                              </li>
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

    const getRivals = createRivals(state);
    
    
    return {
        characters:  getRivals,
         
    };
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({  addCharacterById},dispatch);
      
  


}

function createRivals(state){

    const mylist  =  state.characters;
    let myteam  =   state.heroes
    const myteam_lenth  = state.heroes.length;
    //let myselection = mylist[Math.floor(Math.random() * mylist.length)];

    let finalRival = [];
    
    let counter = 1 ;
    
    for (counter = 1; counter <= myteam_lenth; counter++){
        let my_team_counter = counter -1;
        let myselection = mylist[Math.floor(Math.random() * mylist.length)];
        
        if (myselection.overall > myteam[my_team_counter].overall){
           
            myselection.status ="win"
            
            
            
        }
        if (myselection.overall < myteam[my_team_counter].overall){
            myselection.status ="lose"
            
            
            
        }
        if ( myteam[my_team_counter].overall > myselection.overall ){
            myteam[my_team_counter].status ="win";
            
        }
        if ( myteam[my_team_counter].overall < myselection.overall ){
            myteam[my_team_counter].status ="lose";
            
        }

        finalRival.push(myselection);
        
         
    }
    
    console.log('this is my list',myteam[0] );  
    return finalRival;
   
}



export default connect(mapStateToProps, mapDispatchToProps)(Rival) ;
