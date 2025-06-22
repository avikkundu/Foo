import React from 'react'
import CustomerTable from '../Components/CustomerTable';
import '../Styles/CustomerPage.css'
class CustomerPage extends React.Component{

    constructor()
    {
        super();
        this.state={
            order: '',
            orderlist: []
        }
        this.handleBack=this.handleBack.bind(this);
        this.handleOrder=this.handleOrder.bind(this);
        this.displayTable=this.displayTable.bind(this);

    }
    
    componentDidMount(){

        this.displayTable();
    }
    displayTable(){

        ///get data from database             ///get function
         const sendbody={
            phone:this.props.phone,
            q:'*'
        }
        const query = new URLSearchParams(sendbody).toString(); 

         fetch(`http://localhost:5000/api/get-row?${query}`, {
             method: 'GET',
             headers: {
                          'Content-Type': 'application/json'
              },
            }).then(response=>response.json())
            .then(data=>{

                
    if (data.result && data.result.length > 0) {
                 ////////////////use a map to iterate through objects;
                 data.result.map((item, index) => {
                       console.log(`Item ${index + 1}:`, item.order_name);
            
      });
      this.setState({
        orderlist:data.result
      })
    } else {
      console.warn("No result returned from API.");
    }

                console.log("Order displayed ");
              })


        
    }

    handleBack(){
        
            const sendbody={}
          
             fetch('http://localhost:5000/api/logout', {
             method: 'POST',
             headers: {
                          'Content-Type': 'application/json'
              },
                  body: JSON.stringify(sendbody)
            }).then(response=>response.json())
            .then(data=>{
                console.log(data.id);
                console.log("database connection closed! ");
    
              })
    
        console.log('Admin logout successful');
        this.props.user('3')   ////////////close db connection 
        console.log('logout successful');
    }

    handleOrder(e){       //////add to customer table
        
        e.preventDefault();
        console.log('Order Added  to database !! ');
        console.log(this.state.order);

        const sendbody={
            phone:this.props.phone,
            order:this.state.order,
        }
        
             fetch('http://localhost:5000/api/update-row', {
             method: 'POST',
             headers: {
                          'Content-Type': 'application/json'
              },
                  body: JSON.stringify(sendbody)
            }).then(response=>response.json())
            .then(data=>{
                console.log(data.id);
                console.log("Order added ");
                 this.displayTable();
              })
          
          this.setState(
            {
                order: ''
            }
        );

    }

   
    
    render()
    {
        return (
            <div className='landing-body'><p>Hi! You are logged in!</p>
            <button onClick={this.handleBack} className='logout-button'>logout</button>
            <form className="form">
                <label style={{marginRight:"20px"}}>Order name </label>
                    <input type="text" 
                           value={this.state.order}
                           onChange={(e) => this.setState({ order: e.target.value })} />
                
                
                <button type="submit" onClick={this.handleOrder} style={{marginLeft:"20px",backgroundColor:'purple',color:'white',cursor:'pointer' }}>order!</button>
            </form>
            
        
            <CustomerTable  orderlist={this.state.orderlist}/>
            
          
            </div>
        );
    }
}

export default CustomerPage;