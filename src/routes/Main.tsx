// 메인화면을 담당하는 라우트

import Header from "../components/Main/Header"
import Content from "../components/Main/Content"
import OrderComplete from "../components/Main/OrderComplete"
import OrderCanceled from "../components/Main/OrderCanceled"
import Footer from "../components/Footer"

interface PropTypes {
    location : {
        state : {
            idFromLogin: any;
        }
    }
}
export default function Main({
    location: {
        state:{idFromLogin},
        },
    }: PropTypes) {
    return (
        <>
            <h1>{idFromLogin} welcome</h1>
        </>
    )
}