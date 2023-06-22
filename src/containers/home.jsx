import { useState, useEffect } from "react";
import { ethers, BigNumber } from 'ethers'
import { ToastContainer, toast } from 'react-toastify';
import { contractAddress } from '../constants/address';
import { connectWallet, getCurrentWalletConnected, getContract } from '../util/interact';
import { linkAddress, apiAddress } from "../constants/address";
import { Navigation } from "../components/navigation";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import { whiteList } from "../constants/whitelist";

import 'react-toastify/dist/ReactToastify.css';

import { ImmutableXClient, Link } from '@imtbl/imx-sdk';


const Home = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(null)
  const [addrWhiteList, setAddrWhiteList] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxTokens, setMaxTokens] = useState(0);
  const [maxTokenPurchase, setMaxTokenPurchase] = useState(13);

  // IMX Client
  const [client, setClient]  = useState(null);
  const link = new Link(linkAddress);
  


  useEffect(() => {
    let whitelist = whiteList.map(addr => addr.toString().toLowerCase());
    setAddrWhiteList(whitelist)
  }, []);


  useEffect(async () => {
    setClient(await ImmutableXClient.build({ publicApiUrl: apiAddress }))
    const { address, status } = await getCurrentWalletConnected()
    console.log(address)
    setWalletAddress(address)
    setStatus(status)
  }, [])

  useEffect(() => {
    ( async () => {
        let contract = getContract(walletAddress)
        try {
          let tp = await contract.tokenPrice()
          let mt = await contract.MAX_TOKENS()
          setMaxTokens(BigNumber.from(mt).toNumber())
          setTokenPrice( (BigNumber.from(tp).div(BigNumber.from(1e9).mul(BigNumber.from(1e4))).toString() ) )  // original value * 1e5
        } catch(err) {
          console.log(err)
        }
    })();
  }, [loading, walletAddress])


  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])


  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

 
  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }

  return (
    <div>
      <Navigation onClickDisconnectWallet={onClickDisconnectWallet} onClickConnectWallet={onClickConnectWallet} walletAddress={walletAddress}  />
      <Main imx_link={link} imx_client={client} loading={loading} setMintLoading={setMintLoading} setStatus={setStatus} walletAddress={walletAddress} tokenPrice={tokenPrice} addrWhiteList={addrWhiteList} />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
