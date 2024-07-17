"use client";
import * as React from 'react';
import {
  Box,
  Button,
  Container, Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const transactions = [
  {
    "Date": "2024/7/16",
    "Subsidiary": "Blue Sky Investments",
    "Memo": "Quarterly dividend payment",
    "Department": "Finance",
    "Vendor": "Blue Chip Investments",
    "Vendor_Type": "Investment Firm",
    "Amount": "$15000.00",
    "Type": "Income Statement",
    "Category": "Net Income",
    "Subcategory": "Retained Earnings",
    "Description": "Examined to understand profit retention and dividend policy."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Green Leaf Corp",
    "Memo": "Office furniture purchase",
    "Department": "Operations",
    "Vendor": "Office Solutions LLC",
    "Vendor_Type": "Furniture Supplier",
    "Amount": "$789.50",
    "Type": "Balance Sheet",
    "Category": "Assets",
    "Subcategory": "PP&E (Property, Plant, and Equipment)",
    "Description": "Evaluated to understand capital expenditure and asset utilization."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Red Horizon Tech",
    "Memo": "Software licensing fees",
    "Department": "IT",
    "Vendor": "TechSoft Inc.",
    "Vendor_Type": "Software Provider",
    "Amount": "$4500.00",
    "Type": "Income Statement",
    "Category": "Expenses",
    "Subcategory": "R&D (Research and Development Expenses)",
    "Description": "Examined for alignment with strategic innovation goals."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Silver Lining Ventures",
    "Memo": "Marketing campaign launch",
    "Department": "Marketing",
    "Vendor": "AdvertiseNow Ltd.",
    "Vendor_Type": "Advertising Agency",
    "Amount": "$12000.00",
    "Type": "Income Statement",
    "Category": "Revenue",
    "Subcategory": "Sales Revenue",
    "Description": "Compared against sales forecasts to understand demand and market conditions."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Golden Gate Services",
    "Memo": "Legal consultation fees",
    "Department": "Legal",
    "Vendor": "Law & Associates",
    "Vendor_Type": "Law Firm",
    "Amount": "$2500.00",
    "Type": "Income Statement",
    "Category": "Expenses",
    "Subcategory": "SG&A (Selling, General, and Administrative Expenses)",
    "Description": "Reviewed to control overhead and operating expenses."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Sapphire Innovations",
    "Memo": "Research and development expenses",
    "Department": "R&D",
    "Vendor": "LabTech Solutions",
    "Vendor_Type": "Research Equipment",
    "Amount": "$6700.00",
    "Type": "Income Statement",
    "Category": "Expenses",
    "Subcategory": "R&D (Research and Development Expenses)",
    "Description": "Examined for alignment with strategic innovation goals."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Emerald Isle Holdings",
    "Memo": "Office lease payment",
    "Department": "Real Estate",
    "Vendor": "OfficeSpace Rentals",
    "Vendor_Type": "Property Management",
    "Amount": "$3500.00",
    "Type": "Cash Flow Statement",
    "Category": "Operating Activities",
    "Subcategory": "Changes in Working Capital",
    "Description": "Monitored to manage liquidity and operational efficiency."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Crimson Solutions Ltd.",
    "Memo": "Travel expenses for sales team",
    "Department": "Sales",
    "Vendor": "Global Travel Services",
    "Vendor_Type": "Travel Agency",
    "Amount": "$5600.00",
    "Type": "Income Statement",
    "Category": "Expenses",
    "Subcategory": "SG&A (Selling, General, and Administrative Expenses)",
    "Description": "Reviewed to control overhead and operating expenses."
  },
  {
    "Date": "2024/7/16",
    "Subsidiary": "Amber Waves Inc.",
    "Memo": "Employee training program costs",
    "Department": "HR",
    "Vendor": "LearnNow Training",
    "Vendor_Type": "Training Provider",
    "Amount": "$3800.00",
    "Type": "Income Statement",
    "Category": "Expenses",
    "Subcategory": "SG&A (Selling, General, and Administrative Expenses)",
    "Description": "Reviewed to control overhead and operating expenses."
  }
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Home() {
  return (
    <Container>
      <Box sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Variance Analysis</Typography>
        <Button variant="contained">Refresh</Button>
      </Box>
      {CollapsibleTable()}
      {/* <Box>
        <Paper elevation={1} sx={{ p: 1, my: 0.5 }}>
          <Grid container columnSpacing={1}>
            <Grid item xs={1}>
              <Typography fontWeight="bold">Date</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight="bold">Subsidiary</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight="bold">Memo</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography fontWeight="bold">Department</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight="bold">Vendor</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight="bold">Vendor Type</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography fontWeight="bold">Amount</Typography>
            </Grid>
          </Grid>
        </Paper>
        {transactions.map(trx => (
          <Paper elevation={1} sx={{ p: 1, my: 0.5 }}>
            <Grid container columnSpacing={1}>
              <Grid item xs={1}>
                <Typography>{trx.Date}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{trx.Subsidiary}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{trx.Memo}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>{trx.Department}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{trx.Vendor}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{trx.Vendor_Type}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>{trx.Amount}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box> */}

    </Container>
  );
}
