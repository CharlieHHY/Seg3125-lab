import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CoachCard from './components/coachCard'
import mike from './assets/coachMike.jpeg'
import jane from './assets/coachJane.jpeg'
import green from './assets/green.jpeg';
import red from './assets/red.jpeg';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(name, price,) {
    return { name, price };
  }
  



function Introduction({t}) {
    const classes = useStyles();

    const rows = [
        createData(t('One to one'), '15.9$/h',),
        createData(t('Mutltiple class'), '23.7$/h',),
      ];

    return ( 
    <div className = "intro" style={{ display:'flex',flexDirection:'column'}}>
        <div>
            {t('Description')}
        </div>
        <div style={{marginTop: '30px',marginBottom:'10px'}}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>{t('Service')}</TableCell>
                    <TableCell align="right">{t('Price')}</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
        {t('Our coach')}
        <div style={{ marginTop:'30px',marginBottom:'30px',display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
                    
                    <CoachCard name={t('Mike')} description={t('This is coach mike our best coach')} logo={mike}/>
                    <CoachCard name={t('Jane')} description={t('This is coach jane our best coach')} logo={jane}/>
        </div>
        {t('Our court')} 
        <div style={{ marginTop:'30px',display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
                    <CoachCard name={t('grass')} logo={green}/>
                    <CoachCard name={t('red')}logo={red}/>
        </div>
     </div>
    );
}

export default Introduction;