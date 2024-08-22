"use client";
import ButtonLoader from "@/components/Buttons/Loading";
import Toast from "@/components/Toastify/error";
import { AppRegistrationRounded, RemoveRedEye } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Container, IconButton } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";
import { FormEvent, useState } from "react";

function Register() {
  const router = useRouter();

  const [fullName, setfullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");
  const [passwordStatus, setPasswordStatus] = useState<boolean>(true);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");

  const handlePassClick = () => {
    if (passwordStatus) {
      setPasswordType("text");
      setPasswordStatus(false);
    } else {
      setPasswordType("password");
      setPasswordStatus(true);
    }
  };

  const handlePush = (link: string) => {
    NProgress.start();
    router.replace(link);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const password = formData.get("password");

    setLoadingState(true);

    axios
      .post("/api/oath/register", {
        fullName: full_name,
        email: email,
        pass: password,
      })
      .then((response) => {
        const data = response.data.data;
        if (data.statusCode === 1) {
          let inSixtyMinutes = new Date(new Date().getTime() + 60 * 60 * 1000);
          Cookies.set("token", data.token, {
            expires: inSixtyMinutes,
          });
          Cookies.set("userID", data.email, {
            expires: inSixtyMinutes,
          });
          Cookies.set("fullName", data.fullName, {
            expires: inSixtyMinutes,
          });

          handlePush("/");
        } else if (data.statusCode === 0) {
          setShowToast(true);
          setToastType("error");
          setToastMessage(data.message);
        }
        setLoadingState(false);
      })
      .catch((err) => {
        setShowToast(true);
        setToastType("error");
        setToastMessage("Error occured please try again later");
        setLoadingState(false);
      });
  };

  
  return (
    <Container component="main" className="card xs-form">
      <Toast type={toastType} message={toastMessage} showToast={showToast} />
      {/* <div className="social__oath mgb-10">
        <a href="./aaa" className="socal__oath__link d-flex2">
          <Image src="/images/google.png" width={20} height={20} alt="google" />
          <p>Sign up with Google</p>
        </a>
        <p className="socal__oath__or">Or</p>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="form__body mgb-10">
          <label>
            Full Name <sup>*</sup>
          </label>
          <input
            type="text"
            className="form-input mgt-10"
            value={fullName}
            placeholder="Full Name"
            onChange={(e) => setfullName(e.target.value)}
            name="full_name"
            required
          />
        </div>
        <div className="form__body mgb-10">
          <label>
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            className="form-input mgt-10"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__body mgb-10">
          <label>
            Password <sup>*</sup>
          </label>
          <div className="d-flex3 p-r form__body__icon">
            <input
              type={passwordType}
              className="form-input mgt-10"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            <IconButton onClick={handlePassClick} className="h-100">
              {passwordStatus ? <RemoveRedEye /> : <VisibilityOffIcon />}
            </IconButton>
          </div>
        </div>
        <div className="form__body mgt-20">
          {!loadingState ? (
            <button className="btn_sm w-100 d-flex2" type="submit">
              <AppRegistrationRounded />
              Register
            </button>
          ) : (
            <ButtonLoader />
          )}
          <div className="form__body__other d-flex3 mgt-20">
            <p>Have an account ?</p>
            <Link href="/login">Sign In</Link>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Register;
