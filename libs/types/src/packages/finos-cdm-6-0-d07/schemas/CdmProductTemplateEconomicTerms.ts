import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
import { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';

const zod = z as any;

export const CdmProductTemplateEconomicTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EconomicTerms']
)(
  zod.object({
    calculationAgent: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetCalculationAgentSchema)
      .optional(),
    collateral: zod
      .lazy((): z.ZodTypeAny => CdmProductCollateralCollateralSchema)
      .optional(),
    dateAdjustments: zod
      .lazy((): z.ZodTypeAny => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
      .optional(),
    description: zod.string().optional(),
    effectiveDate: zod
      .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    name: zod.string().optional(),
    nonStandardisedTerms: zod.boolean().optional(),
    payout: zod
      .array(zod.lazy((): z.ZodTypeAny => CdmProductTemplatePayoutSchema))
      .min(1)
      .optional(),
    terminationDate: zod
      .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    terminationProvision: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateTerminationProvisionSchema)
      .optional(),
  })
);

export type CdmProductTemplateEconomicTerms = z.infer<
  typeof CdmProductTemplateEconomicTermsSchema
>;
