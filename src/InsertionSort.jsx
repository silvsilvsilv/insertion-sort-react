import { List, Typography, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


//// function AlgorithmStep({array, algKey, pass})
//// {
////     let x = array.join(' ');

////     function isAlgKeyNull(algkey)
////     {
////         if(algKey != null)
////         {
////             return `Key is ${algkey}`;
////         }
////     }
    
////     return(
////         <Typography align='center'>
////             {pass != null? `Pass ${pass}`:''} {pass == null? '':<br/>}
////             {isAlgKeyNull(algKey)} {isAlgKeyNull(algKey)?<br/>:''}
////             {x}
////         </Typography>
////     );
//// }

function AlgStep({array,algKey,pass})
{
    let x = array.join(' ');

    function isAlgKeyNull(k)
    {
        if(k != null)
        {
            return <ListItemText primary={`Key is ${k}`}/>;
        }
    }

    function getPass(pass)
    {
        if(pass != null)
        {
            return(
                <ListItemButton>
                    <ListItemText primary={`Pass ${pass}`}/>
                </ListItemButton>
            );
        }

    }

    function getArr(txt)
    {
        if(txt != [])
        {
            return <ListItemText primary={x} />;
        }
    }

    return(
        <>
            {getPass(pass)}
            <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={ { pl: 4 } }>
                        {isAlgKeyNull(algKey)}
                        {getArr(array)}
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}

export default function InsertionSort({array})
{
    let algSteps = [];
    let arr = array.split(',')
    arr.forEach((item,idx,arr) => {arr[idx] = Number(item);});
   
    let k, i ,j;

    for(i = 1; i < arr.length; i++)
    {
        var arrCopy = [...arr]

        k = arr[i];
        j = i - 1;
        
        // console.log(arrCopy);
        // algSteps.push(<AlgorithmStep array={arr} key={Math.random()*Math.random()}/>)
        algSteps.push({"array":arrCopy,"key":null,"pass":i});

        while(j >= 0 && arr[j] > k)
        {
            arr[j + 1] = arr[j];
            j -= 1;

            // console.log(arrCopy);
            // algSteps.push(<AlgorithmStep array={arr} algKey={k} key={Math.random()*Math.random()}/>)
            algSteps.push({"array":arrCopy,"key":k,"pass":null});
        }

        arr[j+1] = k;

        arrCopy = [...arr];
        algSteps.push({"array":arrCopy,"key":null,"pass":null});

    }

    var displaySteps = [];

    algSteps.forEach((i) => displaySteps.push(<AlgStep array={i.array} algKey={i.key} pass={i.pass} key={Math.random()*Math.random()}/>));

    return(
        <>
            <List>
                {displaySteps}
            </List>
            
            <br/>
            <Typography variant="h5">Sorted array: {arr.sort((a,b)=> a-b).join(',')}</Typography>
        </>
    );
}