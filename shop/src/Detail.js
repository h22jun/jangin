import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props){
  let [alertVisible, setAlertVisible] = useState(true); // 상태 이름 변경
  const [value, setValue] = useState(''); // value 상태 초기화

  const handleChange = (event) => {
    setValue(event.target.value); // 입력값으로 value 상태 업데이트
  };

  useEffect(()=>{
    setTimeout( ()=>{ setAlertVisible(false) }, 2000);
  }, []);

  useEffect(() => {
    if (isNaN(value) && value.trim() !== '') { // value가 숫자가 아니고, 공백이 아닌 경우에만 alert 실행
      alert('숫자만 입력해주세요.');
    }
  }, [value]); // value 상태의 변화를 감지

  let {id} = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  if (!찾은상품) {
    return <div className="container">해당 상품을 찾을 수 없습니다.</div>;
  }

  return(
    <div className="container">
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
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

export default Detail;
