import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
import { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
import { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';

export const CdmProductTemplateEarlyTerminationProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EarlyTerminationProvision']
  )(
    z.object({
      description: z.string().optional(),
      mandatoryEarlyTermination: z
        .lazy(() => CdmProductTemplateMandatoryEarlyTerminationSchema)
        .optional(),
      mandatoryEarlyTerminationDateTenor: z
        .lazy(() => CdmBaseDatetimePeriodSchema)
        .optional(),
      name: z.string().optional(),
      optionalEarlyTermination: z
        .lazy(() => CdmProductTemplateOptionalEarlyTerminationSchema)
        .optional(),
      optionalEarlyTerminationParameters: z
        .lazy(() => CdmProductTemplateExercisePeriodSchema)
        .optional(),
    })
  );

export type CdmProductTemplateEarlyTerminationProvision = z.infer<
  typeof CdmProductTemplateEarlyTerminationProvisionSchema
>;
