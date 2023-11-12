import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';



const names = [
    'Tipo',
    'A-Z',
    'Z-A',
    'Orden numérico ascendente',
    'Orden numérico descendente',
   
];



export const Clasificador = ({ onSeleccionChange }) => {

    
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const newOrden = event.target.value
        setPersonName(newOrden);
        onSeleccionChange(newOrden)
    };


  return (
      <>
          
          <FormControl className='form-control' sx={{ m:'auto', width: 300, display:'flex', marginTop:2 }}>
              <InputLabel id="demo-simple-select-autowidth-label"
                 >
                  Ordenar por...
              </InputLabel>
              <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={personName}
                  onChange={handleChange}
                  autoWidth
                  label="Age"
              >
                  {names.map((name) => (
                      <MenuItem
                          key={name}
                          value={name}
                          className='form-control'
                      >
                          {name}
                      </MenuItem>
                  ))}
              </Select>
          </FormControl>
     
      </>
  )
}
