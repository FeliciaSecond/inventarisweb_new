import { Box, Card, CardHeader, CardTitle, Text, CardBody, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PenggunaCreate = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nama, setNama] = useState("");
    const navigate = useNavigate();

    const handleTambah = async () => {
        const url = "http://localhost/inventarisweb_php/penggunainsert.php";

        const body = {
            username: username,
            password: password,
            nama: nama
        };

        try {
            const response = await axios.post(url, body);
            
            if (response.data.STATUS === "BERHASIL")
            {
                navigate("/dashboard/pengguna");
            }

            else
            {
                navigate("/dashboard/pengguna/tambah");
            }
        } catch (error)
        {
            console.log(error);
        }
    };

    return (
        <>
            <Box display="flex"
                flexDirection="column"
                width="100dvw"
                height="100dvh"
                justifyContent="center"
                alignItems="center">
                <Card.Root width="50dvw" shadowColor="bg.emphasized" shadow="lg">
                    <CardHeader>
                        <CardTitle>
                            <Text>
                                Form Tambah Pengguna
                            </Text>
                        </CardTitle>
                    </CardHeader>

                    <CardBody gapY="10px">
                        <Input onChange={ (e) => {
                            setUsername(e.target.value);
                        } } placeholder="Username" type="text"/>

                        <Input onChange={ (e) => {
                            setPassword(e.target.value);
                        } } placeholder="Password" type="password"/>

                        <Input onChange={ (e) => {
                            setNama(e.target.value);
                        } } placeholder="Nama" type="text"/>
                        
                        <Button onClick={ () => { handleTambah() } } backgroundColor="teal" color="white" borderRadius="10px">
                            <Text>Tambah Pengguna</Text>
                        </Button>

                        <Button as={Link} to="/dashboard/pengguna" variant="outline" borderRadius="10px">
                            <Text>Kembali</Text>
                        </Button>
                    </CardBody>

                </Card.Root>
            </Box>
        </>
    );
}

export default PenggunaCreate;