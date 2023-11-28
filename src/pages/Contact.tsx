import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeOptions,
  Tooltip,
  Typography,
} from '@mui/material';
import { useOutletContext } from 'react-router';
import { fileType } from '../helpers/languages';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
function createData(name: string, location: string, phoneNumber: number) {
  return { name, location, phoneNumber };
}

const Contact = () => {
  const file: fileType = useOutletContext();
  const { primary }: ThemeOptions = useTheme();
  const [copied, setCopied] = useState<boolean>(false);
  const rows = file.hospitals.map((hospital) => {
    return createData(hospital.name, hospital.location, hospital.phoneNumber);
  });
  return (
    <Container
      sx={{
        width: '100%',
        margin: '3em auto  1em',
        padding: '1em',
      }}
    >
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            direction: file.lang === 'Arabic' ? 'rtl' : 'ltr',
          }}
          aria-label="caption table"
        >
          <TableHead sx={{ background: primary?.therd }}>
            <TableRow>
              {file.theadContent.map((content) => (
                <TableCell>
                  <Typography
                    color={primary?.main}
                    variant="h6"
                    textAlign={'center'}
                  >
                    {content}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  component="th"
                  scope="row"
                >
                  <Typography
                    variant="subtitle1"
                    textAlign={'center'}
                  >
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="subtitle1"
                    textAlign={'center'}
                  >
                    {row.location}
                  </Typography>
                </TableCell>
                <TableCell
                  onClick={async () => {
                    if (copied) return;
                    navigator.clipboard.writeText(`${row.phoneNumber}`);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1000);
                  }}
                  align="center"
                >
                  <Tooltip
                    sx={{ fontSize: '5rem' }}
                    title={copied ? `copied` : `copy phone number`}
                  >
                    <Button>
                      <Typography
                        variant="subtitle1"
                        textAlign={'center'}
                      >
                        {row.phoneNumber}
                      </Typography>
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Contact;
