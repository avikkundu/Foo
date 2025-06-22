import * as React from 'react'
import '../Styles/HomePage.css'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Loginpage from './Loginpage.js'
import CustomerPage from './CustomerPage.js'
import AdminPage from './AdminPage.js'
import LandingPage from './LandingPage.js'
import MenuPage from './MenuPage.js';
class HomePage extends React.Component{

    constructor()
    {
        super()
        this.state={
            currentPage:'1',
            page_id:'3',
            name:'',
            phone: 0
        }
        this.handleChange=this.handleChange.bind(this);
        this.renderContent=this.renderContent.bind(this);
        this.updateCurrentPage=this.updateCurrentPage.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handlePhone=this.handlePhone.bind(this);

    }

    handleChange(e,newvalue){

        this.setState({
            currentPage:newvalue,
        })

    }

    handlePhone(e){
        this.setState({
            phone:e
        })
    }

    handleName(e){
        this.setState({
            name:e
        })
    }
    
    updateCurrentPage(user)
    {
        switch(user)
        {
            case '3':      this.setState({
                                 page_id:'3'
                            })
                            break;
            case '4':      this.setState({
                                  page_id:'4'
                           })
                           break;
            case '5':      this.setState({
                              page_id:'5'
                            });
                            break;
            default:        
                            console.log("update current page not working");
                           
        }
    }
    renderContent(){
        
                    return (
                            <div>
                                 {this.state.page_id==='3' && <Loginpage  user={this.updateCurrentPage}  name={this.handleName} phone={this.handlePhone}/>}
                                 {this.state.page_id === '5' && <AdminPage user={this.updateCurrentPage} />}
                                 {this.state.page_id === '4' && <CustomerPage user={this.updateCurrentPage} name={this.state.name} phone={this.state.phone} />}
                            </div>
                           );

    }

    render(){
        return (
            <div className='hbody'>
                <h1 className="store-name">Foo-The Chef</h1>
                <img src="../assets/logo.png" className="logo-header" />
                <img src="../assets/logo.png" className="logo-header2" />
                     <Box sx={{ width: '100%', typography: 'body1' }}> 
                          <TabContext value={this.state.currentPage} >
                        
                            
                                   <TabList onChange={this.handleChange} className="tablist">
                                   <Tab label="Home" value="1" />
                                   <Tab label="Menu" value="2" />
                                   <Tab label="Login" value="3" />
                                    </TabList>
                            
                
                          <div>
                          <TabPanel value="1"   ><LandingPage /></TabPanel>
                          <TabPanel value="2"><p><MenuPage /></p></TabPanel>
                          <TabPanel value="3">
                             {this.renderContent()}
                          </TabPanel></div>
                    
                          </TabContext>
                     </Box>
            </div>
        );
    }
}

export default HomePage;