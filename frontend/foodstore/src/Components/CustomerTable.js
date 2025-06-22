import React from 'react';

import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function createData( name, Order_Id) {
  return { name, Order_Id};
}

class CustomerTable extends React.Component{
    constructor(props)
    {
         super(props);
         this.state={
          rows:[]
         }

    }
    componentDidMount()
    {
          this.intializeRows();
    }
      componentDidUpdate(prevProps) {
    if (prevProps.orderlist !== this.props.orderlist) {
    this.intializeRows();
    
    }
  }
    intializeRows()
    {
      const additionalRows = this.props.orderlist.map(item =>
      createData(item.order_name, item.order_id));

    this.setState(prevState => ({
      rows: [...additionalRows]
    }));
    }
    render()
    {
        return (
            <div>
              
                   <Typography level="body-sm" sx={{ textAlign: 'center',position:'absolute',top:'270px',left:'720px',fontWeight:'bolder' }}>
        ORDER TABLE
      </Typography>
      <Sheet sx={{ height: 300,width:800 ,overflow: 'auto',position:'absolute',top:'300px',ml:40,border:2 }} >
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          stripe="odd"
          hoverRow
        >
          <thead >
            <tr >
              <th style={{textAlign:'center'}} >Name</th>
              <th style={{textAlign:'center'}} >Order Id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.Order_Id}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          </tfoot>
        </Table>
      </Sheet>
            </div>
        );
    }
}

export default CustomerTable;