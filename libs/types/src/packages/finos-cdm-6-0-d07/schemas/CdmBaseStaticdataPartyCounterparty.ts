import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';

const zod = z as any;

export const CdmBaseStaticdataPartyCounterpartySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Counterparty']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyReference: zod.lazy(
      () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
    ),
    role: zod.lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema),
  })
);

export type CdmBaseStaticdataPartyCounterparty = z.infer<
  typeof CdmBaseStaticdataPartyCounterpartySchema
>;
