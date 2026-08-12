import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';

const zod = z as any;

export const CdmProductTemplateStrikeSpreadSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/StrikeSpread']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    upperStrike: zod.lazy(() => CdmProductTemplateOptionStrikeSchema),
    upperStrikeNumberOfOptions: zod.number(),
  })
);

export type CdmProductTemplateStrikeSpread = z.infer<
  typeof CdmProductTemplateStrikeSpreadSchema
>;
