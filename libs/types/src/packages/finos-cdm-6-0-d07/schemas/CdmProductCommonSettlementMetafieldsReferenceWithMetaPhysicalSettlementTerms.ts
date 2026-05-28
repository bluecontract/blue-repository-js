import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

export const CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/metafields/ReferenceWithMetaPhysicalSettlementTerms'
    ]
  )(
    z.object({
      address: z.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: z.string().optional(),
      globalReference: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms =
  z.infer<
    typeof CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema
  >;
