import {
  Box,
  Button,
  Center,
  CloseButton,
  Drawer,
  Image,
  Link,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

const MyDrawer = ({ namadrawer, logodrawer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root
      placement="start"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          <BiMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>{namadrawer}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Center>
                <Image src={logodrawer} width="30dvw" />
              </Center>
              <Box
                display="flex"
                flexDirection="column"
                paddingTop="20px"
                gapY="10px"
              >
                <Link
                  as={RouterLink}
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  bgColor="blue.100"
                  color="blackAlpha.800"
                  padding="10px"
                  _hover={{ backgroundColor: "blue.400", color: "white" }}
                  borderRadius="10px"
                  fontWeight="bold"
                >
                  <Text>Menu Dashboard</Text>
                </Link>
                <Link
                  as={RouterLink}
                  to="pengguna"
                  onClick={() => setOpen(false)}
                  bgColor="blue.100"
                  color="blackAlpha.800"
                  padding="10px"
                  _hover={{ backgroundColor: "blue.400", color: "white" }}
                  borderRadius="10px"
                  fontWeight="bold"
                >
                  <Text>Menu Pengguna</Text>
                </Link>
                <Link
                  as={RouterLink}
                  to="profil"
                  onClick={() => setOpen(false)}
                  bgColor="blue.100"
                  color="blackAlpha.800"
                  padding="10px"
                  _hover={{ backgroundColor: "blue.400", color: "white" }}
                  borderRadius="10px"
                  fontWeight="bold"
                >
                  <Text>Menu Profil</Text>
                </Link>
              </Box>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MyDrawer;
