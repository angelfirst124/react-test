import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import DateRange from './DateRange.js';

const EnhancedTableToolbar = (props) => {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Transactions
            </Typography>
            <DateRange 
                rows={props.rows}
                setRows={props.setRows}
            />
        </Toolbar>
    );
};

export default EnhancedTableToolbar;