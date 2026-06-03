import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';

const zod = z as any;

export const CdmEventPositionInventorySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/Inventory']
)(
  zod.object({
    description: zod.string().optional(),
    inventoryRecord: zod
      .array(zod.lazy(() => CdmEventPositionInventoryRecordSchema))
      .min(0)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventPositionInventory = z.infer<
  typeof CdmEventPositionInventorySchema
>;
