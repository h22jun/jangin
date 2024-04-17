import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { changeCount } from "./store.js";
import Menubar from './Menubar.js';



function Cart(){

  let a = useSelector((state)=>{return state.basket})
  console.log(a)
  const dispatch = useDispatch(); 



    return(
<div>
<Menubar/>
<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {
      a.map((a,i) =>(
    <tr key={i}>
      <td>{i}</td>
      <td>{a.name}</td>
      <td>{a.count}</td>
      <td><button onClick={()=>{dispatch(changeCount(a.id))}}
      >+</button></td>
    </tr>
      ))
    }
    
  </tbody>
</Table> 

</div>

)}



export default Cart;