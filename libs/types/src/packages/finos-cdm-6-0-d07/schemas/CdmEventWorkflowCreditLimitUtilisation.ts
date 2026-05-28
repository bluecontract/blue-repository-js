import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';

export const CdmEventWorkflowCreditLimitUtilisationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitUtilisation']
  )(
    z.object({
      description: z.string().optional(),
      executed: z
        .lazy(() => CdmEventWorkflowCreditLimitUtilisationPositionSchema)
        .optional(),
      name: z.string().optional(),
      pending: z
        .lazy(() => CdmEventWorkflowCreditLimitUtilisationPositionSchema)
        .optional(),
    })
  );

export type CdmEventWorkflowCreditLimitUtilisation = z.infer<
  typeof CdmEventWorkflowCreditLimitUtilisationSchema
>;
