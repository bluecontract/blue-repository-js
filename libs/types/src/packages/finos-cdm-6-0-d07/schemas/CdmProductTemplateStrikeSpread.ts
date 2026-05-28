import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';

export const CdmProductTemplateStrikeSpreadSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrikeSpread']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      upperStrike: z.lazy(() => CdmProductTemplateOptionStrikeSchema),
      upperStrikeNumberOfOptions: z.number(),
    })
  );

export type CdmProductTemplateStrikeSpread = z.infer<
  typeof CdmProductTemplateStrikeSpreadSchema
>;
