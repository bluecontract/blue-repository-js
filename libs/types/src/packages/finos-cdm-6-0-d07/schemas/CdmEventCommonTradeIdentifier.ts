import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmEventCommonTradeIdentifierSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/TradeIdentifier']
)(
  z.object({
    assignedIdentifier: z
      .array(z.lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema))
      .min(1)
      .optional(),
    description: z.string().optional(),
    identifierType: z
      .lazy(() => CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema)
      .optional(),
    issuer: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    issuerReference: z
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmEventCommonTradeIdentifier = z.infer<
  typeof CdmEventCommonTradeIdentifierSchema
>;
