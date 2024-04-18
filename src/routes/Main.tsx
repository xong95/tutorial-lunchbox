// 메인화면을 담당하는 라우트

import Header from "../components/Main/Header";
import Content from "../components/Main/Content";
import OrderComplete from "../components/Main/OrderComplete";
import OrderCanceled from "../components/Main/OrderCanceled";
import Footer from "../components/Footer";

const id = "assistant0603";
export default function Main() {
  return (
    <>
      <h1>{id} 님 환영합니다.</h1>
    </>
  );
}

// 코딩후 이부분으로 대체
// interface PropTypes {
//   location: {
//     state: {
//       idFromLogin: any;
//     };
//   };
// }
// export default function Main({
//   location: {
//     state: { idFromLogin },
//   },
// }: PropTypes) {
//   return (
//     <>
//       <h1>{idFromLogin} welcome</h1>
//     </>
//   );
// }
