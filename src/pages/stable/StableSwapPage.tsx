import React, { useEffect, useState } from 'react';
import Loading from '~components/layout/Loading';
import {
  useTokenBalances,
  useWhitelistStableTokens,
  useWhitelistTokens,
} from '../../state/token';
import SquareRadio from '~components/radio/SquareRadio';
import StableSwap from '~components/stableswap/StableSwap';
import AddLiquidityComponent from '~components/stableswap/AddLiquidity';
import { usePool, useStablePool } from '~state/pool';
import { isMobile } from '~utils/device';
import { RemoveLiquidityComponent } from '~components/stableswap/RemoveLiquidity';
import TokenReserves from '~components/stableswap/TokenReserves';
import { FaAngleUp, FaAngleDown, FaExchangeAlt } from 'react-icons/fa';
import getConfig from '~services/config';
import { StableSwapLogo } from '~components/icon/StableSwap';
import { useWalletTokenBalances } from '../../state/token';
import { useLocation } from 'react-router-dom';
import {
  SharesCard,
  StableTokens,
} from '../../components/stableswap/CommonComp';
import { TokenMetadata } from '../../services/ft-contract';
import { useFarmStake } from '../../state/farm';
import {
  BackToStablePoolList,
  Images,
} from '~components/stableswap/CommonComp';
import BigNumber from 'bignumber.js';
import { getStablePoolFromCache, Pool, StablePool } from '../../services/pool';
export const DEFAULT_ACTIONS = ['add_liquidity', 'remove_liquidity'];
const STABLE_TOKENS = ['USDT', 'USDC', 'DAI'];
const STABLE_POOL_ID = getConfig().STABLE_POOL_ID;
export const REF_STABLE_SWAP_TAB_KEY = 'REF_STABLE_SWAP_TAB_VALUE';

interface LocationTypes {
  stableTab?: string;
  shares?: string;
  stakeList?: Record<string, string>;
  farmStake?: string | number;
  pool?: Pool;
}

function StableSwapPage() {
  const { state } = useLocation<LocationTypes>();

  const stableTab = state?.stableTab;

  const [actionName, setAction] = useState<string>(
    stableTab ||
      DEFAULT_ACTIONS.includes(localStorage.getItem(REF_STABLE_SWAP_TAB_KEY))
      ? localStorage.getItem(REF_STABLE_SWAP_TAB_KEY)
      : false || DEFAULT_ACTIONS[0]
  );

  console.log(actionName, localStorage.getItem(REF_STABLE_SWAP_TAB_KEY));

  const { pool, shares, stakeList } = state?.pool
    ? state
    : usePool(STABLE_POOL_ID);

  const farmStake =
    state?.farmStake ||
    useFarmStake({
      poolId: Number(STABLE_POOL_ID),
      stakeList,
    });
  const userTotalShare = BigNumber.sum(shares, farmStake);

  const [stablePool, setStablePool] = useState<StablePool>();

  useEffect(() => {
    getStablePoolFromCache(STABLE_POOL_ID.toString()).then((res) => {
      setStablePool(res[1]);
    });
  }, []);

  const allTokens = useWhitelistStableTokens();
  const tokens =
    allTokens &&
    allTokens.length > 0 &&
    allTokens.filter((item) => STABLE_TOKENS.indexOf(item.symbol) > -1);

  const nearBalances = useWalletTokenBalances(
    tokens?.map((token) => token.id) || []
  );

  const changeAction = (actionName: string) => {
    localStorage.setItem(REF_STABLE_SWAP_TAB_KEY, actionName);
    setAction(actionName);
  };

  if (
    !allTokens ||
    !pool ||
    !shares ||
    !stablePool ||
    !Object.entries(nearBalances).length
  )
    return <Loading />;

  const renderModule = (tab: string) => {
    switch (tab) {
      case DEFAULT_ACTIONS[0]:
        return (
          <AddLiquidityComponent
            changeAction={changeAction}
            stablePool={stablePool}
            pool={pool}
            tokens={tokens}
            totalShares={shares}
            stakeList={stakeList}
            balances={nearBalances}
          />
        );
      case DEFAULT_ACTIONS[1]:
        return (
          <RemoveLiquidityComponent
            changeAction={changeAction}
            stablePool={stablePool}
            tokens={tokens}
            shares={shares}
            balances={nearBalances}
            pool={pool}
            stakeList={stakeList}
          />
        );
    }
  };

  return (
    <div className="m-auto lg:w-580px md:w-5/6 xs:w-full xs:p-2">
      {<BackToStablePoolList />}
      {<StableTokens tokens={tokens} />}
      {
        <SharesCard
          shares={shares}
          userTotalShare={userTotalShare}
          stakeList={stakeList}
          pool={pool}
        />
      }
      {renderModule(actionName)}
      {<TokenReserves tokens={tokens} pools={[pool]} forPool hiddenChart />}
    </div>
  );
}

export default StableSwapPage;
