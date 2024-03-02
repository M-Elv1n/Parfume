import React from 'react';
import { Link } from "react-router-dom";
import './css/home.scss';

export default function Home() {
  return (
    <div className='home'>
      <h1>outletparfumer</h1>
      <Link to={'/man'}>Sifariş et</Link>
    </div>
  )
}
