import { Typography } from '@mui/material';
import * as React from 'react';


function AlgorithmStep({array, algKey, pass})
{
    let x = array.join(' ');

    function isAlgKeyNull(algkey)
    {
        if(algKey != null)
        {
            return `Key is ${algkey}` 
        }
    }
    
    return(
        <Typography align='center'>
            {pass != null? `Pass ${pass}`:''} {pass == null? '':<br/>}
            {isAlgKeyNull(algKey)} {isAlgKeyNull(algKey)?<br/>:''}
            {x}
        </Typography>
    );
}

export default function InsertionSort({array})
{
    let algSteps = [];
    let arr = array.split(',')
    arr.forEach((item,idx,arr) => {arr[idx] = Number(item);});
   
    let k, i ,j;

    for(i = 0; i < arr.length; i++)
    {
        var arrCopy = arr.map((x) => x);

        k = arr[i];
        j = i - 1;
        
        // algSteps.push(<AlgorithmStep array={arr} key={Math.random()*Math.random()}/>)
        algSteps.push({"array":arrCopy,"key":null,"pass":i});

        while(j >= 0 && arr[j] > k)
        {
            arr[j + 1] = arr[j];
            j -= 1;

            
            // algSteps.push(<AlgorithmStep array={arr} algKey={k} key={Math.random()*Math.random()}/>)
            algSteps.push({"array":arrCopy,"key":k,"pass":null});
        }

        arr[j+1] = k;

    }

    var displaySteps = [];

    algSteps.forEach((i)=> displaySteps.push(<AlgorithmStep array={i.array} algKey={i.key} pass={i.pass} key={Math.random()*Math.random()}/>));

    return(
        <>
            {displaySteps}
            <br/>
            <Typography variant="h5">Sorted array: {arr.sort((a,b)=> a-b).join(',')}</Typography>
        </>
    );
}