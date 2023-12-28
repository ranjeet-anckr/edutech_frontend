/* eslint-disable react/prop-types */
import { TableCell, TableHead, TableRow } from "@mui/material";

const CustomTableHead = ({ headers }: any) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header: any, index: any) => (
          <TableCell
            key={index.toString()}
            align={header.align || "center"}
            sx={{ color: "gray", fontWeight: "bold" }}
          >
            {header.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
