import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from './ItemList'
import api from '../API/api'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [data, setData] = useState([])
  const { category } = useParams();

  const consultarApi = async () => {
    if (category === undefined) {
      const products = await api.get(`/products`);
      return setData(products.data);
    } else {  
      const products = await api.get(`/products/category/${category}`);
      return setData(products.data);
    }
  };

  useEffect(() => {
    consultarApi();
  }, [category]);

  return (
    
    <ItemList
      data={data}
    />
    
  );
};

export default ItemListContainer;
