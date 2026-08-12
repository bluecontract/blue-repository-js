import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
import { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
import { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
import { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';

const zod = z as any;

export const CdmObservableAssetIndexSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Index']
)(
  zod.object({
    CreditIndex: zod.lazy(() => CdmObservableAssetCreditIndexSchema).optional(),
    description: zod.string().optional(),
    EquityIndex: zod.lazy(() => CdmObservableAssetEquityIndexSchema).optional(),
    ForeignExchangeRateIndex: zod
      .lazy(() => CdmObservableAssetForeignExchangeRateIndexSchema)
      .optional(),
    InterestRateIndex: zod
      .lazy(() => CdmObservableAssetFieldWithMetaInterestRateIndexSchema)
      .optional(),
    name: zod.string().optional(),
    OtherIndex: zod.lazy(() => CdmObservableAssetOtherIndexSchema).optional(),
  })
);

export type CdmObservableAssetIndex = z.infer<
  typeof CdmObservableAssetIndexSchema
>;
