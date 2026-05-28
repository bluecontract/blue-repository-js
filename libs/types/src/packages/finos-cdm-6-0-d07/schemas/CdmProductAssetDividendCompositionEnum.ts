import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetDividendCompositionEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendCompositionEnum']
  )(
    z.enum(['CalculationAgentElection', 'EquityAmountReceiverElection'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetDividendCompositionEnum = z.infer<
  typeof CdmProductAssetDividendCompositionEnumSchema
>;
