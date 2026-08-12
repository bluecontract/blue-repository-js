import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';

const zod = z as any;

export const CdmProductCollateralAverageTradingVolumeSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AverageTradingVolume']
  )(
    zod.object({
      description: zod.string().optional(),
      methodology: zod.lazy(
        () => CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema
      ),
      name: zod.string().optional(),
      period: zod.lazy(() => CdmBaseDatetimePeriodSchema),
    })
  );

export type CdmProductCollateralAverageTradingVolume = z.infer<
  typeof CdmProductCollateralAverageTradingVolumeSchema
>;
