import React from 'react';
import './App.css'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Form from './Form'

export default function App() {

  const margin = { margin: "0 10px" }
  return (
    <div className='App'>
      <Grid style={{ padding: "70px 5px 0 5px" }}>
        <Card style={{ maxWidth: 700, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary" >
              Yeni Hasta Kayıt Formu
            </Typography>
            <Form />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};