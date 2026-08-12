import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateMarginTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/MarginTypeEnum']
)(
  zod.enum(['Cash', 'Instrument'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductTemplateMarginTypeEnum = z.infer<
  typeof CdmProductTemplateMarginTypeEnumSchema
>;
