import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';

const zod = z as any;

export const CdmEventCommonStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/State']
)(
  zod.object({
    closedState: zod
      .lazy(() => CdmLegaldocumentationCommonClosedStateSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    positionState: zod
      .lazy(() => CdmEventPositionPositionStatusEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonState = z.infer<typeof CdmEventCommonStateSchema>;
