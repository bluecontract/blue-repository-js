import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';

export const CdmLegaldocumentationMasterMasterAgreementScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementSchedule'
    ]
  )(
    z.object({
      clause: z
        .array(
          z.lazy(() => CdmLegaldocumentationMasterMasterAgreementClauseSchema)
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterMasterAgreementSchedule = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementScheduleSchema
>;
