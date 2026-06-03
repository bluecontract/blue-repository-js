import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';

const zod = z as any;

export const ComRosettaModelMetafieldsMetaFieldsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/metafields/MetaFields']
)(
  zod.object({
    externalKey: zod.string().optional(),
    globalKey: zod.string().optional(),
    key: zod
      .array(zod.lazy(() => ComRosettaModelLibMetaKeySchema))
      .min(0)
      .optional(),
    name: zod.string().optional(),
    scheme: zod.string().optional(),
  })
);

export type ComRosettaModelMetafieldsMetaFields = z.infer<
  typeof ComRosettaModelMetafieldsMetaFieldsSchema
>;
