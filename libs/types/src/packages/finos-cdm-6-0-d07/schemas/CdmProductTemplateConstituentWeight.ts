import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateConstituentWeightSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ConstituentWeight']
  )(
    z.object({
      basketPercentage: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      openUnits: z.number().optional(),
    })
  );

export type CdmProductTemplateConstituentWeight = z.infer<
  typeof CdmProductTemplateConstituentWeightSchema
>;
