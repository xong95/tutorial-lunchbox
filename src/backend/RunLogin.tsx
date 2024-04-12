import { useQuery, gql } from "@apollo/client";
import Loading from '../components/Login/Loading';

interface PropTypes{
    id:string,
    passwd:string
}

const GET_USER_INFO = gql`
    query personByUserId {
        allPeople {
            edgets {
                node{
                    userId
                }
            }
        }
    }
`;

export default function RunLogin({id, passwd}:PropTypes){
    const { loading, data } = useQuery(GET_USER_INFO);
    if(!loading) {
        console.log(data.allPeople.edges);
    }
    return<></>;
}