// =======================================
// 파일 목록
// 업로드된 파일 목록과 다운로드
// =======================================

import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const List =()=>{

    const [fileList, setFileList] = useState([])

    useEffect(()=>{

        // 여러 번의 요청 / 기능 사용 예정. function + async / await 사

            axios.get("http://localhost:8080/upload/list")
                .then(resp => {
                    // console.log(resp);
                    setFileList(resp.data)        
            })  
            .catch(error => {console.log(error)})  
        
        console.log('fileList :>> ', fileList);
    },[])

    const handleDownload = (e) => {
        const filePath = e.target.getAttribute('data-filename');
        console.log('filePath :>> ', filePath);

        axios.get(
            "http://localhost:8080/download",
            {params:{"filePath":filePath},responseType:'blob',headers:{"Content-Type":"application/json"},},
        )
            .then(resp => {
                console.log(resp);
                // 전달받은 파일 Download 처리하기
                const filename = filePath.split("/").pop();                         // 마지막 경로 추출(파일명)
                const url = window.URL.createObjectURL(new Blob([resp.data]));      // blob 객체 생성, 해당 경로를 URL로 지정
                console.log('url :>> ', url);                                       
                const link = document.createElement('a');                           // a 태그 생성
                link.href = url;                                                    // URL 지정
                link.setAttribute('download',filename);                             // 해당 태그 클릭 시 다운로드 처리를 위한 태
                document.body.appendChild(link);                                    // Body에 추가
                link.click();                                                       // 클릭
                link.parentNode.removeChild(link);                                  // Body에서 제거
        })  
        .catch(error => {console.log(error)})  
    }

    return (
        <div>
            <h1>파일 목록 확인(React-Springboot)</h1>
            {fileList && (
                fileList.map((el, idx) => {
                    return(
                        <div key={idx}>
                            <Link onClick={handleDownload} data-filename={el}>{el}</Link>
                        </div>
                    )
                })
            )}
        </div>
    )
 
}

export default List;
