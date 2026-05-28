import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
import { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';

export const CdmProductTemplateEconomicTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EconomicTerms']
  )(
    z.object({
      calculationAgent: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetCalculationAgentSchema)
        .optional(),
      collateral: z
        .lazy((): z.ZodTypeAny => CdmProductCollateralCollateralSchema)
        .optional(),
      dateAdjustments: z
        .lazy((): z.ZodTypeAny => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: z.string().optional(),
      effectiveDate: z
        .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      name: z.string().optional(),
      nonStandardisedTerms: z.boolean().optional(),
      payout: z
        .array(z.lazy((): z.ZodTypeAny => CdmProductTemplatePayoutSchema))
        .min(1)
        .optional(),
      terminationDate: z
        .lazy((): z.ZodTypeAny => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      terminationProvision: z
        .lazy((): z.ZodTypeAny => CdmProductTemplateTerminationProvisionSchema)
        .optional(),
    })
  );

export type CdmProductTemplateEconomicTerms = z.infer<
  typeof CdmProductTemplateEconomicTermsSchema
>;
