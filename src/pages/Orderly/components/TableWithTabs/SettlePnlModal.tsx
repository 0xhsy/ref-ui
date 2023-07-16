import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import { useIntl } from 'react-intl';
import {
  digitWrapper,
} from '../../utiles';
import { usePerpData } from '../UserBoardPerp/state';
import { ButtonTextWrapper } from '../../../../components/button/Button';

export default function SettlePnlModal(
  props: Modal.Props & {
    onClick: () => Promise<any>;
  }
) {
  const {
    onRequestClose,
    onClick,
  } = props;

  const {
    unsettle
  } = usePerpData();

  const [loading, setLoading] = useState<boolean>(false);
  
  const intl = useIntl();
  return (
    <Modal
      {...props}
      style={{
        content: {
          zIndex: 999,
        },
      }}
    >
      <div
        className={`rounded-2xl lg:w-96 xs:w-95vw border border-gradientFrom border-opacity-30 bg-boxBorder text-sm text-primaryOrderly`}
      >
        <div className="px-5 py-6 flex flex-col ">
          <div className="flex items-center pb-6 justify-between">
            <span className="text-white text-lg font-bold">
              {intl.formatMessage({
                id: 'settle_pnl',
                defaultMessage: 'Settle PnL',
              })}
            </span>

            <span
              className="cursor-pointer "
              onClick={(e: any) => {
                onRequestClose && onRequestClose(e);
              }}
            >
              <IoClose size={20} />
            </span>
          </div>

          <div className="flex items-center mb-5 justify-between">
            <span className="text-sm">
              {intl.formatMessage({
                id: 'settle_pnl_tips',
                defaultMessage: 'By doing this, we’ll move your profit or loss from perp markets into the USDC token balance. This has no impact on your open positions or health.',
              })}
            </span>
          </div>

          <div className="flex items-center mb-5 justify-between">
            <span className="text-white">
              {intl.formatMessage({
                id: 'total_unsettled_pnl',
                defaultMessage: 'Total unsettled PnL',
              })}:
            </span>

            <span className="flex items-center">
              <span className=" mr-2 text-buyGreen gotham_bold">
                {digitWrapper(unsettle.toString(), 3)}
              </span>
              USDC
            </span>
          </div>

          <button
            className={`rounded-lg gotham_bold ${
              loading
                ? 'opacity-70 cursor-not-allowed bg-buttonGradientBgOpacity'
                : ''
            } flex items-center justify-center py-1 bg-buttonGradientBg hover:bg-buttonGradientBgOpacity text-base text-white font-bold`}
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();

              setLoading(true);
              onClick().then(() => {
                setLoading(false);
                onRequestClose && onRequestClose(e);
              });
            }}
            disabled={loading}
          >
            <ButtonTextWrapper
              loading={loading}
              Text={() => {
                return (
                  <span>
                    {' '}
                    {intl.formatMessage({
                      id: 'settle',
                      defaultMessage: 'Settle',
                    })}
                  </span>
                );
              }}
            />
          </button>
        </div>
      </div>
    </Modal>
  );
}
