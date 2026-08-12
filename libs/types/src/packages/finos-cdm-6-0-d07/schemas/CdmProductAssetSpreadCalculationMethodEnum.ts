import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetSpreadCalculationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SpreadCalculationMethodEnum']
  )(
    zod.enum(['ParPar', 'Proceeds'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetSpreadCalculationMethodEnum = z.infer<
  typeof CdmProductAssetSpreadCalculationMethodEnumSchema
>;
