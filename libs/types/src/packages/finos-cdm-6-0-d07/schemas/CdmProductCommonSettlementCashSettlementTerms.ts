import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
import { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
import { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';

const zod = z as any;

export const CdmProductCommonSettlementCashSettlementTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/CashSettlementTerms'
    ]
  )(
    zod.object({
      accruedInterest: zod.boolean().optional(),
      cashSettlementAmount: zod
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      cashSettlementMethod: zod
        .lazy(() => CdmProductCommonSettlementCashSettlementMethodEnumSchema)
        .optional(),
      description: zod.string().optional(),
      fixedSettlement: zod.boolean().optional(),
      name: zod.string().optional(),
      recoveryFactor: zod.number().optional(),
      valuationDate: zod
        .lazy(() => CdmProductCommonSettlementValuationDateSchema)
        .optional(),
      valuationMethod: zod
        .lazy(() => CdmObservableAssetValuationMethodSchema)
        .optional(),
      valuationTime: zod
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementCashSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementCashSettlementTermsSchema
>;
