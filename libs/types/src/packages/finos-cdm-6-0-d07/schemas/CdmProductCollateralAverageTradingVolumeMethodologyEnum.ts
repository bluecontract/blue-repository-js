import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/AverageTradingVolumeMethodologyEnum'
    ]
  )(
    zod.enum(['Consolidated', 'Single'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralAverageTradingVolumeMethodologyEnum = z.infer<
  typeof CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema
>;
