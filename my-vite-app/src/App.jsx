
import { useState } from "react";
import Form from "./from";
import Table from "./table";
import Com2 from "./com2";



function App() {
  const [userData, setUserData] = useState('');

  return (
    <>
      {
        !userData ? <Form setData={setUserData}></Form>
          : <><Table></Table> <Com2></Com2></>


      }
    </>
  )
}

export default App


