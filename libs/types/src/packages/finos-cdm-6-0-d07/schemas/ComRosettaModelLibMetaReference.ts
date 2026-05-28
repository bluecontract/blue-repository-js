import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ComRosettaModelLibMetaReferenceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/com/rosetta/model/lib/meta/Reference']
  )(
    z.object({
      name: z.string().optional(),
      scope: z.string().optional(),
      val: z.string().optional(),
    })
  );

export type ComRosettaModelLibMetaReference = z.infer<
  typeof ComRosettaModelLibMetaReferenceSchema
>;
