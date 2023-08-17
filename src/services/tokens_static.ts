const main_tokens = {
  'wrap.near': 'NEAR',
  'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near': 'USDC.e',
  'dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near': 'USDT.e',
  '6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near': 'DAI',
  'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near': 'WETH',
  '111111111117dc0aa78b770fa6a738034120c302.factory.bridge.near': '1INCH',
  'c944e90c64b2c07662a292be6244bdf05cda44a7.factory.bridge.near': 'GRT',
  'usdt.tether-token.near': 'USDt',
  'berryclub.ek.near': 'BANANA',
  'farm.berryclub.ek.near': 'CUCUMBER',
  '6f259637dcd74c767781e37bc6133cd6a68aa161.factory.bridge.near': 'HT',
  'de30da39c46104798bb5aa3fe8b9e0e1f348163f.factory.bridge.near': 'GTC',
  '1f9840a85d5af5bf1d1762f925bdaddc4201f984.factory.bridge.near': 'UNI',
  '2260fac5e5542a773aa44fbcfedf7c193bc2c599.factory.bridge.near': 'WBTC',
  '514910771af9ca656af840dff83e8264ecf986ca.factory.bridge.near': 'LINK',
  'f5cfbc74057c610c8ef151a439252680ac68c6dc.factory.bridge.near': 'OCT',
  'token.v2.ref-finance.near': 'REF',
  'd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.factory.bridge.near': 'HAPI',
  'token.paras.near': 'PARAS',
  'a4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016.factory.bridge.near': '1MIL',
  'marmaj.tkn.near': 'marmaj',
  'meta-pool.near': 'STNEAR',
  'token.cheddar.near': 'Cheddar',
  '52a047ee205701895ee06a375492490ec9c597ce.factory.bridge.near': 'PULSE',
  aurora: 'ETH',
  'pixeltoken.near': 'PXT',
  'dbio.near': 'DBIO',
  'aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near': 'AURORA',
  'meta-token.near': '$META',
  'v1.dacha-finance.near': 'POTATO',
  '3ea8ea4237344c9931214796d9417af1a1180770.factory.bridge.near': 'FLX',
  'e99de844ef3ef72806cf006224ef3b813e82662f.factory.bridge.near': 'UMINT',
  'v3.oin_finance.near': 'nUSDO',
  '9aeb50f542050172359a0e1a25a9933bc8c01259.factory.bridge.near': 'OIN',
  'myriadcore.near': 'MYRIA',
  'xtoken.ref-finance.near': 'xREF',
  'sol.token.a11bd.near': 'SOL',
  'ust.token.a11bd.near': 'UST',
  'luna.token.a11bd.near': 'LUNA',
  'celo.token.a11bd.near': 'CELO',
  'cusd.token.a11bd.near': 'cUSD',
  'abr.a11bd.near': 'ABR',
  'utopia.secretskelliessociety.near': 'UTO',
  'deip-token.near': 'DEIP',
  '4691937a7508860f876c9c0a2a617e7d9e945d4b.factory.bridge.near': 'WOO',
  'linear-protocol.near': 'LINEAR',
  usn: 'USN',
  '0316eb71485b0ab14103307bf65a021042c6d380.factory.bridge.near': 'HBTC',
  'token.pembrock.near': 'PEM',
  'atocha-token.near': 'ATO',
  'token.stlb.near': 'SEAT',
  'far.tokens.fewandfar.near': 'FAR',
  '059a1f1dea1020297588c316ffc30a58a1a0d4a2.factory.bridge.near': 'BSTN',
  'token.burrow.near': 'BRRR',
  'fusotao-token.near': 'TAO',
  'v2-nearx.stader-labs.near': 'NearX',
  'discovol-token.near': 'DISC',
  '30d20208d987713f46dfd34ef128bb16c404d10f.factory.bridge.near': 'SD',
  'token.sweat': 'SWEAT',
  'apys.token.a11bd.near': 'APYS',
  'ftv2.nekotoken.near': 'NEKO',
  'phoenix-bonds.near': 'pNEAR',
};
const dev_tokens = {
  'wrap.testnet': 'NEAR',
  'banana.ft-fin.testnet': 'BANANA',
  'ndai.ft-fin.testnet': 'nDAI',
  'nusdt.ft-fin.testnet': 'nUSDT',
  'rft.tokenfactory.testnet': 'RFT',
  'usdc.fakes.testnet': 'USDC',
  'usdt.fakes.testnet': 'USDT.e',
  'dai.fakes.testnet': 'DAI',
  'weth.fakes.testnet': 'WETH',
  'willa.fakes.testnet': 'WLT',
  'ref.fakes.testnet': 'REF',
  'hapi.fakes.testnet': 'HAPI',
  'dbio.fakes.testnet': 'DBIO',
  'eth.fakes.testnet': 'ETH',
  'aurora.fakes.testnet': 'AURORA',
  'usdn.testnet': 'USN',
  aurora: 'ETH',
  'hbtc.fakes.testnet': 'HBTC',
  'cusd.fakes.testnet': 'cUSD',
  'usdtt.fakes.testnet': 'USDt',
  'linear-protocol.testnet': 'LINEAR',
  'dev-20220623151446-29039416013661': 'refLove',
  'wbtc.fakes.testnet': 'WBTC',
  'stnear.fakes.testnet': 'STNEAR',
  'v2-nearx.staderlabs.testnet': 'NearX',
  'meta-v2.pool.testnet': 'STNEAR',
  'phoenix-bonds.testnet': 'pNEAR',
};
const testnet_tokens = {
  'wrap.testnet': 'NEAR',
  'banana.ft-fin.testnet': 'BANANA',
  'nusdc.ft-fin.testnet': 'nUSDC',
  'nusdt.ft-fin.testnet': 'nUSDT',
  'rft.tokenfactory.testnet': 'RFT',
  'usdc.fakes.testnet': 'USDC',
  'usdt.fakes.testnet': 'USDT.e',
  'dai.fakes.testnet': 'DAI',
  'weth.fakes.testnet': 'WETH',
  'hapi.fakes.testnet': 'HAPI',
  'paras.fakes.testnet': 'PARAS',
  'ref.fakes.testnet': 'REF',
  'tiptoken.testnet': 'TT',
  'eth.fakes.testnet': 'ETH',
  'aurora.fakes.testnet': 'AURORA',
  'xcorn.v1.corndao.testnet': 'xCORN',
  'pulse.fakes.testnet': 'PULSE',
  'v2-nearx.staderlabs.testnet': 'NearX',
  'splitfund-3-d7ce.factory.splitfund.testnet': 'SF3',
  'gem.thegame.testnet': 'gGEM',
  'gold.thegame.testnet': 'gGOLD',
  'elixir.thegame.testnet': 'gELXR',
  'usdn.testnet': 'USN',
  'lnc.factory.tokenhub.testnet': 'LNC',
  'wbtc.fakes.testnet': 'WBTC',
  'hbtc.fakes.testnet': 'HBTC',
  'cusd.fakes.testnet': 'cUSD',
  'linear-protocol.testnet': 'LINEAR',
  'meta-v2.pool.testnet': 'STNEAR',
  'skyward.fakes.testnet': 'SKYWARD',
  'v010.refve.testnet': 'refLove',
  aurora: 'ETH',
  'usdt.itachicara.testnet': 'USDT',
  'usdc.itachicara.testnet': 'USDC',
  'corn.corndao.testnet': 'CORN',
  'xcorn.corndao.testnet': 'xCORN',
  'stnear.testnet': 'stnear',
  'dbio.fakes.testnet': 'DBIO',
  'oct.fakes.testnet': 'OCT',
  'toptoken.testnet': 'toptoken',
  'phoenix-bonds.testnet': 'pNEAR',
  'usdt.develop.v1.omomo-finance.testnet': 'USDT',
  'wnear.develop.v1.omomo-finance.testnet': 'WNEAR',
};

export function getTokens() {
  const env: string = process.env.NEAR_ENV;
  if (env == 'testnet') return dev_tokens;
  if (env == 'pub-testnet') return testnet_tokens;
  return main_tokens;
}
