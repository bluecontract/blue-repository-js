import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/FieldWithMetaNaturalPersonRoleEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema
>;
