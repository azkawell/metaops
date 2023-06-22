export const Intro = () => {
  return (
    <div id="intro">
        <div className="row">
          <div className="col-xs-12 col-md-12">
              <p className="title">WELCOME TO METAOPS</p>
              <p className="body">
                <span className="bright">MetaOps</span> is developed to operate on the <span className="bright"> blockchain </span> by utilizing the most hyped and expanding sector of the crypto world, 
                <span className="bright"> NFTs (Non-Fungible Tokens) </span>. We are launching 
                <span className="bright"> 2000 MetaOps Beta Passes </span>. Whitelists will be given to our community members via #giveaway Discord Channel, in our <span className="bright"> Discord Server </span>.
              </p>
              <p className="body">
                Our NFTs will be minted on <span className="bright"> Immutable X </span>, the first Layer 2 for NFTs on Ethereum. Experience <span className="bright"> zero gas fees, instant trades </span>, and 
                <span className="bright"> carbon neutral NFTs </span> for our game.
              </p>

              <div style={{textAlign:'center', marginBottom:'30px'}}>
                <img src="img/immutable.png" className="social-icon"/>
              </div>

              <div>
                <img src="img/border.png" style={{width:'100%'}} />
              </div>

          </div>
        </div>
    </div>
  );
};
