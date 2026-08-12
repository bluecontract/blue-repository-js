import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';

const zod = z as any;

export const CdmBaseStaticdataPartyNaturalPersonSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPerson']
)(
  zod.object({
    contactInformation: zod
      .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
      .optional(),
    dateOfBirth: zod.string().optional(),
    description: zod.string().optional(),
    firstName: zod.string().optional(),
    honorific: zod.string().optional(),
    initial: zod.array(zod.string()).min(0).optional(),
    middleName: zod.array(zod.string()).min(0).optional(),
    name: zod.string().optional(),
    personId: zod
      .array(
        zod.lazy(
          () => CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema
        )
      )
      .min(0)
      .optional(),
    suffix: zod.string().optional(),
    surname: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyNaturalPerson = z.infer<
  typeof CdmBaseStaticdataPartyNaturalPersonSchema
>;
