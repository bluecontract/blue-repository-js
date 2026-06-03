import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';

const zod = z as any;

export const CdmProductCollateralSubstitutionProvisionsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SubstitutionProvisions']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      noticeDeadlineDateTime: zod.string().optional(),
      noticeDeadlinePeriod: zod
        .lazy(() => CdmBaseDatetimePeriodSchema)
        .optional(),
      numberOfSubstitutionsAllowed: zod.number().optional(),
    })
  );

export type CdmProductCollateralSubstitutionProvisions = z.infer<
  typeof CdmProductCollateralSubstitutionProvisionsSchema
>;
