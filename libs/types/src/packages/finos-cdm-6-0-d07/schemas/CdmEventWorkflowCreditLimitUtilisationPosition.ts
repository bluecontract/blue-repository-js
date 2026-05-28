import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventWorkflowCreditLimitUtilisationPositionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitUtilisationPosition'
    ]
  )(
    z.object({
      global: z.number().optional(),
      longPosition: z.number().optional(),
      name: z.string().optional(),
      shortPosition: z.number().optional(),
    })
  );

export type CdmEventWorkflowCreditLimitUtilisationPosition = z.infer<
  typeof CdmEventWorkflowCreditLimitUtilisationPositionSchema
>;
