import React from 'react'
import {Fab,Tooltip} from '@mui/material'
import { Feedback } from '@mui/icons-material'

const AddComplaint = ({setOpen}) => {
    
  return (
    <div>
				<Tooltip title="Raise a complaint" onClick={(e) => setOpen(true)}>
					<Fab color="error" sx={{ position: "fixed", bottom: 20, left: 10 }}>
						<Feedback />
					</Fab>
				</Tooltip>
    </div>
  )
}

export default AddComplaint