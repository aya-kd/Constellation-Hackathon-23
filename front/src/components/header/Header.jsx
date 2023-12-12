import React, {useState} from 'react';
import {RiSearchLine} from 'react-icons/ri';
import './header.scss';
import header from '../../assets/header.png'
const Header = () => {
  const [val,setVal]=useState('');
  const [val2,setVal2]=useState('');
  const [val3,setVal3]=useState('');
  const [val4,setVal4]=useState('');
  const data3=["0","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000"]
  const data1=["algeria","Brazil","China","Denmark","Egypt","france","Greece","Hungary","India","Japan","Kenya","Laos","Mexico","Spain","USA","UK","Turkey",]
  const data2=["New York","Los Angeles","California","Chicago","Illinois","Houston","Texas","Phoenix","Arizona","Philadelphia","Pennsylvania","San Antonio","Texas San Diego","California","Dallas","Texas","San Jose","Austin","Florida","Ohio","San Francisco","Seattle","Washington"]
  const data4=["Available", " Requested", " Occupied"]
  return (
    <div className='haven__header section__padding' id='home'>
      <div className='overlay'>
      <img className='image' src={header} alt="refugee" /></div>
      <div className='haven__header-content grid'>
        <h1 className='haven__header-content__text'>Your Search, Your Way.</h1>
        <p>Explore, Envision, and Make it Yours! Start Your Journey Now.</p>
        <div className='haven__header-content__input'>
      
          <ul className="options">
            <li className="filter">
              <input list='data1' onChange={(e)=> setVal(e.target.value)} placeholder='COUNTRY' style={{ color: 'white' }}/>
                <datalist id='data1'>
                  {data1.map((op1)=> <option>{op1}</option>)}
                </datalist>
                
            </li>
            <li className="filter">
              <input list='data2' onChange={(e)=> setVal2(e.target.value)} placeholder='CITY' style={{ color: 'white' }}/>
                <datalist id='data2'>
                  {data2.map((op2)=> <option>{op2}</option>)}
                </datalist>
                
            </li>
            <li className="filter">
              <input list='data3' onChange={(e)=> setVal3(e.target.value)} placeholder='PRICE' style={{ color: 'white' }}/>
                <datalist id='data3'>
                  {data3.map((op3)=> <option>{op3}</option>)}
                </datalist>
               
            </li>
            <li className="filter">
              <input list='data4' onChange={(e)=> setVal4(e.target.value)} placeholder='STATE'style={{ color: 'white' }}/>
                <datalist id='data4'>
                  {data4.map((op4)=> <option>{op4}</option>)}
                </datalist>
                
            </li>
          </ul>
          
          <button className='haven__header-content__input-search' type='button'>search <RiSearchLine /></button>
        </div>
      </div>

    </div>
  )
}

export default Header