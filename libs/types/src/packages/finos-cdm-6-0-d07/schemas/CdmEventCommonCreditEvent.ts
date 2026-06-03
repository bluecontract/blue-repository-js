import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';

const zod = z as any;

export const CdmEventCommonCreditEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CreditEvent']
)(
  zod.object({
    auctionDate: zod.string().optional(),
    creditEventType: zod.lazy(() => CdmEventCommonCreditEventTypeEnumSchema),
    description: zod.string().optional(),
    eventDeterminationDate: zod.string(),
    finalPrice: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
    name: zod.string().optional(),
    publiclyAvailableInformation: zod
      .array(zod.lazy(() => CdmLegaldocumentationCommonResourceSchema))
      .min(0)
      .optional(),
    recoveryPercent: zod.number().optional(),
    referenceInformation: zod.lazy(
      () => CdmProductAssetReferenceInformationSchema
    ),
  })
);

export type CdmEventCommonCreditEvent = z.infer<
  typeof CdmEventCommonCreditEventSchema
>;
