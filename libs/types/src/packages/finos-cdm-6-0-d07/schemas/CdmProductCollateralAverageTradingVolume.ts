import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';

export const CdmProductCollateralAverageTradingVolumeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AverageTradingVolume']
  )(
    z.object({
      description: z.string().optional(),
      methodology: z.lazy(
        () => CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema
      ),
      name: z.string().optional(),
      period: z.lazy(() => CdmBaseDatetimePeriodSchema),
    })
  );

export type CdmProductCollateralAverageTradingVolume = z.infer<
  typeof CdmProductCollateralAverageTradingVolumeSchema
>;
