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

export const CdmProductAssetDividendReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendReturnTerms']
  )(
    z.object({
      description: z.string().optional(),
      dividendAmountType: z
        .lazy(() => CdmProductAssetDividendAmountTypeEnumSchema)
        .optional(),
      dividendComposition: z
        .lazy(() => CdmProductAssetDividendCompositionEnumSchema)
        .optional(),
      dividendCurrency: z
        .lazy(() => CdmProductAssetDividendCurrencySchema)
        .optional(),
      dividendEntitlement: z
        .lazy(() => CdmProductAssetDividendEntitlementEnumSchema)
        .optional(),
      dividendPayoutRatio: z
        .array(z.lazy(() => CdmProductAssetDividendPayoutRatioSchema))
        .min(0)
        .optional(),
      dividendPeriod: z
        .array(z.lazy(() => CdmProductAssetDividendPeriodSchema))
        .min(0)
        .optional(),
      dividendReinvestment: z.boolean().optional(),
      excessDividendAmount: z
        .lazy(() => CdmProductAssetDividendAmountTypeEnumSchema)
        .optional(),
      extraordinaryDividendsParty: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      firstOrSecondPeriod: z
        .lazy(() => CdmProductAssetDividendPeriodEnumSchema)
        .optional(),
      materialDividend: z.boolean().optional(),
      name: z.string().optional(),
      nonCashDividendTreatment: z
        .lazy(() => CdmProductAssetNonCashDividendTreatmentEnumSchema)
        .optional(),
      performance: z.string().optional(),
      specialDividends: z.boolean().optional(),
    })
  );

export type CdmProductAssetDividendReturnTerms = z.infer<
  typeof CdmProductAssetDividendReturnTermsSchema
>;
