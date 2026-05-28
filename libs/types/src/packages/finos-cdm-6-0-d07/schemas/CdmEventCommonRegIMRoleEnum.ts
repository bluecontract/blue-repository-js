import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonRegIMRoleEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RegIMRoleEnum']
)(
  z.enum(['Pledgor', 'Secured'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonRegIMRoleEnum = z.infer<
  typeof CdmEventCommonRegIMRoleEnumSchema
>;
