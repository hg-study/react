// =======================================
// 파일 업로드
// 선택한 파일을 서버로 전송
// =======================================

import {useState} from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// 파일 선택 후 UPLOAD 를 누르면 FormData 로 서버에 전송함
// FormData : multipart/form-data 형식의 본문을 만드는 브라우저 객체. 같은 이름(files)으로 append 하면 서버에서 배열로 받음
const Upload = () => {
    const navigate = useNavigate();
    const [files,setFiles] = useState([])

    // 선택한 파일 목록(FileList)을 state 에 저장
    const fileChangeHandler = (e)=>{
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.files);
        
        setFiles(e.target.files);
    }
    const uploadHandler = ()=>{
        console.log("files",files);
        
        const formData = new FormData();
        for(let idx in files)
            formData.append("files",files[idx])
        axios
        .post(
          `http://localhost:8080/upload`,                       // URL
          formData,                                             // FORMDATA(BODY)
          { headers: {'Content-Type' :'multipart/form-data' } } // HEADER
        )
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
            console.error('error.response.data', error.response.data);
            navigate('/exception', { state: { message: error.response.data.message, status: error.response?.status } } );
        });
    }

    return (
        <div>
            <h1>파일 업로드 TEST(REACT-SPRINGBOOT)</h1>
            <input type="file" name="files"  onChange={fileChangeHandler} multiple />
            <button onClick={uploadHandler}>UPLOAD</button>
        </div>
    )
}

export default Upload;