import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyAccountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Account']
)(
  zod.object({
    accountBeneficiary: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    accountName: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    accountNumber: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    accountType: zod
      .lazy(() => CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyReference: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    servicingParty: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyAccount = z.infer<
  typeof CdmBaseStaticdataPartyAccountSchema
>;
