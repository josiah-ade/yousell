import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <div className="footer__container">
      <Container className="footer__grid">
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <p className="footer__about__desc">
              The admin panel is an important aspect of any website since it
              allows users to quickly see sales performance, revenue, stock, and
              so on.
            </p>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <div className="footer__heads">
              <h5>Pages</h5>
              <hr className="rounded"></hr>
            </div>
            <div className="footer_links">
              <Link href="/listing">About Us</Link>
              <Link href="/listing">Contact Us</Link>
              <Link href="/listing">Privacy & Policy</Link>
              <Link href="/listing">Terms & Conditions</Link>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <div className="footer__heads">
              <h5>Pages</h5>
              <hr className="rounded"></hr>
            </div>
            <div className="footer_links">
              <Link href="/listing">About Us</Link>
              <Link href="/listing">Contact Us</Link>
              <Link href="/listing">Privacy & Policy</Link>
              <Link href="/listing">Terms & Conditions</Link>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <div className="footer__heads">
              <h5>Pages</h5>
              <hr className="rounded"></hr>
            </div>
            <div className="footer_links">
              <Link href="/listing">About Us</Link>
              <Link href="/listing">Contact Us</Link>
              <Link href="/listing">Privacy & Policy</Link>
              <Link href="/listing">Terms & Conditions</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default index;
