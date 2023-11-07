import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = React.useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mobile && password) {
      let body = {
        mobile_number: mobile,
        password: password,
      };

      if (mobile == '9876543210' && password == '12345') {
        sessionStorage.setItem('user-token', 'tokenadded');

        handleClick();
        setTimeout(() => {
          navigate('/scanner');
        }, 1000);
      } else {
        handleClick();
      }
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Grid
        style={{
          marginTop: '120px',
          //   height: '100vh',
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'center',
        }}
      >
        <Grid item xs={12}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              Login Form
            </h2>
            <TextField
              label="Mobile"
              onChange={(e) => setMobile(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              sx={{ mb: 3 }}
              fullWidth
              value={mobile}
              // error={emailError}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              // error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="success" type="submit" fullWidth>
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '5px' }}>
          <small>
            Need an account?
            {/* <Link to="/register"> */}
            <span style={{ color: 'blue' }}>&nbsp;Register here</span>
            {/* </Link> */}
          </small>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {sessionStorage.getItem('user-token') &&
          mobile == '9876543210' &&
          password == '12345' ? (
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              signin success !
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              Enter correct details to login !
            </Alert>
          )}
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Login;
