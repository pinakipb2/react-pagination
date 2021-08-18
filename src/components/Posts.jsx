import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { LinearProgress } from "@material-ui/core"

const theme = createTheme({
  palette: {
    type: "dark",
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    color: "white",
  },
  paper: {
    maxWidth: 850,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}))

const Posts = ({ posts, loading }) => {
  const classes = useStyles()
  if (loading) {
    return <LinearProgress />
  }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography variant="h3" component="div" align="center">
          React Pagination
        </Typography>
        {posts.map((post) => (
          <Paper className={classes.paper} key={post.id}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>{post.body.charAt(0).toUpperCase()}</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{post.body}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </div>
    </ThemeProvider>
  )
}

export default Posts
