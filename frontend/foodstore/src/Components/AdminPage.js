import React from 'react'
import AdminTable from '../Components/AdminTable.js'
import '../Styles/AdminPage.css'
class AdminPage extends React.Component{
    
    constructor()
    {
        super();
        this.state={
            order:'',
            order_id:'',
            tableName:'',
            orderlist:[]
        }
        this.handleBack=this.handleBack.bind(this);
        this.handleDeliver=this.handleDeliver.bind(this);
    }
    componentDidMount(){
        this.displayTable();
    }
    handleDeliver(e){
        e.preventDefault();
        console.log('Order Added  to database !! ');
        //console.log(this.state.order);

        const sendbody={
            tableName:this.state.tableName,
            ordername:this.state.order,
            order_id:this.state.order_id
        }
        
             fetch('http://localhost:5000/api/delete-row', {
             method: 'POST',
             headers: {
                          'Content-Type': 'application/json'
              },
                  body: JSON.stringify(sendbody)
            }).then(response=>response.json())
            .then(data=>{
                console.log(data.id);
                console.log("Row for admin deleted successfullly ");
            
                this.displayTable();
    
              })
          
          this.setState(
            {
                order: '',
                order_id:'',
                tableName:''
            }
        );

    }
    
      displayTable(){

        ///get data from database             ///get function
    
         const sendbody={
            phone:999,
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
                 console.log(data.result)
      this.setState({
        orderlist:data.result
      })
      console.log("Printing here",this.state.orderlist);
    } else {
        this.setState({
            orderlist:[]
        })
      console.warn("No result returned from API.");
    }

                console.log("Order displayed ");
              }) 
    }

    handleBack()
    {
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
        
           this.props.user('3');  /////////////////close db connection
        console.log('Admin logout successful');
    }

    render(){
        return (
            <div className="landing-body">
                <p>Welcome Admin!</p>
                <button onClick={this.handleBack} className='logout-button'>logout</button>
                  <form className='form'>
                  <label     style={{marginLeft:"50px"}}>Order name
                    <input type="text" 
                           value={this.state.order}
                           onChange={(e) => this.setState({ order: e.target.value })} 
                            style={{marginLeft:"20px"}} />
                           
                  </label>
                
                 <label  style={{marginLeft:"100px"}} >Order id
                    <input type="number" 
                           value={this.state.order_id}
                           onChange={(e) => this.setState({ order_id: Number(e.target.value) })}
                           style={{marginLeft:"20px"}}   />
                  </label>
                
                 <label style={{marginLeft:"100px"}}>Customer ID
                    <input type="text" 
                           value={this.state.tableName}
                           onChange={(e) => this.setState({ tableName: e.target.value })}
                               style={{marginLeft:"20px"}} />
                       
                  </label>
                
                <button type="submit" onClick={this.handleDeliver} style={{marginLeft:"200px",backgroundColor:'purple',color:'white'}} >Delivered!</button>
                </form>
                      <AdminTable  orderlist={this.state.orderlist}/>
                  
                
            </div>
        )
    }
}
export default AdminPage;