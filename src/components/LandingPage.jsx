import * as React from "react";
import { Box, Grid, Stack, Typography, Avatar, Button } from "@mui/material";
import mainImage from "/images/products/sonyXb910n-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
export default function LandingPage() {
  const [hover, setHover] = React.useState(false);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#1a1a1a", // Dark background to match the design
        padding: 4, // Padding around the content
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ margin: 0, width: "100%" }}
      >
        {/* Left side (Text content) */}
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: 0, // Remove any padding inside the box
            }}
          >
            <Stack spacing={2} sx={{ color: "#fff" }}>
              <Typography variant="h4" fontWeight="bold">
                Sony H4-XB72
              </Typography>
              <Typography variant="h6">
                Give your favourite music a boost
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  $1200
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: "line-through",
                    color: "#aaa",
                    marginLeft: 2,
                  }}
                >
                  $2000
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#101010",
                  padding: "10px 20px",
                  fontSize: "16px",
                }}
                onMouseEnter={() => setHover(true)} // Set hover state to true
                onMouseLeave={() => setHover(false)}
              >
                Shop Now {hover ? <TrendingFlatIcon /> : <ArrowForwardIcon />}
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right side (Image) */}
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: 0, // Remove any padding
            }}
          >
            <Avatar
              alt="Sony H4-XB72"
              src={mainImage}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 400,
                transformStyle: "preserve-3d", // Enable 3D space for the flip effect
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "rotate(360deg)", // Apply the rotation
                  transform: "rotateY(180deg)", // Smooth transition effect
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
