import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';

export const CdmEventPositionInventorySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Inventory']
)(
  z.object({
    description: z.string().optional(),
    inventoryRecord: z
      .array(z.lazy(() => CdmEventPositionInventoryRecordSchema))
      .min(0)
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmEventPositionInventory = z.infer<
  typeof CdmEventPositionInventorySchema
>;
