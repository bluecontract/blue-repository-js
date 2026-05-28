import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonRegMarginTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RegMarginTypeEnum']
  )(
    z.enum(['NonRegIM', 'RegIM', 'VM'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonRegMarginTypeEnum = z.infer<
  typeof CdmEventCommonRegMarginTypeEnumSchema
>;
