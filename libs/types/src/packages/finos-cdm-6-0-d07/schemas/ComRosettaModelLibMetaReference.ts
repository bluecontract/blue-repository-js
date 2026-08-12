import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ComRosettaModelLibMetaReferenceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/lib/meta/Reference']
)(
  zod.object({
    name: zod.string().optional(),
    scope: zod.string().optional(),
    val: zod.string().optional(),
  })
);

export type ComRosettaModelLibMetaReference = z.infer<
  typeof ComRosettaModelLibMetaReferenceSchema
>;
