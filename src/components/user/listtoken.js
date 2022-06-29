// import { Box } from '@chakra-ui/react'
import React, { useState,useRef } from 'react'
import {Input,InputGroup,Box,Text, Button,Textarea} from '@chakra-ui/react'
import axios from 'axios'
// const fs = require('fs');
function Listtokens() {
  const fileinputref = useRef()
  const [tokenName,setTokenName] =useState('')
  const [ tokenSymbol,setTokenSymbol] =useState('')
  const [tokenNetwork,setTokenNetwork] =useState('')
  const [tokenContractAddress,setTokenContractAddress] =useState('')
  const [tokenDescription,setTokenDesription] =useState('')
  const [tokenLaunchDate,setTokenLaunchDate] =useState('')
  const [tokenWebUrl,setTokenWebUrl] =useState('')
  const [tokenAsa,setTokenAsa] =useState('')
  const [tokenChartUrl,setTokenChartUrl] =useState('');
  const [tokenSwapUrl,setTokenSwapUrl] =useState('');
  const [tokenTelegramUrl,setTokenTelegramUrl] =useState('');
  const [tokenDiscordUrl,setTokenDiscordUrl] =useState('');
  const [tokenTwitterUrl,setTokenTwitterUrl] =useState('');
  const [tokenLogo,setTOkenLogo] = useState();
  const [requesting,isRequesting] = useState(false)

  //----------------------------Error--------------------------
  const auth = localStorage.getItem('logintoken') || sessionStorage.getItem('logintoken')
  // console.log(auth);
  const [error,setError] = useState('');
  const submitForm = async() =>{
    isRequesting(r => true)
    let errors = []
    if(tokenName === '') errors = [...errors,"Token Name"]
    if(tokenSymbol === '')errors = [...errors,"Token Symbol"]
    if(tokenSymbol === '')errors = [...errors,"Token Symbol"]
    if(tokenNetwork === '')errors = [...errors,"Token Network"]
    if(tokenContractAddress === '')errors = [...errors,"Token Contract Address"]
    if(tokenDescription === '')errors = [...errors,"Token Description"]
    if(tokenLaunchDate === '')errors = [...errors,"Token Launch Date"]
    if(tokenWebUrl === '')errors = [...errors,"Token Website Url"]
    if(tokenAsa === '')errors = [...errors,"Token Asa"]
    if(tokenTwitterUrl === '')errors = [...errors,"Twitter Url"]

    if(errors.length > 0) return !setError(errors.join(", ") + " cannot be empty") && isRequesting(false)
    let formData = new FormData();
      formData.append('token_name',tokenName.toLowerCase())
      formData.append('token_symbol',tokenSymbol.toLowerCase())
      formData.append('token_network',tokenNetwork.toLowerCase())
      formData.append('token_stage',true)
      formData.append('token_contract_address',tokenContractAddress)
      formData.append('token_description',tokenDescription.toLowerCase())
      formData.append('token_launch_date',tokenLaunchDate)
      formData.append('token_website_url',tokenWebUrl)
      formData.append('token_asa',tokenAsa)
      formData.append('token_chart_url',tokenChartUrl)
      formData.append('token_swap_url',tokenSwapUrl)
      formData.append('token_telegram_url',tokenTelegramUrl)
      formData.append('token_twitter_url',tokenTwitterUrl)
      formData.append('token_discord_url',tokenDiscordUrl)
      formData.append('file',tokenLogo)
  //   axios.post('/api/coins/new',formData,{
  //     headers: { "Content-Type": "multipart/form-data","Authorization": `Bearer ${auth}`},
  //   } ).then((r)=>
  //  { console.log(r)
  //   isRequesting(r => false)
  // } 
  //   ).catch(e=>{
  //     console.log(e)
  //     isRequesting(r => false)
  //   })
  
try{
  const fetchUrl = `/api/coins/new`
  const uploadData = await fetch(fetchUrl,{
    headers: {"Authorization": `Bearer ${auth}`},
    method:'post',
    body:JSON.stringify({
      token_name: tokenName.toLowerCase(),
      token_symbol: tokenSymbol.toLowerCase(),
      token_network:tokenNetwork.toLowerCase(),
      token_asa:tokenAsa,
      token_stage:true,
      token_contract_address:tokenContractAddress,
      token_description:tokenDescription.toLowerCase(),
      token_launch_date:tokenLaunchDate,
      token_chart_url:tokenChartUrl,
      token_swap_url:tokenSwapUrl,
      token_website_url:tokenWebUrl,
      token_telegram_url:tokenTelegramUrl,
      token_twitter_url:tokenTwitterUrl,
      token_discord_url:tokenDiscordUrl,
    }),
    file:formData
  })
  const result = await uploadData.json();
  console.log(result)
}catch(err){
  isRequesting(v => false)
  console.log(err)
}
    
  }

  //------------------Image Upload --------------------------------
  const uploadImage = (e)=>{
    console.log(e.target.files[0]);
    if(e.target.files.length != 0) return setTOkenLogo(e.target.files[0]);
  }
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' bg={'#0D0E12'}>
    <Text fontSize='22px' fontFamily='Poppins' fontWeight='600px' lineHeight='33px' color='#45AC75'>LIST NEW TOKEN</Text>
      <InputGroup display='grid' placeItems='center' gap={5} marginTop='5' marginBottom={1}>
      <Input value={tokenName} isRequired onChange={(e)=>setTokenName(e.target.value)} placeholder='Token Name' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD'  borderRadius='4px'/>
      <Input value={tokenSymbol} isRequired onChange={(e)=>setTokenSymbol(e.target.value)} placeholder='Token Symbol' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD'  borderRadius='4px'/>
      <Input value={tokenNetwork} isRequired onChange={(e)=>setTokenNetwork(e.target.value)} placeholder='Token network' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD'  borderRadius='4px'/>
      <Input value={tokenContractAddress} isRequired onChange={(e)=>setTokenContractAddress(e.target.value)} placeholder='Token Contract' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD'  borderRadius='4px'/>
      <Textarea value={tokenDescription} isRequired maxLength={1000} minLength={100} onChange={(e)=>setTokenDesription(e.target.value)} placeholder='Token description' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD'  borderRadius='4px'/>
      <Input value={tokenLaunchDate} onChange={(e)=>setTokenLaunchDate(e.target.value)} placeholder='Token Launch Date' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' type='date' borderRadius='4px'/>
      <Input value={tokenWebUrl} isRequired type='url' onChange={(e)=>setTokenWebUrl(e.target.value)} placeholder='Token Web URL' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenAsa} isRequired onChange={(e)=>setTokenAsa(e.target.value)}  placeholder='Token Asa' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenChartUrl} isRequired onChange={(e)=>setTokenChartUrl(e.target.value)}  placeholder='Token Chart Url' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenSwapUrl} isRequired onChange={(e)=>setTokenSwapUrl(e.target.value)}  placeholder='Token Swap Url' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenTelegramUrl}  onChange={(e)=>setTokenTelegramUrl(e.target.value)}  placeholder='Token Telegram Url' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenDiscordUrl}  onChange={(e)=>setTokenDiscordUrl(e.target.value)}  placeholder='Token Discord Url' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input value={tokenTwitterUrl}  onChange={(e)=>setTokenTwitterUrl(e.target.value)}  placeholder='Token Twitetr Url' bg='#fff' w='80%' h='50px' fontWeight='500' fontFamily='Poppins' fontSize='18px' lineHeight='27px' color='#B0ADAD' borderRadius='4px'/>
      <Input ref={fileinputref} onChange={uploadImage} mb='5' isRequired  accept="image/png, image/jpg, image/gif, image/jpeg" placeholder='Choose an Image' type='file' w='80%'   fontWeight='500' fontFamily='Poppins' fontSize='18px' display='flex' flexDirection='column' color='#fff' />
      </InputGroup>
      {error != '' && <Text color="#ff0000" fontSize='14px'>{error}</Text>}
      <Button isLoading={requesting} onClick={submitForm}>UPLOAD TOKEN</Button>
    </Box>
  )
}

export default Listtokens