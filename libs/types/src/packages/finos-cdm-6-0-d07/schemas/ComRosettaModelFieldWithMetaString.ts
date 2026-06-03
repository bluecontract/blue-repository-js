import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const ComRosettaModelFieldWithMetaStringSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/FieldWithMetaString']
)(
  zod.object({
    meta: zod.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
    name: zod.string().optional(),
    val: zod.string().optional(),
  })
);

export type ComRosettaModelFieldWithMetaString = z.infer<
  typeof ComRosettaModelFieldWithMetaStringSchema
>;
