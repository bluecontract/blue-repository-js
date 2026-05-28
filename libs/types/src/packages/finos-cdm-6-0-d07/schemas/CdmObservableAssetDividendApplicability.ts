import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetDividendApplicabilitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/DividendApplicability']
  )(
    z.object({
      additionalDividends: z.boolean().optional(),
      allDividends: z.boolean().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      optionsExchangeDividends: z.boolean().optional(),
    })
  );

export type CdmObservableAssetDividendApplicability = z.infer<
  typeof CdmObservableAssetDividendApplicabilitySchema
>;
