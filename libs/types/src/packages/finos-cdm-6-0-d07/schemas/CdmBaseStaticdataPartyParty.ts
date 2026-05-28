import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
import { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
import { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';

export const CdmBaseStaticdataPartyPartySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Party']
)(
  z.object({
    account: z.lazy(() => CdmBaseStaticdataPartyAccountSchema).optional(),
    businessUnit: z
      .array(z.lazy(() => CdmBaseStaticdataPartyBusinessUnitSchema))
      .min(0)
      .optional(),
    contactInformation: z
      .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    partyId: z
      .array(z.lazy(() => CdmBaseStaticdataPartyPartyIdentifierSchema))
      .min(1)
      .optional(),
    person: z
      .array(z.lazy(() => CdmBaseStaticdataPartyNaturalPersonSchema))
      .min(0)
      .optional(),
    personRole: z
      .array(z.lazy(() => CdmBaseStaticdataPartyNaturalPersonRoleSchema))
      .min(0)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyParty = z.infer<
  typeof CdmBaseStaticdataPartyPartySchema
>;
