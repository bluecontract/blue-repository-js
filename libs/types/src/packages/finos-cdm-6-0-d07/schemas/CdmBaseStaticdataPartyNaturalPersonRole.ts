import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';

export const CdmBaseStaticdataPartyNaturalPersonRoleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPersonRole']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      personReference: z.lazy(
        () =>
          CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema
      ),
      role: z
        .array(
          z.lazy(
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
