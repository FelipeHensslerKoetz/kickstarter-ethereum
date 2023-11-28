import web3 from './web3';
import CampaigFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaigFactory.interface),
  '0xf47A1aE5246FE350fea6B6503999f4847e763fA9'
);

export default instance;
