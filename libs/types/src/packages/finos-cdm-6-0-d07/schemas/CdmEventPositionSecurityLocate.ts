import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
import { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
import { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';

export const CdmEventPositionSecurityLocateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/SecurityLocate']
  )(
    z.object({
      availableInventoryRecord: z
        .array(z.lazy(() => CdmEventPositionAvailableInventoryRecordSchema))
        .min(0)
        .optional(),
      availableInventoryType: z
        .lazy(() => CdmEventPositionAvailableInventoryTypeEnumSchema)
        .optional(),
      description: z.string().optional(),
      messageInformation: z
        .lazy(() => CdmEventWorkflowMessageInformationSchema)
        .optional(),
      name: z.string().optional(),
      party: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .optional(),
      partyRole: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmEventPositionSecurityLocate = z.infer<
  typeof CdmEventPositionSecurityLocateSchema
>;
