import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
import { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';

export const CdmProductCollateralAssetMaturitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetMaturity']
  )(
    z.object({
      maturityRange: z.lazy(() => CdmBaseDatetimePeriodRangeSchema),
      maturityType: z.lazy(
        () => CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralAssetMaturity = z.infer<
  typeof CdmProductCollateralAssetMaturitySchema
>;
