// =======================================
// React Bootstrap 컴포넌트
// 부트스트랩을 React 컴포넌트로 사용
// =======================================

import "./ReactBsComponent.scss"
import Button from 'react-bootstrap/Button';

// React Bootstrap : 부트스트랩을 클래스 이름 대신 컴포넌트로 쓰게 해 주는 라이브러리. 버튼 색상은 variant 속성으로 지정
const ReactBsComponent = () => {
    return (
        <div>
            <h2>REACT's BS5 COMPONENT 확인</h2>
            <div>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>
        </div>
    )
}

export default ReactBsComponent;
