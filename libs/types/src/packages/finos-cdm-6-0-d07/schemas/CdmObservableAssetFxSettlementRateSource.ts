import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetFxSettlementRateSourceSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxSettlementRateSource']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      nonstandardSettlementRate: zod
        .lazy(() => CdmObservableAssetFxInformationSourceSchema)
        .optional(),
      settlementRateOption: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFxSettlementRateSource = z.infer<
  typeof CdmObservableAssetFxSettlementRateSourceSchema
>;
