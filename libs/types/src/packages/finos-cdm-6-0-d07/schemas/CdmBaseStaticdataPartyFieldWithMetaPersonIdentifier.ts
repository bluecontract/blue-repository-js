import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaPersonIdentifier'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataPartyPersonIdentifierSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema
>;
