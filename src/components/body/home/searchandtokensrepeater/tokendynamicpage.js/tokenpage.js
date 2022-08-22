import Desktoptokenview from "./desktoptokenview";
import Mobiletokenviw from "./mobiletokenviw";
import {useMediaQuery} from '@chakra-ui/react'

function Tokenpage() {
    const [isLargerThan500px] = useMediaQuery('(min-width: 500px)')
  return <>
  {isLargerThan500px && <Desktoptokenview />}
  {!isLargerThan500px && <Mobiletokenviw />}
  </>
}

export default Tokenpage;