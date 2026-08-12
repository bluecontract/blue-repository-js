import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';

const zod = z as any;

export const CdmObservableEventFailureToPaySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/FailureToPay']
)(
  zod.object({
    applicable: zod.boolean(),
    gracePeriodExtension: zod
      .lazy(() => CdmObservableEventGracePeriodExtensionSchema)
      .optional(),
    name: zod.string().optional(),
    paymentRequirement: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
  })
);

export type CdmObservableEventFailureToPay = z.infer<
  typeof CdmObservableEventFailureToPaySchema
>;
