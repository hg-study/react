// =======================================
// onClick
// 클릭 이벤트에 핸들러를 연결
// =======================================

const EventComponent_01 = () =>{
    const handleClick = () => { console.log('clicked...');}
    return <button onClick={handleClick}>onClick</button>
}

export default EventComponent_01
