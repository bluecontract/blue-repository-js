import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
import { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
import { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
import { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';

export const CdmBaseStaticdataAssetCommonAssetTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetType']
  )(
    z.object({
      assetType: z.lazy(() => CdmBaseStaticdataAssetCommonAssetTypeEnumSchema),
      debtType: z
        .lazy(() => CdmBaseStaticdataAssetCommonDebtTypeSchema)
        .optional(),
      description: z.string().optional(),
      equityType: z
        .lazy(() => CdmBaseStaticdataAssetCommonEquityTypeEnumSchema)
        .optional(),
      fundType: z
        .lazy(() => CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
      otherAssetType: z.array(z.string()).min(0).optional(),
      securityType: z
        .lazy(() => CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonAssetType = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetTypeSchema
>;
