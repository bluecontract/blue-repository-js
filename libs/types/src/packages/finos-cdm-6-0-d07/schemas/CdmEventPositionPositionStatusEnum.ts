import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventPositionPositionStatusEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/PositionStatusEnum']
  )(
    z.enum(['Cancelled', 'Closed', 'Executed', 'Formed', 'Settled'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventPositionPositionStatusEnum = z.infer<
  typeof CdmEventPositionPositionStatusEnumSchema
>;
