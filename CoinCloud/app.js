let sidebarOn=document.getElementById("sidebar-on");
let sidebarOff=document.getElementById("sidebar-off");
let sidebar=document.getElementById("sidebar");

let btc =document.getElementById("bitcoin");
let btctime =document.getElementById("btc-t");
let eth =document.getElementById("ethereum");
let ethtime =document.getElementById("eth-t");
let cdn =document.getElementById("cardano");
let cdntime =document.getElementById("cdn-t");
let doge =document.getElementById("dogecoin");
let dogetime =document.getElementById("doge-t");

let btcrow =document.getElementById("btc-r");
let ethrow =document.getElementById("eth-r");
let cdnrow =document.getElementById("cdn-r");
let dogerow =document.getElementById("doge-r");
let thrrow =document.getElementById("thr-r");
let usdrow =document.getElementById("usd-r");

let btcrowch =document.getElementById("btc-ch");
let ethrowch =document.getElementById("eth-ch");
let cdnrowch =document.getElementById("cdn-ch");
let thrrowch =document.getElementById("thr-ch");
let dogerowch =document.getElementById("doge-ch");
let usdrowch =document.getElementById("usd-ch");

let btccap =document.getElementById("btc-cap");
let ethcap =document.getElementById("eth-cap");
let cdncap =document.getElementById("cdn-cap");
let thrcap =document.getElementById("thr-cap");
let dogecap =document.getElementById("doge-cap");
let usdcap =document.getElementById("usd-cap");


sidebarOn.onclick=()=>{
    sidebar.style.display="flex";
}
sidebarOff.onclick=()=>{
    sidebar.style.display="none";
}
 
let settings = {
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Csolana%2Cripple%2Cusd%2Ccardano%2Cdogecoin%2Cpolkadot&vs_currencies=usd&include_market_cap=true&include_24hr_change=true",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerText = response.bitcoin.usd;
    eth.innerText = response.ethereum.usd;
    cdn.innerText = response.cardano.usd;
    doge.innerText = response.dogecoin.usd;
    
    btctime.innerText = (response.bitcoin.usd_24h_change).toFixed(2);
    ethtime.innerText = (response.ethereum.usd_24h_change).toFixed(2);
    cdntime.innerText = (response.cardano.usd_24h_change).toFixed(2);
    dogetime.innerText = (response.dogecoin.usd_24h_change).toFixed(2);
    
    btcrow.innerText = response.bitcoin.usd;
    ethrow.innerText = response.ethereum.usd;
    cdnrow.innerText = response.cardano.usd;
    dogerow.innerText = response.dogecoin.usd;
    thrrow.innerText = response.tether.usd;
    usdrow.innerText = response.usd.usd;
    
    btcrowch.innerText = (response.bitcoin.usd_24h_change).toFixed(2);
    ethrowch.innerText = (response.ethereum.usd_24h_change).toFixed(2);
    cdnrowch.innerText = (response.cardano.usd_24h_change).toFixed(2);
    dogerowch.innerText = (response.dogecoin.usd_24h_change).toFixed(2);
    thrrowch.innerText = (response.tether.usd_24h_change).toFixed(2);
    usdrowch.innerText = (response.usd.usd_24h_change).toFixed(2);
    
    btccap.innerText = response.bitcoin.usd_market_cap;
    ethcap.innerText = response.ethereum.usd_market_cap;
    cdncap.innerText = response.cardano.usd_market_cap;
    thrcap.innerText = response.tether.usd_market_cap;
    usdcap.innerText = response.usd.usd_market_cap;
    dogecap.innerText = response.dogecoin.usd_market_cap;
    
})