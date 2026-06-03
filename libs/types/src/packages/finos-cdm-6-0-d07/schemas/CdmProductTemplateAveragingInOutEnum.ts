import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateAveragingInOutEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AveragingInOutEnum']
)(
  zod.enum(['Both', 'In', 'Out'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductTemplateAveragingInOutEnum = z.infer<
  typeof CdmProductTemplateAveragingInOutEnumSchema
>;
