import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
import { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
import { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';

const zod = z as any;

export const CdmBaseStaticdataPartyPartySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Party']
)(
  zod.object({
    account: zod.lazy(() => CdmBaseStaticdataPartyAccountSchema).optional(),
    businessUnit: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyBusinessUnitSchema))
      .min(0)
      .optional(),
    contactInformation: zod
      .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyId: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyIdentifierSchema))
      .min(1)
      .optional(),
    person: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyNaturalPersonSchema))
      .min(0)
      .optional(),
    personRole: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyNaturalPersonRoleSchema))
      .min(0)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyParty = z.infer<
  typeof CdmBaseStaticdataPartyPartySchema
>;
