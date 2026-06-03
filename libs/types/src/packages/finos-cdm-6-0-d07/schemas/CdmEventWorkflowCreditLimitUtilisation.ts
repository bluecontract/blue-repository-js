import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';

const zod = z as any;

export const CdmEventWorkflowCreditLimitUtilisationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitUtilisation']
)(
  zod.object({
    description: zod.string().optional(),
    executed: zod
      .lazy(() => CdmEventWorkflowCreditLimitUtilisationPositionSchema)
      .optional(),
    name: zod.string().optional(),
    pending: zod
      .lazy(() => CdmEventWorkflowCreditLimitUtilisationPositionSchema)
      .optional(),
  })
);

export type CdmEventWorkflowCreditLimitUtilisation = z.infer<
  typeof CdmEventWorkflowCreditLimitUtilisationSchema
>;
