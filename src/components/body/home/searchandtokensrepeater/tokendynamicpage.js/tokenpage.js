import Desktoptokenview from "./desktoptokenview";
import Mobiletokenviw from "./mobiletokenviw";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
function Tokenpage() {
  const toast = useToast();
  const [isLargerThan500px] = useMediaQuery("(min-width: 500px)");
  const [tokenDetails, setTokenDetails] = useState();
  const search = useLocation().search;
  let stopUseEffect = useRef(false);
  const token = new URLSearchParams(search).get("q");
  const getTokenDetails = async () => {
    console.log(token);
    try {
      const tokenDetail = await axios.get(`/api/coins/getCoin?token=${token}`);
      console.log(tokenDetail.data[0]);
      setTokenDetails(tokenDetail.data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (stopUseEffect.current === false) getTokenDetails();
    stopUseEffect.current = true;
  }, []);
  const copy = (value) => {
    navigator.clipboard.writeText(value);
    toast({
      title: value + " copied.",
      description: "You have copied" + value,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      {tokenDetails && isLargerThan500px && (
        <Desktoptokenview tokenDetails={tokenDetails} copy={copy} />
      )}
      {tokenDetails && !isLargerThan500px && (
        <Mobiletokenviw tokenDetails={tokenDetails} copy={copy} />
      )}
    </>
  );
}

export default Tokenpage;
