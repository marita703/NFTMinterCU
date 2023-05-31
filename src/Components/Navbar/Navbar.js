import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "@/assets/social-media-icons/facebook_32x32.png";
import Twitter from "@/assets/social-media-icons/twitter_32x32.png";
import Email from "@/assets/social-media-icons/email_32x32.png";

function Navbar({ connectAccount, isConected }) {
  return (
    <Flex justify="space-arround" align="center" padding="30px 30px">
      {/* Left side, social Media Icons */}
      <Flex justify="space-between" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com">
          <Image src={Facebook} boxSize="42px" margin="0 15px" alt="facebook" />
        </Link>
        <Link href="https://www.facebook.com">
          <Image src={Twitter} boxSize="42px" margin="0 15px" alt="facebook" />
        </Link>
        <Link href="https://www.facebook.com">
          <Image src={Email} boxSize="42px" margin="0 15px" alt="facebook" />
        </Link>
      </Flex>

      {/* Right side */}
      <Flex justify="space-around" align="center" width="40%" padding="30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

        {isConected ? (
          <Box margin="0 15px">conected</Box>
        ) : (
          <Button
            backgroundColor="#D6517d"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0f0f0f"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0px 15px"
            onClick={connectAccount}
          >
            {" "}
            ConnectWallet
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
