import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Button from '@mui/material/Button';
import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Test from './../components/header'


export default function Home(props) {
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    let change = !checked
    console.log(change)
    setChecked(change)
  };


  return (
    // <CacheProvider value={cacheRtl}>
    //   <ThemeProvider theme={theme}>
    //     <div className="container" dir='rtl'>
    //       <Paper sx={{ borderRadius: '0' }} className='paperCong' elevation={0}>
    //         <Button variant="contained">Hello World</Button>
    //         <h2>Amirhossein</h2>
    //         <Switch
    //           checked={checked}
    //           onChange={handleChange}
    //           inputProps={{ 'aria-label': 'controlled' }}
    //         />
    //         <Test/>
    //       </Paper>
    //     </div>
    //   </ThemeProvider>
    // </CacheProvider>


    <>
      <Button variant="contained">Hello World</Button>
      <h2>Amirhossein</h2>
      <Test />
    </>

  )
}








export async function getServerSideProps(context) {


  let res = await fetch('http://localhost:3000/api/user');
  let data = await res.json();
  // console.log('data', data);


  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
