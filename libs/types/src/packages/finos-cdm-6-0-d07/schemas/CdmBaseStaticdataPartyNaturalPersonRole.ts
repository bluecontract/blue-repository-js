import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';

const zod = z as any;

export const CdmBaseStaticdataPartyNaturalPersonRoleSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPersonRole']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      personReference: zod.lazy(
        () =>
          CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema
      ),
      role: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyNaturalPersonRole = z.infer<
  typeof CdmBaseStaticdataPartyNaturalPersonRoleSchema
>;
