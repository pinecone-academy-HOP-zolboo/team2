import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { instance } from "../../instance";
import { Button } from "./button";
import './card.css'

export const CreatePost = () => {
    const [title, setTitle] = useState('');

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        console.log('asd')
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const convertImage = async () => {
        const file = document.querySelector("#fileInput").files[0];
        const encodedImage = await toBase64(file);
        console.log(encodedImage)
        return encodedImage;
    }

    const createPost = async () => {
        const image = await convertImage();
        const { data } = await instance.post('/post/create', { title: title, image: image });
    }

    return (
        <div className="container">
            <div className="inputContainer">
                <input placeholder="title" type={'text'} id="input" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <button id="uploadButton">Upload Image</button>
                <input type={'file'} id="fileInput" accept="image/jpeg, image/jpg, image/gif, image/png"></input>
                <Button onClick={createPost} text={"Submit"} />
            </div>
        </div>
    );
}