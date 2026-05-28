import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';

export const ComRosettaModelMetafieldsMetaFieldsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/metafields/MetaFields']
  )(
    z.object({
      externalKey: z.string().optional(),
      globalKey: z.string().optional(),
      key: z
        .array(z.lazy(() => ComRosettaModelLibMetaKeySchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
      scheme: z.string().optional(),
    })
  );

export type ComRosettaModelMetafieldsMetaFields = z.infer<
  typeof ComRosettaModelMetafieldsMetaFieldsSchema
>;
