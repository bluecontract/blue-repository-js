import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/FieldWithMetaIdentifier'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema).optional(),
    })
  );

export type CdmBaseStaticdataIdentifierFieldWithMetaIdentifier = z.infer<
  typeof CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema
>;
