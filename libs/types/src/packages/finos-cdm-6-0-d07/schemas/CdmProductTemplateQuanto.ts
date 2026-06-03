import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';

const zod = z as any;

export const CdmProductTemplateQuantoSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Quanto']
)(
  zod.object({
    description: zod.string().optional(),
    fixingTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    fxRate: zod
      .array(zod.lazy(() => CdmObservableAssetFxRateSchema))
      .min(0)
      .optional(),
    fxSpotRateSource: zod
      .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateQuanto = z.infer<
  typeof CdmProductTemplateQuantoSchema
>;
