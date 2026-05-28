import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
import { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
import { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';

export const CdmProductCommonSettlementCashSettlementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/CashSettlementTerms'
    ]
  )(
    z.object({
      accruedInterest: z.boolean().optional(),
      cashSettlementAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      cashSettlementMethod: z
        .lazy(() => CdmProductCommonSettlementCashSettlementMethodEnumSchema)
        .optional(),
      description: z.string().optional(),
      fixedSettlement: z.boolean().optional(),
      name: z.string().optional(),
      recoveryFactor: z.number().optional(),
      valuationDate: z
        .lazy(() => CdmProductCommonSettlementValuationDateSchema)
        .optional(),
      valuationMethod: z
        .lazy(() => CdmObservableAssetValuationMethodSchema)
        .optional(),
      valuationTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementCashSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementCashSettlementTermsSchema
>;
