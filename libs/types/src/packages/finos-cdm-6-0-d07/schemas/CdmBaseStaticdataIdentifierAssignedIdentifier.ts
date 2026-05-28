import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataIdentifierAssignedIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/AssignedIdentifier'
    ]
  )(
    z.object({
      description: z.string().optional(),
      identifier: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: z.string().optional(),
      version: z.number().optional(),
    })
  );

export type CdmBaseStaticdataIdentifierAssignedIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierAssignedIdentifierSchema
>;
