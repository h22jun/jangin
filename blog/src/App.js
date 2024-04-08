import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '라면 추천', '남자 음식 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [글제목제목, 글제목제목변경] = useState();
  let [입력값, 입력값변경] = useState('');

  // 각 항목의 가시성을 관리하는 상태를 추가합니다.
  let [visible, setVisible] = useState([true, true, true]);

  // 특정 인덱스의 항목 가시성을 토글하는 함수입니다.
  let toggleVisibility = (index) => {
    let newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  }

  function 따봉늘리기(index) {
    const newNumbers = 따봉.map((따봉, i) => {
      return i === index ? 따봉 + 1 : 따봉;
    });
    따봉변경(newNumbers);
  }

  function 글추가(a) {
    let copy1 = [...글제목];
    copy1.push(a);
    글제목변경(copy1);
    // 새 항목에 대한 가시성 상태를 추가합니다.
    setVisible([...visible, true]);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <div>
        {글제목.map(function (a, i) {
          return (
            <div key={i} style={{ display: visible[i] ? 'block' : 'none' }}>
              <div className="list">
                <h4 onClick={() => { setModal(!modal); 글제목제목변경(글제목[i]) }}>
                  {글제목[i]}<span onClick={(e) => { e.stopPropagation(); 따봉늘리기(i) }}>👍</span>{따봉[i]}
                </h4>
                <p>2월 17일 발행</p>
                <button onClick={() => toggleVisibility(i)}>삭제</button>
              </div>
            </div>
          );
        })}
        <input onChange={(e) => { 입력값변경(e.target.value) }} />
        <button onClick={() => { 글추가(입력값) }}>글생성</button>
{modal === true ? <Modal 글제목제목={글제목제목} /> : null}
</div>
</div>
);
}

function Modal(props){
return (
<div className="modal">
<h4>{props.글제목제목}</h4>
<p>날짜</p>
<p>상세내용</p>
</div>
);
}

export default App;

