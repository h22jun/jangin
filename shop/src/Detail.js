import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { addBasket } from "./store.js";

function Detail(props){
  const dispatch = useDispatch(); 
  let [alertVisible, setAlertVisible] = useState(true); // 상태 이름 변경
  const [value, setValue] = useState(''); // value 상태 초기화
  let [tab, setTab] = useState(0);
  let [opa, setOpa] = useState('');
  let [watchedObj, setWatchedObj] = useState([]);

  let {id} = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);


  const handleChange = (event) => {
    setValue(event.target.value); // 입력값으로 value 상태 업데이트
  };

  useEffect(()=>{
    setTimeout( ()=>{ setAlertVisible(false) }, 2000);
  }, []);

  useEffect(() => {
    // watchedObj 상태를 로컬 스토리지에 저장
    let itemId = 찾은상품.id;
    console.log(itemId);
    // setWatchedObj(itemId);
    let newWatchedObj = new Set(watchedObj);
    newWatchedObj.add(itemId);
    localStorage.setItem('watched', JSON.stringify(newWatchedObj));
  }, [watchedObj]); // watchedObj가 변경될 때마다 실행



  useEffect(() => {
    if (isNaN(value) && value.trim() !== '') { // value가 숫자가 아니고, 공백이 아닌 경우에만 alert 실행
      alert('숫자만 입력해주세요.');
    }
  }, [value]); // value 상태의 변화를 감지

  useEffect(()=>{
    setTimeout(()=>{ setOpa('end-ani') }, 10)
    

  return ()=>{
    setOpa('')

  }
  }, [])

  

  if (!찾은상품) {
    return <div className="container">해당 상품을 찾을 수 없습니다.</div>;
  }

  return(
    <div className={`container start-ani ${opa}`}>

      
      { 
        alertVisible ?
        <div id='alert-second' className="alert alert-warning">
          2초 이내 구매시 할인
        </div>
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
        </div>
        <input type="text" value={value} onChange={handleChange} />
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
  dispatch(addBasket([{
    id: 찾은상품.id,
    name: 찾은상품.title, // 'title' 대신 'name'을 사용
  }]))
}}>주문하기</button>

        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{
        setTab(0)
      }}
      >상세보기</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{
        setTab(1)
      }}>리뷰</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{
        setTab(2)
      }}>Q&A</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent tab={tab} shoes={props.shoes}/>


  
  </div> 
  );
  
}
let TabContent = function TabContent(props){
  return[
  <div>
    {props.shoes[0].title}
    이 상품은 화이트와 블랙이 조화롭게 들어가있는 가죽신발인데 통기성이 좀 떨어짐
  </div>, 
  <div>
    이거 이쁜데 발냄새남
  </div>, 
  <div>
    재입고 언제됨?
  </div>
  ][props.tab]
}




export default Detail;
