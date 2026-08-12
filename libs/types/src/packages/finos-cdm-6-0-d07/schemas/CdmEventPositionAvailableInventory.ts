import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
import { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
import { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';

const zod = z as any;

export const CdmEventPositionAvailableInventorySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AvailableInventory']
)(
  zod.object({
    availableInventoryRecord: zod
      .array(zod.lazy(() => CdmEventPositionAvailableInventoryRecordSchema))
      .min(0)
      .optional(),
    availableInventoryType: zod.lazy(
      () => CdmEventPositionAvailableInventoryTypeEnumSchema
    ),
    description: zod.string().optional(),
    messageInformation: zod
      .lazy(() => CdmEventWorkflowMessageInformationSchema)
      .optional(),
    name: zod.string().optional(),
    party: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
  })
);

export type CdmEventPositionAvailableInventory = z.infer<
  typeof CdmEventPositionAvailableInventorySchema
>;
