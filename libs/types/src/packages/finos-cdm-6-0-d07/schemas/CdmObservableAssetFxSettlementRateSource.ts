import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetFxSettlementRateSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxSettlementRateSource']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      nonstandardSettlementRate: z
        .lazy(() => CdmObservableAssetFxInformationSourceSchema)
        .optional(),
      settlementRateOption: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFxSettlementRateSource = z.infer<
  typeof CdmObservableAssetFxSettlementRateSourceSchema
>;
