import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';

export const CdmBaseStaticdataPartyNaturalPersonSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPerson']
  )(
    z.object({
      contactInformation: z
        .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
        .optional(),
      dateOfBirth: z.string().optional(),
      description: z.string().optional(),
      firstName: z.string().optional(),
      honorific: z.string().optional(),
      initial: z.array(z.string()).min(0).optional(),
      middleName: z.array(z.string()).min(0).optional(),
      name: z.string().optional(),
      personId: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema
          )
        )
        .min(0)
        .optional(),
      suffix: z.string().optional(),
      surname: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyNaturalPerson = z.infer<
  typeof CdmBaseStaticdataPartyNaturalPersonSchema
>;
