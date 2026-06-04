import { Text, Table, Heading, Box, Button, Dialog, Portal, CloseButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pengguna = () => {
  const [user, setUser] = useState([]);

  const selectPengguna = async () => {
    const url = "http://localhost/inventarisweb_php/penggunaread.php";

    try {
      const response = await axios.get(url);
      setUser(response.data["DATA"]);
    }

    catch (error)
    {
      console.log(error);
    }
  };

  const handleHapus = async (id) => {
    const url = "http://localhost/inventarisweb_php/penggunadelete.php";
    const body = { id: id };

    try {
      const response = await axios.post(url, body);
      

      if (response.data.STATUS === "BERHASIL")
      {
        await selectPengguna();
      }
    }

    catch (error)
    {
      console.log(error);
    }
  };

  useEffect(() => {
    selectPengguna();
  }, []);

  return (
    <>
      <Heading size="xl" textAlign="center" padding="10px">
        Tabel Pengguna
      </Heading>

      <Box padding="10px">
        <Button as={Link} to="tambah" variant="solid" bgColor="teal">
          Tambah Pengguna
        </Button>
      </Box>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>No</Table.ColumnHeader>
            <Table.ColumnHeader>Nama</Table.ColumnHeader>
            <Table.ColumnHeader>Username</Table.ColumnHeader>
            <Table.ColumnHeader>Password</Table.ColumnHeader>
            <Table.ColumnHeader>Aksi</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {user.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.username}</Table.Cell>
                <Table.Cell>{item.password}</Table.Cell>
                <Table.Cell>
                  <Button as={Link} to={`update/${item.id}`} margin="2px" bgColor="blue.400">
                    Ubah
                  </Button>

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button margin="2px" bgColor="red.400">
                        Hapus
                      </Button>
                    </Dialog.Trigger>

                    <Portal>
                      <Dialog.Backdrop/>

                      <Dialog.Positioner>
                        <Dialog.Content>
                          <Dialog.Header>
                            <Dialog.Title>
                              Konfirmasi Hapus
                            </Dialog.Title>
                          </Dialog.Header>

                          <Dialog.Body>
                            <p>
                              Apakah Anda yakin hapus data {item.nama} ?
                            </p>
                          </Dialog.Body>

                          <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                              <Button bgColor="red.500" onClick={ () => {
                                handleHapus(item.id);
                              } }>Hapus</Button>
                            </Dialog.ActionTrigger>
                          </Dialog.Footer>

                          <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm"/>
                          </Dialog.CloseTrigger>
                        </Dialog.Content>
                      </Dialog.Positioner>
                    </Portal>
                  </Dialog.Root>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default Pengguna;
