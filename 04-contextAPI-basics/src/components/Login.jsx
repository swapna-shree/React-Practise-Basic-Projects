import React , {useState , useContext} from 'react'
import UserContext from '../context/UseerContext'

function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    };

    return (
      <>
        <div>Login</div>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {"   "}
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
}

export default Login