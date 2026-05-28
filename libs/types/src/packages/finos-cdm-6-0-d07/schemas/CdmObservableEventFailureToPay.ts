import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';

export const CdmObservableEventFailureToPaySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/FailureToPay']
  )(
    z.object({
      applicable: z.boolean(),
      gracePeriodExtension: z
        .lazy(() => CdmObservableEventGracePeriodExtensionSchema)
        .optional(),
      name: z.string().optional(),
      paymentRequirement: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
    })
  );

export type CdmObservableEventFailureToPay = z.infer<
  typeof CdmObservableEventFailureToPaySchema
>;
