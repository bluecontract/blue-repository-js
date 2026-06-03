import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateCallingPartyEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CallingPartyEnum']
)(
  zod.enum([
    'AsDefinedInMasterAgreement',
    'Either',
    'InitialBuyer',
    'InitialSeller',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmProductTemplateCallingPartyEnum = z.infer<
  typeof CdmProductTemplateCallingPartyEnumSchema
>;
