import { Rowing } from "@mui/icons-material";
import { Box , Stack, Typography} from "@mui/material";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {SideBar , Videos} from '.';

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVidoes(data.items))
    }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", background: '#242928'} }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory = {selectedCategory} setselectedCategory = {setselectedCategory}/> 
        <Typography className = "copyright" variant = "body2" sx = {{mt: 1.5, color: '#fff'}}>
          Copyright 2023 NSN Media
        </Typography>
      </Box>
      <Box p = {2} sx = {{ overflowY : 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight = 'bold' mb = {2} sx = {{color: 'white'}}>
          {selectedCategory}
          <span style = {{color: '#F31503'}}> Videos</span>
        </Typography>
        <Videos videos = {videos}/>
      </Box>


    </Stack>
  );
};

export default Feed