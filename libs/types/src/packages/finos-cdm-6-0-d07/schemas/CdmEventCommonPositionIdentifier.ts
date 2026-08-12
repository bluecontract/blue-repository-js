import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmEventCommonPositionIdentifierSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PositionIdentifier']
)(
  zod.object({
    assignedIdentifier: zod
      .array(
        zod.lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema)
      )
      .min(1)
      .optional(),
    description: zod.string().optional(),
    identifierType: zod
      .lazy(() => CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema)
      .optional(),
    issuer: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    issuerReference: zod
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonPositionIdentifier = z.infer<
  typeof CdmEventCommonPositionIdentifierSchema
>;
