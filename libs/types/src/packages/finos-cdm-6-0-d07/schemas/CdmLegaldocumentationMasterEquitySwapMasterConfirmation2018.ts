import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';

export const CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/EquitySwapMasterConfirmation2018'
    ]
  )(
    z.object({
      description: z.string().optional(),
      equityCashSettlementDates: z.lazy(
        () => CdmProductCommonSchedulePaymentDatesSchema
      ),
      linearInterpolationElection: z.lazy(
        () => CdmObservableAssetInterpolationMethodEnumSchema
      ),
      name: z.string().optional(),
      pricingMethodElection: z.lazy(
        () => CdmProductAssetPriceReturnTermsSchema
      ),
      settlementTerms: z.lazy(
        () => CdmProductCommonSettlementSettlementTermsSchema
      ),
      typeOfSwapElection: z.lazy(() => CdmProductAssetReturnTypeEnumSchema),
      valuationDates: z.lazy(() => CdmObservableAssetValuationDatesSchema),
    })
  );

export type CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018 =
  z.infer<
    typeof CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema
  >;
