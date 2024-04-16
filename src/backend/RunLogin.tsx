import{ useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface PropTypes{
    id:string;
    passwd:string;
    setRunLogin:(flag:boolean) => void;
    setFailedAlarm: (flag:boolean) => void;
    goMain : () => void;
}

const GET_USER_INFO = gql`
    query personByUserId($userId : String!) {
        personByUserId(userId: $userId){
            password
        }
    }
`;

export default function RunLogin({id, passwd, setRunLogin, setFailedAlarm, goMain}:PropTypes){
    const { loading, data } = useQuery(GET_USER_INFO, {
        variables : { userId : id }
    });
    useEffect(() => {
        //여기서 말하는 로딩은, 로딩페이지 플래그가 아님
        //데이터가 아직 백엔드에서 들어오지 않았다는 플래그
        if(!loading) {
            if(data.personByUserId === null) {
                setFailedAlarm(true);
                setRunLogin(false);
                //로그인실패 알람 띄운다
                //몇초뒤 알람꺼지고 런 로그인을끈다
            } else if(passwd !== data.personByUsreId.password) {
                setFailedAlarm(true);
                setRunLogin(false); //이컴포넌트 자체를 끄는 플래그
                //로그인 실패 알람을 띄운다
                //몇초뒤 알람꺼지고
                //런 로그인을 끈다
            } else {
                //로그인 성공시
                goMain()
            }
    
            //Warning : Cannot  update a component while rendering.....
            //1번째 방법 : 이벤트를 잘못 쓰지 않았나
            //2번째 방법 : 문제가 되는 부분을 useEffect() 로 감싸라
        }
    })
    return<></>;
}