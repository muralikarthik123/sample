import React from 'react'
import './hello.css'
export default function Hello() {
  return (
    <div className='mobile'>
      <div style={{display:'flex'}}>
        {/*1*/}
        <div className='names'>
          <p>Name:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*2*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Address:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*3*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Mobile:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*4*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Transport:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*5*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Vechile:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*6*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Item Code:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*7*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Avabile Stock:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*8*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Quatity:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*9*/}
      <div style={{display:'flex'}}>
        <div className='names'>
        <p>Item Name:</p>    
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*10*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Avabile Stock:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
      {/*11*/}
      <div style={{display:'flex'}}>
        <div className='names'>
         <p>Unit Rate:</p> 
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>

      {/*12*/}
      <div style={{display:'flex'}}>
        <div className='names'>
        <p>DiscAmt:</p> 
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>

      {/*13*/}
      <div style={{display:'flex'}}>
        <div className='names'>
          <p>Weight:</p>
        </div>
        <div className='inputsright'>
          <input className='inputs' type='text' />
        </div>
      </div>
    </div>
  )
}
