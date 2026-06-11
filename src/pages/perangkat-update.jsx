import { Box, Card, CardHeader, CardTitle, Text, CardBody, Input, Button, Select, Portal, createListCollection  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PerangkatUpdate = () => {
    const [nama_perangkat, setNamaPerangkat] = useState("");
    const [jenis_perangkat, setJenisPerangkat] = useState("");
    const [posisi, setPosisi] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

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

    const [selectedValue, setSelectedValue] = useState(["KEYBOARD"]);

    const handleValueChange = (details) => {
        // details.value berisi array nilai yang dipilih (contoh: ["CPU"])
        setSelectedValue(details.value);
        
        // Jika Anda ingin mengambil nilai string tunggal untuk kebutuhan API:
        const stringValue = details.value[0]; 
        console.log("Nilai yang dipilih:", stringValue);
        };

    const handleUpdate = async () => {
        const url = "http://localhost/inventarisweb_php/perangkatupdate.php";
        const body = { nama_perangkat: nama_perangkat, jenis_perangkat: jenis_perangkat, posisi: posisi, id: id };

        console.log("UPDATED");
        console.log("nama_perangkat: " + nama_perangkat);
        console.log("jenis_perangkat: " + jenis_perangkat);
        console.log("posisi: " + posisi);
        console.log();


        // try
        // {
        //     const response = await axios.post(url, body);
            
        //     if (response.data.STATUS === "BERHASIL")
        //     {
        //         navigate("/dashboard/perangkat");
        //     }

        //     else {
        //         navigate("/dashboard/perangkat/update");
        //     }
        // }

        // catch (error)
        // {
        //     print(error);
        // }
    };

    const selectSatuPerangkat = async () => {
        const url = `http://localhost/inventarisweb_php/satuperangkatread.php?id=${id}`;

        try {
            const response = await axios.get(url);
            
            setNamaPerangkat(response.data["DATA"][0]["nama_perangkat"]);
            setJenisPerangkat(response.data["DATA"][0]["jenis_perangkat"]);
            setPosisi(response.data["DATA"][0]["posisi"]);

            setSelectedValue(response.data["DATA"][0]["jenis_perangkat"]);

            console.log("nama_perangkat: " + response.data["DATA"][0]["nama_perangkat"]);
            console.log("jenis_perangkat: " + response.data["DATA"][0]["jenis_perangkat"]);
            console.log("posisi: " + response.data["DATA"][0]["posisi"]);
            console.log();
        }
        catch (error)
        {
            print(error);
        }
    };

    useEffect(() => {
        selectSatuPerangkat();
    }, []);

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
                            <Text>Form Update Perangkat</Text>
                        </CardTitle>
                    </CardHeader>

                    <CardBody gapY="10px">
                        <Input onChange={ (e) => {
                            setNamaPerangkat(e.target.value);
                        } } placeholder="Nama Perangkat" type="text" value={nama_perangkat}/>

                        <Select.Root collection={listJenisPerangkat} onValueChange={handleValueChange} value={selectedValue}>
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
                                                {jenis.value}
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

                        <Select.Root collection={listPosisi} onSelect={ (e) => {setPosisi(e.value); console.log(`change: ${e.value}`)} } value={posisi}>
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
                                                {posisi.value}
                                                <Select.ItemIndicator/>
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>

                        <Button onClick={ () => { handleUpdate() } } backgroundColor="teal" color="white" borderRadius="10px">
                            <Text>Update Perangkat</Text>
                        </Button>

                        <Button as={Link} to="/dashboard/perangkat" variant="outline" borderRadius="10px">
                            <Text>Kembali</Text>
                        </Button>
                    </CardBody>
                </Card.Root>

                
            </Box>
        </>
    );
};

export default PerangkatUpdate;