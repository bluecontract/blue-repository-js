import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaPersonIdentifier'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseStaticdataPartyPersonIdentifierSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema
>;
