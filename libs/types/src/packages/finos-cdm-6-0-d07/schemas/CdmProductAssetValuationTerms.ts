import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';

export const CdmProductAssetValuationTermsSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ValuationTerms']
)(
  z.object({
    componentSecurityIndexAnnexFallback: z.boolean().optional(),
    dividendValuationDates: z
      .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
      .optional(),
    fPVFinalPriceElectionFallback: z
      .lazy(() => CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema)
      .optional(),
    futuresPriceValuation: z.boolean().optional(),
    multipleExchangeIndexAnnexFallback: z.boolean().optional(),
    name: z.string().optional(),
    numberOfValuationDates: z.number().optional(),
    optionsPriceValuation: z.boolean().optional(),
  })
);

export type CdmProductAssetValuationTerms = z.infer<
  typeof CdmProductAssetValuationTermsSchema
>;
