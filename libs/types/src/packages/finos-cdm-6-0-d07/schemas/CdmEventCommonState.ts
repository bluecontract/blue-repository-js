import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';

export const CdmEventCommonStateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/State']
)(
  z.object({
    closedState: z
      .lazy(() => CdmLegaldocumentationCommonClosedStateSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    positionState: z
      .lazy(() => CdmEventPositionPositionStatusEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonState = z.infer<typeof CdmEventCommonStateSchema>;
