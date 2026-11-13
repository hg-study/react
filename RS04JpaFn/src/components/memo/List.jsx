// =======================================
// 메모 목록
// 예외 테스트 요청
// =======================================

import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

// 예외 발생 요청을 보내 보는 화면. 서버가 예외를 응답하면 catch 에서 /exception 화면으로 이동하며 상태코드와 메시지를 state 로 전달함
const List =()=>{

    const [n1,setN1] = useState(0)
    const [n2,setN2] = useState(0)
    
    // useNavigate : 코드로 화면을 이동시키는 함수를 돌려주는 Hook
    const navigate = useNavigate();

    const handlerRequestList1=()=>{

        axios.get(`http://localhost:8085/memo/list1`)
            .then(resp =>{console.log(resp)})
            .catch(err =>{
                console.log(err.response)
                //
                navigate('/exception',{state: { message: err.response.data.message, status: err.response?.status} })
            })

    }
    const handlerRequestList2=()=>{
        axios.get(`http://localhost:8085/memo/list2`)
            .then(resp =>{console.log(resp)})
            .catch(err =>{
                console.log(err.response)
                //
                navigate('/exception',{state: { message: err.response.data.message, status: err.response?.status } })
            })
    }
    const handlerRequestList3=()=>{
        
        axios.get(`http://localhost:8085/memo/list3/${n1}/${n2}`)
            .then(resp =>{console.log(resp)})
            .catch(err =>{
                console.log(err.response)
                //
                navigate('/exception',{state: { message: err.response.data.message, status: err.response?.status } })
            })
    }

    return (
        <div>
            <h2>MEMO LIST</h2>
            <hr/>
            <h3>임시 EXCEPTION TEST</h3>
            <button onClick={handlerRequestList1}>http://localhost:8085/memo/list1</button> <br/>
            <button onClick={handlerRequestList2}>http://localhost:8085/memo/list2</button> <br/>
            <hr/>
            n1: <input onChange={e=>{setN1(e.target.value)}} /> <br/>n2 : <input onChange={e=>{setN2(e.target.value)}} /> <br/>
            <button onClick={handlerRequestList3}>http://localhost:8085/memo/list3</button> <br/>
        </div>
    )
}

export default List;
