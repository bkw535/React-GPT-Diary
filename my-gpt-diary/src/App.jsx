import { useState } from "react";
import { CallGPT } from "./api/gpt";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT();
      setData(message);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button onClick={handleClickAPICall}>GPT API call</button>
      <div>data : {data}</div>
      <div>isLoading : {isLoading ? "loading.." : "finish"}</div>
    </>
  )
}

export default App;
