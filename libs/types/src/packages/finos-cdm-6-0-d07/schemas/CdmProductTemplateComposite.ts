import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';

const zod = z as any;

export const CdmProductTemplateCompositeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Composite']
)(
  zod.object({
    description: zod.string().optional(),
    determinationMethod: zod
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    fixingTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    fxSpotRateSource: zod
      .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
      .optional(),
    name: zod.string().optional(),
    relativeDate: zod
      .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
      .optional(),
  })
);

export type CdmProductTemplateComposite = z.infer<
  typeof CdmProductTemplateCompositeSchema
>;
