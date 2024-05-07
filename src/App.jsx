import { useEffect, useState } from "react";
import "./App.css";
import JobFilter from "./JobFilter";
import JobResultsArea from "./JobResultsArea";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const ans= JSON.parse(result);
        console.log(ans, typeof ans, "ans");
        return setData(ans);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("data in APP.jsx",data)

  return (
    <div className="App">
      <JobFilter />
      <JobResultsArea jobList={data.jdList} /> 
    </div>
  );
}

export default App;
