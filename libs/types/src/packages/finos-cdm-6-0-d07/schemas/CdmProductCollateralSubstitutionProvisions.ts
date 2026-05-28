import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

export const CdmProductCollateralSubstitutionProvisionsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SubstitutionProvisions']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      noticeDeadlineDateTime: z.string().optional(),
      noticeDeadlinePeriod: z
        .lazy(() => CdmBaseDatetimePeriodSchema)
        .optional(),
      numberOfSubstitutionsAllowed: z.number().optional(),
    })
  );

export type CdmProductCollateralSubstitutionProvisions = z.infer<
  typeof CdmProductCollateralSubstitutionProvisionsSchema
>;
