import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
import { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';

const zod = z as any;

export const CdmLegaldocumentationMasterTransactionAdditionalTermsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/TransactionAdditionalTerms'
    ]
  )(
    zod.object({
      commoditiesAdditionalTerms: zod.string().optional(),
      creditAdditionalTerms: zod.string().optional(),
      description: zod.string().optional(),
      digitalAssetAdditionalTerms: zod.string().optional(),
      equityAdditionalTerms: zod
        .lazy(() => CdmLegaldocumentationMasterEquityAdditionalTermsSchema)
        .optional(),
      foreignExchangeAdditionalTerms: zod
        .lazy(() => CdmLegaldocumentationMasterFxAdditionalTermsSchema)
        .optional(),
      interestRateAdditionalTerms: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterTransactionAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterTransactionAdditionalTermsSchema
>;
