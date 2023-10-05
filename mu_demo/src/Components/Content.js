import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "none",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        borderRadius: 0,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Gap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "grid",
          justifyContent: "space-around",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
          mt: 5,
        }}
      >
        <Item>
          <h1>
            Bievenue sur la plateforme de demandes de documents administratifs
          </h1>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "",
              "&:hover": {
                backgroundColor: "",
              },
            }}
          />

          <Box
            sx={{
              backgroundColor: "",
              "&:hover": {
                backgroundColor: "",
              },
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="Paella dish"
              />
              Faites votre demande a partir de votre domicile et faites vous
              livrer en toutes securite.
            </Typography>
          </CardContent>
        </Item>
        <Item>2</Item>
      </Box>
    </div>
  );
}
