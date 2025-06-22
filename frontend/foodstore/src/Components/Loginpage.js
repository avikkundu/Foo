import * as React from 'react'
import '../Styles/Loginpage.css'
import './Loginpage'
//Customer Code :4 and Admin code:5;

class Loginpage extends React.Component{

    constructor(){
        super();
         this.state={
            name:'',
            phone: ''
        }
        this.handleAdmin=this.handleAdmin.bind(this);
        this.handleCustomer=this.handleCustomer.bind(this);
    }

    handleCustomer(){
        //////////////////////// create table
        this.props.user('4');
        console.log('Customer logged in!');
        console.log(this.state.name)
        console.log(this.state.phone)

        this.props.name(this.state.name)
        this.props.phone(this.state.phone)

        const sendbody={
        phone:this.state.phone
     }   


       fetch('http://localhost:5000/api/login', {
             method: 'POST',
             headers: {
                          'Content-Type': 'application/json'
              },
                  body: JSON.stringify(sendbody)             //////////////////change here
            }).then(response=>response.json())
            .then(data=>{
                console.log(data.id);
                console.log("Hi testing! ");
              })





     fetch('http://localhost:5000/api/create-table', {
             method: 'POST',
             headers: {
                          'Content-Type': 'application/json'
              },
                  body: JSON.stringify(sendbody)
            }).then(response=>response.json())
            .then(data=>{
                console.log(data.id);
                console.log("Hi testing! ");
              })



            };        

    handleAdmin(){
        this.props.user('5');
        console.log('Admin logged in!');
        console.log(this.state.name)
        console.log(this.state.phone);


    }
    render(){
        return(
            <div className="landing-body">
                <h2  style={{fontFamily: 'cursive',fontSize:'50px',color:'rgb(65, 23, 105)' }}>Login Page !</h2>
                
                   <form className="form-body">
                    <br/>
                    <label>
                       Name:
                    <input
                       type="text"
                       value={this.state.name}
                       onChange={(e) => this.setState({ name: e.target.value })}
                       style={{marginLeft:'30px',marginTop:'20px'}}
                    />
                    </label>
                     <br /><br /><br />
                     <label>
                     Phone no.:
                     <input
                          type="number"
                          value={this.state.phone}
                          onChange={(e) => this.setState({ phone: e.target.value })}
                     />
                     </label>
                      <br /><br/><br/>
                     <button type="button" onClick={this.handleCustomer} className='cust-login'>Customer Login</button>
                     <button type="button" onClick={this.handleAdmin} className='admin-login'> Admin Login</button>
             </form>
             <img src='/assets/cheflogo.jpg' className="chef-logo"  alt="chef img"/>
             <img src='/assets/chef.jpg' className="chef"  alt="chef img"/>   
            </div>
        );
    }
}

export default Loginpage;