import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
import { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';

const zod = z as any;

export const CdmProductCollateralAssetMaturitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/AssetMaturity']
)(
  zod.object({
    maturityRange: zod.lazy(() => CdmBaseDatetimePeriodRangeSchema),
    maturityType: zod.lazy(
      () => CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema
    ),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralAssetMaturity = z.infer<
  typeof CdmProductCollateralAssetMaturitySchema
>;
