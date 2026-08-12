import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';

const zod = z as any;

export const CdmProductAssetValuationTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ValuationTerms']
)(
  zod.object({
    componentSecurityIndexAnnexFallback: zod.boolean().optional(),
    dividendValuationDates: zod
      .lazy(() => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema)
      .optional(),
    fPVFinalPriceElectionFallback: zod
      .lazy(() => CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema)
      .optional(),
    futuresPriceValuation: zod.boolean().optional(),
    multipleExchangeIndexAnnexFallback: zod.boolean().optional(),
    name: zod.string().optional(),
    numberOfValuationDates: zod.number().optional(),
    optionsPriceValuation: zod.boolean().optional(),
  })
);

export type CdmProductAssetValuationTerms = z.infer<
  typeof CdmProductAssetValuationTermsSchema
>;
