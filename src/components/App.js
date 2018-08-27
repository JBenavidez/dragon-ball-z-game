import React, {Component} from 'react';
import characterList from './CharacterList';
import CharacterList from './CharacterList';
import HeroList from './herolist';
import SquadStats from './SquadStats'
import Rival from './rivals';
import MyTeam from './myteam';
import FinalResult from './FinalResult';
import '../styles/index.css';
import {Route} from'react-router-dom';
 
 



class App extends Component{
    render(){
        return(
                <div>   
                 

                        <Route exact path ="/" render={()=>(
                                                        <div className="App">
               
                                                      <div  className="App1">
                                                      <div className="col-md-12">
                                                            
                                                            <div  >
                                                                <img src="https://pre00.deviantart.net/723d/th/pre/i/2017/137/6/a/official_dragonball_super_logo_by_aubreiprince-db9ivxt.png"  className ="mytitle" />
                                                            </div>
                                                        
                                                        </div>
                                                           
                                                            <div className="col-md-8">
                                                            <HeroList/>
                            
                                                            </div>
                                                            <div className="col-md-4">
                                                                <SquadStats />
                                                            </div>
                                                            <div className="col-md-12">
                                                            <CharacterList />
                                                            </div>
                                                      </div>



                                                        </div>
                             
                        )} />



                            <Route path="/AddPhoto" render ={() =>(
                                <div className="App" >
                                    <div className="col-md-12"> 
                                    
                                  <img src="https://pre00.deviantart.net/723d/th/pre/i/2017/137/6/a/official_dragonball_super_logo_by_aubreiprince-db9ivxt.png"  className ="mytitle" />
                                    
                                    </div>
                                <div className="col-md-3">
                                <Rival />
                                </div>
                                <div className="col-md-6">
                                 <FinalResult />
                                 </div>
                                 <div className="col-md-3">
                                 <MyTeam />
                                 </div>
                                 
                                  </div>
                            )} />


                </div>

           
        )
    }
}

export default App;