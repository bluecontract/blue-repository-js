import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateConstituentWeightSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ConstituentWeight']
)(
  zod.object({
    basketPercentage: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    openUnits: zod.number().optional(),
  })
);

export type CdmProductTemplateConstituentWeight = z.infer<
  typeof CdmProductTemplateConstituentWeightSchema
>;
