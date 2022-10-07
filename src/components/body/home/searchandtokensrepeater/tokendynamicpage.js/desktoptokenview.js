import React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Progress,
  Text,
  Textarea,
  Toast,
} from "@chakra-ui/react";

import { StarIcon, ArrowUpIcon, CheckCircleIcon } from "@chakra-ui/icons";
import tgimg from "../../../../../assets/telegram.png";
import pintimg from "../../../../../assets/pinterest.png";
import twtimg from "../../../../../assets/twitter.png";
import ytimg from "../../../../../assets/youtube.png";
import fbimg from "../../../../../assets/facebook.png";
import { useEffect } from "react";
import { getTokenPrices, getAllTokensData } from "../../../../utils/apis";

function Desktoptokenview({ tokenDetails, copy }) {
  const {
    isApproved,
    token_asa,
    token_contract_address,
    token_description,
    token_discord_url,
    token_launch_date,
    token_logo,
    token_name,
    token_network,
    token_owner,
    token_stage,
    token_swap_url,
    token_symbol,
    token_telegram_url,
    token_twitter_url,
    token_website_url,
    token_facebook_url,
    token_youtube_url,
    vote,
    token_pinterest_url,
  } = tokenDetails;
  useEffect(() => {
    const priceDaata = getAllTokensData(token_asa);
    console.log(priceDaata);
  }, []);
  return (
    <Box
      bg="#111621"
      w="100vw"
      minH="100vh"
      pl="10"
      pr="10"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box
        bg="#222B3E"
        w="80%"
        p="5"
        display="flex"
        gap="5"
        color="#E5E5E5"
        borderRadius="5px"
        mt="10"
      >
        <Box display="flex" flexDir="column" gap="2" flex="20" maxW="60%">
          <Box display="flex" flexDir="row" gap="2">
            <Box display="flex" flexDir="column" gap="2">
              <Image
                height={"60px"}
                w={"60px"}
                src={
                  token_logo[0] ||
                  "https://pbs.twimg.com/profile_images/1443915582668218380/ipdsvtYK_400x400.jpg"
                }
              />
              <Text
                p="2"
                textAlign="center"
                bg="#4C5C75"
                borderRadius="5px"
                fontSize="0.8em"
              >
                {token_asa}
              </Text>
            </Box>
            <Box display="flex" flexDir="column">
              <Text>{token_name}</Text>
              <Text>{token_symbol}</Text>
            </Box>
          </Box>
          <Box>
            <Text>{token_description}</Text>
          </Box>
        </Box>
        <Box
          flex="10"
          fontSize="1em"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>Algo Price:</Text>
            <Text>0.0000123</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>USD Price:</Text>
            <Text>0.00001643</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>24h Change:</Text>
            <Text color="#16C784">
              <ArrowUpIcon
                transform="rotateZ(45deg)"
                alignSelf="center"
                boxSize="1.5em"
              />
              1.25%
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between" flexDir="row">
            <Text>Vote:</Text>
            <Text>{vote}</Text>
          </Box>
        </Box>
        <Box display="flex" flex="1" justifyContent="flex-end">
          <StarIcon color="#E5E5E5" cursor="pointer" />
        </Box>
      </Box>
      {/* Tabs */}
      <Box
        display="flex"
        justifyContent="space-between"
        w="80%"
        color="#fff"
        mt="5"
      >
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="25%"
          textAlign="center"
          fontSize="0.8em"
        >
          Purchase {token_name}({token_symbol})
        </Box>
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="15%"
          textAlign="center"
          fontSize="0.8em"
          cursor="pointer"
          display="grid"
          placeItems="center"
          //   onClick={(e) => copy(token_website_url)}
        >
          <Link href={token_website_url} target="_blank">
            Website
          </Link>
        </Box>
        <Box
          bg="#4C5C75"
          p="1"
          borderRadius="5px"
          w="15%"
          display="grid"
          placeItems="center"
          textAlign="center"
          fontSize="0.8em"
          onClick={(e) => copy(token_asa)}
        >
          ASA ID
        </Box>
        <Box
          bg="#45AC75"
          p="1"
          borderRadius="5px"
          w="10%"
          textAlign="center"
          fontSize="0.8em"
          display="grid"
          placeItems="center"
          onClick={(e) => copy(vote)}
        >
          Vote
        </Box>
      </Box>
      {/* Charts */}
      <Box w="80%" display="flex" flexDir="row" gap="10" mt="10">
        <Box w="48%" border="1px solid #fff" h="290px"></Box>
        <Box w="48%" minH="250px" color="#fff" fontWeight="500">
          <Text>Socials:</Text>
          <Box display="flex" gap={2} mb={5} mt={2}>
            <Link href={token_telegram_url} target="_blank">
              <Image src={tgimg} cursor="pointer" />
            </Link>
            <Link href={token_twitter_url} target="_blank">
              {" "}
              <Image src={twtimg} cursor="pointer" />
            </Link>
            <Link href={token_youtube_url} target="_blank">
              {" "}
              <Image src={ytimg} cursor="pointer" />
            </Link>
            <Link href={token_facebook_url} target="_blank">
              <Image src={fbimg} cursor="pointer" />
            </Link>
            <Link href={token_pinterest_url} target="_blank">
              <Image src={pintimg} cursor="pointer" />
            </Link>
          </Box>
          <Box display="flex" gap={2} mb={5} mt={2}>
            <StarIcon color="#DD821F" />
            <StarIcon color="#DD821F" />
            <StarIcon color="#DD821F" />
            <StarIcon color="#DD821F" />
            <StarIcon />
          </Box>
          <Box w="100%" bg="#222B3E" p="5" borderRadius="5px" mb="5">
            <Box
              display="flex"
              flexWrap="wrap"
              flexDir="column"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Total Supply:</Text>
              <Text color="#A1A1A1" fontSize="0.9em">
                10,000,000.000 Tacos
              </Text>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDir="column"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Circulating Supply:</Text>
              <Text color="#A1A1A1" fontSize="0.9em">
                9,999,999.029 Tacos
              </Text>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              gap="2"
              fontSize="1.1rem"
            >
              <Text color="#E5E5E5">Token in circulation after</Text>
              <Text color="#fff">100.00%</Text>
            </Box>
            <Progress
              colorScheme="green"
              size="md"
              value={100}
              borderRadius="5px"
            />
          </Box>
        </Box>
      </Box>
      {/* ASA Details */}
      <Box w="80%" display="flex" flexDir="row" gap="10">
        <Box
          w="48%"
          bg="#1E2637"
          gap="2"
          display="flex"
          flexDir="column"
          p="2"
          borderRadius="10px"
        >
          <Text color="#45AC75" fontSize="1.5rem" w="100%" textAlign="center">
            ASA DETAILS
          </Text>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Token Role:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              Payment/Rewards
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Categories:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              None
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Partnership:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              None
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDir="column"
            fontSize="1.1rem"
          >
            <Text color="#E5E5E5">Token Type:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              Algorand ASA
            </Text>
          </Box>
          <Box display="flex" flexWrap="wrap" fontSize="1.1rem">
            <Text color="#E5E5E5">About:</Text>
            <Text fontSize="0.9em" color="#A1A1A1">
              {`${token_description.slice(0, 120)}...`}
            </Text>
          </Box>
        </Box>
        <Box
          minH="300px"
          w="48%"
          bg="#1E2637"
          mb="5"
          borderRadius="10px"
          p="2"
          display="flex"
          flexDir="column"
        >
          <Box maxH="60%" overflowY="scroll">
            <Box mt="2" mb="2">
              <Text color="#515B6F">Kelvin19212</Text>
              <Text color="#c7c7c7">
                efpmvpemanbv oidifnv odanonfv odnjfo vnapodnd dofvn oidnfoiv
                odnvoifv sdfvSfv svsfvsfv
              </Text>
            </Box>
          </Box>
          <Button
            alignSelf="center"
            bg="#4C5C75"
            _hover={{ color: "#c7c7c7" }}
            color="#fff"
          >
            Load more comments
          </Button>
          <Text fontSize="1.4rem" color="#fff">
            Comment
          </Text>
          <Textarea bg="#fff" mb={5} resize={"vertical"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Desktoptokenview;
