import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';

const zod = z as any;

export const CdmProductTemplateOptionalEarlyTerminationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/OptionalEarlyTermination']
  )(
    zod.object({
      calculationAgent: zod
        .lazy(() => CdmObservableAssetCalculationAgentSchema)
        .optional(),
      cashSettlement: zod
        .lazy(() => CdmProductCommonSettlementSettlementTermsSchema)
        .optional(),
      description: zod.string().optional(),
      exerciseNotice: zod
        .array(zod.lazy(() => CdmProductTemplateExerciseNoticeSchema))
        .min(0)
        .optional(),
      exerciseTerms: zod.lazy(() => CdmProductTemplateExerciseTermsSchema),
      followUpConfirmation: zod.boolean().optional(),
      mutualEarlyTermination: zod.boolean().optional(),
      name: zod.string().optional(),
      optionalEarlyTerminationAdjustedDates: zod
        .lazy(
          () => CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema
        )
        .optional(),
      singlePartyOption: zod
        .lazy(() => CdmBaseStaticdataPartyBuyerSellerSchema)
        .optional(),
    })
  );

export type CdmProductTemplateOptionalEarlyTermination = z.infer<
  typeof CdmProductTemplateOptionalEarlyTerminationSchema
>;
