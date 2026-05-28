import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';

export const CdmProductTemplateOptionalEarlyTerminationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionalEarlyTermination']
  )(
    z.object({
      calculationAgent: z
        .lazy(() => CdmObservableAssetCalculationAgentSchema)
        .optional(),
      cashSettlement: z
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
      description: z.string().optional(),
      exerciseNotice: z
        .array(z.lazy(() => CdmProductTemplateExerciseNoticeSchema))
        .min(0)
        .optional(),
      exerciseTerms: z.lazy(() => CdmProductTemplateExerciseTermsSchema),
      followUpConfirmation: z.boolean().optional(),
      mutualEarlyTermination: z.boolean().optional(),
      name: z.string().optional(),
      optionalEarlyTerminationAdjustedDates: z
        .lazy(
          () => CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema
        )
        .optional(),
      singlePartyOption: z
        .lazy(() => CdmBaseStaticdataPartyBuyerSellerSchema)
        .optional(),
    })
  );

export type CdmProductTemplateOptionalEarlyTermination = z.infer<
  typeof CdmProductTemplateOptionalEarlyTerminationSchema
>;
