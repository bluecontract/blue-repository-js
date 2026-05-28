import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';

export const CdmEventWorkflowCreditLimitInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitInformation']
  )(
    z.object({
      description: z.string().optional(),
      limitApplicable: z
        .array(z.lazy(() => CdmEventWorkflowLimitApplicableExtendedSchema))
        .min(1)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventWorkflowCreditLimitInformation = z.infer<
  typeof CdmEventWorkflowCreditLimitInformationSchema
>;
