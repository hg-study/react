// =======================================
// 기본 스타일링
// 인라인 스타일, CSS 파일, 부트스트랩 클래스
// =======================================

import "./Basic.css"

// 스타일을 적용하는 방법
// 1) 인라인 style : 객체로 지정, 속성은 camelCase
// 2) CSS 파일 import : className 으로 클래스 지정 (JSX 에서는 class 대신 className)
// 3) Bootstrap 클래스 : 부트스트랩 CSS 와 JS 가 index.html 에 로드되어 있어야 동작함
const Basic = () => {
    return (
        <div className="basic-component">
            <h2>Basic Component</h2>

            {/* IN-LINE */}
            <div style={{width:"100px", height: "100px", backgroundColor:"orange" }}></div>

            {/* IMPORT */}
            <div className="box-2"></div>

            {/* BS5 - 바닐라 JS : data-bs-* 속성으로 모달을 열고 닫음 */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Basic;
