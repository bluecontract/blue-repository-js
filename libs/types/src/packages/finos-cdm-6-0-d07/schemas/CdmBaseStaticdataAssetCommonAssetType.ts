import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
import { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
import { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
import { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonAssetTypeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetType']
)(
  zod.object({
    assetType: zod.lazy(() => CdmBaseStaticdataAssetCommonAssetTypeEnumSchema),
    debtType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonDebtTypeSchema)
      .optional(),
    description: zod.string().optional(),
    equityType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonEquityTypeEnumSchema)
      .optional(),
    fundType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema)
      .optional(),
    name: zod.string().optional(),
    otherAssetType: zod.array(zod.string()).min(0).optional(),
    securityType: zod
      .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
      .optional(),
  })
);

export type CdmBaseStaticdataAssetCommonAssetType = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetTypeSchema
>;
