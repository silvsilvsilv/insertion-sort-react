import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import InsertionSort from './InsertionSort.jsx';

import { useEffect, useState } from 'react';
import { ButtonGroup, Grid, TextField } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}  
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
	const [userInput, setUserInput] = useState("12,11,13,5,6")
	const [array, setArray] = useState("");
	const [activeStep, setActiveStep] = useState(0);

	function getStepContent(step)
	{
		if (step >= 1)
		{
			step = 1;
		}
		
		switch(step)
		{
			case 0:
				break;
			case 1:
				return <InsertionSort array={array}/>
		}
	}

	const handleSort = () =>
	{	
		setActiveStep(activeStep > 1? activeStep: activeStep + 1);
	}

	const handleClear = () =>
	{
		setActiveStep(0);
		setArray("");
		setUserInput("");
	}

	useEffect(()=>{
		setArray(userInput);

	},[activeStep]);

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
				position: 'relative',
				borderBottom: (t) => `1px solid ${t.palette.divider}`,
				}}
			>
				<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					Insertion Sort
				</Typography>
				</Toolbar>
			</AppBar>
		
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Typography component="h1" variant="h4" align="center">
					Insertion Sort  
					</Typography>

					<Grid item xs={12}>
					<TextField
						label="Array to Sort"
						variant='outlined'
						helperText="Separate values by a comma (,)"
						fullWidth
						value={userInput}
						onChange={(e)=>{ setUserInput(e.target.value)} }
					/>
					</Grid>
					<br/>
					<ButtonGroup variant='contained' sx={ {display:'flex',alignItems:'center',justifyContent:'center'} } disableElevation>

						<Button onClick={handleSort} color='success'>Sort</Button>
						<Button onClick={handleClear} color='error'>Clear</Button>

					</ButtonGroup>
					<br/>
					<Typography variant='h5'>Array to sort: {array}</Typography> 
					<br/>
					{getStepContent(activeStep)}
				</Paper>
				<Copyright />
			</Container>
		</React.Fragment>
	);
}