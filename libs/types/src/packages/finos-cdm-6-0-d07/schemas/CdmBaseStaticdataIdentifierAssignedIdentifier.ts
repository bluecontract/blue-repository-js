import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataIdentifierAssignedIdentifierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/AssignedIdentifier'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      identifier: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: zod.string().optional(),
      version: zod.number().optional(),
    })
  );

export type CdmBaseStaticdataIdentifierAssignedIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierAssignedIdentifierSchema
>;
