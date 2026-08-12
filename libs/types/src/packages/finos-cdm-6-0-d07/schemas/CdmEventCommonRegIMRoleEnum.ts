import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonRegIMRoleEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/RegIMRoleEnum']
)(
  zod.enum(['Pledgor', 'Secured'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmEventCommonRegIMRoleEnum = z.infer<
  typeof CdmEventCommonRegIMRoleEnumSchema
>;
