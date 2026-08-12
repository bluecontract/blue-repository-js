import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
import { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
import { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';

const zod = z as any;

export const CdmObservableAssetValuationMethodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationMethod']
)(
  zod.object({
    cashCollateralValuationMethod: zod
      .lazy(() => CdmObservableAssetCashCollateralValuationMethodSchema)
      .optional(),
    description: zod.string().optional(),
    minimumQuotationAmount: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
    name: zod.string().optional(),
    quotationAmount: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    quotationMethod: zod
      .lazy(() => CdmObservableAssetQuotationRateTypeEnumSchema)
      .optional(),
    valuationMethod: zod
      .lazy(() => CdmObservableAssetValuationMethodEnumSchema)
      .optional(),
    valuationSource: zod.lazy(() => CdmObservableAssetValuationSourceSchema),
  })
);

export type CdmObservableAssetValuationMethod = z.infer<
  typeof CdmObservableAssetValuationMethodSchema
>;
