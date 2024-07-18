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

interface Transaction {
  id: number,
  date: string,
  subsidiary: string,
  memo: string,
  department: string,
  vendor: string,
  vendorType: string,
  amount: string,
  type: string,
  category: string,
  subcategory: string,
  description: string,
};

interface Row {
  id: number,
  previousTotal: string,
  currentTotal: string,
  change: string,
  type: string,
  transactions: Transaction[]
};

interface Response {
  id: number,
  previousMonth: string,
  currentMonth: string,
  rows: Row[],
}

const response: Response = {
  id: 1,
  previousMonth: "July 24",
  currentMonth: "August 24",
  rows: [{
    id: 1,
    previousTotal: "$8,000",
    currentTotal: "$9,300",
    change: "$1,300 | 16.25%",
    type: "Income Statement",
    transactions: [
      {
        id: 1,
        date: "2024/7/16",
        subsidiary: "Blue Sky Investments",
        memo: "Quarterly dividend payment",
        department: "Finance",
        vendor: "Blue Chip Investments",
        vendorType: "Investment Firm",
        amount: "$15000.00",
        type: "Income Statement",
        category: "Net Income",
        subcategory: "Retained Earnings",
        description: "Examined to understand profit retention and dividend policy."
      },
      {
        id: 2,
        date: "2024/7/16",
        subsidiary: "Red Horizon Tech",
        memo: "Software licensing fees",
        department: "IT",
        vendor: "TechSoft Inc.",
        vendorType: "Software Provider",
        amount: "($4500.00)",
        type: "Income Statement",
        category: "Expenses",
        subcategory: "R&D (Research and Development Expenses)",
        description: "Examined for alignment with strategic innovation goals."
      },
      {
        id: 3,
        date: "2024/7/16",
        subsidiary: "Golden Gate Services",
        memo: "Legal consultation fees",
        department: "Legal",
        vendor: "Law & Associates",
        vendorType: "Law Firm",
        amount: "($2500.00)",
        type: "Income Statement",
        category: "Expenses",
        subcategory: "SG&A (Selling, General, and Administrative Expenses)",
        description: "Reviewed to control overhead and operating expenses."
      },
      {
        id: 4,
        date: "2024/8/16",
        subsidiary: "Silver Lining Ventures",
        memo: "Marketing campaign launch",
        department: "Marketing",
        vendor: "AdvertiseNow Ltd.",
        vendorType: "Advertising Agency",
        amount: "$12000.00",
        type: "Income Statement",
        category: "Revenue",
        subcategory: "Sales Revenue",
        description: "Compared against sales forecasts to understand demand and market conditions."
      },
      {
        id: 5,
        date: "2024/8/16",
        subsidiary: "Sapphire Innovations",
        memo: "Sold patent",
        department: "R&D",
        vendor: "LabTech Solutions",
        vendorType: "Research Equipment",
        amount: "$6700.00",
        type: "Income Statement",
        category: "Revenue",
        subcategory: "Sales Revenue",
        description: "Compared against sales forecasts to understand demand and market conditions."
      },
      {
        id: 6,
        date: "2024/8/16",
        subsidiary: "Crimson Solutions Ltd.",
        memo: "Travel expenses for sales team",
        department: "Sales",
        vendor: "Global Travel Services",
        vendorType: "Travel Agency",
        amount: "($5600.00)",
        type: "Income Statement",
        category: "Expenses",
        subcategory: "SG&A (Selling, General, and Administrative Expenses)",
        description: "Reviewed to control overhead and operating expenses."
      },
      {
        id: 7,
        date: "2024/8/16",
        subsidiary: "Amber Waves Inc.",
        memo: "Employee training program costs",
        department: "HR",
        vendor: "LearnNow Training",
        vendorType: "Training Provider",
        amount: "($3800.00)",
        type: "Income Statement",
        category: "Expenses",
        subcategory: "SG&A (Selling, General, and Administrative Expenses)",
        description: "Reviewed to control overhead and operating expenses."
      },
    ]
  }]
};

function Row(props: { row: Row }) {
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
        <TableCell component="th" scope="row">{row.type}</TableCell>
        <TableCell>{row.previousTotal}</TableCell>
        <TableCell>{row.currentTotal}</TableCell>
        <TableCell>{row.change}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Transactions
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Subsidiary</TableCell>
                    <TableCell>Memo</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Vendor Type</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transactions.map((trxRow) => (
                    <TableRow key={trxRow.id}>
                      <TableCell component="th" scope="row">{trxRow.date}</TableCell>
                      <TableCell>{trxRow.subsidiary}</TableCell>
                      <TableCell>{trxRow.memo}</TableCell>
                      <TableCell>{trxRow.department}</TableCell>
                      <TableCell>{trxRow.vendor}</TableCell>
                      <TableCell>{trxRow.vendorType}</TableCell>
                      <TableCell align="right">{trxRow.amount}</TableCell>
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

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell component="th" scope="row" />
            <TableCell>{response.previousMonth}</TableCell>
            <TableCell>{response.currentMonth}</TableCell>
            <TableCell>Change $ | %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response.rows.map((row) => (
            <Row key={row.id} row={row} />
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

    </Container>
  );
}
