import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

export const ComRosettaModelMetafieldsReferenceWithMetaStringSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/com/rosetta/model/metafields/ReferenceWithMetaString'
    ]
  )(
    z.object({
      address: z.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: z.string().optional(),
      globalReference: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type ComRosettaModelMetafieldsReferenceWithMetaString = z.infer<
  typeof ComRosettaModelMetafieldsReferenceWithMetaStringSchema
>;
