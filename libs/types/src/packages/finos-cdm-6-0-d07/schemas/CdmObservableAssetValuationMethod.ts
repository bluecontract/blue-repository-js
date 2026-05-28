import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
import { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
import { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';

export const CdmObservableAssetValuationMethodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationMethod']
  )(
    z.object({
      cashCollateralValuationMethod: z
        .lazy(() => CdmObservableAssetCashCollateralValuationMethodSchema)
        .optional(),
      description: z.string().optional(),
      minimumQuotationAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      name: z.string().optional(),
      quotationAmount: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      quotationMethod: z
        .lazy(() => CdmObservableAssetQuotationRateTypeEnumSchema)
        .optional(),
      valuationMethod: z
        .lazy(() => CdmObservableAssetValuationMethodEnumSchema)
        .optional(),
      valuationSource: z.lazy(() => CdmObservableAssetValuationSourceSchema),
    })
  );

export type CdmObservableAssetValuationMethod = z.infer<
  typeof CdmObservableAssetValuationMethodSchema
>;
