import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';

export const CdmLegaldocumentationCommonClosedStateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ClosedState']
  )(
    z.object({
      activityDate: z.string(),
      description: z.string().optional(),
      effectiveDate: z.string().optional(),
      lastPaymentDate: z.string().optional(),
      name: z.string().optional(),
      state: z.lazy(() => CdmLegaldocumentationCommonClosedStateEnumSchema),
    })
  );

export type CdmLegaldocumentationCommonClosedState = z.infer<
  typeof CdmLegaldocumentationCommonClosedStateSchema
>;
