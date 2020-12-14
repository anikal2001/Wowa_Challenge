import React, { useEffect, useContext, useState } from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import CalculateRate from '../utils/rateCalculator';
import GetImage from '../utils/getImage';
import { GlobalContext } from '../contexts/GlobalState';

// Style the columns of the table
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

// Style the rows of the table
const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const MortgageTable: React.FunctionComponent = () => {
  // Import constants from context
  const {
    Type,
    TermLength,
    Amortization,
    HomePrice,
    DownPayment,
    MortgageAmount,
  } = useContext(GlobalContext);
  // Set the state of the table data
  const [TableData, setTableData] = useState([]);
  // Use Effect calls in the data and sets table values
  useEffect(() => {
    const getMortgageData = async () => {
      const res = await axios.get(
        'http://127.0.0.1:8000/backend/get_mortgage_data/'
      );
      setTableData(res.data);
    };
    getMortgageData();
  }, []);
  // Filters the data on change of context
  const filteredData = TableData.filter(
    (row) =>
      row.rate_type === Type.toLowerCase() &&
      row.year.toString() === TermLength.toString()
  );
  return (
    <TableContainer component={Paper}>
      <div className="flex flex-col sm:flex-row bg-gray-200 text-blue-800 text-lg sm:text-2xl justify-center items-center py-3 border-b">
        <div className="mr-2">I am looking to get rates for A New Mortgage</div>
      </div>
      <Table aria-label="customized table">
        <TableHead style={{ maxHeight: 200 }}>
          <TableRow>
            <StyledTableCell style={{ padding: 0 }} align="center">
              <div className="font-normal border-b py-1 sm:px-4 text-md text-gray-700 tracking-wide">
                Lender
              </div>
            </StyledTableCell>
            <StyledTableCell style={{ padding: 0 }} align="center">
              <div className="font-normal border-b py-1 sm:px-4 text-md text-gray-700 tracking-wide">
                Rate
              </div>
            </StyledTableCell>
            <StyledTableCell style={{ padding: 0 }} align="center">
              <div className="font-normal border-b py-1 sm:px-4 text-md text-gray-700 tracking-wide">
                Monthly Rate
              </div>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <div>
                  <div className="flex">
                    <img
                      className=" flex-shrink-0 object-contain w-8 sm:w-12 md:w-16 md:mr-6 mr-2"
                      src={GetImage(row.source)}
                      alt={row.source}
                    />
                    <div className="text-gray-700 sm:text-lg text-md">
                      {row.source}
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className="flex w-4/6 justify-center items-center flex-col md:text-3xl sm:text-2xl text-xl font-bold text-gray-700">
                  {row.rate} %
                  <div className="text-sm ehidden whitespace-no-wrap sm:block text-gray-600 mt-1 font-normal">
                    {TermLength} YEAR {Type}
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div className=" flex justify-center text-gray-700 md:text-2xl sm:text-xl text-lg">
                  <div className="w-1/3 justify-center border-b-2 border-orange-500">
                    $
                    {CalculateRate(
                      DownPayment,
                      HomePrice,
                      MortgageAmount,
                      Amortization,
                      row.rate
                    )}
                  </div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MortgageTable;
