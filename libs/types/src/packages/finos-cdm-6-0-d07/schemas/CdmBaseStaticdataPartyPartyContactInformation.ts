import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';

export const CdmBaseStaticdataPartyPartyContactInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyContactInformation'
    ]
  )(
    z.object({
      additionalInformation: z.string().optional(),
      businessUnit: z
        .array(z.lazy(() => CdmBaseStaticdataPartyBusinessUnitSchema))
        .min(0)
        .optional(),
      contactInformation: z
        .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      partyReference: z
        .lazy(
          () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
        )
        .optional(),
      person: z
        .array(z.lazy(() => CdmBaseStaticdataPartyNaturalPersonSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyPartyContactInformation = z.infer<
  typeof CdmBaseStaticdataPartyPartyContactInformationSchema
>;
