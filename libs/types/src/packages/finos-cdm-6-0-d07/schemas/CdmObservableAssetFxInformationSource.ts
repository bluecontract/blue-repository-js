import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetFxInformationSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxInformationSource']
  )(
    z.object({
      description: z.string().optional(),
      fixingTime: z
        .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
        .optional(),
      name: z.string().optional(),
      sourcePage: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      sourcePageHeading: z.string().optional(),
      sourceProvider: z
        .lazy(
          () => CdmObservableAssetFieldWithMetaInformationProviderEnumSchema
        )
        .optional(),
    })
  );

export type CdmObservableAssetFxInformationSource = z.infer<
  typeof CdmObservableAssetFxInformationSourceSchema
>;
