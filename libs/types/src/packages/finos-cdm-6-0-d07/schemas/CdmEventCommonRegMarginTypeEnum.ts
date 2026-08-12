import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonRegMarginTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RegMarginTypeEnum']
)(
  zod.enum(['NonRegIM', 'RegIM', 'VM'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonRegMarginTypeEnum = z.infer<
  typeof CdmEventCommonRegMarginTypeEnumSchema
>;
