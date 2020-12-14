import React, { useContext } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { GlobalContext } from '../contexts/GlobalState';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

const Form: React.FunctionComponent = () => {
  // Import constants from context
  const {
    Amortization,
    TermLength,
    HomePrice,
    MortgageAmount,
    DownPayment,
    Type,
  } = useContext(GlobalContext);
  // Import functions from context
  const {
    changeAmortization,
    changeTermLength,
    changeHomePrice,
    changeMortgageAmount,
    changeDownPayment,
    changeType,
  } = useContext(GlobalContext);
  // OnChange Handlers for all the inputs
  const handleHomePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === '' || re.test(event.target.value)) {
      changeHomePrice(event.target.value);
    }
  };
  const handleMortgageAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === '' || re.test(event.target.value)) {
      changeMortgageAmount(event.target.value);
    }
  };
  const handleDownPaymentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === '' || re.test(event.target.value)) {
      changeDownPayment(event.target.value);
    }
  };
  const handleAmortizationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    changeAmortization(event.target.value);
  };
  const handleTermChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeTermLength(event.target.value);
  };
  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeType(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <div className="flex mt-6">
        <div className="flex w-full sm:w-1/4 lg:w-1/2 flex-col">
          <FormControl>
            <div className="mb-1 text-blue-800">Term Length</div>
            <NativeSelect
              id="demo-customized-select-native"
              value={TermLength}
              variant="outlined"
              onChange={handleTermChange}
              input={<BootstrapInput />}
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Year</option>
              <option value={3}>3 Year</option>
              <option value={4}>4 Year</option>
              <option value={5}>5 Year</option>
              <option value={6}>6 Year</option>
              <option value={7}>7 Year</option>
              <option value={10}>10 Year</option>
              <option value={18}>18 Year</option>
              <option value={25}>25 Year</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="border-r-2 mx-2 mt-4" />
        <div className="flex w-full sm:w-1/4 lg:w-1/2 flex-col">
          <FormControl>
            <div className="mb-1 text-blue-800">Type</div>
            <NativeSelect
              id="demo-customized-select-native"
              value={Type}
              variant="outlined"
              onChange={handleTypeChange}
              input={<BootstrapInput />}
            >
              <option value="FIXED">Fixed</option>
              <option value="VARIABLE">Variable</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <FormControl fullWidth>
          <div className="text-xl text-blue-800">Home Price</div>
          <Input
            id="standard-adornment-amount"
            value={HomePrice}
            inputProps={{ maxLength: 13 }}
            onChange={handleHomePriceChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className="flex flex-col mt-4">
        <FormControl fullWidth>
          <div className="text-xl text-blue-800">Downpayment</div>
          <Input
            id="standard-adornment-amount"
            value={DownPayment}
            inputProps={{ maxLength: 3 }}
            onChange={handleDownPaymentChange}
            endAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className="flex flex-col mt-4">
        <FormControl>
          <div className="text-xl text-blue-800">Mortgage Amount</div>
          <Input
            className="text-2xl"
            id="standard-adornment-amount"
            value={MortgageAmount}
            inputProps={{ maxLength: 13 }}
            onChange={handleMortgageAmountChange}
            startAdornment={<InputAdornment position="end">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className="flex flex-col mt-4">
        <FormControl fullWidth>
          <div className="text-xl text-blue-800">Amortization</div>
          <NativeSelect
            id="demo-customized-select-native"
            value={Amortization}
            onChange={handleAmortizationChange}
          >
            <option value={10}>10 Year</option>
            <option value={15}>15 Year</option>
            <option value={20}>20 Year</option>
            <option value={25}>25 Year</option>
          </NativeSelect>
        </FormControl>
      </div>
    </form>
  );
};

export default Form;
