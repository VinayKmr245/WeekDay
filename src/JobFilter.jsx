import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./JobFilter.css";

const JobFilter = ({ data }) => {
  const [searchInputs,setSearchInputs]=useState({});
  console.log("data", data)
  const handleSearch=(data)=>{
    console.log("data", data);
  }
  return (
    <div className="filter-list">
      
        <TextField
          variant="outlined"
          label="Min experience"
        />
        <TextField
          variant="outlined"
          label="Company name"
        />
        <TextField
          variant="outlined"
          label="Location"
        />
        <FormControl  variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Job Type</InputLabel>
          <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="onsite">On-Site</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          label="Role"
        />
        <TextField
          variant="outlined"
          label="Min Base Salary"
        />
        <Button className="search-button" variant="outlined" size="large" onClick={handleSearch}>
          Search
        </Button>
    </div>
  );
};

export default JobFilter;
