import React from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import './properties.scss';
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import PIC3 from '../../assets/PIC3.jpg';
import PIC4 from '../../assets/PIC4.jpg';
import PIC5 from '../../assets/PIC5.jpg';
import PIC6 from '../../assets/PIC6.jpg';
import PIC7 from '../../assets/PIC7.jpg';
import PIC8 from '../../assets/PIC8.jpg';
import PIC9 from '../../assets/PIC9.jpg';
import PIC11 from '../../assets/PIC11.jpg';
import A from '../../assets/A.png';
import B from '../../assets/B.png';
import C from '../../assets/C.png';
import D from '../../assets/D.png'; 
import form from '../../assets/form.png';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';




const Data = [
  {
    id:1,
    imgSrc: pic1,
    PriceTitle: 'USD $200',
    available: 'Available',
    location: '1600 Pennsylvania Avenue NW, Washington, D.C., United States',
    propType: 'Villa',
    rooms: '8 rooms',
    months:'6 months',

  },
  {
    id:2,
    imgSrc: pic2,
    PriceTitle: 'USD $250',
    available: 'Requested',
    location: '10 Downing Street, London, United Kingdom',
    propType: 'House',
    rooms: '5 rooms',
    months:'6 months',

  },
  {
    id:3,
    imgSrc: PIC3,
    PriceTitle: 'USD $300',
    available: 'Occupied',
    location: ' 55 Rue du Faubourg Saint-Antoine, Paris, France',
    propType: 'Condominium',
    rooms: '3 rooms',
    months:'7 months',

  },
  {
    id:4,
    imgSrc: PIC4,
    PriceTitle: 'USD $350',
    available: 'Available',
    location: 'Unter den Linden 77, Berlin, Germany',
    propType: 'Townhouse',
    rooms: '4 rooms',
    months:'2 months',

  },
  {
    id:5,
    imgSrc: PIC5,
    PriceTitle: 'USD $400',
    available: 'Requested',
    location: 'Sussex Drive, Ottawa, Canada',
    propType: 'Mobile Home',
    rooms: '1 rooms',
    months:'5 months',

  },
  {
    id:6,
    imgSrc: PIC6,
    PriceTitle: 'USD $450',
    available: 'Occupied',
    location: 'Treasury Place, Melbourne, Australia',
    propType: 'Condominium',
    rooms: '2 rooms',
    months:'2 months',

  },
  {
    id:7,
    imgSrc: PIC7,
    PriceTitle: 'USD $500',
    available: 'Available',
    location: 'Chiyoda, Tokyo, Japan',
    propType: 'Cottage',
    rooms: '3 rooms',
    months:'4 months',

  },
  {
    id:8,
    imgSrc: PIC8,
    PriceTitle: 'USD $550',
    available: 'Requested',
    location: ' Praça dos Três Poderes, Brasília, Brazil',
    propType: 'House',
    rooms: '4 rooms',
    months:'3 months',

  },
  {
    id:9,
    imgSrc: PIC9,
    PriceTitle: 'USD $600',
    available: 'Available',
    location: '120 Plein Street, Cape Town, South Africa',
    propType: 'Villa',
    rooms: '6 rooms',
    months:'6 months',

  },
  {
    id:10,
    imgSrc: PIC11,
    PriceTitle: 'USD $50',
    available: 'Available',
    location: 'Rashtrapati Bhawan, New Delhi, India',
    propType: 'Studio Apartment',
    rooms: '1 room',
    months:'1 month',

  }
]


const Properties = () => {

  const [openApplyDialog, setOpenApplyDialog] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  

  const [Country, setCountry] = React.useState('Country');
  const [Property, setType] = React.useState('Property Type');
  
  
  const openApplyPopup = () => {
    setOpenApplyDialog(true);
  };


  const closeApplyPopup = () => {
    setOpenApplyDialog(false);
  };
  


  const handleCountryChange = (event) => {
    setCountry(
      event.target.value,
    );
  };

  const handleTypeChange = (event) => {
    setType(
      event.target.value,
    );
  };

  const [walletAddress, setWalletAddress] = useState("");

async function requestAccount(){
  console.log('Requesting account....');
  
  if(window.ethereum) {
    console.log('detected.');

    try{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    } catch (error){
      console.log('error connecting ...');
    }

  } else{
    console.log('metamask not detected.');
  }
}
  return (
    <section className='haven__prop section'>
      <div className="sec__title">
        <h3 className='Title'>
          List Of Properties
        </h3>

        <button onClick={openApplyPopup} type='button' className='list_button'>
          List Property
        </button>

        <Dialog open={openApplyDialog} onClose={closeApplyPopup} fullWidth maxWidth="md" >
        
          
          <DialogContent className='dialog_content'>
            
                <div className='form_title'>
                <img src={form} alt='form' 
                style={{width: '150px', height:'150px', marginLeft: '25%'}}/>
                
                <DialogTitle className='title'>
                  Provide property details and ownership verification
                </DialogTitle>
                </div>
                <Stack spacing={2} margin={2}
                 sx={{
                  color: "#D9D9D9",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  
                }}>
                
          <div className='form'>
          
          <IconButton onClick={closeApplyPopup} style={{ float: 'right' }} >
              <CloseIcon className='bottunn' />
            </IconButton>
            <Stack spacing={2} margin={2}
            sx={{
              width: "390px",
               height: "45px",
              color: "#D9D9D9",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              
              
            }}>
          <Box
                
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              
              
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              
              <Select
              
                autoFocus
                value={Country}
                onChange={handleCountryChange}
                inputProps={{
                  name: 'Country',
                  id: 'Country',
                }}
                sx={{
                  backgroundColor: "#D9D9D9",
                  borderRadius:"5px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
              >
                <MenuItem variant="outlined" value="Country">Country</MenuItem>
                <MenuItem value="xs">Algeria</MenuItem>
                <MenuItem value="md">UK</MenuItem>
                <MenuItem value="lg">France</MenuItem>
                <MenuItem value="xl">Turkey</MenuItem>
                <MenuItem value="xs">Albania</MenuItem>
                <MenuItem value="md">USA</MenuItem>
                <MenuItem value="lg">Spain</MenuItem>
                <MenuItem value="xl">Maroco</MenuItem>
                <MenuItem value="xs">Libia</MenuItem>
                <MenuItem value="md">Soudi Arabia</MenuItem>
                <MenuItem value="lg">Italy</MenuItem>
                <MenuItem value="xl">Canada</MenuItem>
              </Select>
            </FormControl>
            
          </Box>
               
          <TextField
              variant="outlined"
              label="City"
              className='text'
            />
  
              

            <Box
                
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              
            }}
          >
            <FormControl sx={{ mt: 1, minWidth: 90 }}>
              
              <Select
              
                autoFocus
                value={Property}
                onChange={handleTypeChange}
                inputProps={{
                  name: 'Property Type',
                  id: 'Property Type',
                }}
                sx={{
                  backgroundColor: "#D9D9D9",
                  borderRadius:"5px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
                
              >
                <MenuItem variant="outlined" value="Property Type">Property Type</MenuItem>
                <MenuItem value="xs">Villa</MenuItem>
                <MenuItem value="md">House</MenuItem>
                <MenuItem value="lg">Mobile House</MenuItem>
                <MenuItem value="xs">Studio Apartment</MenuItem>
                <MenuItem value="md">Town house</MenuItem>
                <MenuItem value="lg">Condominium</MenuItem>
               
              </Select>
            </FormControl>
            
          </Box>


                <TextField variant="outlined" label="Number of Rooms" className='text'/>
                <TextField variant="outlined" label="Price" className='text'/>
                <TextField variant="outlined" label="Number of Months" className='text'/>

                  
                    {/* ... (your buttons) */}
                    <Button onClick={closeApplyPopup} className='verity_bottun' variant="contained" 
                    sx={{
                      
                      alignItems: "center",
                      background: "#EBA654",
                      fontFamily: "Inter",
                      fontSize: "20px",
                      color:"#000",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      textTransform: "capitalize",
                    }}>
                      Verify Ownership
                    </Button>
                    </Stack>
                    </div>
            </Stack>
          </DialogContent>
         
         </Dialog>
    </div>
      <div className="sec__content grid">
        {
          Data.map(({id, imgSrc, PriceTitle, available, location, propType, rooms,months}) =>{
            return(
              <div key={id} className="singleProperty">

                <div className="imageDiv">
                  <img src={imgSrc} alt='' />
                </div>
                <div className="infoDiv">
                  <h4 className='price'>{PriceTitle}</h4>
                  <h4 className='availability'>{available}</h4>
                </div>
                <div className="location">
                  <img src={A} alt='location'/>
                  <p>{location}</p>
                </div>
                <div className="type">
                  <img src={B} alt=''/>
                  <p>{propType}</p>
                </div>
                <div className="nombre">
                <div className="rooms">
                  <img src={C} alt=''/>
                  <p>{rooms}</p>
                </div>
                <div className="months">
                  <img src={D} alt=''/>
                  <p>{months}</p>
                </div>
              </div>
              <div className='btns'>
                <button id="connectwallet" className='btn' onClick={requestAccount}>Donate</button>
                <button className='btn'>request</button>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Properties