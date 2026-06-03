import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';

const zod = z as any;

export const CdmProductTemplateMandatoryEarlyTerminationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MandatoryEarlyTermination']
  )(
    zod.object({
      calculationAgent: zod.lazy(
        () => CdmObservableAssetCalculationAgentSchema
      ),
      cashSettlement: zod.lazy(
        () => CdmProductCommonSettlementSettlementTermsSchema
      ),
      description: zod.string().optional(),
      mandatoryEarlyTerminationAdjustedDates: zod
        .lazy(
          () => CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema
        )
        .optional(),
      mandatoryEarlyTerminationDate: zod.lazy(
        () => CdmBaseDatetimeAdjustableDateSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmProductTemplateMandatoryEarlyTermination = z.infer<
  typeof CdmProductTemplateMandatoryEarlyTerminationSchema
>;
