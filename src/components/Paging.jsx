import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"
import { createTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { red } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: "#43ff00",
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
      marginBottom: theme.spacing(2),
    },
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}))

const Paging = ({ postsPerPage, totalPosts, paginate }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Pagination
          classes={{ ul: classes.ul }}
          count={Math.ceil(totalPosts / postsPerPage)}
          variant="outlined"
          showFirstButton
          showLastButton
          color="secondary"
          onChange={(event, value) => paginate(value)}
        />
      </div>
    </ThemeProvider>
  )
}

export default Paging
