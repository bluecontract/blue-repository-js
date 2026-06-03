import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowWarehouseIdentityEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WarehouseIdentityEnum']
)(zod.literal('DTCC_TIW_Gold') as unknown as z.ZodObject<any>);

export type CdmEventWorkflowWarehouseIdentityEnum = z.infer<
  typeof CdmEventWorkflowWarehouseIdentityEnumSchema
>;
