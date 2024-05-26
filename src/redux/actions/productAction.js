/* eslint-disable no-unused-vars */
// import { productActions } from "../reducers/productReducer";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/subin114/hnm-shopping-mall/products?q=${searchQuery}`;
//     // let url = `http://localhost:5000/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();

//     // if (data.length < 1) {
//     //   if (searchQuery !== "")
//     //     setError(`${searchQuery}와 일치하는 상품이 없습니다.`);
//     //   else throw new Error("결과가 없습니다.");
//     // }

//     console.log(data);
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getAllProducts({ data }));
//   };
// }

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/subin114/hnm-shopping-mall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProductDetail };
