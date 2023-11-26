import web3 from './web3';
import CampaigFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaigFactory.interface),
  '0x947085223a1a7b66152c14C182860fbec7A8c296'
);

export default instance;
