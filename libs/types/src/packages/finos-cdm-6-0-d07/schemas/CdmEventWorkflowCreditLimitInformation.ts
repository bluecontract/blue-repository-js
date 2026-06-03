import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';

const zod = z as any;

export const CdmEventWorkflowCreditLimitInformationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitInformation']
)(
  zod.object({
    description: zod.string().optional(),
    limitApplicable: zod
      .array(zod.lazy(() => CdmEventWorkflowLimitApplicableExtendedSchema))
      .min(1)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventWorkflowCreditLimitInformation = z.infer<
  typeof CdmEventWorkflowCreditLimitInformationSchema
>;
