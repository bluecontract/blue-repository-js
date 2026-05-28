import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
import { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
import { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
import { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';

export const CdmObservableAssetIndexSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Index']
)(
  z.object({
    CreditIndex: z.lazy(() => CdmObservableAssetCreditIndexSchema).optional(),
    description: z.string().optional(),
    EquityIndex: z.lazy(() => CdmObservableAssetEquityIndexSchema).optional(),
    ForeignExchangeRateIndex: z
      .lazy(() => CdmObservableAssetForeignExchangeRateIndexSchema)
      .optional(),
    InterestRateIndex: z
      .lazy(() => CdmObservableAssetFieldWithMetaInterestRateIndexSchema)
      .optional(),
    name: z.string().optional(),
    OtherIndex: z.lazy(() => CdmObservableAssetOtherIndexSchema).optional(),
  })
);

export type CdmObservableAssetIndex = z.infer<
  typeof CdmObservableAssetIndexSchema
>;
