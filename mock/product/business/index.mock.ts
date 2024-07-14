import { MockHandler } from 'vite-plugin-mock-server';
import sportMatchSimpleJson from './sport-match-simple.json';
import v2SportPrematchCategoryJson from './v2-sport-prematch-category.json';
import sportPrematchTournamentInfoJson from './sport-prematch-tournamentInfo.json';
import sportOutrightCategoryJson from './sport-outright-category.json';
import sportOutrightMarketJson from './sport-outright-market.json';

const mocks: MockHandler[] = [
  {
    pattern: '/product/business/sport/match/simple',
    handle: (req, res) => {
      res.end(JSON.stringify(sportMatchSimpleJson));
    },
  },
  // 早盤(日期)
  {
    pattern: '/product/business/v2/sport/prematch/category',
    handle: (req, res) => {
      res.end(JSON.stringify(v2SportPrematchCategoryJson));
    },
  },
  // 首頁(聯賽)
  {
    pattern: '/product/business/sport/prematch/tournamentInfo',
    handle: (req, res) => {
      res.end(JSON.stringify(sportPrematchTournamentInfoJson));
    },
  },
  // 冠軍(國家)
  {
    pattern: '/product/business/sport/outright/category',
    handle: (req, res) => {
      res.end(JSON.stringify(sportOutrightCategoryJson));
    },
  },
  // 冠軍(聯賽)
  {
    pattern: '/product/business/sport/outright/market',
    handle: (req, res) => {
      res.end(JSON.stringify(sportOutrightMarketJson));
    },
  },
];

export default mocks;
