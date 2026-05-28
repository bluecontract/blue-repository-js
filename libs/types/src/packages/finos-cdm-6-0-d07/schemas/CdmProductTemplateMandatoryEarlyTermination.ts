import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';

export const CdmProductTemplateMandatoryEarlyTerminationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MandatoryEarlyTermination']
  )(
    z.object({
      calculationAgent: z.lazy(() => CdmObservableAssetCalculationAgentSchema),
      cashSettlement: z.lazy(
        () => CdmProductCommonSettlementSettlementTermsSchema
      ),
      description: z.string().optional(),
      mandatoryEarlyTerminationAdjustedDates: z
        .lazy(
          () => CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema
        )
        .optional(),
      mandatoryEarlyTerminationDate: z.lazy(
        () => CdmBaseDatetimeAdjustableDateSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateMandatoryEarlyTermination = z.infer<
  typeof CdmProductTemplateMandatoryEarlyTerminationSchema
>;
