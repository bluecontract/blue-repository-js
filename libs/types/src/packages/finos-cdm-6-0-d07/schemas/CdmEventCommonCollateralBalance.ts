import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmEventCommonCollateralBalanceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralBalance']
)(
  zod.object({
    amountBaseCurrency: zod.lazy(() => CdmObservableAssetMoneySchema),
    collateralBalanceStatus: zod
      .lazy(() => CdmEventCommonCollateralStatusEnumSchema)
      .optional(),
    description: zod.string().optional(),
    haircutIndicator: zod
      .lazy(() => CdmEventCommonHaircutIndicatorEnumSchema)
      .optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(
      () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
    ),
  })
);

export type CdmEventCommonCollateralBalance = z.infer<
  typeof CdmEventCommonCollateralBalanceSchema
>;
