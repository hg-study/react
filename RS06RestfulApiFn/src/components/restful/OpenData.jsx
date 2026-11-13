// =======================================
// 공공데이터 화면
// 날씨, 버스 정보를 서버에 요청
// =======================================

import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";

// 서버가 공공데이터 API 를 호출해 주도록 요청하는 화면. 서비스 키는 서버에만 두고 React 는 서버 주소만 호출함
const OpenData = () => {

    const handleWeather = () => {
        axios.get(`http://localhost:8080/Open/Weather`)
                .then(resp=>{console.log(resp)})
                .catch(err=>{console.log(err)})
    }


    const handleBusInfo = () => {
        axios.get(`http://localhost:8080/Open/Bus/7001001600/649`)
                .then(resp=>{console.log(resp)})
                .catch(err=>{console.log(err)})
    }

    return (
        <div>
            <button onClick={handleWeather}>날씨정보 요청</button><br/>
            <button onClick={handleBusInfo}>버스노선정보 요청</button><br/>
        </div>
    )
}

export default OpenData;