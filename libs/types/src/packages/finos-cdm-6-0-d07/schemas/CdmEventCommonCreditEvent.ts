import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';

export const CdmEventCommonCreditEventSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CreditEvent']
)(
  z.object({
    auctionDate: z.string().optional(),
    creditEventType: z.lazy(() => CdmEventCommonCreditEventTypeEnumSchema),
    description: z.string().optional(),
    eventDeterminationDate: z.string(),
    finalPrice: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
    name: z.string().optional(),
    publiclyAvailableInformation: z
      .array(z.lazy(() => CdmLegaldocumentationCommonResourceSchema))
      .min(0)
      .optional(),
    recoveryPercent: z.number().optional(),
    referenceInformation: z.lazy(
      () => CdmProductAssetReferenceInformationSchema
    ),
  })
);

export type CdmEventCommonCreditEvent = z.infer<
  typeof CdmEventCommonCreditEventSchema
>;
