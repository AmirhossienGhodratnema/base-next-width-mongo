import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link'



export default function BasicButtons() {
    return (
        <Box>
            <ul>
                <li>
                    <Link href='/'>
                        <a>خانه</a>
                    </Link>
                </li>
            </ul>
        </Box>
    );
}