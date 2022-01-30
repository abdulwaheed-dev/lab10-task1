import MockData from '../data/MOCK_DATA.json';

function Product(){
    return(<div className='ui four column grid'>
        <div className='row'>    
        {MockData.map(itm=>(
            <div class="column">
            <div className="ui card" style={{width:'270px',height:'100px',marginTop:'10px', marginLeft:'10px'}}>
                <div className="content">
                    <div className="header">{itm.id} - {itm.name} </div>
                    <div className="meta">Quantity: {itm.qty}</div>
                    <div className="header">Price: {itm.price} </div>
                </div>
            </div>
            </div>  
        ))}
        </div>
    </div>)
}
export default Product;
