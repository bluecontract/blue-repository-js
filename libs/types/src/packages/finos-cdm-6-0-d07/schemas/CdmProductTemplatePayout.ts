import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetCommodityPayoutSchema } from './CdmProductAssetCommodityPayout';
import { CdmProductAssetCreditDefaultPayoutSchema } from './CdmProductAssetCreditDefaultPayout';
import { CdmProductAssetInterestRatePayoutSchema } from './CdmProductAssetInterestRatePayout';
import { CdmProductTemplateAssetPayoutSchema } from './CdmProductTemplateAssetPayout';
import { CdmProductTemplateFixedPricePayoutSchema } from './CdmProductTemplateFixedPricePayout';
import { CdmProductTemplateOptionPayoutSchema } from './CdmProductTemplateOptionPayout';
import { CdmProductTemplatePerformancePayoutSchema } from './CdmProductTemplatePerformancePayout';
import { CdmProductTemplateSettlementPayoutSchema } from './CdmProductTemplateSettlementPayout';

export const CdmProductTemplatePayoutSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Payout']
)(
  z.object({
    AssetPayout: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateAssetPayoutSchema)
      .optional(),
    CommodityPayout: z
      .lazy((): z.ZodTypeAny => CdmProductAssetCommodityPayoutSchema)
      .optional(),
    CreditDefaultPayout: z
      .lazy((): z.ZodTypeAny => CdmProductAssetCreditDefaultPayoutSchema)
      .optional(),
    description: z.string().optional(),
    FixedPricePayout: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateFixedPricePayoutSchema)
      .optional(),
    InterestRatePayout: z
      .lazy((): z.ZodTypeAny => CdmProductAssetInterestRatePayoutSchema)
      .optional(),
    name: z.string().optional(),
    OptionPayout: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateOptionPayoutSchema)
      .optional(),
    PerformancePayout: z
      .lazy((): z.ZodTypeAny => CdmProductTemplatePerformancePayoutSchema)
      .optional(),
    SettlementPayout: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateSettlementPayoutSchema)
      .optional(),
  })
);

export type CdmProductTemplatePayout = z.infer<
  typeof CdmProductTemplatePayoutSchema
>;
