import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from '../../coordination/schemas/Actor';
import { AuthoritySchema } from '../../coordination/schemas/Authority';

const zod = z as any;

export const MandateAuthoritySchema: any = withTypeBlueId(
  blueIds['Mandate/Mandate Authority']
)(
  AuthoritySchema.extend({
    actor: zod.lazy(() => ActorSchema),
    description: zod.string().optional(),
    initialMandateDocument: blueNodeField(),
    name: zod.string().optional(),
  })
);

export type MandateAuthority = z.infer<typeof MandateAuthoritySchema>;
