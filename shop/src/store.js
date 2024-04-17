import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state;
    }
  }
});

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
});

let basket = createSlice({
  name: 'basket',
  initialState: [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Grey Yordan', count: 1}
  ], 
  reducers: {
    changeCount(state, action) {
      const id = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.count += 1;
      }
    },
    addBasket(state, action) {
      // action.payload가 배열이 아니라 단일 객체인 경우를 처리하기 위해 배열로 변환
      const itemsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];
      itemsToAdd.forEach(newItem => {
        const existingItem = state.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.count += newItem.count || 1; // newItem.count가 있으면 그 값을 사용, 없으면 1을 사용
        } else {
          // 새 항목 추가
          state.push({
            id: newItem.id,
            name: newItem.name, // 'title'이 아닌 'name'을 사용
            count: newItem.count || 1 // 초기 count 값을 설정
          });
        }
      });
    }
  }
});

export let { changeName } = user.actions;
export let { changeCount, addBasket } = basket.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    basket: basket.reducer
  }
});
