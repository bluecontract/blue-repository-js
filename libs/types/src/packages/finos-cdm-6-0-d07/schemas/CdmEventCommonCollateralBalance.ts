import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmEventCommonCollateralBalanceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralBalance']
  )(
    z.object({
      amountBaseCurrency: z.lazy(() => CdmObservableAssetMoneySchema),
      collateralBalanceStatus: z
        .lazy(() => CdmEventCommonCollateralStatusEnumSchema)
        .optional(),
      description: z.string().optional(),
      haircutIndicator: z
        .lazy(() => CdmEventCommonHaircutIndicatorEnumSchema)
        .optional(),
      name: z.string().optional(),
      payerReceiver: z.lazy(
        () => CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema
      ),
    })
  );

export type CdmEventCommonCollateralBalance = z.infer<
  typeof CdmEventCommonCollateralBalanceSchema
>;
