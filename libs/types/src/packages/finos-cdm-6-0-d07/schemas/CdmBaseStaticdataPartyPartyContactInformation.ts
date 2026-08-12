import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';

const zod = z as any;

export const CdmBaseStaticdataPartyPartyContactInformationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyContactInformation'
    ]
  )(
    zod.object({
      additionalInformation: zod.string().optional(),
      businessUnit: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyBusinessUnitSchema))
        .min(0)
        .optional(),
      contactInformation: zod
        .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      partyReference: zod
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      person: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyNaturalPersonSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyPartyContactInformation = z.infer<
  typeof CdmBaseStaticdataPartyPartyContactInformationSchema
>;
