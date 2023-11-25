import web3 from './web3';
import CampaigFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaigFactory.interface),
  '0x503c6A5441dc3FD4E4F09A3290D55d50688Cc1a1'
);

export default instance;
