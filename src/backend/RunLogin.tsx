import{ useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface PropTypes{
    id:string;
    passwd:string;
    setRunLogin:(flag:boolean) => void;
    setFailedAlarm: (flag:boolean) => void;
    offFailedAlarm : () => void;
}

const GET_USER_INFO = gql`
    query personByUserId($userId : String!) {
        personByUserId(userId: $userId){
            password
        }
    }
`;

export default function RunLogin({id, passwd, setRunLogin, setFailedAlarm, offFailedAlarm}:PropTypes){
    const { loading, data } = useQuery(GET_USER_INFO, {
        variables : { userId : id }
    });
    useEffect(() => {
        if(!loading) {
            if(data.personByUserId === null) {
                setFailedAlarm(true);
                offFailedAlarm();
                setRunLogin(false);
                //로그인실패 알람 띄운다
                //몇초뒤 알람꺼지고 런 로그인을끈다
            } else if(passwd !== data.personByUsreId.password) {
                setFailedAlarm(true);
                offFailedAlarm();
                setRunLogin(false);
                //로그인 실패 알람을 띄운다
                //몇초뒤 알람꺼지고
                //런 로그인을 끈다
            } else {
                //goMain()
            }
    
            //Warnoing : Cannot  update a component while rendering.....
            //1번째 방법 : 내가 혹시 이벤트를 잘못 쓰지 않았나
            //2번째 방법 : 문제가 되는 부분을 useEffect() 로 감싸라
        }
    })
    return<></>;
}