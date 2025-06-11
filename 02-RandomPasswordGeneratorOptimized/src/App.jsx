import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
   const [length , setLength] = useState(8);
   const [number , setNumber] = useState(false); 
   const [character , setCharacter] = useState(false); 
   const [password , setPassword] = useState("");

   const psswordRef = useRef(null);
   
const passwordGenerator = useCallback(()=>{
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-[]{}|;:,.<>?";

    if(number) str+=numberChars;
    if(character) str+=symbolChars;

    for(let i = 1; i <= length ; i++){
      const index = Math.floor(Math.random() *str.length);
      pwd += str.charAt(index);
    }
    setPassword(pwd);
  } , [length,number,character,setPassword]) 

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(()=>{
    passwordGenerator()
  } , [length,number,character,passwordGenerator])

   return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-amber-600 bg-amber-200 text-xl'>
      <h1 className='text-amber-700 text-center my-2 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-3'>
        <input type="text" value={password} className='outline-none w-full py-2 px-3' placeholder='Password' readOnly ref={psswordRef}/>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        onClick={copyPasswordToClipboard}>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-200 dark:bg-amber-600 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Copy
</span>
</button>
      </div>
      <div className='flex text-sm gap=x-4 flex-col space-y-2' >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
           min={8}
           max={30}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{
            setLength(e.target.value)
           }}/>
           <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={number} id='numInput' onChange={()=>{
            setNumber((prev)=> !prev) 
           }} />
           <label htmlFor='numInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={character} id='charInput' onChange={()=>{
            setCharacter((prev)=> !prev) 
           }} />
           <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
