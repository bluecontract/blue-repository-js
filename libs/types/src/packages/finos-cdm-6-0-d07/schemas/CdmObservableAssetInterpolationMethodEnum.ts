import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetInterpolationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterpolationMethodEnum']
  )(
    zod.enum(['Linear', 'LinearZeroYield', 'None'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetInterpolationMethodEnum = z.infer<
  typeof CdmObservableAssetInterpolationMethodEnumSchema
>;
