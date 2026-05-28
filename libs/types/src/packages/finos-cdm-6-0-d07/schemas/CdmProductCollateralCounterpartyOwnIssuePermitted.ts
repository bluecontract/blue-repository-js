import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralCounterpartyOwnIssuePermittedSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CounterpartyOwnIssuePermitted'
    ]
  )(
    z.object({
      counterpartyOwnIssuePermitted: z.boolean(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralCounterpartyOwnIssuePermitted = z.infer<
  typeof CdmProductCollateralCounterpartyOwnIssuePermittedSchema
>;
