import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';

export const CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/common/metafields/ReferenceWithMetaContractDetails'
    ]
  )(
    z.object({
      address: z.lazy(() => ComRosettaModelLibMetaReferenceSchema).optional(),
      externalReference: z.string().optional(),
      globalReference: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonMetafieldsReferenceWithMetaContractDetails = z.infer<
  typeof CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema
>;
