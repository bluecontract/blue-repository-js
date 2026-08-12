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

const zod = z as any;

export const CdmProductTemplatePayoutSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Payout']
)(
  zod.object({
    AssetPayout: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateAssetPayoutSchema)
      .optional(),
    CommodityPayout: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetCommodityPayoutSchema)
      .optional(),
    CreditDefaultPayout: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetCreditDefaultPayoutSchema)
      .optional(),
    description: zod.string().optional(),
    FixedPricePayout: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateFixedPricePayoutSchema)
      .optional(),
    InterestRatePayout: zod
      .lazy((): z.ZodTypeAny => CdmProductAssetInterestRatePayoutSchema)
      .optional(),
    name: zod.string().optional(),
    OptionPayout: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateOptionPayoutSchema)
      .optional(),
    PerformancePayout: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplatePerformancePayoutSchema)
      .optional(),
    SettlementPayout: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateSettlementPayoutSchema)
      .optional(),
  })
);

export type CdmProductTemplatePayout = z.infer<
  typeof CdmProductTemplatePayoutSchema
>;
