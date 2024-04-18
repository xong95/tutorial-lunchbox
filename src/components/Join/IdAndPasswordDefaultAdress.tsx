import { gql, useMutation } from "@apollo/client";
import "./IdAndPasswordDefaultAdress.css";

interface PropTypes {
  id: string;
  password: string;
  address: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setAddress: (address: string) => void;
  alarmOn: () => void;
}

const SET_USER = gql`
  mutation createPerson(
    $userId: String!
    $password: String!
    $defaultAddress: String!
  ) {
    createPerson(
      input: {
        person: {
          userId: $userId
          password: $password
          defaultAddress: $defaultAddress
        }
      }
    ) {
      clientMutationId
    }
  }
`;

export default function IdAndPasswordDefaultAdress({
  id,
  setId,
  password,
  setPassword,
  address,
  setAddress,
  alarmOn,
}: PropTypes) {
  //useMutation 으로부터 만들어진 setUser 라는 함수를 사용
  const [setUser, {data}] = useMutation(SET_USER, {
    //에러 핸들러
    onError: () => {
      alarmOn();
    }
  });

  const join = () => {
    if (id !== "" && password !== "") {
      setUser({
        variables:{
          userId :id,
          password : password,
          defaultAddress : address
        }
      });
    } else {
      alarmOn();
    }
  };
  return (
    <>
      <div className="idAndPasswordDefaultAddress">
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="idInJoinInput"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="idInJoinInput">ID</label>
        </div>
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="passwordInJoinInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInJoinInput">PASSWORD</label>
        </div>
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="addressInJoinInput"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="addressInJoinInput">ADDRESS</label>
        </div>
      </div>
      <div className="buttionContainer">
        <div className="d-grid gap-2">
          <button
            className="loginButton btn btn-primary"
            type="button"
            onClick={join}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
}
