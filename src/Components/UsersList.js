import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UsersList({ loader, users }) {
  const styles = {
    backgroundColor: "#E8E8E8",
    paddingTop: 3,
    paddingBottom: 2.6,
  };
  const cardstyles = (theme) => ({
    // Card: {
    //   maxWidth: 325,
    //   width: 300,
    //   margin: 'auto'
    // },
    Media: {
      height: "100%",
      width: "100%",
    },
  });
  
  return (
    <Grid container spacing={3} sx={styles} align="center" justify="center">
      {users.map((user) => {
        return (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 325, width: 300, margin: "auto" }}>
              <CardMedia
                component="img"
                className={cardstyles.Media}
                image={user.avatar}
                alt="user"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
