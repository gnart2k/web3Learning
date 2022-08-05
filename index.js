const Web3 = require('web3');

const customProvider = {
    sendAsync: (payload, cb)=>{
        console.log('called')
        console.log(payload)
        cb(undefined, 100)
    }
}   

const web3 = new Web3(window.web3.currentProvider)
web3.eth.getBlockNumber().then(()=>console.log("done"))


