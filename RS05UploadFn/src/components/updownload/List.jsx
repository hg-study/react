// =======================================
// 파일 목록
// 업로드된 파일 목록과 다운로드
// =======================================

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

// 서버의 업로드 폴더 파일 목록을 보여 주고, 이름을 누르면 다운로드함
// 다운로드 : responseType: "blob" 으로 파일 데이터를 받고, 임시 URL 을 만든 a 태그를 눌러 브라우저가 저장하게 함
const List = () => {
    const [fileList, setFileList] = useState([])
    useEffect(() => {
        // 화면이 처음 열릴 때 한 번 목록을 요청



        axios.get("http://localhost:8080/upload/list")
            .then(resp => {
                // console.log(resp); 
                setFileList(resp.data)
            })
            .catch(error => { console.log(error) })





        console.log("fileList", fileList);

    }, [])
    const handleDownload = (e) => {

        const filePath = e.target.getAttribute('data-filename');
        console.log('filePath', filePath);


        axios.get(
            "http://localhost:8080/download",
            { params: { "filePath": filePath }, responseType: 'blob', headers: { "Content-Type": "application/json" }, },
        )
            .then(resp => {
                console.log(resp);
                // //전달받은 파일 Download 처리하기
                const filename = filePath.split("/").pop();                             //마지막 경로 추출(파일명)
                const url = window.URL.createObjectURL(new Blob([resp.data]));          //blob 객체 생성,해당 경로를 URL로 지정 
                console.log("url", url);
                const link = document.createElement('a');                               //a태그생성
                link.href = url;                                                          //URL지정
                link.setAttribute('download', filename);                                 //해당 태그 클릭시 다운로드 처리를 위한 태그속성으로 변경
                document.body.appendChild(link);                                        //Body에 추가
                link.click();                                                           //클릭
                link.parentNode.removeChild(link);                                      //Body에서 제거
            })
            .catch(error => { console.log(error) })

    }
    return (
        <div>
            <h1>파일 목록 확인(React-Springboot)</h1>
            {fileList && (
                fileList.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <Link onClick={handleDownload} data-filename={el} > {el}</Link>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default List;