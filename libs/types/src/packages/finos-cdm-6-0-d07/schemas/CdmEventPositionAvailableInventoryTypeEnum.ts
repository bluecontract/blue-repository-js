import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventPositionAvailableInventoryTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AvailableInventoryTypeEnum']
  )(
    zod.enum(['AvailableToLend', 'RequestToBorrow'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventPositionAvailableInventoryTypeEnum = z.infer<
  typeof CdmEventPositionAvailableInventoryTypeEnumSchema
>;
