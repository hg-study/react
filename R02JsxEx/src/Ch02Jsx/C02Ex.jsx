// =====================================================================
// 02_EX - JSX 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 컴포넌트의 부분을 직접 채워서 완성하세요.
// 테마: 쇼핑몰 상품
// =====================================================================

// ---------------------------------------------------------------------
// [단계 1] JSX 요소 만들기 (화살표 함수 / function 두 방식)
//  ShopBanner  : 화살표 함수로 만들고 <h3>오늘의 마켓</h3> 을 반환
//  ShopNotice  : function 키워드로 만들고 <h3>특가 진행중</h3> 을 반환
// ---------------------------------------------------------------------
export const ShopBanner = () => {
  // <h3> 요소를 return 하세요.
  return <h3>오늘의 마켓</h3>
};

export function ShopNotice() {
  // <h3> 요소를 return 하세요.
  return <h3>특가 진행중</h3>
}

// ---------------------------------------------------------------------
// [단계 2] Props 로 값 전달받기
//  props 로 받은 name, price 를 "상품명 - 가격원" 형태로 출력하세요.
//         예) 아메리카노 - 3000원
// ---------------------------------------------------------------------
export function ProductLine(props) {
  // props.name 과 props.price 를 사용해 <p>...</p> 를 return 하세요.
  return <p>{props.name} - {props.price}원</p>
}

// ---------------------------------------------------------------------
// [단계 3] 구조분해할당 + 계산식 응용 (할인가 구하기)
//  1) props 를 { name, price, rate } 로 구조분해할당 받으세요.
//  2) 할인가 = price * (100 - rate) / 100 을 계산하세요.
//  3) "정가 ...원 -> rate% 할인가 할인가원" 형태로 출력하세요.
// ---------------------------------------------------------------------
export function DiscountLine({name, price, rate}) {
  // 구조분해할당 + 할인가 계산 후 return

  const discount = price * (100 - rate) / 100;
  
  return <p>{name} - 정가 {price}원 → {rate}% 할인가 {discount}원</p>
}

// ---------------------------------------------------------------------
// [단계 4] 조건부 출력 응용 (재고 수에 따라 3가지 상태)
//  stock 값에 따라 status 를 정하세요.
//         - stock === 0   : "품절"
//         - stock <= 5    : "마감임박 (n개 남음)"   (n 은 stock 값)
//         - 그 외          : "구매가능"
//  "상품명 : status" 형태로 출력하세요.
// ---------------------------------------------------------------------
export function StockStatus({ name, stock }) {
  // if / else if / else 로 status 를 정한 뒤 <p> 로 return 하세요.

  let status;

  if(stock === 0) {
    status = "품절";
    return <p>{name} : {status}</p>

  }else if(stock <= 5){
    status = "마감임박";
    return <p>{name} : {status}({stock}개 남음)</p>
  } else{
    status = "구매가능"
    return <p>{name} : {status}</p>
  }
}

// ---------------------------------------------------------------------
// [단계 5] 객체 배열 map 반복 + 합계 계산
//  items 예시: [{ id, name, price, qty }, ...]
//  1) 각 상품을 "상품명 x 수량 = 금액원" 으로 <li> 목록 출력 (key 는 id)
//            금액 = price * qty
//  2) reduce 로 전체 합계를 구해 맨 아래 "합계 : 합계원" 출력
// ---------------------------------------------------------------------
export function Cart({ items }) {
  // total 계산 (reduce)
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // <ul> + map 으로 목록 출력, 아래에 합계 출력
  return (
    <ul>
        {items.map((item)=>{
          return (
            <li key ={item.id}>
              {item.name} x {item.qty} = {item.price}원
              
            </li>
            )
        })}
        <p>합계: {total}원</p>
    </ul>
    
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_02() {
  const cartItems = [
    { id: 1, name: "사과", price: 1000, qty: 3 },
    { id: 2, name: "우유", price: 2500, qty: 2 },
    { id: 3, name: "빵", price: 1800, qty: 1 },
  ];

  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      {/* 단계 1 */}
      <ShopBanner />
      <ShopNotice />
      <hr />

      {/* 단계 2 */}
      <h3>[단계 2] Props 전달</h3>
      <ProductLine name="아메리카노" price={3000} />
      <ProductLine name="카페라떼" price={3500} />
      <hr />

      {/* 단계 3 */}
      <h3>[단계 3] 구조분해 + 할인가 계산</h3>
      <DiscountLine name="노트북" price={1000000} rate={10} />
      <DiscountLine name="마우스" price={20000} rate={25} />
      <hr />

      {/* 단계 4 */}
      <h3>[단계 4] 재고 상태 (조건부)</h3>
      <StockStatus name="키보드" stock={0} />
      <StockStatus name="모니터" stock={3} />
      <StockStatus name="USB" stock={50} />
      <hr />

      {/* 단계 5 */}
      <h3>[단계 5] 장바구니 (map + 합계)</h3>
      <Cart items={cartItems} />
    </div>
  );
}

export default EX_02;
