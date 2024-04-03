import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '라면 추천', '남자 음식 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [글제목제목, 글제목제목변경] = useState()
  let [입력값, 입력값변경] = useState('');
  const [visible, setVisible] = useState(true);

// 특정 인덱스의 숫자를 1 증가시키는 함수입니다.
function 따봉늘리기(index) {
  // map 함수를 사용해 새 배열을 생성합니다.
  const newNumbers = 따봉.map((따봉, i) => {
    // 증가시키고 싶은 인덱스의 요소라면, 1을 더합니다.
    if (i === index) {
      return 따봉 + 1;
    }
    // 그 외의 요소는 그대로 유지합니다.
    return 따봉;
  });

  // 새 배열로 numbers 상태를 업데이트합니다.
  따봉변경(newNumbers);
}

function 글바꾸기(){
  let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          copy[2] = '여자 음식 추천';
          글제목변경(copy);
}

function 글제목수정(){ 글제목.map(function(a,i){
  let copy = [...글제목]
  return (copy[i]);
})};

function 글추가(a){
  let copy1 = [...글제목];
  copy1.push(a);
  return 글제목변경(copy1);
        
}



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          copy[2] = '여자 음식 추천';
          글제목변경(copy);
        }}>성별</button>
      </div>
      <button onClick={()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
      }}>가나다순정렬</button>
      <div>
        {글제목.map(function(a, i){
          return(
          <div className="list" key={i} >
                <h4 onClick={(e)=>{ e.stopPropagation(); setModal(!modal); 글제목제목변경(글제목[i]) }}>{ 글제목[i] }<span onClick={()=>{ 따봉늘리기(i) }}>👍</span>{따봉[i]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                setVisible(false);
              }}>삭제</button>
              </div>
            
          );
        })}
        <input onChange={(e)=>{ 입력값변경(e.target.value)
        console.log(입력값)
        }} /><button onClick={()=>{
          글추가(입력값)
        }}>글생성</button>


        {modal === true ? <Modal 글제목제목 = {글제목제목} /> : null}
      </div>
    </div>
    
  );
  
}



function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}




export default App;
