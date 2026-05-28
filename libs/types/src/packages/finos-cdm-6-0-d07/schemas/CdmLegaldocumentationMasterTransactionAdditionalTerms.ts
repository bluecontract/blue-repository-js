import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
import { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';

export const CdmLegaldocumentationMasterTransactionAdditionalTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/TransactionAdditionalTerms'
    ]
  )(
    z.object({
      commoditiesAdditionalTerms: z.string().optional(),
      creditAdditionalTerms: z.string().optional(),
      description: z.string().optional(),
      digitalAssetAdditionalTerms: z.string().optional(),
      equityAdditionalTerms: z
        .lazy(() => CdmLegaldocumentationMasterEquityAdditionalTermsSchema)
        .optional(),
      foreignExchangeAdditionalTerms: z
        .lazy(() => CdmLegaldocumentationMasterFxAdditionalTermsSchema)
        .optional(),
      interestRateAdditionalTerms: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationMasterTransactionAdditionalTerms = z.infer<
  typeof CdmLegaldocumentationMasterTransactionAdditionalTermsSchema
>;
