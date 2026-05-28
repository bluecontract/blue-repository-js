import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaNaturalPersonRoleEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema
>;
