import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralCounterpartyOwnIssuePermittedSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CounterpartyOwnIssuePermitted'
    ]
  )(
    zod.object({
      counterpartyOwnIssuePermitted: zod.boolean(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCollateralCounterpartyOwnIssuePermitted = z.infer<
  typeof CdmProductCollateralCounterpartyOwnIssuePermittedSchema
>;
