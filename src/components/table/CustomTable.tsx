import React, { useState } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
  useTheme,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@mui/styles";
import { tableHeaders } from "../../constants";
import CustomTableHead from "./CustomTableHead";

const useStyles = makeStyles(() => ({
  tableCell: {
    backgroundColor: "white",
    position: "relative",
    "&:first-child": {
      borderRadius: "15px 0px 0px 15px",
    },
    "&:last-child": {
      borderRadius: "0px 15px 15px 0px",
    },
  },
}));

const CustomTable = ({ data }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const handlePopoverOpen = (event: any) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };
  const handleNavigate = () => {};

  const openPopover = Boolean(popoverAnchor);
  const popoverId = openPopover ? "popover-menu" : undefined;
  console.log(data);
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderCollapse: "separate",
        marginTop: 4,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
      >
        <CustomTableHead headers={tableHeaders} />
        <TableBody>
          {data.map((item: any, index: any) => (
            <React.Fragment key={item.id}>
              <TableRow sx={{}}>
                <TableCell align="center" className={classes.tableCell}>
                  {item.id}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {item.courseName}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  Rs. {item.courseCategories}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {item.coursePrice}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  {item.courseDiscount}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  40
                </TableCell>

                <TableCell align="center" className={classes.tableCell}>
                  <IconButton onClick={handlePopoverOpen}>
                    <MoreVertIcon color="primary" />
                  </IconButton>
                  <Popover
                    id={popoverId}
                    open={openPopover}
                    anchorEl={popoverAnchor}
                    onClose={handlePopoverClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    PaperProps={{
                      sx: {
                        width: "auto",
                        background: theme.palette.background.default,
                      },
                    }}
                  >
                    <Box>
                      <MenuItem onClick={() => handleNavigate()}>
                        Edit Course
                      </MenuItem>
                      <MenuItem>Delete Course</MenuItem>
                      <MenuItem onClick={() => {}}>Deactivate Course</MenuItem>
                    </Box>
                  </Popover>{" "}
                </TableCell>
              </TableRow>
              {index < data?.length - 1 && (
                <div style={{ marginBottom: "10px" }} />
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
