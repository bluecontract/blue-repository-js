import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetCreditSeniorityEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CreditSeniorityEnum']
  )(
    z.enum([
      'Other',
      'SeniorLossAbsorbingCapacity',
      'SeniorSec',
      'SeniorUnSec',
      'SubLowerTier2',
      'SubTier1',
      'SubTier3',
      'SubUpperTier2',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetCreditSeniorityEnum = z.infer<
  typeof CdmProductAssetCreditSeniorityEnumSchema
>;
