import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ComRosettaModelLibMetaKeySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/lib/meta/Key']
)(
  zod.object({
    name: zod.string().optional(),
    scope: zod.string().optional(),
    val: zod.string().optional(),
  })
);

export type ComRosettaModelLibMetaKey = z.infer<
  typeof ComRosettaModelLibMetaKeySchema
>;
