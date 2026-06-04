import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardRoot,
  CardTitle,
  Center,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { Toaster } from "../components/ui/toaster";

import logo from "../assets/icons/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TampilPesan } from "./services";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const username = localStorage.getItem("usernameLS");
    if (username) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async () => {
    const url = "http://localhost/inventarisweb_php/proseslogin.php";
    const body = { username: username, password: password };

    try {
      const response = await axios.post(url, body);
      if (response.data.STATUS === "BERHASIL") {
        localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
        localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
        TampilPesan("Info", "Selamat Datang");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        navigate("/");
        TampilPesan("Info", "Username atau Password Salah");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        backgroundColor="teal"
        width="100dvw"
        height="100dvh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Toaster />
        <CardRoot borderRadius="20px" backgroundColor="white" color="black">
          <CardHeader>
            <CardTitle>
              <Center>
                <Image src={logo} width="100px" />
              </Center>
              <Text textAlign="center">My Inventory</Text>
            </CardTitle>
            <CardBody gapY="10px">
              <Input
                placeholder="Username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                backgroundColor="teal"
                color="white"
                borderRadius="10px"
                onClick={() => {
                  handleLogin();
                }}
              >
                <Text>LOGIN</Text>
              </Button>
            </CardBody>
          </CardHeader>
        </CardRoot>
      </Box>
    </>
  );
};

export default Login;
