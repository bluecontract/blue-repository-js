import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonActionEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ActionEnum']
)(
  z.enum(['Cancel', 'Correct', 'New'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonActionEnum = z.infer<
  typeof CdmEventCommonActionEnumSchema
>;
