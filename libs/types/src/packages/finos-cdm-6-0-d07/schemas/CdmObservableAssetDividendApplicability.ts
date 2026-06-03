import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetDividendApplicabilitySchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/DividendApplicability']
  )(
    zod.object({
      additionalDividends: zod.boolean().optional(),
      allDividends: zod.boolean().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      optionsExchangeDividends: zod.boolean().optional(),
    })
  );

export type CdmObservableAssetDividendApplicability = z.infer<
  typeof CdmObservableAssetDividendApplicabilitySchema
>;
