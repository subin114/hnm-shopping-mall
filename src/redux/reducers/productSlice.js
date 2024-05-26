import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/subin114/hnm-shopping-mall/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  // 성공 실패 결과 작성하는 곳 (dispatch를 이용해서 바로바로 호출하는 것은 아니지만, 외부 라이브러리에 의해 호출되는 엑스트라 내용들은 여기에 작성)
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

console.log("pppp", productSlice);

export default productSlice.reducer;
export const productActions = productSlice.actions;

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS": {
//       return { ...state, productList: payload.data };
//     }
//     case "GET_SINGLE_PRODUCT_SUCCESS": {
//       return { ...state, selectedItem: payload.data };
//     }
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;
