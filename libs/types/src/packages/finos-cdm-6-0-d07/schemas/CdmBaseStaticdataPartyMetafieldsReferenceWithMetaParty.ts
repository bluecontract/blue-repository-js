import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

const zod = z as any;

export const CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/metafields/ReferenceWithMetaParty'
    ]
  )(
    zod.object({
      address: zod.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: zod.string().optional(),
      globalReference: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty = z.infer<
  typeof CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
>;
