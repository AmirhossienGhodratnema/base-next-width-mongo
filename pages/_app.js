import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Switch from '@mui/material/Switch';



import './../styles.css'

export default function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    let change = !checked
    console.log(change)
    setChecked(change)
  };

  const theme = createTheme({
    direction: 'rtl',
    palette: {
      mode: checked ? 'light' : 'dark',
    },
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="container" dir='rtl'>
          <Paper sx={{ borderRadius: '0' }} className='paperCong' elevation={0}>
            <Component {...pageProps} />
            {/* <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            /> */}
          </Paper>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}