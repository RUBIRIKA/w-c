import React from 'react'
import Image from 'next/legacy/image'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import { GiAmpleDress } from "react-icons/gi";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import KayakingOutlinedIcon from '@mui/icons-material/KayakingOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ChairAltOutlinedIcon from '@mui/icons-material/ChairAltOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SpeakerGroupOutlinedIcon from '@mui/icons-material/SpeakerGroupOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';


function Menu() {
    const Menu = [
    {
        title:"Church",
        icon:<ChurchOutlinedIcon />, 
    },

    {
        title:" Hall",
        icon:<OtherHousesOutlinedIcon/>,
    },

    {
      title:"Food",
      icon:<RestaurantOutlinedIcon/>,
     
  },

  {
    title:"Beverage",
    icon:<EmojiFoodBeverageOutlinedIcon/>,
   
  },

  {
    title:"Cake",
    icon:<CakeOutlinedIcon/>,
   
  },

    {
      title:"Photoshoot",
      icon:<LocalFloristOutlinedIcon/>,
    },
    
    {
      title:"Honeymoon",
      icon:<KayakingOutlinedIcon/>,
    },
    
    {
      title:"CivilMariage",
      icon:<GavelOutlinedIcon/>,
    },

    {
      title:"ModernDecor",
      icon:<ChairOutlinedIcon/>,
    },

    {
      title:"TraditonalDecor",
      icon:<ChairAltOutlinedIcon/>,
    },

    {
      title:"Dress",
      icon:<GiAmpleDress/>,
    },
    
    {
      title:"Ring",
      icon:<DataSaverOffOutlinedIcon/>,
    },

    {
      title:"Transportation",
      icon:<DirectionsCarOutlinedIcon/>,
    },

    {
      title:"Images ",
      icon:<CameraAltOutlinedIcon />,
    },

    {
      title:"Sound",
      icon:<SpeakerGroupOutlinedIcon />,
    },

    {
      title:"Entertainment",
      icon:<PianoOutlinedIcon/>,
    },

    {
      title:"M.C",
      icon:<InterpreterModeOutlinedIcon/>,
    },

    {
      title:"Protocal",
      icon:<FollowTheSignsOutlinedIcon/>,
    },

    


];
  return (
    <div className="flex pt-4 space-x-4 pl-2  ">
      
      {  Menu?.map((menu) => (
        
        <div className="border-2 border-gray-200 rounded-2xl h-10  p-2  hover:scale-110 transition transform duration-200 ease-out">
          <a href="" className="flex items-center  space-x-3 ">
          {menu.icon}
          <p className="font-semibold mt-1 text-sm ">  {menu.title}  </p>
          </a>
          
        
      
        </div>
        
      )

        )}
        
    </div>
  )
}

export default Menu
