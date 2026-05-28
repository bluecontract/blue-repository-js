import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetSettledEntityMatrixSourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SettledEntityMatrixSourceEnum']
  )(
    z.enum(['ConfirmationAnnex', 'NotApplicable', 'Publisher'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetSettledEntityMatrixSourceEnum = z.infer<
  typeof CdmProductAssetSettledEntityMatrixSourceEnumSchema
>;
