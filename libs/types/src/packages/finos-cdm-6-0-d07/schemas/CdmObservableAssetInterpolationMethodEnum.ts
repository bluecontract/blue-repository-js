import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetInterpolationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterpolationMethodEnum']
  )(
    z.enum(['Linear', 'LinearZeroYield', 'None'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetInterpolationMethodEnum = z.infer<
  typeof CdmObservableAssetInterpolationMethodEnumSchema
>;
