import { Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import React,{ useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close"
import './connect.css';
import {  Group1945, Group1953, Group1954 } from './imports';
import contract from "../../contracts/Havon.json";
import { ethers } from 'ethers/dist/ethers.esm.min.js';


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

const Connect = () => {
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openApplyDialogRefugee, setOpenApplyDialogRefugee] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const openApplyPopupRefugee = () => {
    setOpenApplyDialogRefugee(true);
  };
  const closeApplyPopupRefugee = () => {
    setOpenApplyDialogRefugee(false);
  };
  const [openApplyDialogOwner, setOpenApplyDialogOwner] = useState(false);
  const openApplyPopupOwner = () => {
  setOpenApplyDialogOwner(true);
  };
  const closeApplyPopupOwner = () => {
    setOpenApplyDialogOwner(false);
  };
  const openVerificationPopup = () => {
    setOpenVerificationDialog(true);
  };

  const closeVerificationPopup = () => {
    setOpenVerificationDialog(false);
  };
  
  const checkWalletIsConnected = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Get MetaMask!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go")
    }

    const accounts = ethereum.request({ method: 'eth_accounts' });

    if(accounts.length !== 0){
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found")
    }
   }

  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => { 
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
    }

    try{
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch(err) {
      console.log(err);
    }
  }

  const createRefugeeAccount = async () => {
    const ethers = require('ethers');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transaction = await contract.createAccount(
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      true
    );
  }

  const createOwnerAccount = async () => {
    const ethers = require('ethers');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transaction = await contract.createAccount(
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      false
    );
  }
  
  useEffect(() => {
    checkWalletIsConnected();
  }, [])


  return (
    <div className="haven__connect">
        <div className="haven__connect-title">
          <h3>Connect As</h3>
        </div>
        <div className="haven__connect-people">
          <div className="haven__connect-people-donor">
            <img src={Group1953} alt="Group1953" />
            <h3>Donor</h3>
            <p>Pay refugees’ rental expenses by donating now.</p>
            <button  type="button" onClick={connectWalletHandler}>Donate</button>
          </div>
          <div className="haven__connect-people-refugee"> 
            <img src={Group1945} alt="Group1945" />
            <h3>Refugee</h3>
            <p>Apply now so you can benefit from donations.</p>
            <button onClick={openApplyPopupRefugee} type="button">Apply</button>
            <Dialog open={openApplyDialogRefugee} onClose={closeApplyPopupRefugee} fullWidth maxWidth="md" className="haven__connect-people-refugee-form">
                <DialogContent  className="haven__connect-people-refugee-form-content"><IconButton onClick={closeApplyPopupRefugee} style={{float:'right'}}><CloseIcon color="primary" className="haven__connect-people-refugee-form-content-icon"></CloseIcon></IconButton>
                    <Stack spacing={2} margin={2}>
                      <div className="haven__connect-people-refugee-form-content-text">
                        <Stack spacing={2} margin={2}>
                        <TextField 
                        variant="outlined" 
                        label="First Name" 
                        value = {firstName}//---------------------------
                        onChange = {e => setFirstName(e.target.value)}//------------------
                        InputLabelProps={{ style: { color: 'white' } }} 
                        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                        ></TextField>
                        <TextField 
                        variant="outlined" 
                        label="Last Name" 
                        value = {lastName}//---------------------------
                        onChange = {e => setLastName(e.target.value)}//------------------
                        InputLabelProps={{ style: { color: 'white' } }} 
                        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                        ></TextField>
                        <TextField 
                        variant="outlined" 
                        label="Address" 
                        value = {address}//---------------------------
                        onChange = {e => setAddress(e.target.value)}//------------------
                        InputLabelProps={{ style: { color: 'white' } }} 
                        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                        ></TextField>
                        <TextField 
                        variant="outlined" 
                        label="Email" 
                        value = {email}//---------------------------
                        onChange = {e => setEmail(e.target.value)}//------------------
                        InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                        ></TextField>
                        <TextField 
                        variant="outlined" 
                        label="Phone Number" 
                        value = {phoneNumber}//---------------------------
                        onChange = {e => setPhoneNumber(e.target.value)}//------------------
                        InputLabelProps={{ style: { color: 'white' } }} 
                        InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                        ></TextField>
                        </Stack>
                      </div>
                      <Button onClick={openVerificationPopup}   >Identity Verification</Button>
                        <Dialog open={openVerificationDialog} onClose={closeVerificationPopup} fullWidth maxWidth="md" className="haven__connect-people-refugee-form-form2">
                          <DialogTitle className="haven__connect-people-refugee-form-form2-DialogTitle">Select Type of Document to Scan <IconButton onClick={closeVerificationPopup} style={{float:'right'}} ><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                          <DialogContent className="haven__connect-people-refugee-form-form2-content">
                          <Stack spacing={2} margin={2}>
                            <div className="haven__connect-people-refugee-form-form2-content-title">
                              <Stack spacing={2} margin={2}>
                                <Button color="primary" variant="contained">Refugee Certificate</Button>
                                <Button color="primary" variant="contained">Passport</Button>
                                <Button color="primary" variant="contained">Driver License</Button>
                                <Button color="primary" variant="contained" >Identity Card</Button>
                              </Stack>
                            </div>
                              <Button onClick={createRefugeeAccount} color="primary" className="haven__connect-people-refugee-form-form2-content-button"  >Verify</Button>
                          </Stack>
                          </DialogContent>
                        </Dialog>
                      <p> Already have an account? <a href="/connect">Connect</a> </p>
                    </Stack>
                </DialogContent>
                </Dialog>
          </div>
          <div className="haven__connect-people-owner">
            <img src={Group1954} alt="Group1954" />
            <h3>Owner</h3>
            <p>Apply now and list your property so refugees can rent it.</p>
            <button onClick={openApplyPopupOwner} type="button">Apply</button>
              <Dialog open={openApplyDialogOwner} onClose={closeApplyPopupOwner} fullWidth maxWidth="md" className="haven__connect-people-owner-form">
                <DialogContent className="haven__connect-people-owner-form-content" ><IconButton onClick={closeApplyPopupOwner} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>
                  <Stack spacing={2} margin={2}>
                  <div className="haven__connect-people-owner-form-content-text">
                    <Stack spacing={2} margin={2}>  
                    <TextField variant="outlined" label="First Name" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Last Name" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Address" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Email" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}></TextField>
                        <TextField variant="outlined" label="Phone Number" InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white', borderColor: 'white' } }}></TextField>
                    </Stack>
                  </div>
                  <Button onClick={openVerificationPopup} color="primary" variant="contained">Identity Verification</Button>
                    <Dialog open={openVerificationDialog} onClose={closeVerificationPopup} fullWidth maxWidth="md" className="haven__connect-people-owner-form-form2">
                        <DialogTitle className="haven__connect-people-owner-form-form2-DialogTitle">Select Type of Document to Scan <IconButton onClick={closeVerificationPopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                          <DialogContent className="haven__connect-people-owner-form-form2-content">
                            <Stack spacing={2} margin={2}>
                            <div className="haven__connect-people-owner-form-form2-content-title">
                              <Stack spacing={2} margin={2}>
                              <Button color="primary" variant="contained">Passport</Button>
                              <Button color="primary" variant="contained">Driver License</Button>
                              <Button color="primary" variant="contained" >Identity Card</Button>
                              </Stack>
                            </div>
                              <Button onClick={createOwnerAccount} color="primary" variant="contained" className="haven__connect-people-owner-form-form2-content-button" >Verify</Button>
                              </Stack>
                          </DialogContent>
                        </Dialog>
                      <p> Already have an account? <a href="/connect">Connect</a> </p>
                    </Stack>
                </DialogContent>
            </Dialog>
          </div>
        </div>
     </div>    
  )
}

export default Connect