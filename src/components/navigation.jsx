export const Navigation = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {
  return (
    <nav id='menu' className='navbar navbar-default'>
      <div className='nav-container'>
        <div className='navbar-header'>
          <a className='navbar-brand page-scroll' href='#page-top' style={{padding:'0', marginLeft:'0'}}>
            <img src="img/logo.png" style={{width:'100%'}}  />
          </a>{' '}
        </div>


        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' style={{marginRight:'10px'}}>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <img src="img/web.png" className="social-icon"/>
              <a href='https://metaopsgaming.com' className='social-title'> METAOPSGAMING.COM </a>
            </li>
            <li>
              <img src="img/discord.png" className="social-icon"/>
              <a href='https://discord.gg/FV4eFkcz4n' className='social-title'> DISCORD </a>
            </li>
            <li>
              <img src="img/twitter.png" className="social-icon"/>
              <a href='https://twitter.com/MetaOpsGaming' className='social-title'> TWITTER </a>
            </li>
          </ul>
        </div>
  
        {
          walletAddress ? 
          <div className="connect">
            <button type='submit' className='btn btn-connect btn-lg' onClick={onClickDisconnectWallet}> { walletAddress.slice(0, 11) }... </button>
          </div>
          :
          <div className="connect">
            <button type='submit' className='btn btn-connect btn-lg' onClick={onClickConnectWallet}> CONNECT WALLET </button>
          </div>
        }


      </div>
    </nav>
  )
}
