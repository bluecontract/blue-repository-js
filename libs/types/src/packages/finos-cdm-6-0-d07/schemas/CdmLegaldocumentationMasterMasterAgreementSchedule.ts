import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterAgreementScheduleSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterAgreementSchedule'
    ]
  )(
    zod.object({
      clause: zod
        .array(
          zod.lazy(() => CdmLegaldocumentationMasterMasterAgreementClauseSchema)
        )
        .min(1)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterMasterAgreementSchedule = z.infer<
  typeof CdmLegaldocumentationMasterMasterAgreementScheduleSchema
>;
