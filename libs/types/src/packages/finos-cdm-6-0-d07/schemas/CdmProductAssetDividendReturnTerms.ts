import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmProductAssetDividendAmountTypeEnumSchema } from './CdmProductAssetDividendAmountTypeEnum';
import { CdmProductAssetDividendCompositionEnumSchema } from './CdmProductAssetDividendCompositionEnum';
import { CdmProductAssetDividendCurrencySchema } from './CdmProductAssetDividendCurrency';
import { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
import { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';
import { CdmProductAssetDividendPeriodSchema } from './CdmProductAssetDividendPeriod';
import { CdmProductAssetDividendPeriodEnumSchema } from './CdmProductAssetDividendPeriodEnum';
import { CdmProductAssetNonCashDividendTreatmentEnumSchema } from './CdmProductAssetNonCashDividendTreatmentEnum';

const zod = z as any;

export const CdmProductAssetDividendReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendReturnTerms']
)(
  zod.object({
    description: zod.string().optional(),
    dividendAmountType: zod
      .lazy(() => CdmProductAssetDividendAmountTypeEnumSchema)
      .optional(),
    dividendComposition: zod
      .lazy(() => CdmProductAssetDividendCompositionEnumSchema)
      .optional(),
    dividendCurrency: zod
      .lazy(() => CdmProductAssetDividendCurrencySchema)
      .optional(),
    dividendEntitlement: zod
      .lazy(() => CdmProductAssetDividendEntitlementEnumSchema)
      .optional(),
    dividendPayoutRatio: zod
      .array(zod.lazy(() => CdmProductAssetDividendPayoutRatioSchema))
      .min(0)
      .optional(),
    dividendPeriod: zod
      .array(zod.lazy(() => CdmProductAssetDividendPeriodSchema))
      .min(0)
      .optional(),
    dividendReinvestment: zod.boolean().optional(),
    excessDividendAmount: zod
      .lazy(() => CdmProductAssetDividendAmountTypeEnumSchema)
      .optional(),
    extraordinaryDividendsParty: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
      .optional(),
    firstOrSecondPeriod: zod
      .lazy(() => CdmProductAssetDividendPeriodEnumSchema)
      .optional(),
    materialDividend: zod.boolean().optional(),
    name: zod.string().optional(),
    nonCashDividendTreatment: zod
      .lazy(() => CdmProductAssetNonCashDividendTreatmentEnumSchema)
      .optional(),
    performance: zod.string().optional(),
    specialDividends: zod.boolean().optional(),
  })
);

export type CdmProductAssetDividendReturnTerms = z.infer<
  typeof CdmProductAssetDividendReturnTermsSchema
>;
