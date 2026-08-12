import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { AuthoritySchema } from './Authority';
import { OperationSchema } from './Operation';

const zod = z as any;

export const PurposeStatementSchema: any = withTypeBlueId(
  blueIds['Coordination/Purpose Statement']
)(
  zod.object({
    description: zod.string().optional(),
    event: blueNodeField().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.lazy(() => AuthoritySchema).optional(),
    respondsWith: zod.array(zod.lazy(() => OperationSchema)).optional(),
    summary: zod.string().optional(),
  })
);

export type PurposeStatement = z.infer<typeof PurposeStatementSchema>;
