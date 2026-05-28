import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';

export const CdmProductTemplateQuantoSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Quanto']
)(
  z.object({
    description: z.string().optional(),
    fixingTime: z
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    fxRate: z
      .array(z.lazy(() => CdmObservableAssetFxRateSchema))
      .min(0)
      .optional(),
    fxSpotRateSource: z
      .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmProductTemplateQuanto = z.infer<
  typeof CdmProductTemplateQuantoSchema
>;
