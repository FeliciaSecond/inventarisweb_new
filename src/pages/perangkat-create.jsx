import { Box, Card, CardHeader, CardTitle, Text, CardBody, Input, Button, Select, Portal, createListCollection  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PerangkatCreate = () => {
    const [nama_perangkat, setNamaPerangkat] = useState("");
    const [jenis_perangkat, setJenisPerangkat] = useState("");
    const [posisi, setPosisi] = useState("");
    const navigate = useNavigate();

    // const listJenisPerangkat = ["MOUSE", "KEYBOARD", "CPU", "MONITOR"];

    const listJenisPerangkat = createListCollection({
        items: [
          { label: "MOUSE", value: "MOUSE" },
          { label: "KEYBOARD", value: "KEYBOARD" },
          { label: "CPU", value: "CPU" },
          { label: "MONITOR", value: "MONITOR" },
        ],
      });


    // const listPosisi = ["LAB A", "LAB B", "LAB C", "LAB D"];

    const listPosisi = createListCollection({
        items: [
          { label: "LAB A", value: "LAB A" },
          { label: "LAB B", value: "LAB B" },
          { label: "LAB C", value: "LAB C" },
          { label: "LAB D", value: "LAB D" },
        ],
      });

    const handleTambah = async () => {
        const url = "http://localhost/inventarisweb_php/perangkatinsert.php";

        const body = { nama_perangkat: nama_perangkat, jenis_perangkat: jenis_perangkat, posisi: posisi };

        // console.log("nama_perangkat: " + nama_perangkat);
        // console.log("jenis_perangkat: " + jenis_perangkat);
        // console.log("posisi: " + posisi);
        // console.log();

        try {
            const response = await axios.post(url, body);
            
            if (response.data.STATUS === "BERHASIL")
            {
                navigate("/dashboard/perangkat");
            }

            else
            {
                navigate("/dashboard/perangkat/tambah");
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
                                Form Tambah Perangkat
                            </Text>
                        </CardTitle>
                    </CardHeader>

                    <CardBody gapY="10px">
                        <Input onChange={ (e) => {
                            setNamaPerangkat(e.target.value);
                        } } placeholder="Nama Perangkat" type="text"/>

                        {/* <Input onChange={ (e) => {
                            setJenisPerangkat(e.target.value);
                        } } placeholder="Jenis Perangkat" type=""/> */}

                        <Select.Root collection={listJenisPerangkat} onSelect={ (e) => setJenisPerangkat(e.value) }>
                            <Select.HiddenSelect/>

                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Jenis Perangkat"/>
                                </Select.Trigger>

                                <Select.IndicatorGroup>
                                    <Select.Indicator/>
                                </Select.IndicatorGroup>
                            </Select.Control>

                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {listJenisPerangkat.items.map((jenis) => (
                                            <Select.Item item={jenis} key={jenis.value}>
                                                {jenis.label}
                                                <Select.ItemIndicator/>
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>

                        {/* <Input onChange={ (e) => {
                            setPosisi(e.target.value);
                        } } placeholder="Posisi" type="text"/> */}

                        <Select.Root collection={listPosisi} onSelect={ (e) => setPosisi(e.value) }>
                            <Select.HiddenSelect/>

                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Posisi"/>
                                </Select.Trigger>

                                <Select.IndicatorGroup>
                                    <Select.Indicator/>
                                </Select.IndicatorGroup>
                            </Select.Control>

                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {listPosisi.items.map((posisi) => (
                                            <Select.Item item={posisi} key={posisi.value}>
                                                {posisi.label}
                                                <Select.ItemIndicator/>
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                        
                        <Button onClick={ () => { handleTambah() } } backgroundColor="teal" color="white" borderRadius="10px">
                            <Text>Tambah Perangkat</Text>
                        </Button>

                        <Button as={Link} to="/dashboard/perangkat" variant="outline" borderRadius="10px">
                            <Text>Kembali</Text>
                        </Button>
                    </CardBody>

                </Card.Root>
            </Box>
        </>
    );
}

export default PerangkatCreate;