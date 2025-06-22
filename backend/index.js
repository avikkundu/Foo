const express=require('express')
const cors = require("cors")

const app=express()
app.use(cors())
app.use(express.json())

const port = 5000

const mysql=require('mysql2/promise');


const  connection=mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'test',
      waitForConnections: true,
      connectionLimit:10,
      queueLimit:0,
});
app.post('/api/login',async(req,res)=>{

 

})

app.post('/api/create-table',async (req,res)=>{
    const receivedData=req.body;

  

    console.log("data received for creating table",receivedData);
    
    const tableName=`C${receivedData.phone}`;
    const sqlquery=`create table if not exists \`${tableName}\`(order_id BIGINT PRIMARY KEY AUTO_INCREMENT,order_name text)`;
    const [result] = await connection.query(sqlquery);
    res.status(200).json({message: 'Data received successfully!',id:'32233'})
})


app.post('/api/update-row', async (req,res)=>{
    const receivedData=req.body;

    console.log("data received for row update",receivedData);
    
    const tableName=`C${receivedData.phone}`;
    const sqlquery=`insert into \`${tableName}\`(order_name) values(?)`;
    
   

    const data=[receivedData.order];
    [r]=await connection.query(sqlquery,data);
    console.log(r);

    const sqlquery2=`select last_insert_id() as count from ${tableName}`;
    const [orderId,fields]=await connection.query(sqlquery2);
    console.log(orderId);
    

    
             const q="insert into C999(order_name,order_id,table_name) values(?,?,?)";
            
             const v=[data,orderId[0].count,tableName];

        await connection.query(q,v);
        
        res.status(200).json({message: 'Data received successfully!',id:'32233'})
})

app.get('/api/get-row',async (req,res)=>{
     
    const receivedData=req.query;
     console.log("data received for row update",receivedData);
    
    const tableName=`C${receivedData.phone}`;
    const sqlquery=`select ${receivedData.q} from  ${tableName} `;
    
    const [rows]= await connection.query(sqlquery);
    
   
    console.log(rows)
    res.status(200).json({message: 'Data sent successfully',id:'32233',result:rows})

     })   

     app.post('/api/delete-row',async(req,res)=>{
        const receivedData=req.body;

        //this table name
        tableName=receivedData.tableName;
        
        
        const cq=`delete from ${tableName} where order_name=\'${receivedData.ordername}\' and order_id=${receivedData.order_id}`;
        console.log(cq);

        await connection.query(cq);

        const q=`delete from C999 where order_name=\'${receivedData.ordername}\' and order_id=${receivedData.order_id} and table_name=\'${tableName}\' `
        console.log(q);
        await connection.query(q);


        res.status(200).json({message: 'Data sent successfully',id:'32233'})

     })

       app.post('/api/logout',async(req,res)=>{
        

//        await   connection.end();


        res.status(200).json({message: 'Data sent successfully',id:'32233'})

     })

app.listen(port,()=>{
    console.log(`Node.js server is listening at ${port}`);
})