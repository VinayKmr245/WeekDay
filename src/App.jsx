import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import "./App.css";
import "./JobFilter.css";
import JobResultsArea from "./JobResultsArea";

function App() {
  const [data, setData] = useState({});
  const [searchInputs, setSearchInputs] = useState({});
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
        const ans = JSON.parse(result);
        console.log(ans, typeof ans, "ans");
        return setData(ans);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (data) => {
    return "";
  };

  return (
    <div className="App">
      <div className="filter-list">
        <TextField variant="outlined" label="Min experience" />
        <TextField variant="outlined" label="Company name" />
        <TextField variant="outlined" label="Location" />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Job Type</InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="onsite">On-Site</MenuItem>
          </Select>
        </FormControl>
        <TextField variant="outlined" label="Role" />
        <TextField variant="outlined" label="Min Base Salary" />
        <Button
          className="search-button"
          variant="outlined"
          size="large"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <JobResultsArea jobList={data.jdList} />
    </div>
  );
}

export default App;
