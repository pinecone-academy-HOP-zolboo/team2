import axios from 'axios'
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { instance } from './instance';

export const PostData = createContext();

export const Source = ({ children }) => {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    const res = await instance.get(`/post`);
    // console.log(res)
    setPostData(res.data.data);
  }

  useEffect(() => {
    getPostData();
  }, );

  return (
    <PostData.Provider value={{ postData, refresh: getPostData }}>
      {children}
    </PostData.Provider>
  );

}

export default Source;
