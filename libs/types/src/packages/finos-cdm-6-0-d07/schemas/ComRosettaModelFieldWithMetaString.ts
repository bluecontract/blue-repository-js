import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const ComRosettaModelFieldWithMetaStringSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/FieldWithMetaString']
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.string().optional(),
    })
  );

export type ComRosettaModelFieldWithMetaString = z.infer<
  typeof ComRosettaModelFieldWithMetaStringSchema
>;
