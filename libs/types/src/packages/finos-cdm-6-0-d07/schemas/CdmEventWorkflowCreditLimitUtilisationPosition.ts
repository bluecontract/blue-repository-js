import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowCreditLimitUtilisationPositionSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitUtilisationPosition'
    ]
  )(
    zod.object({
      global: zod.number().optional(),
      longPosition: zod.number().optional(),
      name: zod.string().optional(),
      shortPosition: zod.number().optional(),
    })
  );

export type CdmEventWorkflowCreditLimitUtilisationPosition = z.infer<
  typeof CdmEventWorkflowCreditLimitUtilisationPositionSchema
>;
