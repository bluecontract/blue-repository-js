import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';

const zod = z as any;

export const CdmLegaldocumentationCommonClosedStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ClosedState']
)(
  zod.object({
    activityDate: zod.string(),
    description: zod.string().optional(),
    effectiveDate: zod.string().optional(),
    lastPaymentDate: zod.string().optional(),
    name: zod.string().optional(),
    state: zod.lazy(() => CdmLegaldocumentationCommonClosedStateEnumSchema),
  })
);

export type CdmLegaldocumentationCommonClosedState = z.infer<
  typeof CdmLegaldocumentationCommonClosedStateSchema
>;
