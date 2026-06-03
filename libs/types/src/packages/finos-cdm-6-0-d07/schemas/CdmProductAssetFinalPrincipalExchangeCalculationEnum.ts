import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FinalPrincipalExchangeCalculationEnum'
    ]
  )(
    zod.enum(['Floored', 'NonFloored'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetFinalPrincipalExchangeCalculationEnum = z.infer<
  typeof CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema
>;
