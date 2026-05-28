import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';

export const CdmProductTemplateCompositeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Composite']
)(
  z.object({
    description: z.string().optional(),
    determinationMethod: z
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    fixingTime: z
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    fxSpotRateSource: z
      .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
      .optional(),
    name: z.string().optional(),
    relativeDate: z
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
  })
);

export type CdmProductTemplateComposite = z.infer<
  typeof CdmProductTemplateCompositeSchema
>;
