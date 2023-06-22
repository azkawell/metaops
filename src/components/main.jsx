import { FAQ } from "./FAQ";
import { Intro } from "./intro"; 
import { Mint } from "./mint";

export const Main = (props) => {
  const {imx_link, imx_client, loading, setMintLoading, setStatus, walletAddress, tokenPrice, addrWhiteList} = props
  return (
    <div id="main">
      <div className="container">
        <div className="row" style={{height:'800px'}}>
          <div className="col-xs-12 col-md-6 col-lg-6">
            <Intro />
            <FAQ />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6" style={{height:'100%', display:'flex', alignItems:'center', justifyContent:'end'}}>
            <Mint imx_link={imx_link} imx_client={imx_client} loading={loading} setMintLoading={setMintLoading} setStatus={setStatus} walletAddress={walletAddress} tokenPrice={tokenPrice} addrWhiteList={addrWhiteList} />
          </div>
        </div>
      </div>
    </div>
  );
};
