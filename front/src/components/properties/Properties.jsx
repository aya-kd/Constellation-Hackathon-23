import React from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import contract from "../../contracts/Havon.json";
import { ethers } from 'ethers/dist/ethers.esm.min.js';

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
    available: 'Requested',
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
    available: 'Occupied',
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


const contractAddress = "0xB0724c4Ee7C57d2A2Ed1061E240f67047E8FDc5e";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "OnlySimulatedBackend",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "AccountCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "donor",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DonationReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "addressLine",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "propertyType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rooms",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "months",
						"type": "uint256"
					},
					{
						"internalType": "enum Haven.PropertyStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "startRentTime",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "currentRefugee",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"indexed": true,
				"internalType": "struct Haven.Property",
				"name": "property",
				"type": "tuple"
			}
		],
		"name": "PropertyListed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "enum Haven.PropertyStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "PropertyStatusChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "RentTimeEnded",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "DAY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MONTHS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "checkUpkeep",
		"outputs": [
			{
				"internalType": "bool",
				"name": "upkeepNeeded",
				"type": "bool"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_addressLine",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isRefugee",
				"type": "bool"
			}
		],
		"name": "createAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "endRent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getAccount",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "addressLine",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isRefugee",
						"type": "bool"
					}
				],
				"internalType": "struct Haven.Account",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getDonations",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProperty",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "addressLine",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "propertyType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rooms",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "months",
						"type": "uint256"
					},
					{
						"internalType": "enum Haven.PropertyStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "startRentTime",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "currentRefugee",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"internalType": "struct Haven.Property",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastTimeStamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_addressLine",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_propertyType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_rooms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_price",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_months",
				"type": "string"
			}
		],
		"name": "listProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "performUpkeep",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "request",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "s_accounts",
		"outputs": [
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addressLine",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isRefugee",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "s_donations",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_properties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addressLine",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "propertyType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rooms",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "months",
				"type": "uint256"
			},
			{
				"internalType": "enum Haven.PropertyStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "startRentTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "currentRefugee",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_propertyId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "numString",
				"type": "string"
			}
		],
		"name": "stringToNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];


const Properties = () => {
  

  const [country1, setCountry1] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPrpertyType] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [months, setMonths] = useState("");


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


const listProperty = async () => {
    
  const ethers = require('ethers');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const havenContract = new ethers.Contract(contractAddress, abi, signer);
  const transaction = await havenContract.listProperty(
      country1,
      city,
      address,
      propertyType,
      rooms,
      price,
      months
    );

};

const donate = async () => {
    
  const ethers = require('ethers');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const havenContract = new ethers.Contract(contractAddress, abi, signer);
  const transaction = await havenContract.donate(0);


};

const request = async () => {
    
  const ethers = require('ethers');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const havenContract = new ethers.Contract(contractAddress, abi, signer);
  const transaction = await havenContract.request(0);


};


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
                <MenuItem value="ab">Algeria</MenuItem>
                <MenuItem value="cd">UK</MenuItem>
                <MenuItem value="ef">France</MenuItem>
                <MenuItem value="gh">Turkey</MenuItem>
                <MenuItem value="ij">Albania</MenuItem>
                <MenuItem value="kl">USA</MenuItem>
                <MenuItem value="mn">Spain</MenuItem>
                <MenuItem value="op">Maroco</MenuItem>
                <MenuItem value="qr">Libia</MenuItem>
                <MenuItem value="st">Soudi Arabia</MenuItem>
                <MenuItem value="uv">Italy</MenuItem>
                <MenuItem value="wx">Canada</MenuItem>
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
                    <Button onClick={listProperty} className='verity_bottun' variant="contained" 
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
                <button id="connectwallet" className='btn' onClick={donate}>Donate</button>
                <button className='btn' onClick={request}>request</button>
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