import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
import { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
import { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';

const zod = z as any;

export const CdmProductTemplateEarlyTerminationProvisionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EarlyTerminationProvision']
  )(
    zod.object({
      description: zod.string().optional(),
      mandatoryEarlyTermination: zod
        .lazy(() => CdmProductTemplateMandatoryEarlyTerminationSchema)
        .optional(),
      mandatoryEarlyTerminationDateTenor: zod
        .lazy(() => CdmBaseDatetimePeriodSchema)
        .optional(),
      name: zod.string().optional(),
      optionalEarlyTermination: zod
        .lazy(() => CdmProductTemplateOptionalEarlyTerminationSchema)
        .optional(),
      optionalEarlyTerminationParameters: zod
        .lazy(() => CdmProductTemplateExercisePeriodSchema)
        .optional(),
    })
  );

export type CdmProductTemplateEarlyTerminationProvision = z.infer<
  typeof CdmProductTemplateEarlyTerminationProvisionSchema
>;
