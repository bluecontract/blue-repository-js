import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';

export const CdmProductTemplateEvergreenProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EvergreenProvision']
  )(
    z.object({
      description: z.string().optional(),
      extensionFrequency: z.lazy(
        () => CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema
      ),
      finalPeriodFeeAdjustment: z
        .lazy(() => CdmObservableAssetPriceSchema)
        .optional(),
      name: z.string().optional(),
      noticeDeadlineDateTime: z.string().optional(),
      noticeDeadlinePeriod: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
      noticePeriod: z.lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema),
      singlePartyOption: z
        .lazy(() => CdmBaseStaticdataPartyPartyRoleSchema)
        .optional(),
    })
  );

export type CdmProductTemplateEvergreenProvision = z.infer<
  typeof CdmProductTemplateEvergreenProvisionSchema
>;
