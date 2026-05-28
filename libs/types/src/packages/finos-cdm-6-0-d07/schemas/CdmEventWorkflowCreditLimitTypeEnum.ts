import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventWorkflowCreditLimitTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CreditLimitTypeEnum']
  )(
    z.enum(['CS01', 'DV01', 'IM', 'NPV', 'Notional', 'PV01'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventWorkflowCreditLimitTypeEnum = z.infer<
  typeof CdmEventWorkflowCreditLimitTypeEnumSchema
>;
