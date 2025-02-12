import * as React from "react";
import { Box, Grid, Stack, Typography, Avatar, Button } from "@mui/material";
import mainImage from "/images/products/sonyXb910n-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  const [hover, setHover] = React.useState(false);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#1a1a1a",
        padding: 4,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ margin: 0, width: "100%" }}
      >
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: 0,
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
                onClick={() => navigate("/products")}
                onMouseEnter={() => setHover(true)}
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
              padding: 0,
            }}
          >
            <Avatar
              alt="Sony H4-XB72"
              src={mainImage}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 400,
                transformStyle: "preserve-3d",
                "&:hover": {
                  transform: "rotate(360deg)",
                  transform: "rotateY(180deg)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
