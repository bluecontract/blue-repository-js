import type { ZodTypeAny } from 'zod';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
import { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
import { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
import { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
import { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
import { CdmBaseDatetimeCustomisableOffsetSchema } from './CdmBaseDatetimeCustomisableOffset';
import { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
import { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
import { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
import { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
import { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
import { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
import { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';
import { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';
import { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
import { CdmBaseDatetimeTimeUnitEnumSchema } from './CdmBaseDatetimeTimeUnitEnum';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
import { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
import { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
import { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
import { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
import { CdmBaseMathCompareOpSchema } from './CdmBaseMathCompareOp';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
import { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
import { CdmBaseMathMeasureBaseSchema } from './CdmBaseMathMeasureBase';
import { CdmBaseMathMeasureScheduleSchema } from './CdmBaseMathMeasureSchedule';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';
import { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
import { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
import { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
import { CdmBaseMathNonNegativeStepSchema } from './CdmBaseMathNonNegativeStep';
import { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
import { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
import { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
import { CdmBaseMathQuantityScheduleSchema } from './CdmBaseMathQuantitySchedule';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';
import { CdmBaseMathRoundingModeEnumSchema } from './CdmBaseMathRoundingModeEnum';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';
import { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
import { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
import { CdmBaseStaticdataAssetCommonAssetBaseSchema } from './CdmBaseStaticdataAssetCommonAssetBase';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
import { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
import { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
import { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomySchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomy';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
import { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
import { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
import { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';
import { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
import { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';
import { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
import { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
import { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';
import { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
import { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
import { CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema } from './CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
import { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
import { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
import { CdmBaseStaticdataAssetCommonInstrumentBaseSchema } from './CdmBaseStaticdataAssetCommonInstrumentBase';
import { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
import { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
import { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
import { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';
import { CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMoneyMarketTypeEnum';
import { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
import { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
import { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
import { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
import { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
import { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
import { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
import { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';
import { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
import { CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
import { CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema } from './CdmBaseStaticdataIdentifierFieldWithMetaIdentifier';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
import { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
import { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
import { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
import { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
import { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
import { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
import { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
import { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';
import { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
import { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
import { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
import { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
import { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';
import { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
import { CdmBaseStaticdataPartyRelatedPartySchema } from './CdmBaseStaticdataPartyRelatedParty';
import { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';
import { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';
import { CdmEventCommonActionEnumSchema } from './CdmEventCommonActionEnum';
import { CdmEventCommonAffirmationStatusEnumSchema } from './CdmEventCommonAffirmationStatusEnum';
import { CdmEventCommonAssetTransferTypeEnumSchema } from './CdmEventCommonAssetTransferTypeEnum';
import { CdmEventCommonBillingInstructionSchema } from './CdmEventCommonBillingInstruction';
import { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
import { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
import { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';
import { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';
import { CdmEventCommonBusinessEventSchema } from './CdmEventCommonBusinessEvent';
import { CdmEventCommonCalculateTransferInstructionSchema } from './CdmEventCommonCalculateTransferInstruction';
import { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';
import { CdmEventCommonClearingInstructionSchema } from './CdmEventCommonClearingInstruction';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonCollateralPortfolioSchema } from './CdmEventCommonCollateralPortfolio';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
import { CdmEventCommonConfirmationStatusEnumSchema } from './CdmEventCommonConfirmationStatusEnum';
import { CdmEventCommonContractDetailsSchema } from './CdmEventCommonContractDetails';
import { CdmEventCommonContractFormationInstructionSchema } from './CdmEventCommonContractFormationInstruction';
import { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmEventCommonCounterpartyPositionBusinessEventSchema } from './CdmEventCommonCounterpartyPositionBusinessEvent';
import { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
import { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';
import { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
import { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
import { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
import { CdmEventCommonExecutionInstructionSchema } from './CdmEventCommonExecutionInstruction';
import { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';
import { CdmEventCommonExerciseEventSchema } from './CdmEventCommonExerciseEvent';
import { CdmEventCommonExerciseInstructionSchema } from './CdmEventCommonExerciseInstruction';
import { CdmEventCommonExposureSchema } from './CdmEventCommonExposure';
import { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
import { CdmEventCommonIndexTransitionInstructionSchema } from './CdmEventCommonIndexTransitionInstruction';
import { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';
import { CdmEventCommonInstructionFunctionEnumSchema } from './CdmEventCommonInstructionFunctionEnum';
import { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
import { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';
import { CdmEventCommonMarginCallBaseSchema } from './CdmEventCommonMarginCallBase';
import { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
import { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
import { CdmEventCommonMarginCallIssuanceSchema } from './CdmEventCommonMarginCallIssuance';
import { CdmEventCommonMarginCallResponseSchema } from './CdmEventCommonMarginCallResponse';
import { CdmEventCommonMarginCallResponseActionSchema } from './CdmEventCommonMarginCallResponseAction';
import { CdmEventCommonMarginCallResponseTypeEnumSchema } from './CdmEventCommonMarginCallResponseTypeEnum';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
import { CdmEventCommonObservationInstructionSchema } from './CdmEventCommonObservationInstruction';
import { CdmEventCommonPartyChangeInstructionSchema } from './CdmEventCommonPartyChangeInstruction';
import { CdmEventCommonPerformanceTransferTypeEnumSchema } from './CdmEventCommonPerformanceTransferTypeEnum';
import { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';
import { CdmEventCommonPositionIdentifierSchema } from './CdmEventCommonPositionIdentifier';
import { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
import { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
import { CdmEventCommonQuantityChangeInstructionSchema } from './CdmEventCommonQuantityChangeInstruction';
import { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
import { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
import { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
import { CdmEventCommonResetSchema } from './CdmEventCommonReset';
import { CdmEventCommonResetInstructionSchema } from './CdmEventCommonResetInstruction';
import { CdmEventCommonReturnInstructionSchema } from './CdmEventCommonReturnInstruction';
import { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
import { CdmEventCommonSecurityLendingInvoiceSchema } from './CdmEventCommonSecurityLendingInvoice';
import { CdmEventCommonSplitInstructionSchema } from './CdmEventCommonSplitInstruction';
import { CdmEventCommonStateSchema } from './CdmEventCommonState';
import { CdmEventCommonStockSplitInstructionSchema } from './CdmEventCommonStockSplitInstruction';
import { CdmEventCommonTermsChangeInstructionSchema } from './CdmEventCommonTermsChangeInstruction';
import { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmEventCommonTradePricingReportSchema } from './CdmEventCommonTradePricingReport';
import { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmEventCommonTransferExpressionSchema } from './CdmEventCommonTransferExpression';
import { CdmEventCommonTransferInstructionSchema } from './CdmEventCommonTransferInstruction';
import { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
import { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';
import { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
import { CdmEventCommonValuationInstructionSchema } from './CdmEventCommonValuationInstruction';
import { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
import { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
import { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
import { CdmEventPositionAvailableInventorySchema } from './CdmEventPositionAvailableInventory';
import { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
import { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
import { CdmEventPositionContractBaseSchema } from './CdmEventPositionContractBase';
import { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';
import { CdmEventPositionInventorySchema } from './CdmEventPositionInventory';
import { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';
import { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
import { CdmEventPositionPortfolioSchema } from './CdmEventPositionPortfolio';
import { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';
import { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';
import { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
import { CdmEventPositionSecurityLocateSchema } from './CdmEventPositionSecurityLocate';
import { CdmEventWorkflowCreditLimitInformationSchema } from './CdmEventWorkflowCreditLimitInformation';
import { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
import { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
import { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';
import { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';
import { CdmEventWorkflowEventInstructionSchema } from './CdmEventWorkflowEventInstruction';
import { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';
import { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';
import { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
import { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
import { CdmEventWorkflowLimitApplicableSchema } from './CdmEventWorkflowLimitApplicable';
import { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';
import { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
import { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';
import { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';
import { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
import { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
import { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
import { CdmEventWorkflowWorkflowSchema } from './CdmEventWorkflowWorkflow';
import { CdmEventWorkflowWorkflowStateSchema } from './CdmEventWorkflowWorkflowState';
import { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';
import { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';
import { CdmEventWorkflowWorkflowStepApprovalSchema } from './CdmEventWorkflowWorkflowStepApproval';
import { CdmLegaldocumentationCommonAddressForNoticesSchema } from './CdmLegaldocumentationCommonAddressForNotices';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmLegaldocumentationCommonAgreementTermsSchema } from './CdmLegaldocumentationCommonAgreementTerms';
import { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';
import { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';
import { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
import { CdmLegaldocumentationCommonContractualMatrixSchema } from './CdmLegaldocumentationCommonContractualMatrix';
import { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
import { CdmLegaldocumentationCommonContractualTermsSupplementSchema } from './CdmLegaldocumentationCommonContractualTermsSupplement';
import { CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportDocumentTermsEnum';
import { CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportProviderTermsEnum';
import { CdmLegaldocumentationCommonExecutionLocationEnumSchema } from './CdmLegaldocumentationCommonExecutionLocationEnum';
import { CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum';
import { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';
import { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';
import { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
import { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';
import { CdmLegaldocumentationCommonLegalAgreementBaseSchema } from './CdmLegaldocumentationCommonLegalAgreementBase';
import { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
import { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';
import { CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementTypeEnum';
import { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';
import { CdmLegaldocumentationCommonMatrixTermEnumSchema } from './CdmLegaldocumentationCommonMatrixTermEnum';
import { CdmLegaldocumentationCommonMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonMatrixTypeEnum';
import { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';
import { CdmLegaldocumentationCommonOtherAgreementSchema } from './CdmLegaldocumentationCommonOtherAgreement';
import { CdmLegaldocumentationCommonOtherAgreementTermsSchema } from './CdmLegaldocumentationCommonOtherAgreementTerms';
import { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
import { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
import { CdmLegaldocumentationCommonResourceTypeEnumSchema } from './CdmLegaldocumentationCommonResourceTypeEnum';
import { CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityClauseEnum';
import { CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityTermsEnum';
import { CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema } from './CdmLegaldocumentationCommonTerminationCurrencyConditionEnum';
import { CdmLegaldocumentationCommonUmbrellaAgreementSchema } from './CdmLegaldocumentationCommonUmbrellaAgreement';
import { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';
import { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';
import { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
import { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
import { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
import { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
import { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
import { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
import { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
import { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
import { CdmLegaldocumentationMasterEquityMasterConfirmationSchema } from './CdmLegaldocumentationMasterEquityMasterConfirmation';
import { CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema } from './CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018';
import { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
import { CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum';
import { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum';
import { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';
import { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
import { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';
import { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
import { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';
import { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
import { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
import { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
import { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';
import { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
import { CdmLegaldocumentationMasterMasterConfirmationBaseSchema } from './CdmLegaldocumentationMasterMasterConfirmationBase';
import { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
import { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
import { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';
import { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';
import { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';
import { CdmMarginScheduleStandardizedScheduleSchema } from './CdmMarginScheduleStandardizedSchedule';
import { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
import { CdmMarginScheduleStandardizedScheduleInitialMarginSchema } from './CdmMarginScheduleStandardizedScheduleInitialMargin';
import { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
import { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
import { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
import { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
import { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights';
import { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';
import { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationShiftMethodEnum';
import { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
import { CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationStyleEnum';
import { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
import { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';
import { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
import { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
import { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
import { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
import { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
import { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
import { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
import { CdmObservableAssetCreditNotationsSchema } from './CdmObservableAssetCreditNotations';
import { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
import { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
import { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
import { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
import { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
import { CdmObservableAssetCurveSchema } from './CdmObservableAssetCurve';
import { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
import { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
import { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
import { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';
import { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
import { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
import { CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema } from './CdmObservableAssetFieldWithMetaInterpolationMethodEnum';
import { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
import { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';
import { CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetFieldWithMetaQuotedCurrencyPair';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
import { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
import { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
import { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
import { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
import { CdmObservableAssetFroFloatingRateIndexDefinitionSchema } from './CdmObservableAssetFroFloatingRateIndexDefinition';
import { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';
import { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';
import { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
import { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
import { CdmObservableAssetFxRateSourceFixingSchema } from './CdmObservableAssetFxRateSourceFixing';
import { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
import { CdmObservableAssetIndexBaseSchema } from './CdmObservableAssetIndexBase';
import { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';
import { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
import { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';
import { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
import { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
import { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
import { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';
import { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
import { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';
import { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
import { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';
import { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';
import { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableAssetPriceCompositeSchema } from './CdmObservableAssetPriceComposite';
import { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
import { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';
import { CdmObservableAssetPriceTypeEnumSchema } from './CdmObservableAssetPriceTypeEnum';
import { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
import { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
import { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';
import { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
import { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
import { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
import { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
import { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';
import { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
import { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
import { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';
import { CdmObservableAssetTransactedPriceSchema } from './CdmObservableAssetTransactedPrice';
import { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
import { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
import { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
import { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';
import { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
import { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';
import { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
import { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
import { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
import { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';
import { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';
import { CdmObservableEventIndexEventConsequenceEnumSchema } from './CdmObservableEventIndexEventConsequenceEnum';
import { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
import { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
import { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
import { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';
import { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';
import { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';
import { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';
import { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
import { CdmObservableEventShareExtraordinaryEventEnumSchema } from './CdmObservableEventShareExtraordinaryEventEnum';
import { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';
import { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
import { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';
import { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
import { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
import { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';
import { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';
import { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
import { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
import { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
import { CdmProductAssetBondReferenceSchema } from './CdmProductAssetBondReference';
import { CdmProductAssetBoundedCorrelationSchema } from './CdmProductAssetBoundedCorrelation';
import { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';
import { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';
import { CdmProductAssetCashflowRepresentationSchema } from './CdmProductAssetCashflowRepresentation';
import { CdmProductAssetCommodityPayoutSchema } from './CdmProductAssetCommodityPayout';
import { CdmProductAssetCompoundingMethodEnumSchema } from './CdmProductAssetCompoundingMethodEnum';
import { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
import { CdmProductAssetCreditDefaultPayoutSchema } from './CdmProductAssetCreditDefaultPayout';
import { CdmProductAssetCreditSeniorityEnumSchema } from './CdmProductAssetCreditSeniorityEnum';
import { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
import { CdmProductAssetDiscountingMethodSchema } from './CdmProductAssetDiscountingMethod';
import { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';
import { CdmProductAssetDividendAmountTypeEnumSchema } from './CdmProductAssetDividendAmountTypeEnum';
import { CdmProductAssetDividendCompositionEnumSchema } from './CdmProductAssetDividendCompositionEnum';
import { CdmProductAssetDividendCurrencySchema } from './CdmProductAssetDividendCurrency';
import { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';
import { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';
import { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
import { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';
import { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';
import { CdmProductAssetDividendPeriodSchema } from './CdmProductAssetDividendPeriod';
import { CdmProductAssetDividendPeriodEnumSchema } from './CdmProductAssetDividendPeriodEnum';
import { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
import { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
import { CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema } from './CdmProductAssetFieldWithMetaIndexAnnexSourceEnum';
import { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';
import { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';
import { CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema } from './CdmProductAssetFinalPrincipalExchangeCalculationEnum';
import { CdmProductAssetFixedAmountCalculationDetailsSchema } from './CdmProductAssetFixedAmountCalculationDetails';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
import { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';
import { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
import { CdmProductAssetFloatingRateSchema } from './CdmProductAssetFloatingRate';
import { CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema } from './CdmProductAssetFloatingrateFloatingAmountCalculationDetails';
import { CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema } from './CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnum';
import { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
import { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';
import { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
import { CdmProductAssetFloatingRateBaseSchema } from './CdmProductAssetFloatingRateBase';
import { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
import { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
import { CdmProductAssetForeignExchangeSchema } from './CdmProductAssetForeignExchange';
import { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';
import { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
import { CdmProductAssetGeneralTermsSchema } from './CdmProductAssetGeneralTerms';
import { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
import { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';
import { CdmProductAssetInterestRatePayoutSchema } from './CdmProductAssetInterestRatePayout';
import { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';
import { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';
import { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';
import { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
import { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';
import { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetNonCashDividendTreatmentEnumSchema } from './CdmProductAssetNonCashDividendTreatmentEnum';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetProtectionTermsSchema } from './CdmProductAssetProtectionTerms';
import { CdmProductAssetRateSpecificationSchema } from './CdmProductAssetRateSpecification';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';
import { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
import { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
import { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';
import { CdmProductAssetReturnTermsBaseSchema } from './CdmProductAssetReturnTermsBase';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
import { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';
import { CdmProductAssetSettledEntityMatrixSchema } from './CdmProductAssetSettledEntityMatrix';
import { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
import { CdmProductAssetSpreadCalculationMethodEnumSchema } from './CdmProductAssetSpreadCalculationMethodEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
import { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';
import { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
import { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
import { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
import { CdmProductAssetVarianceCapFloorSchema } from './CdmProductAssetVarianceCapFloor';
import { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
import { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';
import { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';
import { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';
import { CdmProductCollateralAllCriteriaSchema } from './CdmProductCollateralAllCriteria';
import { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
import { CdmProductCollateralAnyCriteriaSchema } from './CdmProductCollateralAnyCriteria';
import { CdmProductCollateralAssetAgencyRatingSchema } from './CdmProductCollateralAssetAgencyRating';
import { CdmProductCollateralAssetCountryOfOriginSchema } from './CdmProductCollateralAssetCountryOfOrigin';
import { CdmProductCollateralAssetMaturitySchema } from './CdmProductCollateralAssetMaturity';
import { CdmProductCollateralAverageTradingVolumeSchema } from './CdmProductCollateralAverageTradingVolume';
import { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';
import { CdmProductCollateralCheckEligibilityResultSchema } from './CdmProductCollateralCheckEligibilityResult';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';
import { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
import { CdmProductCollateralCollateralCriteriaBaseSchema } from './CdmProductCollateralCollateralCriteriaBase';
import { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
import { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
import { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
import { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
import { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
import { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
import { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
import { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
import { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';
import { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';
import { CdmProductCollateralConcentrationLimitTypeEnumSchema } from './CdmProductCollateralConcentrationLimitTypeEnum';
import { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';
import { CdmProductCollateralCounterpartyOwnIssuePermittedSchema } from './CdmProductCollateralCounterpartyOwnIssuePermitted';
import { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
import { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
import { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';
import { CdmProductCollateralDistributionAndInterestPaymentSchema } from './CdmProductCollateralDistributionAndInterestPayment';
import { CdmProductCollateralDomesticCurrencyIssuedSchema } from './CdmProductCollateralDomesticCurrencyIssued';
import { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
import { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';
import { CdmProductCollateralEligibleCollateralSpecificationInstructionSchema } from './CdmProductCollateralEligibleCollateralSpecificationInstruction';
import { CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum';
import { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';
import { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';
import { CdmProductCollateralIssuerAgencyRatingSchema } from './CdmProductCollateralIssuerAgencyRating';
import { CdmProductCollateralIssuerCountryOfOriginSchema } from './CdmProductCollateralIssuerCountryOfOrigin';
import { CdmProductCollateralIssuerNameSchema } from './CdmProductCollateralIssuerName';
import { CdmProductCollateralListingExchangeSchema } from './CdmProductCollateralListingExchange';
import { CdmProductCollateralListingSectorSchema } from './CdmProductCollateralListingSector';
import { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';
import { CdmProductCollateralNegativeCriteriaSchema } from './CdmProductCollateralNegativeCriteria';
import { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';
import { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';
import { CdmProductCollateralSovereignAgencyRatingSchema } from './CdmProductCollateralSovereignAgencyRating';
import { CdmProductCollateralSpecificAssetSchema } from './CdmProductCollateralSpecificAsset';
import { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';
import { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';
import { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
import { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';
import { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';
import { CdmProductCommonScheduleCalculationPeriodDataSchema } from './CdmProductCommonScheduleCalculationPeriodData';
import { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
import { CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema } from './CdmProductCommonScheduleDateRelativeToCalculationPeriodDates';
import { CdmProductCommonScheduleDateRelativeToPaymentDatesSchema } from './CdmProductCommonScheduleDateRelativeToPaymentDates';
import { CdmProductCommonScheduleDateRelativeToValuationDatesSchema } from './CdmProductCommonScheduleDateRelativeToValuationDates';
import { CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema } from './CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment';
import { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';
import { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';
import { CdmProductCommonScheduleInitialFixingDateSchema } from './CdmProductCommonScheduleInitialFixingDate';
import { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';
import { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';
import { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';
import { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';
import { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';
import { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';
import { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
import { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
import { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
import { CdmProductCommonScheduleResetDatesSchema } from './CdmProductCommonScheduleResetDates';
import { CdmProductCommonScheduleResetFrequencySchema } from './CdmProductCommonScheduleResetFrequency';
import { CdmProductCommonScheduleResetRelativeToEnumSchema } from './CdmProductCommonScheduleResetRelativeToEnum';
import { CdmProductCommonScheduleStubCalculationPeriodAmountSchema } from './CdmProductCommonScheduleStubCalculationPeriodAmount';
import { CdmProductCommonScheduleStubPeriodSchema } from './CdmProductCommonScheduleStubPeriod';
import { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';
import { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';
import { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';
import { CdmProductCommonSettlementAssetFlowBaseSchema } from './CdmProductCommonSettlementAssetFlowBase';
import { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';
import { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
import { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
import { CdmProductCommonSettlementCashSettlementTermsSchema } from './CdmProductCommonSettlementCashSettlementTerms';
import { CdmProductCommonSettlementCommodityPriceReturnTermsSchema } from './CdmProductCommonSettlementCommodityPriceReturnTerms';
import { CdmProductCommonSettlementComputedAmountSchema } from './CdmProductCommonSettlementComputedAmount';
import { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
import { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';
import { CdmProductCommonSettlementFixedPriceSchema } from './CdmProductCommonSettlementFixedPrice';
import { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';
import { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
import { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';
import { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';
import { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';
import { CdmProductCommonSettlementPayoutBaseSchema } from './CdmProductCommonSettlementPayoutBase';
import { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';
import { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';
import { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';
import { CdmProductCommonSettlementPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementPhysicalSettlementTerms';
import { CdmProductCommonSettlementPricingDatesSchema } from './CdmProductCommonSettlementPricingDates';
import { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';
import { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
import { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';
import { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';
import { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
import { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';
import { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';
import { CdmProductCommonSettlementSettlementBaseSchema } from './CdmProductCommonSettlementSettlementBase';
import { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
import { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
import { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
import { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
import { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
import { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';
import { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
import { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
import { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';
import { CdmProductTemplateAsianSchema } from './CdmProductTemplateAsian';
import { CdmProductTemplateAssetLegSchema } from './CdmProductTemplateAssetLeg';
import { CdmProductTemplateAssetPayoutSchema } from './CdmProductTemplateAssetPayout';
import { CdmProductTemplateAssetPayoutTradeTypeEnumSchema } from './CdmProductTemplateAssetPayoutTradeTypeEnum';
import { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
import { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';
import { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';
import { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
import { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
import { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
import { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
import { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
import { CdmProductTemplateCancelableProvisionAdjustedDatesSchema } from './CdmProductTemplateCancelableProvisionAdjustedDates';
import { CdmProductTemplateCancellationEventSchema } from './CdmProductTemplateCancellationEvent';
import { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
import { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';
import { CdmProductTemplateDividendTermsSchema } from './CdmProductTemplateDividendTerms';
import { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';
import { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';
import { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
import { CdmProductTemplateExerciseFeeSchema } from './CdmProductTemplateExerciseFee';
import { CdmProductTemplateExerciseFeeScheduleSchema } from './CdmProductTemplateExerciseFeeSchedule';
import { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
import { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';
import { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
import { CdmProductTemplateExerciseProcedureSchema } from './CdmProductTemplateExerciseProcedure';
import { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
import { CdmProductTemplateExpirationTimeTypeEnumSchema } from './CdmProductTemplateExpirationTimeTypeEnum';
import { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';
import { CdmProductTemplateExtendibleProvisionAdjustedDatesSchema } from './CdmProductTemplateExtendibleProvisionAdjustedDates';
import { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';
import { CdmProductTemplateFixedPricePayoutSchema } from './CdmProductTemplateFixedPricePayout';
import { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
import { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
import { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
import { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';
import { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';
import { CdmProductTemplateMarginTypeEnumSchema } from './CdmProductTemplateMarginTypeEnum';
import { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';
import { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';
import { CdmProductTemplateMultipleExerciseSchema } from './CdmProductTemplateMultipleExercise';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';
import { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';
import { CdmProductTemplateOptionExerciseStyleEnumSchema } from './CdmProductTemplateOptionExerciseStyleEnum';
import { CdmProductTemplateOptionFeatureSchema } from './CdmProductTemplateOptionFeature';
import { CdmProductTemplateOptionPayoutSchema } from './CdmProductTemplateOptionPayout';
import { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';
import { CdmProductTemplateOptionTypeEnumSchema } from './CdmProductTemplateOptionTypeEnum';
import { CdmProductTemplatePartialExerciseSchema } from './CdmProductTemplatePartialExercise';
import { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
import { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';
import { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
import { CdmProductTemplatePerformancePayoutSchema } from './CdmProductTemplatePerformancePayout';
import { CdmProductTemplatePortfolioReturnTermsSchema } from './CdmProductTemplatePortfolioReturnTerms';
import { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';
import { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
import { CdmProductTemplateRepoDurationEnumSchema } from './CdmProductTemplateRepoDurationEnum';
import { CdmProductTemplateReturnTermsSchema } from './CdmProductTemplateReturnTerms';
import { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';
import { CdmProductTemplateSettlementPayoutSchema } from './CdmProductTemplateSettlementPayout';
import { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';
import { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';
import { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';
import { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';
import { CdmProductTemplateTradableProductSchema } from './CdmProductTemplateTradableProduct';
import { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';
import { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';
import { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';
import { CdmRegulationAddtlAttrbtsSchema } from './CdmRegulationAddtlAttrbts';
import { CdmRegulationBuyrSchema } from './CdmRegulationBuyr';
import { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
import { CdmRegulationDocumentSchema } from './CdmRegulationDocument';
import { CdmRegulationExctgPrsnSchema } from './CdmRegulationExctgPrsn';
import { CdmRegulationFinInstrmSchema } from './CdmRegulationFinInstrm';
import { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
import { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';
import { CdmRegulationIdSchema } from './CdmRegulationId';
import { CdmRegulationIndxSchema } from './CdmRegulationIndx';
import { CdmRegulationInvstmtDcsnPrsnSchema } from './CdmRegulationInvstmtDcsnPrsn';
import { CdmRegulationNewSchema } from './CdmRegulationNew';
import { CdmRegulationNmSchema } from './CdmRegulationNm';
import { CdmRegulationOrdrTrnsmssnSchema } from './CdmRegulationOrdrTrnsmssn';
import { CdmRegulationOthrSchema } from './CdmRegulationOthr';
import { CdmRegulationPricSchema } from './CdmRegulationPric';
import { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';
import { CdmRegulationQtySchema } from './CdmRegulationQty';
import { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
import { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';
import { CdmRegulationSellrSchema } from './CdmRegulationSellr';
import { CdmRegulationSnglSchema } from './CdmRegulationSngl';
import { CdmRegulationSwpSchema } from './CdmRegulationSwp';
import { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
import { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';
import { CdmRegulationTermSchema } from './CdmRegulationTerm';
import { CdmRegulationTxSchema } from './CdmRegulationTx';
import { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
import { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';
import { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
export { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
export { CdmBaseDatetimeAdjustableOrAdjustedDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedDate';
export { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
export { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
export { CdmBaseDatetimeAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeAdjustableOrRelativeDates';
export { CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema } from './CdmBaseDatetimeAdjustableRelativeOrPeriodicDates';
export { CdmBaseDatetimeAdjustedRelativeDateOffsetSchema } from './CdmBaseDatetimeAdjustedRelativeDateOffset';
export { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
export { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
export { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
export { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
export { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';
export { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
export { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
export { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
export { CdmBaseDatetimeCalculationPeriodFrequencySchema } from './CdmBaseDatetimeCalculationPeriodFrequency';
export { CdmBaseDatetimeCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeCommodityBusinessCalendarEnum';
export { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
export { CdmBaseDatetimeCustomisableOffsetSchema } from './CdmBaseDatetimeCustomisableOffset';
export { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
export { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
export { CdmBaseDatetimeDateTimeListSchema } from './CdmBaseDatetimeDateTimeList';
export { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
export { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
export { CdmBaseDatetimeDayOfWeekEnumSchema } from './CdmBaseDatetimeDayOfWeekEnum';
export { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
export { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
export { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
export { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
export { CdmBaseDatetimeFrequencySchema } from './CdmBaseDatetimeFrequency';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDate';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDates';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
export { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustments';
export { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
export { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
export { CdmBaseDatetimePeriodBoundSchema } from './CdmBaseDatetimePeriodBound';
export { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
export { CdmBaseDatetimePeriodExtendedEnumSchema } from './CdmBaseDatetimePeriodExtendedEnum';
export { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
export { CdmBaseDatetimePeriodRangeSchema } from './CdmBaseDatetimePeriodRange';
export { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';
export { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
export { CdmBaseDatetimeRelativeDatesSchema } from './CdmBaseDatetimeRelativeDates';
export { CdmBaseDatetimeRollConventionEnumSchema } from './CdmBaseDatetimeRollConventionEnum';
export { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
export { CdmBaseDatetimeTimeUnitEnumSchema } from './CdmBaseDatetimeTimeUnitEnum';
export { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
export { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
export { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
export { CdmBaseMathAveragingCalculationMethodEnumSchema } from './CdmBaseMathAveragingCalculationMethodEnum';
export { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
export { CdmBaseMathCapacityUnitEnumSchema } from './CdmBaseMathCapacityUnitEnum';
export { CdmBaseMathCompareOpSchema } from './CdmBaseMathCompareOp';
export { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
export { CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathFieldWithMetaNonNegativeQuantitySchedule';
export { CdmBaseMathFinancialUnitEnumSchema } from './CdmBaseMathFinancialUnitEnum';
export { CdmBaseMathMeasureSchema } from './CdmBaseMathMeasure';
export { CdmBaseMathMeasureBaseSchema } from './CdmBaseMathMeasureBase';
export { CdmBaseMathMeasureScheduleSchema } from './CdmBaseMathMeasureSchedule';
export { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
export { CdmBaseMathMoneyBoundSchema } from './CdmBaseMathMoneyBound';
export { CdmBaseMathMoneyRangeSchema } from './CdmBaseMathMoneyRange';
export { CdmBaseMathNonNegativeQuantitySchema } from './CdmBaseMathNonNegativeQuantity';
export { CdmBaseMathNonNegativeQuantityScheduleSchema } from './CdmBaseMathNonNegativeQuantitySchedule';
export { CdmBaseMathNonNegativeStepSchema } from './CdmBaseMathNonNegativeStep';
export { CdmBaseMathNumberBoundSchema } from './CdmBaseMathNumberBound';
export { CdmBaseMathNumberRangeSchema } from './CdmBaseMathNumberRange';
export { CdmBaseMathQuantifierEnumSchema } from './CdmBaseMathQuantifierEnum';
export { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
export { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
export { CdmBaseMathQuantityScheduleSchema } from './CdmBaseMathQuantitySchedule';
export { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
export { CdmBaseMathRoundingDirectionEnumSchema } from './CdmBaseMathRoundingDirectionEnum';
export { CdmBaseMathRoundingModeEnumSchema } from './CdmBaseMathRoundingModeEnum';
export { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
export { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';
export { CdmBaseMathWeatherUnitEnumSchema } from './CdmBaseMathWeatherUnitEnum';
export { CdmBaseStaticdataAssetCommonAssetSchema } from './CdmBaseStaticdataAssetCommonAsset';
export { CdmBaseStaticdataAssetCommonAssetBaseSchema } from './CdmBaseStaticdataAssetCommonAssetBase';
export { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
export { CdmBaseStaticdataAssetCommonAssetIdentifierSchema } from './CdmBaseStaticdataAssetCommonAssetIdentifier';
export { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
export { CdmBaseStaticdataAssetCommonAssetTypeSchema } from './CdmBaseStaticdataAssetCommonAssetType';
export { CdmBaseStaticdataAssetCommonAssetTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetTypeEnum';
export { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
export { CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonCollateralIssuerType';
export { CdmBaseStaticdataAssetCommonCollateralTaxonomySchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomy';
export { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
export { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
export { CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema } from './CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnum';
export { CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema } from './CdmBaseStaticdataAssetCommonCommodityProductDefinition';
export { CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema } from './CdmBaseStaticdataAssetCommonCommodityReferenceFramework';
export { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';
export { CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonCurrencyCodeEnum';
export { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
export { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';
export { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
export { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
export { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';
export { CdmBaseStaticdataAssetCommonDebtTypeSchema } from './CdmBaseStaticdataAssetCommonDebtType';
export { CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema } from './CdmBaseStaticdataAssetCommonDeliveryDateParameters';
export { CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema } from './CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum';
export { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
export { CdmBaseStaticdataAssetCommonEquityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonEquityTypeEnum';
export { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum';
export { CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema } from './CdmBaseStaticdataAssetCommonFundProductTypeEnum';
export { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
export { CdmBaseStaticdataAssetCommonInstrumentBaseSchema } from './CdmBaseStaticdataAssetCommonInstrumentBase';
export { CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema } from './CdmBaseStaticdataAssetCommonInstrumentTypeEnum';
export { CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCountryCodeEnum';
export { CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema } from './CdmBaseStaticdataAssetCommonISOCurrencyCodeEnum';
export { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
export { CdmBaseStaticdataAssetCommonListedDerivativeSchema } from './CdmBaseStaticdataAssetCommonListedDerivative';
export { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
export { CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMaturityTypeEnum';
export { CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema } from './CdmBaseStaticdataAssetCommonMoneyMarketTypeEnum';
export { CdmBaseStaticdataAssetCommonPriceSourceSchema } from './CdmBaseStaticdataAssetCommonPriceSource';
export { CdmBaseStaticdataAssetCommonProductIdentifierSchema } from './CdmBaseStaticdataAssetCommonProductIdentifier';
export { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
export { CdmBaseStaticdataAssetCommonProductTaxonomySchema } from './CdmBaseStaticdataAssetCommonProductTaxonomy';
export { CdmBaseStaticdataAssetCommonPutCallEnumSchema } from './CdmBaseStaticdataAssetCommonPutCallEnum';
export { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
export { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
export { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
export { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
export { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';
export { CdmBaseStaticdataAssetCommonTaxonomySchema } from './CdmBaseStaticdataAssetCommonTaxonomy';
export { CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema } from './CdmBaseStaticdataAssetCommonTaxonomyClassification';
export { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
export { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';
export { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
export { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
export { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
export { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
export { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
export { CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum';
export { CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum';
export { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
export { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
export { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
export { CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnum';
export { CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema } from './CdmBaseStaticdataIdentifierFieldWithMetaIdentifier';
export { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
export { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
export { CdmBaseStaticdataIdentifierLocationIdentifierSchema } from './CdmBaseStaticdataIdentifierLocationIdentifier';
export { CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema } from './CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum';
export { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
export { CdmBaseStaticdataPartyAccountTypeEnumSchema } from './CdmBaseStaticdataPartyAccountTypeEnum';
export { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
export { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
export { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
export { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
export { CdmBaseStaticdataPartyBusinessUnitSchema } from './CdmBaseStaticdataPartyBusinessUnit';
export { CdmBaseStaticdataPartyBuyerSellerSchema } from './CdmBaseStaticdataPartyBuyerSeller';
export { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';
export { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
export { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
export { CdmBaseStaticdataPartyEntityTypeEnumSchema } from './CdmBaseStaticdataPartyEntityTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
export { CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnum';
export { CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema } from './CdmBaseStaticdataPartyFieldWithMetaPersonIdentifier';
export { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccount';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPerson';
export { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
export { CdmBaseStaticdataPartyNaturalPersonSchema } from './CdmBaseStaticdataPartyNaturalPerson';
export { CdmBaseStaticdataPartyNaturalPersonRoleSchema } from './CdmBaseStaticdataPartyNaturalPersonRole';
export { CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema } from './CdmBaseStaticdataPartyNaturalPersonRoleEnum';
export { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
export { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
export { CdmBaseStaticdataPartyPartyIdentifierSchema } from './CdmBaseStaticdataPartyPartyIdentifier';
export { CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPartyIdentifierTypeEnum';
export { CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema } from './CdmBaseStaticdataPartyPartyReferencePayerReceiver';
export { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
export { CdmBaseStaticdataPartyPartyRoleEnumSchema } from './CdmBaseStaticdataPartyPartyRoleEnum';
export { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
export { CdmBaseStaticdataPartyPayerReceiverEnumSchema } from './CdmBaseStaticdataPartyPayerReceiverEnum';
export { CdmBaseStaticdataPartyPersonIdentifierSchema } from './CdmBaseStaticdataPartyPersonIdentifier';
export { CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema } from './CdmBaseStaticdataPartyPersonIdentifierTypeEnum';
export { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';
export { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
export { CdmBaseStaticdataPartyRelatedPartySchema } from './CdmBaseStaticdataPartyRelatedParty';
export { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';
export { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';
export { CdmEventCommonActionEnumSchema } from './CdmEventCommonActionEnum';
export { CdmEventCommonAffirmationStatusEnumSchema } from './CdmEventCommonAffirmationStatusEnum';
export { CdmEventCommonAssetTransferTypeEnumSchema } from './CdmEventCommonAssetTransferTypeEnum';
export { CdmEventCommonBillingInstructionSchema } from './CdmEventCommonBillingInstruction';
export { CdmEventCommonBillingRecordSchema } from './CdmEventCommonBillingRecord';
export { CdmEventCommonBillingRecordInstructionSchema } from './CdmEventCommonBillingRecordInstruction';
export { CdmEventCommonBillingSummarySchema } from './CdmEventCommonBillingSummary';
export { CdmEventCommonBillingSummaryInstructionSchema } from './CdmEventCommonBillingSummaryInstruction';
export { CdmEventCommonBusinessEventSchema } from './CdmEventCommonBusinessEvent';
export { CdmEventCommonCalculateTransferInstructionSchema } from './CdmEventCommonCalculateTransferInstruction';
export { CdmEventCommonCallTypeEnumSchema } from './CdmEventCommonCallTypeEnum';
export { CdmEventCommonClearingInstructionSchema } from './CdmEventCommonClearingInstruction';
export { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
export { CdmEventCommonCollateralPortfolioSchema } from './CdmEventCommonCollateralPortfolio';
export { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
export { CdmEventCommonCollateralStatusEnumSchema } from './CdmEventCommonCollateralStatusEnum';
export { CdmEventCommonConfirmationStatusEnumSchema } from './CdmEventCommonConfirmationStatusEnum';
export { CdmEventCommonContractDetailsSchema } from './CdmEventCommonContractDetails';
export { CdmEventCommonContractFormationInstructionSchema } from './CdmEventCommonContractFormationInstruction';
export { CdmEventCommonCorporateActionSchema } from './CdmEventCommonCorporateAction';
export { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
export { CdmEventCommonCounterpartyPositionBusinessEventSchema } from './CdmEventCommonCounterpartyPositionBusinessEvent';
export { CdmEventCommonCounterpartyPositionStateSchema } from './CdmEventCommonCounterpartyPositionState';
export { CdmEventCommonCreditEventSchema } from './CdmEventCommonCreditEvent';
export { CdmEventCommonCreditEventTypeEnumSchema } from './CdmEventCommonCreditEventTypeEnum';
export { CdmEventCommonEventIntentEnumSchema } from './CdmEventCommonEventIntentEnum';
export { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
export { CdmEventCommonExecutionInstructionSchema } from './CdmEventCommonExecutionInstruction';
export { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';
export { CdmEventCommonExerciseEventSchema } from './CdmEventCommonExerciseEvent';
export { CdmEventCommonExerciseInstructionSchema } from './CdmEventCommonExerciseInstruction';
export { CdmEventCommonExposureSchema } from './CdmEventCommonExposure';
export { CdmEventCommonHaircutIndicatorEnumSchema } from './CdmEventCommonHaircutIndicatorEnum';
export { CdmEventCommonIndexTransitionInstructionSchema } from './CdmEventCommonIndexTransitionInstruction';
export { CdmEventCommonInstructionSchema } from './CdmEventCommonInstruction';
export { CdmEventCommonInstructionFunctionEnumSchema } from './CdmEventCommonInstructionFunctionEnum';
export { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
export { CdmEventCommonMarginCallActionEnumSchema } from './CdmEventCommonMarginCallActionEnum';
export { CdmEventCommonMarginCallBaseSchema } from './CdmEventCommonMarginCallBase';
export { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
export { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
export { CdmEventCommonMarginCallIssuanceSchema } from './CdmEventCommonMarginCallIssuance';
export { CdmEventCommonMarginCallResponseSchema } from './CdmEventCommonMarginCallResponse';
export { CdmEventCommonMarginCallResponseActionSchema } from './CdmEventCommonMarginCallResponseAction';
export { CdmEventCommonMarginCallResponseTypeEnumSchema } from './CdmEventCommonMarginCallResponseTypeEnum';
export { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
export { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
export { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
export { CdmEventCommonMetafieldsReferenceWithMetaTradeSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTrade';
export { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
export { CdmEventCommonObservationEventSchema } from './CdmEventCommonObservationEvent';
export { CdmEventCommonObservationInstructionSchema } from './CdmEventCommonObservationInstruction';
export { CdmEventCommonPartyChangeInstructionSchema } from './CdmEventCommonPartyChangeInstruction';
export { CdmEventCommonPerformanceTransferTypeEnumSchema } from './CdmEventCommonPerformanceTransferTypeEnum';
export { CdmEventCommonPositionEventIntentEnumSchema } from './CdmEventCommonPositionEventIntentEnum';
export { CdmEventCommonPositionIdentifierSchema } from './CdmEventCommonPositionIdentifier';
export { CdmEventCommonPriceTimingEnumSchema } from './CdmEventCommonPriceTimingEnum';
export { CdmEventCommonPrimitiveInstructionSchema } from './CdmEventCommonPrimitiveInstruction';
export { CdmEventCommonQuantityChangeInstructionSchema } from './CdmEventCommonQuantityChangeInstruction';
export { CdmEventCommonRecordAmountTypeEnumSchema } from './CdmEventCommonRecordAmountTypeEnum';
export { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
export { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
export { CdmEventCommonResetSchema } from './CdmEventCommonReset';
export { CdmEventCommonResetInstructionSchema } from './CdmEventCommonResetInstruction';
export { CdmEventCommonReturnInstructionSchema } from './CdmEventCommonReturnInstruction';
export { CdmEventCommonScheduledTransferSchema } from './CdmEventCommonScheduledTransfer';
export { CdmEventCommonSecurityLendingInvoiceSchema } from './CdmEventCommonSecurityLendingInvoice';
export { CdmEventCommonSplitInstructionSchema } from './CdmEventCommonSplitInstruction';
export { CdmEventCommonStateSchema } from './CdmEventCommonState';
export { CdmEventCommonStockSplitInstructionSchema } from './CdmEventCommonStockSplitInstruction';
export { CdmEventCommonTermsChangeInstructionSchema } from './CdmEventCommonTermsChangeInstruction';
export { CdmEventCommonTradeSchema } from './CdmEventCommonTrade';
export { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
export { CdmEventCommonTradePricingReportSchema } from './CdmEventCommonTradePricingReport';
export { CdmEventCommonTradeStateSchema } from './CdmEventCommonTradeState';
export { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
export { CdmEventCommonTransferExpressionSchema } from './CdmEventCommonTransferExpression';
export { CdmEventCommonTransferInstructionSchema } from './CdmEventCommonTransferInstruction';
export { CdmEventCommonTransferStateSchema } from './CdmEventCommonTransferState';
export { CdmEventCommonTransferStatusEnumSchema } from './CdmEventCommonTransferStatusEnum';
export { CdmEventCommonValuationSchema } from './CdmEventCommonValuation';
export { CdmEventCommonValuationInstructionSchema } from './CdmEventCommonValuationInstruction';
export { CdmEventCommonValuationSourceEnumSchema } from './CdmEventCommonValuationSourceEnum';
export { CdmEventCommonValuationTypeEnumSchema } from './CdmEventCommonValuationTypeEnum';
export { CdmEventPositionAggregationParametersSchema } from './CdmEventPositionAggregationParameters';
export { CdmEventPositionAvailableInventorySchema } from './CdmEventPositionAvailableInventory';
export { CdmEventPositionAvailableInventoryRecordSchema } from './CdmEventPositionAvailableInventoryRecord';
export { CdmEventPositionAvailableInventoryTypeEnumSchema } from './CdmEventPositionAvailableInventoryTypeEnum';
export { CdmEventPositionContractBaseSchema } from './CdmEventPositionContractBase';
export { CdmEventPositionCounterpartyPositionSchema } from './CdmEventPositionCounterpartyPosition';
export { CdmEventPositionInventorySchema } from './CdmEventPositionInventory';
export { CdmEventPositionInventoryRecordSchema } from './CdmEventPositionInventoryRecord';
export { CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema } from './CdmEventPositionMetafieldsReferenceWithMetaPortfolioState';
export { CdmEventPositionPortfolioSchema } from './CdmEventPositionPortfolio';
export { CdmEventPositionPortfolioStateSchema } from './CdmEventPositionPortfolioState';
export { CdmEventPositionPositionSchema } from './CdmEventPositionPosition';
export { CdmEventPositionPositionStatusEnumSchema } from './CdmEventPositionPositionStatusEnum';
export { CdmEventPositionSecurityLocateSchema } from './CdmEventPositionSecurityLocate';
export { CdmEventWorkflowCreditLimitInformationSchema } from './CdmEventWorkflowCreditLimitInformation';
export { CdmEventWorkflowCreditLimitTypeEnumSchema } from './CdmEventWorkflowCreditLimitTypeEnum';
export { CdmEventWorkflowCreditLimitUtilisationSchema } from './CdmEventWorkflowCreditLimitUtilisation';
export { CdmEventWorkflowCreditLimitUtilisationPositionSchema } from './CdmEventWorkflowCreditLimitUtilisationPosition';
export { CdmEventWorkflowCustomisedWorkflowSchema } from './CdmEventWorkflowCustomisedWorkflow';
export { CdmEventWorkflowEventInstructionSchema } from './CdmEventWorkflowEventInstruction';
export { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';
export { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';
export { CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema } from './CdmEventWorkflowFieldWithMetaCreditLimitTypeEnum';
export { CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema } from './CdmEventWorkflowFieldWithMetaLimitLevelEnum';
export { CdmEventWorkflowLimitApplicableSchema } from './CdmEventWorkflowLimitApplicable';
export { CdmEventWorkflowLimitApplicableExtendedSchema } from './CdmEventWorkflowLimitApplicableExtended';
export { CdmEventWorkflowLimitLevelEnumSchema } from './CdmEventWorkflowLimitLevelEnum';
export { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';
export { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';
export { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
export { CdmEventWorkflowVelocitySchema } from './CdmEventWorkflowVelocity';
export { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
export { CdmEventWorkflowWorkflowSchema } from './CdmEventWorkflowWorkflow';
export { CdmEventWorkflowWorkflowStateSchema } from './CdmEventWorkflowWorkflowState';
export { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';
export { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';
export { CdmEventWorkflowWorkflowStepApprovalSchema } from './CdmEventWorkflowWorkflowStepApproval';
export { CdmLegaldocumentationCommonAddressForNoticesSchema } from './CdmLegaldocumentationCommonAddressForNotices';
export { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
export { CdmLegaldocumentationCommonAgreementTermsSchema } from './CdmLegaldocumentationCommonAgreementTerms';
export { CdmLegaldocumentationCommonClosedStateSchema } from './CdmLegaldocumentationCommonClosedState';
export { CdmLegaldocumentationCommonClosedStateEnumSchema } from './CdmLegaldocumentationCommonClosedStateEnum';
export { CdmLegaldocumentationCommonContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonContractualDefinitionsEnum';
export { CdmLegaldocumentationCommonContractualMatrixSchema } from './CdmLegaldocumentationCommonContractualMatrix';
export { CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonContractualSupplementTypeEnum';
export { CdmLegaldocumentationCommonContractualTermsSupplementSchema } from './CdmLegaldocumentationCommonContractualTermsSupplement';
export { CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportDocumentTermsEnum';
export { CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema } from './CdmLegaldocumentationCommonCreditSupportProviderTermsEnum';
export { CdmLegaldocumentationCommonExecutionLocationEnumSchema } from './CdmLegaldocumentationCommonExecutionLocationEnum';
export { CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnum';
export { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';
export { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
export { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
export { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';
export { CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnum';
export { CdmLegaldocumentationCommonGoverningLawEnumSchema } from './CdmLegaldocumentationCommonGoverningLawEnum';
export { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';
export { CdmLegaldocumentationCommonLegalAgreementBaseSchema } from './CdmLegaldocumentationCommonLegalAgreementBase';
export { CdmLegaldocumentationCommonLegalAgreementIdentificationSchema } from './CdmLegaldocumentationCommonLegalAgreementIdentification';
export { CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementPublisherEnum';
export { CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema } from './CdmLegaldocumentationCommonLegalAgreementTypeEnum';
export { CdmLegaldocumentationCommonLengthUnitEnumSchema } from './CdmLegaldocumentationCommonLengthUnitEnum';
export { CdmLegaldocumentationCommonMatrixTermEnumSchema } from './CdmLegaldocumentationCommonMatrixTermEnum';
export { CdmLegaldocumentationCommonMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonMatrixTypeEnum';
export { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';
export { CdmLegaldocumentationCommonOtherAgreementSchema } from './CdmLegaldocumentationCommonOtherAgreement';
export { CdmLegaldocumentationCommonOtherAgreementTermsSchema } from './CdmLegaldocumentationCommonOtherAgreementTerms';
export { CdmLegaldocumentationCommonResourceSchema } from './CdmLegaldocumentationCommonResource';
export { CdmLegaldocumentationCommonResourceLengthSchema } from './CdmLegaldocumentationCommonResourceLength';
export { CdmLegaldocumentationCommonResourceTypeEnumSchema } from './CdmLegaldocumentationCommonResourceTypeEnum';
export { CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityClauseEnum';
export { CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema } from './CdmLegaldocumentationCommonSpecifiedEntityTermsEnum';
export { CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema } from './CdmLegaldocumentationCommonTerminationCurrencyConditionEnum';
export { CdmLegaldocumentationCommonUmbrellaAgreementSchema } from './CdmLegaldocumentationCommonUmbrellaAgreement';
export { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';
export { CdmLegaldocumentationContractAgreementSchema } from './CdmLegaldocumentationContractAgreement';
export { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
export { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
export { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
export { CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema } from './CdmLegaldocumentationMasterAdditionalDisruptionEvents';
export { CdmLegaldocumentationMasterClauseSchema } from './CdmLegaldocumentationMasterClause';
export { CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema } from './CdmLegaldocumentationMasterDeterminationRolesAndTerms';
export { CdmLegaldocumentationMasterEquityAdditionalTermsSchema } from './CdmLegaldocumentationMasterEquityAdditionalTerms';
export { CdmLegaldocumentationMasterEquityCorporateEventsSchema } from './CdmLegaldocumentationMasterEquityCorporateEvents';
export { CdmLegaldocumentationMasterEquityMasterConfirmationSchema } from './CdmLegaldocumentationMasterEquityMasterConfirmation';
export { CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema } from './CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018';
export { CdmLegaldocumentationMasterExtraordinaryEventsSchema } from './CdmLegaldocumentationMasterExtraordinaryEvents';
export { CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnum';
export { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum';
export { CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum';
export { CdmLegaldocumentationMasterFxAdditionalTermsSchema } from './CdmLegaldocumentationMasterFxAdditionalTerms';
export { CdmLegaldocumentationMasterIndexAdjustmentEventsSchema } from './CdmLegaldocumentationMasterIndexAdjustmentEvents';
export { CdmLegaldocumentationMasterMasterAgreementClauseSchema } from './CdmLegaldocumentationMasterMasterAgreementClause';
export { CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnum';
export { CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema } from './CdmLegaldocumentationMasterMasterAgreementClauseVariant';
export { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
export { CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementTypeEnum';
export { CdmLegaldocumentationMasterMasterAgreementVariableSetSchema } from './CdmLegaldocumentationMasterMasterAgreementVariableSet';
export { CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema } from './CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnum';
export { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
export { CdmLegaldocumentationMasterMasterConfirmationBaseSchema } from './CdmLegaldocumentationMasterMasterConfirmationBase';
export { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
export { CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema } from './CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnum';
export { CdmLegaldocumentationMasterRepresentationsSchema } from './CdmLegaldocumentationMasterRepresentations';
export { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';
export { CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema } from './CdmLegaldocumentationMasterUnderlierSubstitutionProvision';
export { CdmMarginScheduleStandardizedScheduleSchema } from './CdmMarginScheduleStandardizedSchedule';
export { CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleAssetClassEnum';
export { CdmMarginScheduleStandardizedScheduleInitialMarginSchema } from './CdmMarginScheduleStandardizedScheduleInitialMargin';
export { CdmMarginScheduleStandardizedScheduleProductClassEnumSchema } from './CdmMarginScheduleStandardizedScheduleProductClassEnum';
export { CdmMarginScheduleStandardizedScheduleTradeInfoSchema } from './CdmMarginScheduleStandardizedScheduleTradeInfo';
export { CdmObservableAssetBasketSchema } from './CdmObservableAssetBasket';
export { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
export { CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateDetails';
export { CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeights';
export { CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema } from './CdmObservableAssetCalculatedrateCalculatedRateObservations';
export { CdmObservableAssetCalculatedrateCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationMethodEnum';
export { CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema } from './CdmObservableAssetCalculatedrateCalculationShiftMethodEnum';
export { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
export { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
export { CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationMethodEnum';
export { CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationStyleEnum';
export { CdmObservableAssetCalculatedrateObservationParametersSchema } from './CdmObservableAssetCalculatedrateObservationParameters';
export { CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema } from './CdmObservableAssetCalculatedrateObservationPeriodDatesEnum';
export { CdmObservableAssetCalculatedrateObservationShiftCalculationSchema } from './CdmObservableAssetCalculatedrateObservationShiftCalculation';
export { CdmObservableAssetCalculatedrateOffsetCalculationSchema } from './CdmObservableAssetCalculatedrateOffsetCalculation';
export { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
export { CdmObservableAssetCashCollateralValuationMethodSchema } from './CdmObservableAssetCashCollateralValuationMethod';
export { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
export { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
export { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
export { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
export { CdmObservableAssetCreditNotationSchema } from './CdmObservableAssetCreditNotation';
export { CdmObservableAssetCreditNotationBoundaryEnumSchema } from './CdmObservableAssetCreditNotationBoundaryEnum';
export { CdmObservableAssetCreditNotationMismatchResolutionEnumSchema } from './CdmObservableAssetCreditNotationMismatchResolutionEnum';
export { CdmObservableAssetCreditNotationsSchema } from './CdmObservableAssetCreditNotations';
export { CdmObservableAssetCreditRatingAgencyEnumSchema } from './CdmObservableAssetCreditRatingAgencyEnum';
export { CdmObservableAssetCreditRatingCreditWatchEnumSchema } from './CdmObservableAssetCreditRatingCreditWatchEnum';
export { CdmObservableAssetCreditRatingDebtSchema } from './CdmObservableAssetCreditRatingDebt';
export { CdmObservableAssetCreditRatingOutlookEnumSchema } from './CdmObservableAssetCreditRatingOutlookEnum';
export { CdmObservableAssetCsaTypeEnumSchema } from './CdmObservableAssetCsaTypeEnum';
export { CdmObservableAssetCurveSchema } from './CdmObservableAssetCurve';
export { CdmObservableAssetDividendApplicabilitySchema } from './CdmObservableAssetDividendApplicability';
export { CdmObservableAssetEquityIndexSchema } from './CdmObservableAssetEquityIndex';
export { CdmObservableAssetFallbackReferencePriceSchema } from './CdmObservableAssetFallbackReferencePrice';
export { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
export { CdmObservableAssetFieldWithMetaBasketConstituentSchema } from './CdmObservableAssetFieldWithMetaBasketConstituent';
export { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
export { CdmObservableAssetFieldWithMetaCreditNotationSchema } from './CdmObservableAssetFieldWithMetaCreditNotation';
export { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
export { CdmObservableAssetFieldWithMetaInterestRateIndexSchema } from './CdmObservableAssetFieldWithMetaInterestRateIndex';
export { CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema } from './CdmObservableAssetFieldWithMetaInterpolationMethodEnum';
export { CdmObservableAssetFieldWithMetaObservableSchema } from './CdmObservableAssetFieldWithMetaObservable';
export { CdmObservableAssetFieldWithMetaPriceScheduleSchema } from './CdmObservableAssetFieldWithMetaPriceSchedule';
export { CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetFieldWithMetaQuotedCurrencyPair';
export { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
export { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
export { CdmObservableAssetForeignExchangeRateIndexSchema } from './CdmObservableAssetForeignExchangeRateIndex';
export { CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationDefaults';
export { CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum';
export { CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema } from './CdmObservableAssetFroFloatingRateIndexCategoryEnum';
export { CdmObservableAssetFroFloatingRateIndexDefinitionSchema } from './CdmObservableAssetFroFloatingRateIndexDefinition';
export { CdmObservableAssetFroFloatingRateIndexIdentificationSchema } from './CdmObservableAssetFroFloatingRateIndexIdentification';
export { CdmObservableAssetFroFloatingRateIndexStyleEnumSchema } from './CdmObservableAssetFroFloatingRateIndexStyleEnum';
export { CdmObservableAssetFxInformationSourceSchema } from './CdmObservableAssetFxInformationSource';
export { CdmObservableAssetFxRateSchema } from './CdmObservableAssetFxRate';
export { CdmObservableAssetFxRateSourceFixingSchema } from './CdmObservableAssetFxRateSourceFixing';
export { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';
export { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
export { CdmObservableAssetIndexSchema } from './CdmObservableAssetIndex';
export { CdmObservableAssetIndexBaseSchema } from './CdmObservableAssetIndexBase';
export { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';
export { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
export { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
export { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';
export { CdmObservableAssetInterestRateIndexSchema } from './CdmObservableAssetInterestRateIndex';
export { CdmObservableAssetInterpolationMethodEnumSchema } from './CdmObservableAssetInterpolationMethodEnum';
export { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
export { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
export { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
export { CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema } from './CdmObservableAssetMetafieldsReferenceWithMetaMoney';
export { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
export { CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDates';
export { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
export { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
export { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';
export { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
export { CdmObservableAssetMultipleCreditNotationsSchema } from './CdmObservableAssetMultipleCreditNotations';
export { CdmObservableAssetMultipleDebtTypesSchema } from './CdmObservableAssetMultipleDebtTypes';
export { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
export { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
export { CdmObservableAssetOtherIndexSchema } from './CdmObservableAssetOtherIndex';
export { CdmObservableAssetPartyDeterminationEnumSchema } from './CdmObservableAssetPartyDeterminationEnum';
export { CdmObservableAssetPerformanceValuationDatesSchema } from './CdmObservableAssetPerformanceValuationDates';
export { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';
export { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';
export { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
export { CdmObservableAssetPriceCompositeSchema } from './CdmObservableAssetPriceComposite';
export { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
export { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';
export { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
export { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
export { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';
export { CdmObservableAssetPriceTypeEnumSchema } from './CdmObservableAssetPriceTypeEnum';
export { CdmObservableAssetQuotationRateTypeEnumSchema } from './CdmObservableAssetQuotationRateTypeEnum';
export { CdmObservableAssetQuotationSideEnumSchema } from './CdmObservableAssetQuotationSideEnum';
export { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';
export { CdmObservableAssetQuoteBasisEnumSchema } from './CdmObservableAssetQuoteBasisEnum';
export { CdmObservableAssetQuotedCurrencyPairSchema } from './CdmObservableAssetQuotedCurrencyPair';
export { CdmObservableAssetRateObservationSchema } from './CdmObservableAssetRateObservation';
export { CdmObservableAssetReferenceSwapCurveSchema } from './CdmObservableAssetReferenceSwapCurve';
export { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';
export { CdmObservableAssetSettlementRateOptionEnumSchema } from './CdmObservableAssetSettlementRateOptionEnum';
export { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
export { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';
export { CdmObservableAssetTransactedPriceSchema } from './CdmObservableAssetTransactedPrice';
export { CdmObservableAssetValuationDatesSchema } from './CdmObservableAssetValuationDates';
export { CdmObservableAssetValuationMethodSchema } from './CdmObservableAssetValuationMethod';
export { CdmObservableAssetValuationMethodEnumSchema } from './CdmObservableAssetValuationMethodEnum';
export { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';
export { CdmObservableAssetValuationSourceSchema } from './CdmObservableAssetValuationSource';
export { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
export { CdmObservableCommonTimeTypeEnumSchema } from './CdmObservableCommonTimeTypeEnum';
export { CdmObservableEventCreditEventNoticeSchema } from './CdmObservableEventCreditEventNotice';
export { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
export { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';
export { CdmObservableEventFailureToPaySchema } from './CdmObservableEventFailureToPay';
export { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
export { CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema } from './CdmObservableEventFieldWithMetaMarketDisruptionEnum';
export { CdmObservableEventFieldWithMetaRestructuringEnumSchema } from './CdmObservableEventFieldWithMetaRestructuringEnum';
export { CdmObservableEventGracePeriodExtensionSchema } from './CdmObservableEventGracePeriodExtension';
export { CdmObservableEventIndexEventConsequenceEnumSchema } from './CdmObservableEventIndexEventConsequenceEnum';
export { CdmObservableEventMarketDisruptionEnumSchema } from './CdmObservableEventMarketDisruptionEnum';
export { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
export { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
export { CdmObservableEventObservationSchema } from './CdmObservableEventObservation';
export { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';
export { CdmObservableEventPubliclyAvailableInformationSchema } from './CdmObservableEventPubliclyAvailableInformation';
export { CdmObservableEventRestructuringSchema } from './CdmObservableEventRestructuring';
export { CdmObservableEventRestructuringEnumSchema } from './CdmObservableEventRestructuringEnum';
export { CdmObservableEventShareExtraordinaryEventEnumSchema } from './CdmObservableEventShareExtraordinaryEventEnum';
export { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';
export { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';
export { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
export { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';
export { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
export { CdmProductAssetAssetDeliveryInformationSchema } from './CdmProductAssetAssetDeliveryInformation';
export { CdmProductAssetAssetDeliveryPeriodsSchema } from './CdmProductAssetAssetDeliveryPeriods';
export { CdmProductAssetAssetDeliveryProfileSchema } from './CdmProductAssetAssetDeliveryProfile';
export { CdmProductAssetAssetDeliveryProfileBlockSchema } from './CdmProductAssetAssetDeliveryProfileBlock';
export { CdmProductAssetBankHolidayTreatmentEnumSchema } from './CdmProductAssetBankHolidayTreatmentEnum';
export { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
export { CdmProductAssetBondReferenceSchema } from './CdmProductAssetBondReference';
export { CdmProductAssetBoundedCorrelationSchema } from './CdmProductAssetBoundedCorrelation';
export { CdmProductAssetBoundedVarianceSchema } from './CdmProductAssetBoundedVariance';
export { CdmProductAssetCalculationScheduleDeliveryPeriodsSchema } from './CdmProductAssetCalculationScheduleDeliveryPeriods';
export { CdmProductAssetCashflowRepresentationSchema } from './CdmProductAssetCashflowRepresentation';
export { CdmProductAssetCommodityPayoutSchema } from './CdmProductAssetCommodityPayout';
export { CdmProductAssetCompoundingMethodEnumSchema } from './CdmProductAssetCompoundingMethodEnum';
export { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
export { CdmProductAssetCreditDefaultPayoutSchema } from './CdmProductAssetCreditDefaultPayout';
export { CdmProductAssetCreditSeniorityEnumSchema } from './CdmProductAssetCreditSeniorityEnum';
export { CdmProductAssetDayDistributionEnumSchema } from './CdmProductAssetDayDistributionEnum';
export { CdmProductAssetDiscountingMethodSchema } from './CdmProductAssetDiscountingMethod';
export { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';
export { CdmProductAssetDividendAmountTypeEnumSchema } from './CdmProductAssetDividendAmountTypeEnum';
export { CdmProductAssetDividendCompositionEnumSchema } from './CdmProductAssetDividendCompositionEnum';
export { CdmProductAssetDividendCurrencySchema } from './CdmProductAssetDividendCurrency';
export { CdmProductAssetDividendDateReferenceSchema } from './CdmProductAssetDividendDateReference';
export { CdmProductAssetDividendDateReferenceEnumSchema } from './CdmProductAssetDividendDateReferenceEnum';
export { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
export { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';
export { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';
export { CdmProductAssetDividendPeriodSchema } from './CdmProductAssetDividendPeriod';
export { CdmProductAssetDividendPeriodEnumSchema } from './CdmProductAssetDividendPeriodEnum';
export { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
export { CdmProductAssetEquityUnderlierProvisionsSchema } from './CdmProductAssetEquityUnderlierProvisions';
export { CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema } from './CdmProductAssetFieldWithMetaIndexAnnexSourceEnum';
export { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';
export { CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema } from './CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum';
export { CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema } from './CdmProductAssetFinalPrincipalExchangeCalculationEnum';
export { CdmProductAssetFixedAmountCalculationDetailsSchema } from './CdmProductAssetFixedAmountCalculationDetails';
export { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
export { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';
export { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
export { CdmProductAssetFloatingRateSchema } from './CdmProductAssetFloatingRate';
export { CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema } from './CdmProductAssetFloatingrateFloatingAmountCalculationDetails';
export { CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema } from './CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnum';
export { CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingDetails';
export { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';
export { CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema } from './CdmProductAssetFloatingrateFloatingRateSettingDetails';
export { CdmProductAssetFloatingRateBaseSchema } from './CdmProductAssetFloatingRateBase';
export { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
export { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
export { CdmProductAssetForeignExchangeSchema } from './CdmProductAssetForeignExchange';
export { CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema } from './CdmProductAssetFPVFinalPriceElectionFallbackEnum';
export { CdmProductAssetFutureValueAmountSchema } from './CdmProductAssetFutureValueAmount';
export { CdmProductAssetGeneralTermsSchema } from './CdmProductAssetGeneralTerms';
export { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
export { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';
export { CdmProductAssetInterestRatePayoutSchema } from './CdmProductAssetInterestRatePayout';
export { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';
export { CdmProductAssetInterestShortfallCapEnumSchema } from './CdmProductAssetInterestShortfallCapEnum';
export { CdmProductAssetLoadTypeEnumSchema } from './CdmProductAssetLoadTypeEnum';
export { CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema } from './CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecification';
export { CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema } from './CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayout';
export { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
export { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
export { CdmProductAssetNonCashDividendTreatmentEnumSchema } from './CdmProductAssetNonCashDividendTreatmentEnum';
export { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
export { CdmProductAssetProtectionTermsSchema } from './CdmProductAssetProtectionTerms';
export { CdmProductAssetRateSpecificationSchema } from './CdmProductAssetRateSpecification';
export { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
export { CdmProductAssetRealisedVarianceMethodEnumSchema } from './CdmProductAssetRealisedVarianceMethodEnum';
export { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
export { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';
export { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
export { CdmProductAssetReferencePoolSchema } from './CdmProductAssetReferencePool';
export { CdmProductAssetReferencePoolItemSchema } from './CdmProductAssetReferencePoolItem';
export { CdmProductAssetReturnTermsBaseSchema } from './CdmProductAssetReturnTermsBase';
export { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';
export { CdmProductAssetRollSourceCalendarEnumSchema } from './CdmProductAssetRollSourceCalendarEnum';
export { CdmProductAssetSettledEntityMatrixSchema } from './CdmProductAssetSettledEntityMatrix';
export { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
export { CdmProductAssetSpreadCalculationMethodEnumSchema } from './CdmProductAssetSpreadCalculationMethodEnum';
export { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
export { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
export { CdmProductAssetStubFloatingRateSchema } from './CdmProductAssetStubFloatingRate';
export { CdmProductAssetStubValueSchema } from './CdmProductAssetStubValue';
export { CdmProductAssetTrancheSchema } from './CdmProductAssetTranche';
export { CdmProductAssetValuationTermsSchema } from './CdmProductAssetValuationTerms';
export { CdmProductAssetVarianceCapFloorSchema } from './CdmProductAssetVarianceCapFloor';
export { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
export { CdmProductAssetVolatilityCapFloorSchema } from './CdmProductAssetVolatilityCapFloor';
export { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';
export { CdmProductCollateralAgencyRatingCriteriaSchema } from './CdmProductCollateralAgencyRatingCriteria';
export { CdmProductCollateralAllCriteriaSchema } from './CdmProductCollateralAllCriteria';
export { CdmProductCollateralAlternativeToInterestAmountEnumSchema } from './CdmProductCollateralAlternativeToInterestAmountEnum';
export { CdmProductCollateralAnyCriteriaSchema } from './CdmProductCollateralAnyCriteria';
export { CdmProductCollateralAssetAgencyRatingSchema } from './CdmProductCollateralAssetAgencyRating';
export { CdmProductCollateralAssetCountryOfOriginSchema } from './CdmProductCollateralAssetCountryOfOrigin';
export { CdmProductCollateralAssetMaturitySchema } from './CdmProductCollateralAssetMaturity';
export { CdmProductCollateralAverageTradingVolumeSchema } from './CdmProductCollateralAverageTradingVolume';
export { CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema } from './CdmProductCollateralAverageTradingVolumeMethodologyEnum';
export { CdmProductCollateralCheckEligibilityResultSchema } from './CdmProductCollateralCheckEligibilityResult';
export { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
export { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';
export { CdmProductCollateralCollateralCriteriaSchema } from './CdmProductCollateralCollateralCriteria';
export { CdmProductCollateralCollateralCriteriaBaseSchema } from './CdmProductCollateralCollateralCriteriaBase';
export { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
export { CdmProductCollateralCollateralInterestHandlingEnumSchema } from './CdmProductCollateralCollateralInterestHandlingEnum';
export { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
export { CdmProductCollateralCollateralInterestNotificationSchema } from './CdmProductCollateralCollateralInterestNotification';
export { CdmProductCollateralCollateralInterestParametersSchema } from './CdmProductCollateralCollateralInterestParameters';
export { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';
export { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
export { CdmProductCollateralCollateralTreatmentSchema } from './CdmProductCollateralCollateralTreatment';
export { CdmProductCollateralCollateralTypeEnumSchema } from './CdmProductCollateralCollateralTypeEnum';
export { CdmProductCollateralCollateralValuationTreatmentSchema } from './CdmProductCollateralCollateralValuationTreatment';
export { CdmProductCollateralConcentrationLimitSchema } from './CdmProductCollateralConcentrationLimit';
export { CdmProductCollateralConcentrationLimitCriteriaSchema } from './CdmProductCollateralConcentrationLimitCriteria';
export { CdmProductCollateralConcentrationLimitTypeEnumSchema } from './CdmProductCollateralConcentrationLimitTypeEnum';
export { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';
export { CdmProductCollateralCounterpartyOwnIssuePermittedSchema } from './CdmProductCollateralCounterpartyOwnIssuePermitted';
export { CdmProductCollateralCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralCreditSupportAgreementTypeEnum';
export { CdmProductCollateralDeliveryAmountSchema } from './CdmProductCollateralDeliveryAmount';
export { CdmProductCollateralDeliveryAmountElectionEnumSchema } from './CdmProductCollateralDeliveryAmountElectionEnum';
export { CdmProductCollateralDistributionAndInterestPaymentSchema } from './CdmProductCollateralDistributionAndInterestPayment';
export { CdmProductCollateralDomesticCurrencyIssuedSchema } from './CdmProductCollateralDomesticCurrencyIssued';
export { CdmProductCollateralEligibilityQuerySchema } from './CdmProductCollateralEligibilityQuery';
export { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';
export { CdmProductCollateralEligibleCollateralSpecificationSchema } from './CdmProductCollateralEligibleCollateralSpecification';
export { CdmProductCollateralEligibleCollateralSpecificationInstructionSchema } from './CdmProductCollateralEligibleCollateralSpecificationInstruction';
export { CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema } from './CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnum';
export { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';
export { CdmProductCollateralInterestAmountApplicationSchema } from './CdmProductCollateralInterestAmountApplication';
export { CdmProductCollateralIssuerAgencyRatingSchema } from './CdmProductCollateralIssuerAgencyRating';
export { CdmProductCollateralIssuerCountryOfOriginSchema } from './CdmProductCollateralIssuerCountryOfOrigin';
export { CdmProductCollateralIssuerNameSchema } from './CdmProductCollateralIssuerName';
export { CdmProductCollateralListingExchangeSchema } from './CdmProductCollateralListingExchange';
export { CdmProductCollateralListingSectorSchema } from './CdmProductCollateralListingSector';
export { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';
export { CdmProductCollateralNegativeCriteriaSchema } from './CdmProductCollateralNegativeCriteria';
export { CdmProductCollateralRatingPriorityResolutionEnumSchema } from './CdmProductCollateralRatingPriorityResolutionEnum';
export { CdmProductCollateralReturnAmountSchema } from './CdmProductCollateralReturnAmount';
export { CdmProductCollateralSovereignAgencyRatingSchema } from './CdmProductCollateralSovereignAgencyRating';
export { CdmProductCollateralSpecificAssetSchema } from './CdmProductCollateralSpecificAsset';
export { CdmProductCollateralSubstitutionProvisionsSchema } from './CdmProductCollateralSubstitutionProvisions';
export { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
export { CdmProductCommonScheduleAmountScheduleSchema } from './CdmProductCommonScheduleAmountSchedule';
export { CdmProductCommonScheduleAveragingObservationListSchema } from './CdmProductCommonScheduleAveragingObservationList';
export { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
export { CdmProductCommonScheduleCalculationPeriodSchema } from './CdmProductCommonScheduleCalculationPeriod';
export { CdmProductCommonScheduleCalculationPeriodBaseSchema } from './CdmProductCommonScheduleCalculationPeriodBase';
export { CdmProductCommonScheduleCalculationPeriodDataSchema } from './CdmProductCommonScheduleCalculationPeriodData';
export { CdmProductCommonScheduleCalculationPeriodDatesSchema } from './CdmProductCommonScheduleCalculationPeriodDates';
export { CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema } from './CdmProductCommonScheduleDateRelativeToCalculationPeriodDates';
export { CdmProductCommonScheduleDateRelativeToPaymentDatesSchema } from './CdmProductCommonScheduleDateRelativeToPaymentDates';
export { CdmProductCommonScheduleDateRelativeToValuationDatesSchema } from './CdmProductCommonScheduleDateRelativeToValuationDates';
export { CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema } from './CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment';
export { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';
export { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';
export { CdmProductCommonScheduleInitialFixingDateSchema } from './CdmProductCommonScheduleInitialFixingDate';
export { CdmProductCommonScheduleLagSchema } from './CdmProductCommonScheduleLag';
export { CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDates';
export { CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema } from './CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDates';
export { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';
export { CdmProductCommonScheduleObservationDatesSchema } from './CdmProductCommonScheduleObservationDates';
export { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
export { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
export { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';
export { CdmProductCommonSchedulePaymentCalculationPeriodSchema } from './CdmProductCommonSchedulePaymentCalculationPeriod';
export { CdmProductCommonSchedulePaymentDatesSchema } from './CdmProductCommonSchedulePaymentDates';
export { CdmProductCommonSchedulePaymentDateScheduleSchema } from './CdmProductCommonSchedulePaymentDateSchedule';
export { CdmProductCommonSchedulePayRelativeToEnumSchema } from './CdmProductCommonSchedulePayRelativeToEnum';
export { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
export { CdmProductCommonScheduleResetDatesSchema } from './CdmProductCommonScheduleResetDates';
export { CdmProductCommonScheduleResetFrequencySchema } from './CdmProductCommonScheduleResetFrequency';
export { CdmProductCommonScheduleResetRelativeToEnumSchema } from './CdmProductCommonScheduleResetRelativeToEnum';
export { CdmProductCommonScheduleStubCalculationPeriodAmountSchema } from './CdmProductCommonScheduleStubCalculationPeriodAmount';
export { CdmProductCommonScheduleStubPeriodSchema } from './CdmProductCommonScheduleStubPeriod';
export { CdmProductCommonScheduleStubPeriodTypeEnumSchema } from './CdmProductCommonScheduleStubPeriodTypeEnum';
export { CdmProductCommonScheduleWeeklyRollConventionEnumSchema } from './CdmProductCommonScheduleWeeklyRollConventionEnum';
export { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';
export { CdmProductCommonSettlementAssetFlowBaseSchema } from './CdmProductCommonSettlementAssetFlowBase';
export { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';
export { CdmProductCommonSettlementCashflowTypeSchema } from './CdmProductCommonSettlementCashflowType';
export { CdmProductCommonSettlementCashSettlementMethodEnumSchema } from './CdmProductCommonSettlementCashSettlementMethodEnum';
export { CdmProductCommonSettlementCashSettlementTermsSchema } from './CdmProductCommonSettlementCashSettlementTerms';
export { CdmProductCommonSettlementCommodityPriceReturnTermsSchema } from './CdmProductCommonSettlementCommodityPriceReturnTerms';
export { CdmProductCommonSettlementComputedAmountSchema } from './CdmProductCommonSettlementComputedAmount';
export { CdmProductCommonSettlementDeliverableObligationsSchema } from './CdmProductCommonSettlementDeliverableObligations';
export { CdmProductCommonSettlementDeliveryMethodEnumSchema } from './CdmProductCommonSettlementDeliveryMethodEnum';
export { CdmProductCommonSettlementFixedPriceSchema } from './CdmProductCommonSettlementFixedPrice';
export { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';
export { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
export { CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantity';
export { CdmProductCommonSettlementPaymentDetailSchema } from './CdmProductCommonSettlementPaymentDetail';
export { CdmProductCommonSettlementPaymentDiscountingSchema } from './CdmProductCommonSettlementPaymentDiscounting';
export { CdmProductCommonSettlementPaymentRuleSchema } from './CdmProductCommonSettlementPaymentRule';
export { CdmProductCommonSettlementPayoutBaseSchema } from './CdmProductCommonSettlementPayoutBase';
export { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';
export { CdmProductCommonSettlementPercentageRuleSchema } from './CdmProductCommonSettlementPercentageRule';
export { CdmProductCommonSettlementPhysicalSettlementPeriodSchema } from './CdmProductCommonSettlementPhysicalSettlementPeriod';
export { CdmProductCommonSettlementPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementPhysicalSettlementTerms';
export { CdmProductCommonSettlementPricingDatesSchema } from './CdmProductCommonSettlementPricingDates';
export { CdmProductCommonSettlementPrincipalPaymentSchema } from './CdmProductCommonSettlementPrincipalPayment';
export { CdmProductCommonSettlementPrincipalPaymentsSchema } from './CdmProductCommonSettlementPrincipalPayments';
export { CdmProductCommonSettlementPrincipalPaymentScheduleSchema } from './CdmProductCommonSettlementPrincipalPaymentSchedule';
export { CdmProductCommonSettlementQuantityMultiplierSchema } from './CdmProductCommonSettlementQuantityMultiplier';
export { CdmProductCommonSettlementResolvablePriceQuantitySchema } from './CdmProductCommonSettlementResolvablePriceQuantity';
export { CdmProductCommonSettlementRollFeatureSchema } from './CdmProductCommonSettlementRollFeature';
export { CdmProductCommonSettlementScheduledTransferEnumSchema } from './CdmProductCommonSettlementScheduledTransferEnum';
export { CdmProductCommonSettlementSettlementBaseSchema } from './CdmProductCommonSettlementSettlementBase';
export { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
export { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
export { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
export { CdmProductCommonSettlementSettlementTermsSchema } from './CdmProductCommonSettlementSettlementTerms';
export { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
export { CdmProductCommonSettlementShapingProvisionSchema } from './CdmProductCommonSettlementShapingProvision';
export { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
export { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
export { CdmProductCommonSettlementValuationDateSchema } from './CdmProductCommonSettlementValuationDate';
export { CdmProductTemplateAsianSchema } from './CdmProductTemplateAsian';
export { CdmProductTemplateAssetLegSchema } from './CdmProductTemplateAssetLeg';
export { CdmProductTemplateAssetPayoutSchema } from './CdmProductTemplateAssetPayout';
export { CdmProductTemplateAssetPayoutTradeTypeEnumSchema } from './CdmProductTemplateAssetPayoutTradeTypeEnum';
export { CdmProductTemplateAutomaticExerciseSchema } from './CdmProductTemplateAutomaticExercise';
export { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';
export { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';
export { CdmProductTemplateAveragingStrikeFeatureSchema } from './CdmProductTemplateAveragingStrikeFeature';
export { CdmProductTemplateBarrierSchema } from './CdmProductTemplateBarrier';
export { CdmProductTemplateCalculationScheduleSchema } from './CdmProductTemplateCalculationSchedule';
export { CdmProductTemplateCalendarSpreadSchema } from './CdmProductTemplateCalendarSpread';
export { CdmProductTemplateCallingPartyEnumSchema } from './CdmProductTemplateCallingPartyEnum';
export { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
export { CdmProductTemplateCancelableProvisionAdjustedDatesSchema } from './CdmProductTemplateCancelableProvisionAdjustedDates';
export { CdmProductTemplateCancellationEventSchema } from './CdmProductTemplateCancellationEvent';
export { CdmProductTemplateCompositeSchema } from './CdmProductTemplateComposite';
export { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';
export { CdmProductTemplateDividendTermsSchema } from './CdmProductTemplateDividendTerms';
export { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';
export { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
export { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';
export { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
export { CdmProductTemplateExerciseFeeSchema } from './CdmProductTemplateExerciseFee';
export { CdmProductTemplateExerciseFeeScheduleSchema } from './CdmProductTemplateExerciseFeeSchedule';
export { CdmProductTemplateExerciseNoticeSchema } from './CdmProductTemplateExerciseNotice';
export { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';
export { CdmProductTemplateExercisePeriodSchema } from './CdmProductTemplateExercisePeriod';
export { CdmProductTemplateExerciseProcedureSchema } from './CdmProductTemplateExerciseProcedure';
export { CdmProductTemplateExerciseTermsSchema } from './CdmProductTemplateExerciseTerms';
export { CdmProductTemplateExpirationTimeTypeEnumSchema } from './CdmProductTemplateExpirationTimeTypeEnum';
export { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';
export { CdmProductTemplateExtendibleProvisionAdjustedDatesSchema } from './CdmProductTemplateExtendibleProvisionAdjustedDates';
export { CdmProductTemplateExtensionEventSchema } from './CdmProductTemplateExtensionEvent';
export { CdmProductTemplateFixedPricePayoutSchema } from './CdmProductTemplateFixedPricePayout';
export { CdmProductTemplateFxFeatureSchema } from './CdmProductTemplateFxFeature';
export { CdmProductTemplateKnockSchema } from './CdmProductTemplateKnock';
export { CdmProductTemplateMandatoryEarlyTerminationSchema } from './CdmProductTemplateMandatoryEarlyTermination';
export { CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateMandatoryEarlyTerminationAdjustedDates';
export { CdmProductTemplateManualExerciseSchema } from './CdmProductTemplateManualExercise';
export { CdmProductTemplateMarginTypeEnumSchema } from './CdmProductTemplateMarginTypeEnum';
export { CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaOptionPayout';
export { CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema } from './CdmProductTemplateMetafieldsReferenceWithMetaPayout';
export { CdmProductTemplateMultipleExerciseSchema } from './CdmProductTemplateMultipleExercise';
export { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
export { CdmProductTemplateOptionalEarlyTerminationSchema } from './CdmProductTemplateOptionalEarlyTermination';
export { CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema } from './CdmProductTemplateOptionalEarlyTerminationAdjustedDates';
export { CdmProductTemplateOptionExerciseStyleEnumSchema } from './CdmProductTemplateOptionExerciseStyleEnum';
export { CdmProductTemplateOptionFeatureSchema } from './CdmProductTemplateOptionFeature';
export { CdmProductTemplateOptionPayoutSchema } from './CdmProductTemplateOptionPayout';
export { CdmProductTemplateOptionStrikeSchema } from './CdmProductTemplateOptionStrike';
export { CdmProductTemplateOptionTypeEnumSchema } from './CdmProductTemplateOptionTypeEnum';
export { CdmProductTemplatePartialExerciseSchema } from './CdmProductTemplatePartialExercise';
export { CdmProductTemplatePassThroughSchema } from './CdmProductTemplatePassThrough';
export { CdmProductTemplatePassThroughItemSchema } from './CdmProductTemplatePassThroughItem';
export { CdmProductTemplatePayoutSchema } from './CdmProductTemplatePayout';
export { CdmProductTemplatePerformancePayoutSchema } from './CdmProductTemplatePerformancePayout';
export { CdmProductTemplatePortfolioReturnTermsSchema } from './CdmProductTemplatePortfolioReturnTerms';
export { CdmProductTemplateProductSchema } from './CdmProductTemplateProduct';
export { CdmProductTemplateQuantoSchema } from './CdmProductTemplateQuanto';
export { CdmProductTemplateRepoDurationEnumSchema } from './CdmProductTemplateRepoDurationEnum';
export { CdmProductTemplateReturnTermsSchema } from './CdmProductTemplateReturnTerms';
export { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';
export { CdmProductTemplateSettlementPayoutSchema } from './CdmProductTemplateSettlementPayout';
export { CdmProductTemplateStrategyFeatureSchema } from './CdmProductTemplateStrategyFeature';
export { CdmProductTemplateStrikeSchema } from './CdmProductTemplateStrike';
export { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';
export { CdmProductTemplateStrikeSpreadSchema } from './CdmProductTemplateStrikeSpread';
export { CdmProductTemplateTerminationProvisionSchema } from './CdmProductTemplateTerminationProvision';
export { CdmProductTemplateTradableProductSchema } from './CdmProductTemplateTradableProduct';
export { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';
export { CdmProductTemplateTransferableProductSchema } from './CdmProductTemplateTransferableProduct';
export { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';
export { CdmRegulationAcctOwnrSchema } from './CdmRegulationAcctOwnr';
export { CdmRegulationAddtlAttrbtsSchema } from './CdmRegulationAddtlAttrbts';
export { CdmRegulationBuyrSchema } from './CdmRegulationBuyr';
export { CdmRegulationDerivInstrmAttrbtsSchema } from './CdmRegulationDerivInstrmAttrbts';
export { CdmRegulationDocumentSchema } from './CdmRegulationDocument';
export { CdmRegulationExctgPrsnSchema } from './CdmRegulationExctgPrsn';
export { CdmRegulationFinInstrmSchema } from './CdmRegulationFinInstrm';
export { CdmRegulationFinInstrmGnlAttrbtsSchema } from './CdmRegulationFinInstrmGnlAttrbts';
export { CdmRegulationFinInstrmRptgTxRptSchema } from './CdmRegulationFinInstrmRptgTxRpt';
export { CdmRegulationIdSchema } from './CdmRegulationId';
export { CdmRegulationIndxSchema } from './CdmRegulationIndx';
export { CdmRegulationInvstmtDcsnPrsnSchema } from './CdmRegulationInvstmtDcsnPrsn';
export { CdmRegulationNewSchema } from './CdmRegulationNew';
export { CdmRegulationNmSchema } from './CdmRegulationNm';
export { CdmRegulationOrdrTrnsmssnSchema } from './CdmRegulationOrdrTrnsmssn';
export { CdmRegulationOthrSchema } from './CdmRegulationOthr';
export { CdmRegulationPricSchema } from './CdmRegulationPric';
export { CdmRegulationPrsnSchema } from './CdmRegulationPrsn';
export { CdmRegulationQtySchema } from './CdmRegulationQty';
export { CdmRegulationRefRateSchema } from './CdmRegulationRefRate';
export { CdmRegulationSchmeNmSchema } from './CdmRegulationSchmeNm';
export { CdmRegulationSellrSchema } from './CdmRegulationSellr';
export { CdmRegulationSnglSchema } from './CdmRegulationSngl';
export { CdmRegulationSwpSchema } from './CdmRegulationSwp';
export { CdmRegulationSwpInSchema } from './CdmRegulationSwpIn';
export { CdmRegulationSwpOutSchema } from './CdmRegulationSwpOut';
export { CdmRegulationTermSchema } from './CdmRegulationTerm';
export { CdmRegulationTxSchema } from './CdmRegulationTx';
export { CdmRegulationUndrlygInstrmSchema } from './CdmRegulationUndrlygInstrm';
export { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
export { ComRosettaModelLibMetaKeySchema } from './ComRosettaModelLibMetaKey';
export { ComRosettaModelLibMetaReferenceSchema } from './ComRosettaModelLibMetaReference';
export { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';
export { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export const schemas: Record<string, ZodTypeAny> = {
  '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn':
    CdmBaseDatetimeAdjustableDateSchema,
  '3UQyaunu7noHsnkXtFNJHuwdv1AH6Uq6MZ1bZSHN9hYW':
    CdmBaseDatetimeAdjustableDatesSchema,
  EMewkrxSUCQddjXsDB5V833VQJGmxV68bbryLqrUJfKz:
    CdmBaseDatetimeAdjustableOrAdjustedDateSchema,
  BwTCpPFhSqEbgjkUmssmzp1ig5hb3QSdGhqroiTDsJvJ:
    CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema,
  '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd':
    CdmBaseDatetimeAdjustableOrRelativeDateSchema,
  '8PKDuaLpjNXiaiuAt3sN69jDVCEBaEXv2LsUjsa8MMZS':
    CdmBaseDatetimeAdjustableOrRelativeDatesSchema,
  Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr:
    CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema,
  DMeQ9ECaWbb3DdSYMpZmd7xvFu5cGC4dptRizNCch8D2:
    CdmBaseDatetimeAdjustedRelativeDateOffsetSchema,
  '4gPZWnb1vTp42ssUQer9eA7aUVRjtisHDCL1LhrNuH44':
    CdmBaseDatetimeAveragingScheduleSchema,
  T68z84ntdBb19juBApDyMAndAVUzzmotTGUTuJnHV3D:
    CdmBaseDatetimeBusinessCenterEnumSchema,
  AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH:
    CdmBaseDatetimeBusinessCentersSchema,
  AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC:
    CdmBaseDatetimeBusinessCenterTimeSchema,
  ANtReDKQ2SuFnWeerTjR3U9Voqzy5V6qqQgX7JtosAi6:
    CdmBaseDatetimeBusinessDateRangeSchema,
  FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd:
    CdmBaseDatetimeBusinessDayAdjustmentsSchema,
  EP4PK7ibh1EaWh9sLTjFcwVikiRQECurvR5Nb9ZPbJCs:
    CdmBaseDatetimeBusinessDayConventionEnumSchema,
  BTY81xfhqyEEMs1ZiVvEnaRbfLvALxLiEYU9aNdedseZ:
    CdmBaseDatetimeCalculationFrequencySchema,
  DVb1fCp6T4qAajXVrhWU73Yx25sFe7MdqmytdKoz9LuJ:
    CdmBaseDatetimeCalculationPeriodFrequencySchema,
  H1brAJ4DsQvt9MbnoyYuq5L7Z5nJJ5rxyrfmYTDXT7VJ:
    CdmBaseDatetimeCommodityBusinessCalendarEnumSchema,
  '5ojsHNF1jNcdgizZKEHoVtM4tCrpwCnSYbccLWJLnS5A':
    CdmBaseDatetimeCompoundingTypeEnumSchema,
  HF3m5gt9EEbudTKjeLeqgptEHRPniWju6A4n1YYAUejj:
    CdmBaseDatetimeCustomisableOffsetSchema,
  '6FERZPz42ZzYn2R9FbEZtJ4sscsq9wYcg9tANknRZjnM': CdmBaseDatetimeDateListSchema,
  HzWZdNo2fx1o4EhUXn1aUnQgTLJm9PASFfSrNzJzLiT8: CdmBaseDatetimeDateRangeSchema,
  '6geCuQi9d7Zffp3p3nxFjJBawUz6oUHKH19RmptB9h3H':
    CdmBaseDatetimeDateTimeListSchema,
  Gg7yf6CJg1QvGhkZFmdUsZR7t1wfdN4PpLPrymefw2Yx:
    CdmBaseDatetimeDaycountDayCountFractionEnumSchema,
  '5Dtu3pEFyiD2KsqxowhubHTHw758PbJQU3gY7JfV51ou':
    CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema,
  HF3CKQiKCRyZGK1Um3jMYPpiothNepYg5tDmY7KzPphK:
    CdmBaseDatetimeDayOfWeekEnumSchema,
  '5TzmGki42MGuPUhmSXFrfufu3WDLpyQMvv91eWXoxniX':
    CdmBaseDatetimeDayTypeEnumSchema,
  '2Y1JVjnbbb22zrKVYtvVRfAkqMEsujAWoUHytGJxuprQ':
    CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema,
  CFEktjfDYZuSwRvSqRUCwDkDa6kpoBHKx93zLdD4TNHr:
    CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema,
  rB8EXnktzaQ1oDqNjTTbY6Wub1oWxsU4bXUUGA32yMY:
    CdmBaseDatetimeFieldWithMetaTimeZoneSchema,
  JCn7SJcxSE4UKZYvi2YchB4nwjTsdYKvhCc7RnYogigz: CdmBaseDatetimeFrequencySchema,
  '6y41K737Kb28nfUX28CtjAbV1gqD7wSHtrmzVTF36QH6':
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema,
  '2JofigEJD6epctAhG3VgunrLaPXKzTDmRyfSZzpFHEkS':
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema,
  '4rV1yRtzeWP1SgQcDCpH4suo5UMbYFANCbKcwXZWtfQv':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema,
  '3LPKhzVGjkHFZMKRZJovvBn66KELQss6RiFVVDaqjC4c':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema,
  '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq': CdmBaseDatetimeOffsetSchema,
  '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh': CdmBaseDatetimePeriodSchema,
  jdGLLmYcPH1SJmGWnGeTDz2mBFp1xR8wP48NG8gskcH: CdmBaseDatetimePeriodBoundSchema,
  AgkY1rP5TjBiYR6gsYzEm1vgFaYxyUc6Lt3pwuRsWx8F: CdmBaseDatetimePeriodEnumSchema,
  '8JrXfrP1RKiRgkbKoCnDi4yAzTEQHNJTFGXAwiNB1Rov':
    CdmBaseDatetimePeriodExtendedEnumSchema,
  A7n4Qooqj58rSepqdAnqh6w3cUZ2grnNMz4KXt1znNND:
    CdmBaseDatetimePeriodicDatesSchema,
  '9U8DjGW5C9KDiofbqRSgjUGn8zzm279fFRHZ1W9VNLoD':
    CdmBaseDatetimePeriodRangeSchema,
  '5XHHdiRH8TMfQjroSueRJHdrffKowum2j3MNEz6MZLZr':
    CdmBaseDatetimePeriodTimeEnumSchema,
  '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL':
    CdmBaseDatetimeRelativeDateOffsetSchema,
  '2B96QnMxNfXMKPboSVa6Jpe7kf5J5A31gxoB2B9cNLjJ':
    CdmBaseDatetimeRelativeDatesSchema,
  GuCCvmuEa9YVo21GL55jX27P3w1AYG7GA6XRTzThccjb:
    CdmBaseDatetimeRollConventionEnumSchema,
  HsMcUzdZLtswDJ9XExanUTbjYaQ6n5UmH2JZ7RQkHNzR:
    CdmBaseDatetimeRoundingFrequencyEnumSchema,
  '4egpcbMVQjh4aJRd37GGhenWeaUWgc6X7ySNZw3uxHd2':
    CdmBaseDatetimeTimeUnitEnumSchema,
  FTUwPbNf3h5HEXFU1GenFhKNQoZGkBe5zAWAf3ZnpvrK: CdmBaseDatetimeTimeZoneSchema,
  '7PeesYPnoTZrVwovaiKPhiXVvtX9xYNf8gSPTGKzBsaF':
    CdmBaseMathArithmeticOperationEnumSchema,
  AhJDsRsjAqd5ThJefWvZsh3Zp5VREyt5SvAhpzMNhZMz:
    CdmBaseMathAveragingCalculationMethodSchema,
  '4W3FMfAf11hDkmCcU5z9e73aZtzoh9ZyM9gN7himsoy2':
    CdmBaseMathAveragingCalculationMethodEnumSchema,
  FEzG5SmK13XNnh3kh51FRzCSuQLhC7M8Cugva3kwKFkG:
    CdmBaseMathAveragingWeightingMethodEnumSchema,
  ANaFxPMcbPKw8USLSD7mcUeT9DBz5q9BkYYt9GMjvDMz:
    CdmBaseMathCapacityUnitEnumSchema,
  '5oGrpkhQus7oBFaHwckJJTedha1WXN8M4PE2uvTL5kM8': CdmBaseMathCompareOpSchema,
  '4Goc1Ax7PdSp2KoLBDYnqrtvCeRBneZD8E97GQazSXQv': CdmBaseMathDatedValueSchema,
  '8hR8iAKvHAwmBTKxfHuhZUDeDWMp3H16GudiMXMGZqbv':
    CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema,
  FWBc9MZLyNP1UHpkesLTwX4uMpnMK6Tjr5QZnhvs2WRB:
    CdmBaseMathFinancialUnitEnumSchema,
  BCRUUCDz5YoH72WRdFUdE8hpNrxmqAyK6QzZdV91WaHp: CdmBaseMathMeasureSchema,
  '7CW8TfgwDk8nYxmthrZy3Ypyf7C2UGco8X9dxdfWmJdU': CdmBaseMathMeasureBaseSchema,
  '9ZwUPPMUKxgNGs4D8BffqeBVQw834LMvoYNoYrHmKWcG':
    CdmBaseMathMeasureScheduleSchema,
  aox7Y6mfMBx71DQngCd45QQNaCFw5yiNGb7U3XJD7r2:
    CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema,
  HqUegcGfdAEK5srxpQGsXa5P43vCM9hADmhrJX7ii9fi: CdmBaseMathMoneyBoundSchema,
  DKKgVj4h6rghgaMZrdFzPJpGQfNdR8YrcHenPgFkvjQ1: CdmBaseMathMoneyRangeSchema,
  BbfKyr9mpdQ8cuNvCP78fS2o4Rc7gQZ1GdcbnyD6grzK:
    CdmBaseMathNonNegativeQuantitySchema,
  '3aukDRc2UqShaPzsHHg8ry28kkvETMb95rfAeM65GH1Q':
    CdmBaseMathNonNegativeQuantityScheduleSchema,
  '3tHmP4cU3vsQunFDGwaDERxB8ZVg7AVLYj29XjgxbaNd':
    CdmBaseMathNonNegativeStepSchema,
  AT5JtWQz9LEbYiYD2utqkpNY5Kg4aUBGiVFJZ5Vuhj9S: CdmBaseMathNumberBoundSchema,
  HeV5hUrnbKo6ccs1jqoxC5k85Qng7uvpVxMGApHXK7nN: CdmBaseMathNumberRangeSchema,
  '63nKry6nGnCtyHC4B341Sun8eUejEvoq7JeK4A4AY7Er':
    CdmBaseMathQuantifierEnumSchema,
  '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3': CdmBaseMathQuantitySchema,
  CVMkWffJ7quAiCT1yuTA9Yfe2iFwZdCBMRUkJAvQowDL:
    CdmBaseMathQuantityChangeDirectionEnumSchema,
  '6dk5GwNi2WVW1WtdQX75yiMvujuqv21d4kneiqK6QKzT':
    CdmBaseMathQuantityScheduleSchema,
  ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho: CdmBaseMathRoundingSchema,
  GiWBNc37iwwMQdVLNNuNgT9Sz81v1zvwUB1G98aPvqa4:
    CdmBaseMathRoundingDirectionEnumSchema,
  J8qh3m8ZL5ifRQhM8Vjoki2nGhcdXhkzvzX7MkCeP5pj:
    CdmBaseMathRoundingModeEnumSchema,
  '73UaBEmPjNZQT7mUS7Rdnxb9fLcnfsn84MCkvVALW3vw': CdmBaseMathScheduleSchema,
  '7UDCVn3tDYHeQBU818n6bFdccjBeDPrc6GddKWkT4WDu': CdmBaseMathUnitTypeSchema,
  aUWGFpq6gwDP6zaku6dz6bnhGWzX5a3YSgTLJzSqXiL: CdmBaseMathWeatherUnitEnumSchema,
  B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7:
    CdmBaseStaticdataAssetCommonAssetSchema,
  '6pVLqA5jCBFn1xFmznDn8hRDyzaHRvRQ5XjxvAEEXKy1':
    CdmBaseStaticdataAssetCommonAssetBaseSchema,
  '4gwWtTHkdAAdqikxU182Yp5LKQnusRffi5xWuWCEKVxK':
    CdmBaseStaticdataAssetCommonAssetClassEnumSchema,
  EFYo6JAQMRJEAg6yzzafESRVFXGTiNSjmy9ehctCH3Y4:
    CdmBaseStaticdataAssetCommonAssetIdentifierSchema,
  '3TWoeGYJX3t5xD73ccA1wDeoWbGqpwVhJ4qVR2p4v3Gs':
    CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema,
  DBnAMusnqCBb9qkA5usvmPTb27HNy5VzKi8JoTrgPoRV:
    CdmBaseStaticdataAssetCommonAssetTypeSchema,
  '8pEtwrEnUXP8pCx6Madi5B3qyA2oDyHVfxyVjkX8qhL2':
    CdmBaseStaticdataAssetCommonAssetTypeEnumSchema,
  DHpHHdiJGEagTPm7Y9Vz6cdsbKwjXg8HjJkoUjpRra2Y:
    CdmBaseStaticdataAssetCommonCashSchema,
  DiuzkpaQqLNDsehNb5xLTrFkVqpEqS9ZGtqTJ2fBzhvm:
    CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema,
  H4qZFJo3XTXtRYCdhTukmA5mA72cU1icWF7LyydKrfPT:
    CdmBaseStaticdataAssetCommonCollateralTaxonomySchema,
  '3HrgPHYwkPSXNE4DHc2FFPAowGK3N5VQRnhAg2oYufpe':
    CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema,
  H5njvRER8CjtGtwUC4FooQuqnXpt8hpw2oZAAAuCW8Dn:
    CdmBaseStaticdataAssetCommonCommoditySchema,
  GpLEdBS7Wo3gH26kSqsDLo7RudnuHCXQQear34hMXeV7:
    CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema,
  Gos89VTGy6DvLCuG5yT2kFBYMxBpaCGwUTNsNWRo54yH:
    CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema,
  '2LPZuZ9LPiKM2aCEuPCrJLd9Ui3gKomr2qL3fVuqDuMP':
    CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema,
  '4vgWSAqEkzGf7yiQ9rsm3s5Nk6Ncj4iT16wxhQXAwe8y':
    CdmBaseStaticdataAssetCommonCreditRiskEnumSchema,
  '8BnAu36c4Gt6aVwBhawFckQGNkLaZsPodbBkQd7GpV8V':
    CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema,
  Gc9TLaZnGNEqejv5pHhE4uD3fJKegqfQCT1Wo76Ca5wx:
    CdmBaseStaticdataAssetCommonDebtClassEnumSchema,
  '3FVbfvSZd1U3oZCBpPH9cRkbM4Ef9NXGE6jVV4jLCedz':
    CdmBaseStaticdataAssetCommonDebtEconomicsSchema,
  '8XrxPP2rP3zwDTjRoHPp75ydfxNSwRdzq7SDXWdu6wkm':
    CdmBaseStaticdataAssetCommonDebtInterestEnumSchema,
  '7amP8mEsUdLRShji4Z8rjnewniyvxfvsXM3DW9cmZ4ei':
    CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema,
  E6Tfme4krXS9rATBWNUAkF3zodjRvrY68ugTnUpjH7da:
    CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema,
  '8zRMsseB4URcb7VtWt5Lk3W3aftmSFekTiuo4Ab3orEP':
    CdmBaseStaticdataAssetCommonDebtTypeSchema,
  '3DArzNi9wjXXGVfHSEMaFHEhe4PbD2PeV6vtuVM4PpMm':
    CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema,
  '3gNMcA1zQ2qk1wNF4NwznJBFvez8ZP8niUMhZ97yvAEF':
    CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema,
  GekwBuYCVfkr4sCyWTFmw8QtYrXx7zDE8G5YwHkaRVL:
    CdmBaseStaticdataAssetCommonDigitalAssetSchema,
  '6CG21iTqgkhkNe8QKj5A9BYagGYdz7YVNXQ1WK7UZtZG':
    CdmBaseStaticdataAssetCommonEquityTypeEnumSchema,
  '3zkV5sdhebtWXg2afUDkU9JwMtUwvnFXdnvGJS4MwSXr':
    CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema,
  '4jGK1XJ5V4ZC8QhCScrxssdJY2ocrqSf5He7TPL6E6sE':
    CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema,
  HCjRKFns6xhAbeXFMGXkGdJv7QjQ42YLS3H2KTtjprU3:
    CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema,
  J1Lgg2ajU8Qy4mgpL5ELeryh9L63Mk2B9paZPCz5bsp8:
    CdmBaseStaticdataAssetCommonInstrumentSchema,
  GACsbchJtx8HFpVjdmgs6rPWwZiNXGuFqV5WWHWzGumH:
    CdmBaseStaticdataAssetCommonInstrumentBaseSchema,
  '62KT7CCANTnUvju5nRQRPnwuRqsRPapXwdQJjLqhyo8C':
    CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema,
  DAxrfnnD9436ZRpQ3FGCM1i7Xq8brfqBB5cYxBuSuyag:
    CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema,
  ByfckK7AWY3YWapMTruTAWXvgAmfacrawZvg5LmjhND3:
    CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema,
  GsGAdnX5acwQtmYsn3WQTMmsvfnjFYsndL1pHPqocW1s:
    CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema,
  '6QXysvk5wKooQQckLijtFXwzL8JzYBViFzRCkYPNJnSX':
    CdmBaseStaticdataAssetCommonListedDerivativeSchema,
  DVipsn2Vc1vxevvyncjA1XjeWrMHt7pCWmHgf444oA6A:
    CdmBaseStaticdataAssetCommonLoanSchema,
  '4FEgZ2S5mgNGfwpTRngN5cA9QySYVkoZyRvstY7sKH9x':
    CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema,
  '3AioqoWbYGgXHexocZKRw4s5DTNfC3QMNGuVvTzLmk7n':
    CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema,
  '7iVrwmxYPhEys3U1gW5XuLq4fFt7XbEdv4H1TSLxucq6':
    CdmBaseStaticdataAssetCommonPriceSourceSchema,
  K1T3rxTw4qgMTWWXRK65HvnRu9dEGYUj1dnWgD8wJyS:
    CdmBaseStaticdataAssetCommonProductIdentifierSchema,
  '8K6WNDwrEvM8ZWoTxdgirRUPiBgvFUgxXyuKj4jCxmKm':
    CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema,
  '2VvT5a944fY15VZhySKrqEWBUHdaz3WdLPPyU9TEVSQC':
    CdmBaseStaticdataAssetCommonProductTaxonomySchema,
  DyW8PoZ3SG5vrDUuHR4Yc12WC9QiAkuptxKhotnQqSSC:
    CdmBaseStaticdataAssetCommonPutCallEnumSchema,
  '9SwjQNQUerVoGrpV9dTTUrUcN92HvFBECzoBUN3J9pjJ':
    CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema,
  EfNf2MwwCBqn8fqvmXa6jpnxUBnNyuLoB2day7wtu4mk:
    CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema,
  AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm:
    CdmBaseStaticdataAssetCommonSecuritySchema,
  FFRnQiL3bCrcgQFbQM9Gf4yzfqkiSnx9SMqfCAdxckut:
    CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema,
  CMj4N8cXj9KS7aPG8P3F4vssfTBZeLnDFZmyyy71gWdu:
    CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema,
  '9iqdbfahQtNXNenCSE8hAFbq298MVvdACauLx1FZWRQt':
    CdmBaseStaticdataAssetCommonTaxonomySchema,
  ApvPCwWxoPQoZrrkARTha8wjMC3hEvoFrjkU36rfoyeh:
    CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema,
  JCJ9MNesX9TGLQYptUpXZV8MhajfmB9tBsCwmJAg1q3K:
    CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema,
  '2JHuzDshr7hYFEXcgPfEiDuNuEyzHXv79pWqZqYa5FCQ':
    CdmBaseStaticdataAssetCommonTaxonomyValueSchema,
  '8MxHUdKpCt28QyKKNvn72MyyHZ1rJdZmCz9jpzbzXfR8':
    CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema,
  '7rst54neQ5PNXRSMpnStomSJWqxhAZTpudLpEvW79pY9':
    CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema,
  HY6fzoqXYcLxugpqJYdA99VPgHSFJ1NTXKfDtKLSj8fk:
    CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema,
  DAXvwiRxSepN3dRd7rdTfVGH5bP2Dpu4LcczjjaFEy3s:
    CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema,
  '81CgZwLx8Rj95fxGdWZWogMwu49Nt63P7S4jVVGzbbNd':
    CdmBaseStaticdataAssetCreditObligationsSchema,
  F4jfVFVy1pLV3NpgzaiQY7F7vgzXzekentUSL7cHykj8:
    CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema,
  D1NQDMjhdP9hVZMeu9eipm9vH3aGJP3Zn1Ea8snMVxam:
    CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema,
  '2Azf3HadXRbAMWVQbVu4rbKPBmEghSoifFhxZC2Pc8hM':
    CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema,
  AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ:
    CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema,
  '91hZREKUiWsHQdnBssNUwUcNjEcnqiuhNdzVEmFNhhmd':
    CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema,
  CNZP6GsTZi731ekV62fUVAXc2yL9DVbiHje2LSX8DmWf:
    CdmBaseStaticdataIdentifierAssignedIdentifierSchema,
  uri72eSXHNadMdx367eVwLSSA5rqrou8jwm3NGJ1u3K:
    CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema,
  '3eTtCxBt24us9TCBr18msWJzdN7HeDk1d6J1ycAcQ5YJ':
    CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema,
  '8MnuJdVvYHPDMwmMys25jzVcinAGzNijc9wRSzKdQaS3':
    CdmBaseStaticdataIdentifierIdentifiedListSchema,
  '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ':
    CdmBaseStaticdataIdentifierIdentifierSchema,
  '6U2c4eAmwS4qmrPVZRhZQJXRs75a2JGrkQBHr3xRuRXe':
    CdmBaseStaticdataIdentifierLocationIdentifierSchema,
  '9SEUQrSK7ewpiykS84gvowEErbpYgoX5vEhGy89i4FTd':
    CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema,
  '2redquTFoM18tjds3NfGQwUYCvsE2KxUExBUqKyf3rJX':
    CdmBaseStaticdataPartyAccountSchema,
  '6wko9wDGMgxzo9xtP73GZpXho6rT5ZcrZ1RgAhSpjBwA':
    CdmBaseStaticdataPartyAccountTypeEnumSchema,
  Hk5B9aTGsoWURT33pKwD1Dx8TudcUZHgrK1oKGmLKRnJ:
    CdmBaseStaticdataPartyAddressSchema,
  '51nNpi3cxfsuvq28FACnE28gdaAJusoNwcHqTKcQAgPj':
    CdmBaseStaticdataPartyAncillaryEntitySchema,
  gyjCjxW6qhXCC455CPDLkx4ccUz75HgdRL21KfMsdMs:
    CdmBaseStaticdataPartyAncillaryPartySchema,
  '6Z3jsP3QVXumTdQMGZVcCDRNn3n62xjfZLNEHaZeDWmb':
    CdmBaseStaticdataPartyAncillaryRoleEnumSchema,
  '4wK85f9dMypnjbUUmXb66JUEiKd6uhgWc8Eg1rx4exS4':
    CdmBaseStaticdataPartyBusinessUnitSchema,
  ATD4mngyB7ULwUSU6DbEMVcLMyFeZxXRKDJrTsFAJ1dx:
    CdmBaseStaticdataPartyBuyerSellerSchema,
  '8K3bpBAvaZu9SQSpibF46XfDiBxveFTBYFEXySs3rjsP':
    CdmBaseStaticdataPartyContactInformationSchema,
  '3xDGPtjud4dCVNF9Swm1X7WoCse6gMziwHGvUnp1h3EK':
    CdmBaseStaticdataPartyCounterpartySchema,
  '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL':
    CdmBaseStaticdataPartyCounterpartyRoleEnumSchema,
  B5aA6nWfmxJdP3f6kFCyqBA41CUzn6mmhyqnqdQ2yQi7:
    CdmBaseStaticdataPartyEntityTypeEnumSchema,
  HWaoVtND9cNy4h58tMGuWiynD42VByHqrEfXft6ogrRr:
    CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema,
  BgAaUQrWcUNA3jJZ7gzBjTpU3T4Htfxaga8q7QxR6WUA:
    CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema,
  '8We3ifRCJDJwmBVXuSehPTJrLYivWwUDmGZ6pd5yqKLF':
    CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema,
  '9gcVCXTLD6bbDcef1Qvc2g9DyAZyLQN9aQuT7xkM2Qy9':
    CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema,
  '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o':
    CdmBaseStaticdataPartyLegalEntitySchema,
  HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema,
  CEiSj56t3pfX2pXr4xSE9ejLoG6NgvSmjdYCMPxiNCRK:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema,
  '8Trmrr2auNXC1rSUVpofHGpAnufdc2zUsGwJ1Jx44Cp6':
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema,
  GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema,
  GPJrucxvdtQQxaNZByVgHcHLEAux1TNC7KL1JdEdBgLF:
    CdmBaseStaticdataPartyNaturalPersonSchema,
  '3uQqaX7x6W6DWTjsoQ1nPnUqxSnb3hwfBUfB75JAtaZJ':
    CdmBaseStaticdataPartyNaturalPersonRoleSchema,
  DRXnENhi2PPC41zdWCTei38nBDnGJAHhGw77pHSaZu9R:
    CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema,
  '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD':
    CdmBaseStaticdataPartyPartySchema,
  '9bBnotjYVoTpiPp618XfsvChy9sMkorNRd8X1hGQVM7o':
    CdmBaseStaticdataPartyPartyContactInformationSchema,
  F9QyJcHdFeo31fUAc165RhT6gR1XEBxazkp5cgYo4DAF:
    CdmBaseStaticdataPartyPartyIdentifierSchema,
  CtYQqMrkLRGoYSHCKUDDnqB3MYRfBuTgo1ccTwdeo5qV:
    CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema,
  '5jMMKaokSyc3P5cYsiGHgYgok3sYf3J1f3Cq4Ue2LX4C':
    CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema,
  '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M':
    CdmBaseStaticdataPartyPartyRoleSchema,
  EncqNSCrVYMkox9haeHEq66bWJTaR3vwubufrZkZzB4:
    CdmBaseStaticdataPartyPartyRoleEnumSchema,
  Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3:
    CdmBaseStaticdataPartyPayerReceiverSchema,
  '3h5wRr1PRsH4WePSXwrdNrRnbGYxzTUTdLMKCpegAmi8':
    CdmBaseStaticdataPartyPayerReceiverEnumSchema,
  '137V6nzc2EYMvMNiSoeM36TQTSfPuL5rp8pjRkrno11f':
    CdmBaseStaticdataPartyPersonIdentifierSchema,
  FMkLv6qXtSm7J9WiqjortpggKS64LbdJJWwyPv81h7V3:
    CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema,
  '6vvQAa2n4pBkXLzf2nm13fChPvmaGmYx9naGFczd8n7a':
    CdmBaseStaticdataPartyReferenceBankSchema,
  JCCsntcYSJvUuuRsTPmhRoozDmZLnnfrSSnkfe8pBCnq:
    CdmBaseStaticdataPartyReferenceBanksSchema,
  '49qBetBBtcupafRpn91bK11BuJmHBAUsRXrc7UoZYMbo':
    CdmBaseStaticdataPartyRelatedPartySchema,
  CGwZNWTLoCkGLH5yAn2EKVGseTWXNNNk34hFwFugDRnt:
    CdmBaseStaticdataPartyTelephoneNumberSchema,
  '7baagyYQ5pks4axcyWu1AiqBmHkoMoc6PrF7XpeGCaE3':
    CdmBaseStaticdataPartyTelephoneTypeEnumSchema,
  FZv8rcp2vixvrFz76oD9XQQi3AkBXSWz2YSBg7zgTZbx: CdmEventCommonActionEnumSchema,
  A9LgPmzptBkZ2aoGKzFdFNyrkP7yQoKpGFDRRy2QHAJV:
    CdmEventCommonAffirmationStatusEnumSchema,
  '14FpJ1vaYbMpoyCkuQj7hbGcbtaDHt82Sbm1qh8P81wH':
    CdmEventCommonAssetTransferTypeEnumSchema,
  '7xfB6U2pnWXbkxPK3W2Q7fHZqYxzn8mWRNpgnJMho5t8':
    CdmEventCommonBillingInstructionSchema,
  u2MbP3uz3Mn5cpDkvucuBvQGAkXiEd8swnBN5DdAkMg:
    CdmEventCommonBillingRecordSchema,
  H4SNQ2RMiX7HVAo7y3Mqdb6vmQUYJX2dEMYpjGXUAWcX:
    CdmEventCommonBillingRecordInstructionSchema,
  D5c4Z8okogMsZ9ZgPhXhrjcP4DG8tnDr7tGQGW22454v:
    CdmEventCommonBillingSummarySchema,
  FXouY2iD5yAkGjtQpRoJkLoD46rKCnoTQKrRcsQBaJjx:
    CdmEventCommonBillingSummaryInstructionSchema,
  '8qWdT3E5NidUckPJrWGmAnsexmocYp7EofAQ2FAmaTPs':
    CdmEventCommonBusinessEventSchema,
  APFczLgPo3ATLpUGVzXPPU14GjwHCm9tPJDFDwjJCXWh:
    CdmEventCommonCalculateTransferInstructionSchema,
  ArrXGPispsyEryoQo3F2re4vbxjj2xjYyQyBjvDQ36dd:
    CdmEventCommonCallTypeEnumSchema,
  HRwaQ2c9fB55QNhRMMhu2q79V8gaMJaqAM2sofveHeP2:
    CdmEventCommonClearingInstructionSchema,
  '9XXCYnAKStGGQJv82Q3iAt6L217E7QCFrotX9UUHC84P':
    CdmEventCommonCollateralBalanceSchema,
  '5zV9UAvEAPPoJE8p76hiGGxkbAdmTYVYyCXFALa1MFCS':
    CdmEventCommonCollateralPortfolioSchema,
  RkQ9hssWBiUyn4LiaktzsRVjx76PDv5qNq4T8YionjL:
    CdmEventCommonCollateralPositionSchema,
  ET5sToBGwmEYMrixxQtBQCXUeukfnnYAJugSx43kxbwm:
    CdmEventCommonCollateralStatusEnumSchema,
  FkVKJHod7pqUSpYVBLN3NXQjh65FZKScBP6WoBY1o86o:
    CdmEventCommonConfirmationStatusEnumSchema,
  '73jkwTbyMo2KXQaySh2bPD7JZbKKWQBJYofeJMMprsr2':
    CdmEventCommonContractDetailsSchema,
  '8sWBuDCNB5CU2KAPqM9MbS1YnWs7XXXHSwBZ3u9wkBgX':
    CdmEventCommonContractFormationInstructionSchema,
  '3cW9DCrH3S9RbC5r5ufGus2ntS4cJjxaa7gnHbEmCnT3':
    CdmEventCommonCorporateActionSchema,
  '2BvXwm2PJoPCvRz7g8DFbxuMwvaXy1mHq7Tnw2QmQAn6':
    CdmEventCommonCorporateActionTypeEnumSchema,
  Gm1bbskyhwzzc6X2nYgZ7F5WWwWhBVgSMLYpJsp7y8PY:
    CdmEventCommonCounterpartyPositionBusinessEventSchema,
  '5J6Xvc5wFYpUHdUb6UeB9296nV6NEZu3TW92cnZ8Jou2':
    CdmEventCommonCounterpartyPositionStateSchema,
  '9cRutV8nPCZ2C48bBwAY4oDTiYNr1ig82uHvSf4tZjHf':
    CdmEventCommonCreditEventSchema,
  FRSvW86AnukqsUtioAtNxLvGvH8hBV3m6J2YV3egXjjV:
    CdmEventCommonCreditEventTypeEnumSchema,
  '7LGs1cSGANHMycsBA9QoTJgdxMMVCPo5KnmfspkQtue5':
    CdmEventCommonEventIntentEnumSchema,
  AgMJ76KMYXbdeYrEq5PfQtesuf5rxVkbspBBciEBpYux:
    CdmEventCommonExecutionDetailsSchema,
  BjTwLDK7HwHXyVMxzicMA3VkVKfqaJbiEBPWQc2zogzw:
    CdmEventCommonExecutionInstructionSchema,
  HEn2fsPSsyYtggnb2vhQ7afyPMTHJnpQRj7VE6DCDUNk:
    CdmEventCommonExecutionTypeEnumSchema,
  '8rgtsvs6w6qZz1PrkVBt2E7HaV2wh8X43gQe1J1P7TCj':
    CdmEventCommonExerciseEventSchema,
  '4yfMXXge3teCjj71FXMHvQg2VBoSXVHt7hWUutxQ7v4x#1':
    CdmEventCommonExerciseInstructionSchema,
  CixZxDsRYNoZ2VQAdXvETFbZ3JHGQqFYi5Q5xdevtMKX: CdmEventCommonExposureSchema,
  '6dsiwJuR69CVpGRuRqj3ymfDhYpGGDRtLQLHmTZMqGC':
    CdmEventCommonHaircutIndicatorEnumSchema,
  '4h8Hk4G2qP8cK5WAMzdQNkMdsPkLH7teFQRJqhe7VAh4':
    CdmEventCommonIndexTransitionInstructionSchema,
  DmjvxxGktgvt2rg94yzABomuVAXUs5cCj4GRYGt8yxhr: CdmEventCommonInstructionSchema,
  fKPDzutMwno59HhJG23YycNn4iwE4yFTS17R3MkzbT5:
    CdmEventCommonInstructionFunctionEnumSchema,
  BSWGnuEuyVaWENR6s4Aj98zry3uTZBX1uQHBAwY83v16: CdmEventCommonLineageSchema,
  '6tjVZ5NjLm5HQgsKdMnRgy9TgumvEg9qnjDmMth7np6R':
    CdmEventCommonMarginCallActionEnumSchema,
  DZahcmhDuPiP5rvn1PkdAsfSa4FbHepF3J6MUZbNZRrB:
    CdmEventCommonMarginCallBaseSchema,
  'A6TXpRc2pwcrcevpAeFov8KwBeHqv2S128cwKYfERM5K#0':
    CdmEventCommonMarginCallExposureSchema,
  CN1YqoktYc73VUJTbsBfBBFsVz5duttYrP8g2ME4Sfzp:
    CdmEventCommonMarginCallInstructionTypeSchema,
  BXBZ8pcf9CM5xyavpLypzqjDRy7y7Gr6pt9efFiLniFC:
    CdmEventCommonMarginCallIssuanceSchema,
  '6uUKa3KvHi9m8CmvHFfmNhUiSoQkBre2rAx55EMNRfbG':
    CdmEventCommonMarginCallResponseSchema,
  GU4SDGPhFNx3W3BPgnnyiavM6ynheQGXz7dupfTVjWyj:
    CdmEventCommonMarginCallResponseActionSchema,
  Bstw5ouUce1eNCyQGqvChydQAQAAkrG2DdvUA8dVbdYT:
    CdmEventCommonMarginCallResponseTypeEnumSchema,
  '9hmSFPZtTqFUhhBwuNHQvS49fmooEgKt1nnxJeNPUFY3':
    CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema,
  B8n9R5augGxzewv3AeZA4bBhgHYizX9BW45egn8ua3br:
    CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema,
  CMP6Shj6SxTXkHaZATbUmY9anEdJwQH5tnPfbddySWBo:
    CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema,
  '8BmnK6T9mumAJYKndXNUZva1zqE9Ud8sbdK7Es4Dnmto':
    CdmEventCommonMetafieldsReferenceWithMetaTradeSchema,
  DXhfNgQ1Hmipx5YJVPFZLYTAfk5vomh4ywYmSZX1ChyJ:
    CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema,
  '4E5yCo7XYTiKuuHHwr5uzwASRLaQSQREJNNpmiGAGT3N':
    CdmEventCommonObservationEventSchema,
  '4TiZGE3EKm8kGwGtipCB7SEXRoitCDwxdB8rCyr6mRsC':
    CdmEventCommonObservationInstructionSchema,
  '6ExYXjmvyeVTNcjUV1RhKjrEdJZrXuqeMggJ4UV4BiDX':
    CdmEventCommonPartyChangeInstructionSchema,
  '5nAc77Zk7DnMxDwNvokqJKAF6KWnvCgo18NsZFnBQPjH':
    CdmEventCommonPerformanceTransferTypeEnumSchema,
  AFqxQfgMVPciFz41pKMubsG7wUWhEhMwAoy3bZ9AzEKY:
    CdmEventCommonPositionEventIntentEnumSchema,
  AnXrCwduqixvTNugK5Dsyr9upeRqJtsTmmvnvRrEjA7k:
    CdmEventCommonPositionIdentifierSchema,
  AfmZhLuxXWB5bhr9ojzoNAja5XJ5XKyWjjKQdzhS4tvs:
    CdmEventCommonPriceTimingEnumSchema,
  '4yfMXXge3teCjj71FXMHvQg2VBoSXVHt7hWUutxQ7v4x#2':
    CdmEventCommonPrimitiveInstructionSchema,
  '5b6HW7a1ekzpFv4yM48pejFPmaWgcnYYnPgwgiXz8cgk':
    CdmEventCommonQuantityChangeInstructionSchema,
  '4Wn9bRiHpqcy5PwHNSLRprPvX37tuFs1nCqq9WQfmLGF':
    CdmEventCommonRecordAmountTypeEnumSchema,
  '4uJVRvwwVNEj9rBzrw3MG5hDWu6VEQFjKX3TkVNmZtxQ':
    CdmEventCommonRegIMRoleEnumSchema,
  DLLoN3NFnWwpjGzEuobQDyZqPUSbRS8jddLaQZw9eq9B:
    CdmEventCommonRegMarginTypeEnumSchema,
  '14sVVTzSacMzHornDaXpUxvVuwj3EZYsDLgepvsmbGW7': CdmEventCommonResetSchema,
  CGgHYqeKaTiPo5dk5t6JAnpqatYqufkEN4kTzTqXnZJ4:
    CdmEventCommonResetInstructionSchema,
  HKQMWBrXhV2XfYjyXebnyRrgnmenTn2sd5jzfe9BKyr7:
    CdmEventCommonReturnInstructionSchema,
  '6u2SSYbiL1wde49f5mpDzE76eiZkyF3yeZ7WL3j6RnBZ':
    CdmEventCommonScheduledTransferSchema,
  DWrVb467npLJhtqWXL5jedbqPvpecQLcHXJFKAwmoYKg:
    CdmEventCommonSecurityLendingInvoiceSchema,
  '4yfMXXge3teCjj71FXMHvQg2VBoSXVHt7hWUutxQ7v4x#0':
    CdmEventCommonSplitInstructionSchema,
  AWNewCb8jDEbBUtfpqBitVftxPaEyRa5nkUc3446e8NA: CdmEventCommonStateSchema,
  FzQcp26M2wWMZ8oAGjQMCQdvRGbamTTNF788oeS8mRAo:
    CdmEventCommonStockSplitInstructionSchema,
  '9RwGQUii5VWniPgSYepeWwC1kxvZFDkzF6A5wK9ESXLW':
    CdmEventCommonTermsChangeInstructionSchema,
  DMPg8sNY4NvsU9grh9o2Bbqy9F7wFkLkA74Z5g8pwNNk: CdmEventCommonTradeSchema,
  '5NL7sLmwPvsGQHH4cx5g8ajq8wbZMimREKKDky2KMRFQ':
    CdmEventCommonTradeIdentifierSchema,
  EkwCZJVkbvyuxajEsGZpbJ7VXpXvUkhnSAEFVUNjVeB5:
    CdmEventCommonTradePricingReportSchema,
  J8SrPWrtbe4J2GJXdDo51yKLW7GpaZmwrtGnvLKFRArQ: CdmEventCommonTradeStateSchema,
  '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk': CdmEventCommonTransferSchema,
  FcygtYNeeqry73mriebsFBhtXNtXX2ULZyMgcESYBSyY:
    CdmEventCommonTransferExpressionSchema,
  CJvucYnLjJ6YQyYuspTnZJGLBaDpLV8VYMdDgadAmjNF:
    CdmEventCommonTransferInstructionSchema,
  CFc6Qd17SJME5NRgGX5E2JvDaLCdH3FFGafnxKTvqrdw:
    CdmEventCommonTransferStateSchema,
  A34Y1hbdkfTp159ccYU6dWyPMcb7T2yb5WeUyjbVuDVZ:
    CdmEventCommonTransferStatusEnumSchema,
  FsvHni5Yw2kgwi13MLfPDm1kxtkAxtwNuT3wJNMwYWjB: CdmEventCommonValuationSchema,
  '8ZzaFzKBw64vzQDiMvQmnvkqQceABGeE2Tg7Hv49brUQ':
    CdmEventCommonValuationInstructionSchema,
  '3qgdUWu7raBQuXg5poKvwjaHsLprDJhjEdxa8ZcXbCMD':
    CdmEventCommonValuationSourceEnumSchema,
  '6d1G7oKbQHMycN2DpoiwfRUVYVHqAbkSg12MQas8Qbc5':
    CdmEventCommonValuationTypeEnumSchema,
  '79YpRF1QvMBEWLGAWkLqBGPQXzuJpz5nxGxrBNrJ7bAY':
    CdmEventPositionAggregationParametersSchema,
  '5XqSaDHYYoCm6CbhKtjCg411iW28d94bCQv3Dzssm85r':
    CdmEventPositionAvailableInventorySchema,
  '7i3shwTd6gctk8tdQbYYwNjTUuVQxFY8Fj6NUeADMeaq':
    CdmEventPositionAvailableInventoryRecordSchema,
  '2RFeesvWLv2qoVxFe5jTLyoVYdZHmyW9dnfWhJjwf53k':
    CdmEventPositionAvailableInventoryTypeEnumSchema,
  '3mtxL1pBoXkjuTxeX9scwFvV5Aojb66cJmej6pndkJWD':
    CdmEventPositionContractBaseSchema,
  '4pkLwzBQctB2qVDMb1UAtQuhPbBpChuWnEEdq4AQcznd':
    CdmEventPositionCounterpartyPositionSchema,
  HwwB2B9ieWdwirXKrPSjxx9FeZbNK5uqN78Fquk7XRK2: CdmEventPositionInventorySchema,
  '7RagTg1Tpw9L7gAaRss9AXVYT3D7jC9KKyQgQe2nzpkB':
    CdmEventPositionInventoryRecordSchema,
  '8ahLvM8228zmLQwX87iqop1DsD6pV5ZmzmGw6VQ6cL3j':
    CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema,
  BUNxoowt97aMvGEavQkPkCd4nHQTtcamT9JJzvXpyHKd: CdmEventPositionPortfolioSchema,
  '96TUPsr1vKCN1d5SygGFrJqPYHxmvcL3JLE7RqaakpTg':
    CdmEventPositionPortfolioStateSchema,
  HbEa5JnvDWdeSRPvvAFuriDHdfE4gteVmh5RoPeY8QN8: CdmEventPositionPositionSchema,
  H8eopTmsWExtp1LBnrmRgLseBswCZb7FcMX44dWKFNQd:
    CdmEventPositionPositionStatusEnumSchema,
  ABWcZnb8tDCZpPvBSWChTAtPtn8pr8B9iaDKGTazMvde:
    CdmEventPositionSecurityLocateSchema,
  EUhKix96qBRpb8cnMTF8gcMWJy2C8uLuSVgDDmiWB82j:
    CdmEventWorkflowCreditLimitInformationSchema,
  B56ozkEmANXmnwGKZwUCnfN6mpja8ytvV9aTBgmCyYtw:
    CdmEventWorkflowCreditLimitTypeEnumSchema,
  '78EQYkDkf7rGpcLm6EChjXZahyPjkpNnuPg5fpQ2FQEk':
    CdmEventWorkflowCreditLimitUtilisationSchema,
  '5mSFBLKEbHuJRnrmTEjggEtTrLgU7NJhaz9tcKqiJVZy':
    CdmEventWorkflowCreditLimitUtilisationPositionSchema,
  '9To4fnNdzSDWsi6bJQXF3mF5qrWL3Z512YNM4QAgavMg':
    CdmEventWorkflowCustomisedWorkflowSchema,
  '8miTVbK5NJxxVBWQ7jeftLfg8P7YfMa3Ksi8a3XDJJ6':
    CdmEventWorkflowEventInstructionSchema,
  '29Bam3D6qfaY6wWG9a8BVSCbVzvz6r97xkbk4nU7aU7U':
    CdmEventWorkflowEventTimestampSchema,
  F7xhVYtqhoLA4Xk12rbQC3UUXbJBcxj2VRtwQUxpn251:
    CdmEventWorkflowEventTimestampQualificationEnumSchema,
  ZRQoGVDtnXG3DMztqxmZoXT8DTZM1bAdtyW3JLZzS25:
    CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema,
  '7VnSHn8rstQhmaLbXZA83RTKM3Kcjw68ebKhohRvD2mA':
    CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema,
  '53AbkCoJHgxqgWGG6v2TSpY2qeaLG862cAjoiiYDzv1L':
    CdmEventWorkflowLimitApplicableSchema,
  FkagaCXwpvV1bHkAtUqKKkwuyNj7BX5UnEfwfHeDHvuv:
    CdmEventWorkflowLimitApplicableExtendedSchema,
  '2BsPgE1jX1a3Hm3bnnC5scsZoqfNiMhN1PxggpSyDJHa':
    CdmEventWorkflowLimitLevelEnumSchema,
  AqS1brpf2w2Q425LEFsrQQKPZHrParp6fMbzm7hy1cqV:
    CdmEventWorkflowMessageInformationSchema,
  '6HKfs5P29obpmgCujF88CdGns3p8Udb8sHA6m99noVZw':
    CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema,
  FmwzzAFmqGuCenMT7mzAuGYDNJaYPsnDg5cWKFkHnjwL:
    CdmEventWorkflowPartyCustomisedWorkflowSchema,
  ACjVrd9M4uVUxaFUuoq8puE5GX9w3TWnMxGNJCW8BGdo: CdmEventWorkflowVelocitySchema,
  '98XAqUNzZkNVqqaqfN3uL863kyUvoPoeaj1C6t8TcBcc':
    CdmEventWorkflowWarehouseIdentityEnumSchema,
  DVtFVNsGALqE4V9Un3ftDWwJ51qkUXqwoi53xU1DCDcZ: CdmEventWorkflowWorkflowSchema,
  FjbFhrFxtxs3sDqZwM29eQWswygXu1ogCT2Pi2U4mQRp:
    CdmEventWorkflowWorkflowStateSchema,
  Cqsvhr2yBW9tghAQNKR3XDYzG1BtRFwCBgpQ7zz5iuXo:
    CdmEventWorkflowWorkflowStatusEnumSchema,
  BAy5Lg47k6suMJXPgRrjQuGU6tZqZzABdrA4M3Rvv142:
    CdmEventWorkflowWorkflowStepSchema,
  G4jFdkwRjRnQEpGMrZtySGdPr3tRWJd7bh65nxK1Pp8N:
    CdmEventWorkflowWorkflowStepApprovalSchema,
  FdxEpwBVWWvKrLVJFiCY2ChgGSz5yA1uMFC8F5cEd7CR:
    CdmLegaldocumentationCommonAddressForNoticesSchema,
  F7fkku2HrNQ5jSPUdK2yWnWFShTMYUFJh1xqKudc3NLg:
    CdmLegaldocumentationCommonAgreementNameSchema,
  HyGbxWb5gZabiVhZkNgTGw4LRVjYgdzF3HEJdyeTtuvM:
    CdmLegaldocumentationCommonAgreementTermsSchema,
  '3FwnfmPe8axs9Sr2iFvR9Qg5tKQmQpQYDYFksE9EHFxF':
    CdmLegaldocumentationCommonClosedStateSchema,
  AxtAGhrVfdEab1B2endnkUSwdQci3yBfHnPi7r21fKgG:
    CdmLegaldocumentationCommonClosedStateEnumSchema,
  '5txXuuQEYq3DRJtqa9g5CMLyFXyChsrbeA6Q8sruRz3e':
    CdmLegaldocumentationCommonContractualDefinitionsEnumSchema,
  DqGobrtxaAEaszyaxnf1T8PaYqNexwwc7b6EHDQcFsQG:
    CdmLegaldocumentationCommonContractualMatrixSchema,
  '5JbcXku8tos98BGy9mMDtCZ5CRhRzUb7oGjCW73eLqcZ':
    CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema,
  '3apKhKP5xQpMoT4sNuUZ78eq9rVCkEASywdq4Fwcq1Pr':
    CdmLegaldocumentationCommonContractualTermsSupplementSchema,
  '4i3WZ6muDQ6NE6m8F9Xeuh3VH2ZcyjVNMCPWDkjEBtPz':
    CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema,
  '3wxUxQ84F797fYARR8X6Eo2XFCB944hauuSNuQmcXggJ':
    CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema,
  '8zxPrGpNdV8RXvND2vW7jBAK56wBonsNYwbDiEaiasdP':
    CdmLegaldocumentationCommonExecutionLocationEnumSchema,
  '5CZGuPh2NgVWkxTTTqHn4LykAwKTXqtg83oWxA6HPX8j':
    CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema,
  FgeGQiLz9TJQSYENK3T48kJAnBoypPpJTdxNttHXYVSj:
    CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema,
  EvqvkLHSgg23hZpBiCkngAjwG8xuBKGiDCpbDgMpS97G:
    CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema,
  '4FF87GVL4rfENXZ1E4J9DU3xpkfVLVGmfJySWqeorhS5':
    CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema,
  FpHDJapzgLvakFXFV8ZtQe1CcZ7aBKpmPLKLwWkp2tRd:
    CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema,
  ABknki16oPwUDYoEVUFzYPxboxn2iwssEg2ST1wCz9sA:
    CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema,
  '28gUYx1HzG6py2PmTBRca9g3wdwdcVnEHvzAZX7PGUUG':
    CdmLegaldocumentationCommonGoverningLawEnumSchema,
  'wvWoY9SJeRuG4p44dmwhpRcK5q7gCLULWqjwhDHDWbM#0':
    CdmLegaldocumentationCommonLegalAgreementSchema,
  '8J3C4rdvxDeNySQAyEy4m9sDnUTPA9iyb9cU9dV8oFF6':
    CdmLegaldocumentationCommonLegalAgreementBaseSchema,
  '8w1bMmBxMPwfqicGZQvJc2KRac3pHCk1BFR3rzdBpzUx':
    CdmLegaldocumentationCommonLegalAgreementIdentificationSchema,
  CRozp4MyQcRb718xLH5WdVCyDSyimrwJKNMFoWND29qS:
    CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema,
  GeHvZrkuseiXsj542Qn9FKQA1nJMimyARrdb5L7wtar2:
    CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema,
  H1cpAvAZcBXBrWSby7gNSkMZhqb2aZQZu6eTk7fAzab9:
    CdmLegaldocumentationCommonLengthUnitEnumSchema,
  JARXei1DForaTSYxUytManRt7d74D93e3QDyu2rYa62M:
    CdmLegaldocumentationCommonMatrixTermEnumSchema,
  GXq1sStyP4yc76EdyvPejrtY3e5bHp7P1zWkSawDZneM:
    CdmLegaldocumentationCommonMatrixTypeEnumSchema,
  '9Sgsf7rKtkk3txxbTriyWaPPryyctCqx4hxMCFPS8AyU':
    CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema,
  HkkhGdGGb9rAcTm7MfWZzCLyJzxjQZGcff5L2LmUwr9S:
    CdmLegaldocumentationCommonOtherAgreementSchema,
  '2ENM8iDfj2xSZqxnz1eMD7PWGF5e5yeBadxubUoZe6BX':
    CdmLegaldocumentationCommonOtherAgreementTermsSchema,
  '2fzQ4bmVx18K4uraBPwsuECfabcNN1YjL3czhxh3Da7k':
    CdmLegaldocumentationCommonResourceSchema,
  EsaEdPrqBuTPDTW68YziAqcjM8vg4cypYktMjidE6dQe:
    CdmLegaldocumentationCommonResourceLengthSchema,
  '6v9zzNRv4mEw925bbbUR2shJzVQvBRNmns9iVZBqhzjt':
    CdmLegaldocumentationCommonResourceTypeEnumSchema,
  CvE5BfFWsqRpy2bhRv2TsRqEsM2Ve6nwcumAr2uZ1BDx:
    CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema,
  '7bvotppQD6qAT2nJAzisWtzQZEZhpXWNPUVV744PQmR5':
    CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema,
  '53mYkzn4YVZUhVSm7oRqND1THNrHx9iJ7DNHGT7Pse9x':
    CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema,
  CdXm9LZqmWgFFgpoHDNCBYp7kGANguTUS1Zshm9tf4HF:
    CdmLegaldocumentationCommonUmbrellaAgreementSchema,
  Ay8eESfxaGKpwyCsv1ZCC9QedmfPTNyL3FGU7pBYVEXM:
    CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema,
  EwFdHo4Jxu4HXFdAczFttPDMuiJhjdR3ukBBNCTdxBUJ:
    CdmLegaldocumentationContractAgreementSchema,
  Fz2tnWG78N5RC4kx47Wbt87FHmqDVEUaQwx1vKzH8X53:
    CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema,
  AFqCxRJfD2r6VuMtdAaQUzB1354VrRcR3KdvEnUz8US6:
    CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema,
  CnYXLeD1YSPzKRkCdgumsMyS2pGwY5z3KFHu8tmbu9oc:
    CdmLegaldocumentationCsaSecurityAgreementElectionsSchema,
  EWRf98rx4nuLswzBWueTYEraywCRrEzoC9xLLRZXEinG:
    CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema,
  '44Vi7jQyj5Xitt2LqNBTBiKbLULnniytnNKHM2Q27NFs#0':
    CdmLegaldocumentationMasterClauseSchema,
  '2CBRVBHp8NK926NLXhHSWTgFBfRXppF92DVzGUsaWnb5':
    CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema,
  '568nwfoghuyvUdxUYEk7LMjQo15F8tTxJN7yDtW9bmi6':
    CdmLegaldocumentationMasterEquityAdditionalTermsSchema,
  '8eyJdEjEPGbFnR2mLmiXtvsj5zsq51J2BKrRERr4rfQH':
    CdmLegaldocumentationMasterEquityCorporateEventsSchema,
  G7QNTAF4CHNyrEV1HRJJHQXd5KMBRK1ddd4XLSJSKVWe:
    CdmLegaldocumentationMasterEquityMasterConfirmationSchema,
  '61QpsnPyqxJkJwdii4SY7Y9HVY5eZRkuUd3jUcvL5aub':
    CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema,
  '8sYH7XQbWpcyvuYLn11bRuqsxJQgkVtzqWfC8JayJXre':
    CdmLegaldocumentationMasterExtraordinaryEventsSchema,
  D6dSn6AsPGjD2zwCwNeCcF8gQWc73EsG3MsXx7RRtpHK:
    CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema,
  Dd2beZG11x8F2zfZyRG7m81qHdArX5iUKEK3RnpUCBiz:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema,
  H7rMTsaH3T57Fy2L1PGAZycjKRZJrPhoiVWH8wKQZXZB:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema,
  BLcaRJ2SjxR7oB14E6Suf1722kgvEQ8vdXcTuTM6SxNg:
    CdmLegaldocumentationMasterFxAdditionalTermsSchema,
  '7JpyU9NCehqGC5gStraNS8fct7zmgk7CRM3sBXoxQPwD':
    CdmLegaldocumentationMasterIndexAdjustmentEventsSchema,
  '3N7EgkSRxjnYvZ2ERBeP5kVt5dr65FiuYYh8NGNQ35t2':
    CdmLegaldocumentationMasterMasterAgreementClauseSchema,
  ATRquhefedUFSWUpWKJTWMqSXbQ5oeXqJjWsFxU4zXvd:
    CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema,
  '82sz4bxrB4XdaHpf6yNEZZyFnSqicJknQE13QAy4QvNx':
    CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema,
  AKSMUzaw181vmfKQvqHV4MsmNu7rSU91j4ckLWhrkFdT:
    CdmLegaldocumentationMasterMasterAgreementScheduleSchema,
  Ap1qb3ywVUxeRiWE3DybbLoY6b6Nwbkyf9ME4rE4KEMX:
    CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema,
  'Di6SFxkKQMc6nqT3aGU1YqGGEZxoqde2cDU2V2RUauq9#0':
    CdmLegaldocumentationMasterMasterAgreementVariableSetSchema,
  '3ogLgKzrgp38r1n3NkU7CtA1DcL4gyLuTT9mAegThW7k':
    CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema,
  '3umcSYDhotX3cidttq9vwUAQsUwH1ciFwBQHaKs6b248':
    CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema,
  '6DgaHaSzK3ETUNrcEqTZUXkvS2nrBSrCTCJBLAqDEPsy':
    CdmLegaldocumentationMasterMasterConfirmationBaseSchema,
  '97UVa5ekPsBLkaKpPUJB2jUiwbdDuJjNYSLWuLgfQNgp':
    CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema,
  '8msnyrNccCP7gT7FBgDZjFm4uqHXKgBd3d78zcAtFrBu':
    CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema,
  BNwNQ6TkYDn3nzSVHofp2yxshKNkpDVyyKJASA2mjKaN:
    CdmLegaldocumentationMasterRepresentationsSchema,
  VgMJmdXEfv5xJBtRFPU6x3vPg1JeSyN8rztyutdDdLY:
    CdmLegaldocumentationMasterTransactionAdditionalTermsSchema,
  JZupLwwpyJMf2c6XtxhFCk4JMDgSqUU2yV2sQNgX7xu:
    CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema,
  '6ToNNPaPv4BRxC69FF1nCdsrm54iDJm6GPiRYRYnt2Ev':
    CdmMarginScheduleStandardizedScheduleSchema,
  FzucpKNGdebaXt16BhwDALjdEj7H13SwFXddZjsqxHvk:
    CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema,
  '6TYrLCivDmD4vVBbMHT9QvJcAbGwJTQJw2ZeD8VYpqKz':
    CdmMarginScheduleStandardizedScheduleInitialMarginSchema,
  DtAjQji5fMaopUpWiA8ZrmHUiTEFdYPhtvujqB9CMLc3:
    CdmMarginScheduleStandardizedScheduleProductClassEnumSchema,
  '2imJjdaxdUbe6MWN6u3gyGVbMBrdbHAfXZWZz7qn6a27':
    CdmMarginScheduleStandardizedScheduleTradeInfoSchema,
  'AkAb6u8YnWb99n5t6qK9FdajYM7ggv4DnbqMgxevFWm8#2':
    CdmObservableAssetBasketSchema,
  'AkAb6u8YnWb99n5t6qK9FdajYM7ggv4DnbqMgxevFWm8#1':
    CdmObservableAssetBasketConstituentSchema,
  CrPVPZLyLfrUHufFAw5BvtRgXXaqECqrHbdmTXfVK6sd:
    CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema,
  '6WADf5sCCR4MuRuJ5iHs5dpqWw4n3fPXnjuqN86S26rw':
    CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema,
  A3LiTUf3Z3kxSCVRG8KUG4b1N4trvuPs1rXWQ2wDLxTD:
    CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema,
  '8Gym5rgFDbWfvgkK1dRFec8LLZbBhsMaKQsfgziFhHan':
    CdmObservableAssetCalculatedrateCalculationMethodEnumSchema,
  '9WHGhfPmPC3ogGPkexgmVsjUKxezrnHX2V4i8fPrqEM':
    CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema,
  '8ewDoZepMSiSGwyUFm3RC7ALebYhyNao67da6AsyiLFA':
    CdmObservableAssetCalculatedrateFallbackRateParametersSchema,
  B7KJroezbBh48oEcEjQn6jGLYdXUKPwEMnSuKkCujhV8:
    CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema,
  '7wtF6zpuWsqFREVYvoqU88XF6uZLVezmX7j7mdccphG8':
    CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema,
  GJjsf6Jkta38B3Y4Fyk7DJm2wJwfrHKthki9RDxBCKfq:
    CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema,
  '6e8bWMLWmAugBkofJStEGzazoGnD7NkWaWK1zPbK4zCP':
    CdmObservableAssetCalculatedrateObservationParametersSchema,
  BNn2MDf54qJ4KLiE7sTpeS2BokqPqPz5hsVNwwRVfrwF:
    CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema,
  '3Ab8ff8vHj6yZniQHU1kEyVi2DQyjvhXFPTFikY4ayof':
    CdmObservableAssetCalculatedrateObservationShiftCalculationSchema,
  As6wv4pz5jg38xpxx4xowPAz7wfQoARSJ7tYUGcEAZSj:
    CdmObservableAssetCalculatedrateOffsetCalculationSchema,
  '5j3wvfjXc4HawVrDneYuxTD3C2At3QwdvEBK7LxSw24q':
    CdmObservableAssetCalculationAgentSchema,
  GVEAhEaPG7w5cDrNpAj5J7xLgZSdAVqV1YBZqXyyrj7m:
    CdmObservableAssetCashCollateralValuationMethodSchema,
  EBxPTGdUnubTi1nPQX8vJqTa8Q5FX7fvkCdtYQrZyUdg:
    CdmObservableAssetCashPriceSchema,
  H2xVoXBmfUbQs6cNWFyDcyfWSDbZB2kUQU4av2ty95u8:
    CdmObservableAssetCashPriceTypeEnumSchema,
  '6nB2ZhwxV9UTUVbUSndGEBkqYemsbhs9sXZEWJ6heeYA':
    CdmObservableAssetCommodityReferencePriceEnumSchema,
  DEx8mELrNiMvJnmN1WRhZbyCiZRmtgBjuJXyfcSztf4h:
    CdmObservableAssetCreditIndexSchema,
  '32asBc8ZWx9istLdot48ciBYnh6kd2GHf6nLVWkjkA8Z':
    CdmObservableAssetCreditNotationSchema,
  '3tMLCZ3MJxBYvVqoBVK5jgsre5azRP9dXQk3ek6NGhQE':
    CdmObservableAssetCreditNotationBoundaryEnumSchema,
  '8jUUnEg4y5rth3zGXqPDihqz397GjFwaQQYfvUR7VVKU':
    CdmObservableAssetCreditNotationMismatchResolutionEnumSchema,
  '741YYkEZ3LbnGoBjp5zMiLiToHK93h9yRdxRAEQeWYvx':
    CdmObservableAssetCreditNotationsSchema,
  BFNEhsfLPvMSawMY6Q3SUpNzPsjYgQEKYmUQrD92UE4r:
    CdmObservableAssetCreditRatingAgencyEnumSchema,
  BgVnixZS6aAn2Xvg2wyoxaFLhL4nCdoLXTihMhmw4p8R:
    CdmObservableAssetCreditRatingCreditWatchEnumSchema,
  DqC2oNjEyRAjmb6kubvmJ5ppLVuekBouV87Zjnvc289g:
    CdmObservableAssetCreditRatingDebtSchema,
  BnWttcLPfpaqYUTyq7j6NHVPGJv1W1SJxLuyCksLQ9xE:
    CdmObservableAssetCreditRatingOutlookEnumSchema,
  '6aL4Uv72Kn3HLmR96RGbWs3RSBXaDcEwYRYpCFoCFJ1s':
    CdmObservableAssetCsaTypeEnumSchema,
  DP9vzie9YSXjQYMDVQb3TFeYN1on5KA4A37wPREYWq2C: CdmObservableAssetCurveSchema,
  JDNuetaPzRJ1YcnfGUCcHqTorc5byg7A9rwtFg9X6MZg:
    CdmObservableAssetDividendApplicabilitySchema,
  '69jx9rXicruZGKCBH22y3ssVo8rTB3rDWeNgDh7qhAET':
    CdmObservableAssetEquityIndexSchema,
  '8u75ZsfFENxuuWeFUM4VVj4pAdSd8NHQ4HucWy2U6LrX':
    CdmObservableAssetFallbackReferencePriceSchema,
  CEYV9kEtFbGQ1TN5ZdT4jXMZfSQUVyhphKVVYFHwQ1uq:
    CdmObservableAssetFeeTypeEnumSchema,
  'AkAb6u8YnWb99n5t6qK9FdajYM7ggv4DnbqMgxevFWm8#0':
    CdmObservableAssetFieldWithMetaBasketConstituentSchema,
  GpoU5yGYF1qd5qSfQLpFsNBGnJXEaP3fZZTzmmiqWEte:
    CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema,
  GxtMQNerdSTaQX4ik747BJde7hdaCUGQs5gCyGs4THE:
    CdmObservableAssetFieldWithMetaCreditNotationSchema,
  '4XRAbTxyhpi3g9jM47PSnx6GCzjXS7KbDW8rWLRyKGjA':
    CdmObservableAssetFieldWithMetaInformationProviderEnumSchema,
  '9NuX39eGBeGjQU9qFkJnqaMBLFBXyF3Qq2zwXtJKPvro':
    CdmObservableAssetFieldWithMetaInterestRateIndexSchema,
  FUZQmvWkXE16AV15YKc9DANRQNrg2wMz8MDdtcPfnPjc:
    CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema,
  '6E8HRHJPNpbSaPQoLzzGEaJf6en5naXtbaNeGZ7ar9b1':
    CdmObservableAssetFieldWithMetaObservableSchema,
  '8M8p7J9e17R96KGxd8hWDz34b3w8981GYsa4TGJtPhNG':
    CdmObservableAssetFieldWithMetaPriceScheduleSchema,
  '2FZHZ5RzsW7awysoaorCfmAnZGtxLTf6BLoT23v3CUbx':
    CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema,
  '2gfQWVQFHUKLQjAkfCvcbJNDyzFEQ8nZxo6gzLu3iBbF':
    CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema,
  '5wT2z1zzPQuYcm3mfixA2omkencs18E7UbtVshA7VV91':
    CdmObservableAssetFloatingRateIndexSchema,
  '9MJsMkavMQapBs1dYUW5H2rFfdgrUA78Ttyxc1G9yHkv':
    CdmObservableAssetForeignExchangeRateIndexSchema,
  ffUyq1uLJr9pnbCbPGb4K1JcnKnJuaoqQNJkQwfCi9N:
    CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema,
  '4mpErrGaQgDKSpphXbwY9BbsiJ1pApWHTA8KfMbzQbbJ':
    CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema,
  G9npdgFMDFvJBGT5mnkkLXcQPMFyryX9eZkBmAupDwzK:
    CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema,
  '7qaTZ8Xc3MHy9jpCRnc5mKPG1jU61ZHGMtwZhgBu5tQy':
    CdmObservableAssetFroFloatingRateIndexDefinitionSchema,
  '96T2JgQE4VDra6h3ycZ6kq7so3h7TVScf8cEw5kbkkq4':
    CdmObservableAssetFroFloatingRateIndexIdentificationSchema,
  '9oK7sdYVedByaGENq67wFqNA3Nqzunehwby4acgNNce6':
    CdmObservableAssetFroFloatingRateIndexStyleEnumSchema,
  F1apuBfHekENK3SqhCbhgdcHymV6jcuhFhC45BZhuy9J:
    CdmObservableAssetFxInformationSourceSchema,
  GUt1SUo6dMPSuntNueHZRjt3nrrab2xJB86nBLGRQrEY: CdmObservableAssetFxRateSchema,
  ArWyqfsfZyH5kHrUojjHkMRYz5Eun9yWVTvdqwTPbwpB:
    CdmObservableAssetFxRateSourceFixingSchema,
  FmLtwXC2QV65Ns3nmhjxLXoKCP4AuGj1rv5iMdcqmUmC:
    CdmObservableAssetFxSettlementRateSourceSchema,
  HnwRAqr1R2aXWUnkBsKcZ8yNRHPCmQTAVm6griWqkRce:
    CdmObservableAssetFxSpotRateSourceSchema,
  '9uQM3zoMTMLZFipKa1PU3Z1YndVH7avxgSGLXms3GVF3': CdmObservableAssetIndexSchema,
  '5mJyH3fk9daCZNjHN5gVMnpg4zEt5Nu2GWky6QSkHKZG':
    CdmObservableAssetIndexBaseSchema,
  '2K2y4HCSe3GYtg8okRPpYgcJdTtQXHQ25mihbE8Paa6u':
    CdmObservableAssetInflationIndexSchema,
  '9SbzsCyyrBbtfyrpVNNoTN5WhstJwnUvNnjX6pFenBBp':
    CdmObservableAssetInformationProviderEnumSchema,
  '4ewTgKPXq5xDsrR3GStD5tHN6FnPdeZXUQ5JDo5tkqZc':
    CdmObservableAssetInformationSourceSchema,
  CjLhV9zXsEPWjij1Hz3NWZZVtDmXET3xVwB1i8gzL7SX:
    CdmObservableAssetInterestRateCurveSchema,
  C4ggqArmWWYiuaePZaGFxFhaaidYckVeowufcqR1WPKu:
    CdmObservableAssetInterestRateIndexSchema,
  EZCcXSeu6Mk3Bc3Qcno1DBgEKRoJ1xsTQUDczkFSE6g8:
    CdmObservableAssetInterpolationMethodEnumSchema,
  '5N7r2T8zJNb9icnFAz3pNxwh7pMydKvTZyuGcLFAC4Jd':
    CdmObservableAssetMakeWholeAmountSchema,
  '6tLPRxaKr8kikEkfnoFn5a6CqY61ckSNTb2NLzfWwRb7':
    CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema,
  CwpYZPmQdRGD5hBExM6HNqoCwdcXsK3bbUFxDHPbYjFs:
    CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema,
  B6z4sPE6mbrDKZ212dEzdy8bC6F5DNgR8Eh4KK623JA:
    CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema,
  '7Ezn98bzTDBSzbTRQf8yvx7zNsbGwp4w3rfb12fsiBwz':
    CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema,
  DQP2qi6gwFxKtKMataRY4XdJdpe3v4MNCv43aURbDBPn:
    CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema,
  BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25:
    CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema,
  '3X1BxSYgvTeSDYHTZnCPcsWXcGAqhEu9B5XmTv8mUH1v':
    CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema,
  fx4LQnhJaV8s5Joj7TDWyvEhsFX5aHaLQe3VAVAU8FC:
    CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema,
  '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE': CdmObservableAssetMoneySchema,
  DcUTaEYM4WWvLRoDutDM6dukE5ZErd9Nm1ke8SZwWUp9:
    CdmObservableAssetMultipleCreditNotationsSchema,
  '5PFLZB36WnuYf12r9mcZZHtgkGG8orG4mKYXZUf2T2L8':
    CdmObservableAssetMultipleDebtTypesSchema,
  '3TzCHW48PK6kL5s7n3x7jyA7VmeiJJ9D2JgzR53cTcPe':
    CdmObservableAssetMultipleValuationDatesSchema,
  Hb4wmAVuJwiD8UV5Stp7MdchNt2tK1QCEE5tBFxE5F9A:
    CdmObservableAssetObservableSchema,
  C1fmUXxsuQZKB9pnb77XYeC8nw26iYVpjkTRaG1dchYX:
    CdmObservableAssetOtherIndexSchema,
  Gx6tnCEperfB7Xg7wHbZx5dSuf9AEGb5zk5PdoPPbSKQ:
    CdmObservableAssetPartyDeterminationEnumSchema,
  G7RBkCYuRGtWRTgXUrQzXRkYF1PaULGgHp8KeH6spT6k:
    CdmObservableAssetPerformanceValuationDatesSchema,
  '9so5mJWR9jvdKWfaAnMyj5WMAv2TaLmZrmBZxGyLWqMf':
    CdmObservableAssetPremiumExpressionSchema,
  V3Wp7L7rEDxbgbj92BVzYAqyLjSQQWBdwRqiyHtAuu9:
    CdmObservableAssetPremiumTypeEnumSchema,
  wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543: CdmObservableAssetPriceSchema,
  BoD5XyrRXadR1NLz2BSQ2UQ34JUbjZPKbt59eNzTqx6N:
    CdmObservableAssetPriceCompositeSchema,
  '5oss5vAthfdDyx4i1CUcAgeHxzWsk2SCDGWtrZ76qZzi':
    CdmObservableAssetPriceExpressionEnumSchema,
  BVwHNgkrszdwh7BMc66NPQwh2gQsFJvJJQE7F88TBxwV:
    CdmObservableAssetPriceOperandEnumSchema,
  '3M3Dq9Mg9Eq1zojVRM5ZJVz9nV2VfXFeSLB6TnvKozYs':
    CdmObservableAssetPriceQuantitySchema,
  '7ujhwBZKKYZ8KFEFNUSPTPcy8E1hFRJJzhgaX3ZgJGY5':
    CdmObservableAssetPriceScheduleSchema,
  HXr8kdL38en5pwXowLj5Q3Zm1ZazRrhbNVRosgr5VrV9:
    CdmObservableAssetPriceSourceDisruptionSchema,
  C1BmErqx6smbQokFqorQp8PqoSsJWkSGu3M3mD78tJAq:
    CdmObservableAssetPriceTypeEnumSchema,
  GxBLq28MxAyJ2dmLBBURqHrK8qZuSmpxRR19gZsCJG7Y:
    CdmObservableAssetQuotationRateTypeEnumSchema,
  '8rvM94HuSxVEjNh7NmWuk8pKTjeiV7uTrwNqUX9zsDaU':
    CdmObservableAssetQuotationSideEnumSchema,
  '5GwsMwbaX4fp4AD7NMb1rr8z8WDVafnPXTBwsagyzx2':
    CdmObservableAssetQuotationStyleEnumSchema,
  DYuwgUPfQXXLvHYN9CkQCk14eheznpsJXzEVZupjdJdD:
    CdmObservableAssetQuoteBasisEnumSchema,
  CRDQNtXNJmEa2569YsarVn2w4uDdGJfuoMsGA37B3aci:
    CdmObservableAssetQuotedCurrencyPairSchema,
  '8ozLJtusb6qjQQvGNBr3CSm5GrpkBW1qH3gderp3Jrog':
    CdmObservableAssetRateObservationSchema,
  '3ePuoisseC1LPtuzJDr9A1SpUkuyfzKiDPwFQS4DtH7h':
    CdmObservableAssetReferenceSwapCurveSchema,
  '3iMwczqZ5hCmimZgAMWak1MiTjPqmNqxhKbiCnuKhHiD':
    CdmObservableAssetSettlementRateOptionSchema,
  FWDtHcje7vk2DT9i83ydGLBfFw8w7RmzGbaZaLknALuS:
    CdmObservableAssetSettlementRateOptionEnumSchema,
  '8EqwdQrn5Dw7AHtUZT6rtQFm2KyamTxrfc8dzdBkyRcU':
    CdmObservableAssetSingleValuationDateSchema,
  C9EPdpPrzh5V9xD3tEvsVVTXiTnJY6xu9LYzmuhxErxD:
    CdmObservableAssetSwapCurveValuationSchema,
  '65FKmZoG2ihwTo3rzTDNSxkKZagb2Cf5Yd4XZz9V9hRT':
    CdmObservableAssetTransactedPriceSchema,
  '66zVckdam9PFW8teq1v55hAb2SjzvqkkKJKB5VKKrrkT':
    CdmObservableAssetValuationDatesSchema,
  AdF7VVSQD7g6WDw7T1ERRvh2LyUa1x3ViWqt4xqRh9tj:
    CdmObservableAssetValuationMethodSchema,
  GdU62xtHbp3vNgepv4Uup6pJ6aTD2aWwLiwoktktLLBX:
    CdmObservableAssetValuationMethodEnumSchema,
  '4qEkQfDu8oCghp1oSzQpCCV54KiEzfWX7fbKB9doJUtM':
    CdmObservableAssetValuationPostponementSchema,
  '47H6pRnGpeWU8CvBFZH3noy3Tkc3X5qKNLzj1PkiBoxL':
    CdmObservableAssetValuationSourceSchema,
  '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab':
    CdmObservableCommonDeterminationMethodEnumSchema,
  '5SHUer2m9Wrjeo45qpWiGeBoKwQ2Z66Waz5zaTwYcJUp':
    CdmObservableCommonTimeTypeEnumSchema,
  MYhc6gGsaViuAUK2NFHroGDTxJMNRTGbXn7tJw4k8Rf:
    CdmObservableEventCreditEventNoticeSchema,
  HWbAdp28QNY1ehyUyubaSbcB8FhMbDv3qp7poZxNn9mM:
    CdmObservableEventCreditEventsSchema,
  AVTGwC6XTdPNBYpCUxUf5Agcpf2Z8whRs2N8aNRbffDr:
    CdmObservableEventDeterminationMethodologySchema,
  '841NMvSM9PQqKJH7bDVnLgUotN9taubNFzdxbkbjNLnK':
    CdmObservableEventFailureToPaySchema,
  GEqVXdfmyLaRbcY72PwcZzu8xtsZVwesLZCTFcqN59mA:
    CdmObservableEventFeaturePaymentSchema,
  EuGpRedX58TPU3i5qZ6LxsNcbEJmKoGSNL6ivqwkFYgj:
    CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema,
  '8nmbwhMz1vxgssSgz1Fpj1Acf2tKDiXSEx1nprSHWZV8':
    CdmObservableEventFieldWithMetaRestructuringEnumSchema,
  '5JU838ptsuP3xhN8DLcMeENsfzy6eK4qD4QJETiXAH5h':
    CdmObservableEventGracePeriodExtensionSchema,
  BHYPNp3oAgUMuAWFmLUF4tjwQpm7LpWwt6gZVmtqXwyv:
    CdmObservableEventIndexEventConsequenceEnumSchema,
  uUenBfK6DiEGeZWysD2Hj8epQYj7yTPH1iKfF2bAtT7:
    CdmObservableEventMarketDisruptionEnumSchema,
  '7nuxJCjc51f4w1EhUb9R9P4L5uBQELSPjqdBhMothJ2G':
    CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema,
  FrLAdW4sDG6MpoBXdBATgMkuuGm9pecAaarCRhvnCb2F:
    CdmObservableEventMetafieldsReferenceWithMetaObservationSchema,
  FTknYeDBE8m3vDi6uLPgcH5j3YeR6NduZGwBrVmho2qs:
    CdmObservableEventObservationSchema,
  '9KXvG7maDiQ34ZWLG3PFbh8mX8zubdxajYg63XxeMUHa':
    CdmObservableEventObservationIdentifierSchema,
  BiHXzuMF85zKCgU4f3BJ2Si1sps8uCqcRrB2XxMrhTPq:
    CdmObservableEventPubliclyAvailableInformationSchema,
  '9CCmvz3XrLCmtbjeACPQa5Rbn3V7RkiquALmSzJ9dLTV':
    CdmObservableEventRestructuringSchema,
  GVjv34nbkQTtiTyxF1YaWKj1CzAkkX7yeirLncT6H8h8:
    CdmObservableEventRestructuringEnumSchema,
  '6F51Eo9CeCcpo2FgVGKKsS5rBRpqpkyo1WoTxMfYUwZZ':
    CdmObservableEventShareExtraordinaryEventEnumSchema,
  F4aQKt7CSGvhjKJxn6Eq7qh8eWsMhiWdGoPrRMMpNknC: CdmObservableEventTriggerSchema,
  '5q7Te3Mgou1kKCrZx5Xwb2rPekcJF6cL81MN9mfRkjxf':
    CdmObservableEventTriggerEventSchema,
  BDRmKW7BVJYNZXDyKP5S625t8NyJmgQDWfRw8Mjzizgd:
    CdmObservableEventTriggerTimeTypeEnumSchema,
  EQg8oK2XCYwAPXBQbQ25PHut48x4LXJQsYqgXoaEtcRq:
    CdmObservableEventTriggerTypeEnumSchema,
  HeB8cgyKQTeXcVdVnsFpiWBGgXUAfpUPUwPFBPY7JU6H:
    CdmProductAssetAdditionalFixedPaymentsSchema,
  DFCwxwyJL859yeqbrr3oY7vncLWeadysD9VJGA6LGJgK:
    CdmProductAssetAssetDeliveryInformationSchema,
  HjxX213km4XYV1mYvnDzqdcve8BuM63aN1sJ8oe1TbYc:
    CdmProductAssetAssetDeliveryPeriodsSchema,
  G3hrrr7rcs6ZtCze1xXjYezVbZ6rTuYfog2nrcJZ7fTN:
    CdmProductAssetAssetDeliveryProfileSchema,
  '6Tr6ZRk2ed6Xz94Dfj4ZYH9Z1EnxKkZ2z7uEyNB3Krv':
    CdmProductAssetAssetDeliveryProfileBlockSchema,
  DPWX3TQgadyc2NWPmBWPGsZuwotdkjqzr3AZzY6JgdeY:
    CdmProductAssetBankHolidayTreatmentEnumSchema,
  '2hzofepdHmrqpLHQwtRqdcJ6PoT2WXfk69YAGwBuwZhX':
    CdmProductAssetBasketReferenceInformationSchema,
  E7YUir3XYc6p222k9M2DUYKNK573NXkhiQkA9SfScEJv:
    CdmProductAssetBondReferenceSchema,
  VHha4CybnXvTZ9WjbHZHgkHWN8Rdh964hfPSj1Tb5yi:
    CdmProductAssetBoundedCorrelationSchema,
  '6P8aTS33Up5mmto9DnUZz5ACxLVmLywWGuVqNKfHX8uK':
    CdmProductAssetBoundedVarianceSchema,
  '136mCFHby12JarZJeWoUUxHWR7a7DAi5bJW6dEaTmy1c':
    CdmProductAssetCalculationScheduleDeliveryPeriodsSchema,
  FG2jLxQvPs3SKvJ3Jmg6mN7bHSMMac1ZBTWtVvnHP8M7:
    CdmProductAssetCashflowRepresentationSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#6':
    CdmProductAssetCommodityPayoutSchema,
  HiGUe6GomANJoTCv9K4kKoGwPWphKP2zCh4VE9B1syGk:
    CdmProductAssetCompoundingMethodEnumSchema,
  HqY3kSqV1NfLvT5YLvitQ5Nq1sktFe6oA5AqyQC1j9jT:
    CdmProductAssetCorrelationReturnTermsSchema,
  '8urUwRupxFQSg44fuqHiVELRztwhJH1CyMTbTSkKSFEA':
    CdmProductAssetCreditDefaultPayoutSchema,
  '9uDWp1q9YxCE1cTdRRJoNvBwAY8sF71RbqWxaA3Xiwh':
    CdmProductAssetCreditSeniorityEnumSchema,
  FD6kLg2xwgd3jdCKhBv6qFv2EqCJPcQbjUm5b9XKmQDg:
    CdmProductAssetDayDistributionEnumSchema,
  '3K4A6xNiQ9Kzu5Qm4GacSdzEutFxAdniaFS2YvFUaSMa':
    CdmProductAssetDiscountingMethodSchema,
  '7BRQPc5ga1LQPaFUJpmc5huifPeUuZvVsyovgsxm1TSx':
    CdmProductAssetDiscountingTypeEnumSchema,
  HKJnSoksJBRW2rZ8dJKqPrqMNKwbSMWak8yFAgbBniu6:
    CdmProductAssetDividendAmountTypeEnumSchema,
  ChCPF5QmbcAobXbvs9K4wvqSwzqR7kRvufRyresyq2Rj:
    CdmProductAssetDividendCompositionEnumSchema,
  HXFJiXPaDjND3jSjnioKon2K8cUjyf3aWi2kEsfB8FU4:
    CdmProductAssetDividendCurrencySchema,
  '4gtwm1ndbcupZZhmUktf8yr4opV2kyAfwauYoMthJWqH':
    CdmProductAssetDividendDateReferenceSchema,
  BUpou4kA4YDHYorRt8HySKCususevQATeSj9bysNS8AK:
    CdmProductAssetDividendDateReferenceEnumSchema,
  CVotzT95LfpnY2dTRZM7sgw142QseC5qSBhosJ1xtHbK:
    CdmProductAssetDividendEntitlementEnumSchema,
  FschfMdbVginzubUZdVVEtooCLzhymBvnVnHpkmdgsfE:
    CdmProductAssetDividendPaymentDateSchema,
  KDqBQDTNYga8X7NLQ7JAEt4WfKWsizZQbLLCPtaLiAL:
    CdmProductAssetDividendPayoutRatioSchema,
  '2nm92VnYrhXCMzyc33qGyg5j5Jyb1yNPyTfHecpCuyVE':
    CdmProductAssetDividendPeriodSchema,
  CUrYmDpSDF4EJz6dwV7Y4bsg12J8srR6T6zijqvRfZh3:
    CdmProductAssetDividendPeriodEnumSchema,
  '7h8FScnN4pQLHjNkSJKae9Pz8U5rCRfseiLcscSpZTss':
    CdmProductAssetDividendReturnTermsSchema,
  Jo6daPzLZmva9P2h4WZUsuU1uvgGPFixiCYarEPe9ts:
    CdmProductAssetEquityUnderlierProvisionsSchema,
  GknZ9cDpboEQXHMijEuoMgXTb2P8Gyu81nfwr5bBAP8B:
    CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema,
  '2HJVG7XkuEXr46byHb52g7WoYmwwfUGky6XyUDF7Wjgq':
    CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema,
  '6BMwav4uPAPxHDeLGeAJfRnPnXj8bbdd7czs69vEFKGe':
    CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema,
  '8msKPRtLbjwYbGSWkXSUbT1ZRqy31FsfvB3pDj12CYrj':
    CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema,
  '3vj6ssPFj4gjJ2GtTYcG7fYFup3n4kMFQnCR3byzuLkR':
    CdmProductAssetFixedAmountCalculationDetailsSchema,
  '46SWDPN5nuL9ZzDydHQsubnAhiJ9bTSAdCTzFqR4v3uz':
    CdmProductAssetFixedRateSpecificationSchema,
  AfcYntvhQ2t2vgDhAMWwSr5ppeynG2uGcXJKuBR3wzw7:
    CdmProductAssetFloatingAmountEventsSchema,
  GMkA62ZBwre9RPW2n4w7eTR8b5JAYucewf6zjRxusAjQ:
    CdmProductAssetFloatingAmountProvisionsSchema,
  AVat3RrkCKPwq5tdXB5kqbsA321NrwR1NP6QvGN1ag9s:
    CdmProductAssetFloatingRateSchema,
  EsmTXkqcph5RVz2zTb6zvTt1xj9SQCBKMxiTaQQypHqp:
    CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema,
  BtnLfx11x5MLsz1yoyY1HQ3iFLL3LRZzsXX9sNuK3X6Q:
    CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema,
  A4wWX8jkgKvvqEesWt98ZquGHUZwQv42BCV1VfTQ3xWp:
    CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema,
  '8qzg72AeYj2iiu6z9Le3h4TKysg4qnoMf4fda8wiSkPn':
    CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema,
  '4Nyffqeo3KW7MXuPbXExtEv3Rym5Eutspbx5HHitiKoC':
    CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema,
  BjA7tiVvew9kmoLb6h8x1ARy9pGqjoid3GzEK7wTAjPe:
    CdmProductAssetFloatingRateBaseSchema,
  DZ3QQaSdFmgFJ78DH9tSdAoquu9tGTmUiKpyntACFVwX:
    CdmProductAssetFloatingRateDefinitionSchema,
  '2EMfLJYhLWvzUA3EhndQzxjEwTJz1JeAYUNjZDJL66PJ':
    CdmProductAssetFloatingRateSpecificationSchema,
  '9fg2VP16HfxmxtjeZutwPjya1nGg6zAhShf72sfYynLa':
    CdmProductAssetForeignExchangeSchema,
  EzG7sUjQ1nt9FsGH9rGXPtygd5B7hpbtNNK57CxGS247:
    CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema,
  '7dEpdwMAhKecY1UWLsDtUvYvxQgWGnNrAQJjcKd76hSv':
    CdmProductAssetFutureValueAmountSchema,
  '8688b9SPeJc34d4CJykTKUnQpiSqJQDX6zUE4m6DiHh3':
    CdmProductAssetGeneralTermsSchema,
  '966esNeqYwpoFQgb847YHKee3fozzSrJhnCs1532odLB':
    CdmProductAssetIndexAnnexSourceEnumSchema,
  EjsFU4aMgFpnjbnat7xVhaXFrniJ8sabV7w3XFBgP3C3:
    CdmProductAssetInflationRateSpecificationSchema,
  CEPYQUQEyD1UJSztEdRDbm5tx1WpgfhmqDCG9g7zJdRm:
    CdmProductAssetInterestRatePayoutSchema,
  sfaJ5JP9gKaCYXxiJ6wnxfEBWk7QSjUi1UW4TauKx4R:
    CdmProductAssetInterestShortFallSchema,
  F4ABm6Sk4m5YjceKSAfEmsyYDkQG4Zm6byLLXq9kdSpM:
    CdmProductAssetInterestShortfallCapEnumSchema,
  HzHMSqRjpyrAtbCm2oQg1DY1Bkk5tpeoCGTii8EGuUa9:
    CdmProductAssetLoadTypeEnumSchema,
  BBgcbEXC2m59J1z1f2zctaxNzuEUosaMi3HLNPPMLwAt:
    CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema,
  '9s7DmteKxA3yXxQB2nMZpieJDgH1HyVyhHrufLuusW3Z':
    CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema,
  '5F15MHyVL82YVLdpKtyeyJTtHvbHtqQDKZj8NkhWm8hd':
    CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema,
  CyvEqKQpGL1tCK33KuVNmoqqfPY41YR2zXaxhgsjDER2:
    CdmProductAssetNegativeInterestRateTreatmentEnumSchema,
  Ac1dFPFVTVYmkEvcK2s53fVPu24ZEec5HFv1Sb43RD4t:
    CdmProductAssetNonCashDividendTreatmentEnumSchema,
  '7YFwQGbWnfaZ3YgwzGGgdBhyDppvFGTH2LibSGzdhSnH':
    CdmProductAssetPriceReturnTermsSchema,
  C6peWW2cNzfWSj33MN1qibTwdFUkKrMXLu4XCNZwRqLv:
    CdmProductAssetProtectionTermsSchema,
  '2WkEpRF5iUYJyCn1j83Cdfs6zeRh6Wn1FLXwQCMU5EpE':
    CdmProductAssetRateSpecificationSchema,
  '8GhAUMM1Z2VZSQY9oufxMtUgDuQ5iTuBVYEYrjnYQBBt':
    CdmProductAssetRateTreatmentEnumSchema,
  E6NzqHc6ART6mrFaiHBHZQdpeKND6nhvC8RWNuBEmiqc:
    CdmProductAssetRealisedVarianceMethodEnumSchema,
  HDWPv3g9U1KUdNNbF554aWveShvcV6UnPnH8HQGqtppM:
    CdmProductAssetReferenceInformationSchema,
  '9Ad9BQPwszkJzQsWNjXKRKHseE3BgBEg5Jcb66mt5qGV':
    CdmProductAssetReferenceObligationSchema,
  C44nC78rjDLbXVjfppMUZMnRAhZJU9me93bNLYMajtUz:
    CdmProductAssetReferencePairSchema,
  '9FLEZ3hoqXBNGzWS96voDe9xUfnPW3V6ah4Rf5UuethY':
    CdmProductAssetReferencePoolSchema,
  '78hstsoD3xojutwJdHjXPCPrZAeHmmoYTZo4oAjX8BnR':
    CdmProductAssetReferencePoolItemSchema,
  FMz7cW1KAAZd9MhEa5hUpryh8Xj1masTxFKjK7XUo6Re:
    CdmProductAssetReturnTermsBaseSchema,
  '4SvjRC1Thybv7EN6BqY9TGmSF2x7zK9ixyYS8UCempKF':
    CdmProductAssetReturnTypeEnumSchema,
  ACsXLxAEZUyN5kmAjEy5ZdkU7y9Vu2cB3BYqYHLTopZY:
    CdmProductAssetRollSourceCalendarEnumSchema,
  G6d8KNyxd48FEiAucE5KdoV7bwfdvPoygUV2xZVmPHeZ:
    CdmProductAssetSettledEntityMatrixSchema,
  Dwv7F3TApZyy78ART4sz8g3mMZvHV3rwAjVXeG9vxviY:
    CdmProductAssetSettledEntityMatrixSourceEnumSchema,
  GaAg8q3PSay1AwNrPupAHeyXJ8umRSUtc4civJtymJVs:
    CdmProductAssetSpreadCalculationMethodEnumSchema,
  BB9KuWeeD17dQmZbr44QJkSjv1PV3rNCJgH848EEaCyJ:
    CdmProductAssetSpreadScheduleSchema,
  E5MxGtJaFFNZDf6ekGwAefBGRTzwccbYECFDpCS7Ztgw:
    CdmProductAssetSpreadScheduleTypeEnumSchema,
  CAKY5ifWX2fXVm7watWiPNQV4WEpGGKux4YmFmLEfodd:
    CdmProductAssetStubFloatingRateSchema,
  Ew8cBFQJEiMm5RgVmJg1Cmvyjbi29rZ1Rcv7oQrsSSYR: CdmProductAssetStubValueSchema,
  AzjDeg6NcvxKrLxiwH4AdjVNhMtWHj2BHfTGYmY7NVrP: CdmProductAssetTrancheSchema,
  '4mhmBno4oM75kHALfSudGb7kWTYN5GN8J5C6WqRoX6fv':
    CdmProductAssetValuationTermsSchema,
  '3tApr9XRthnu91mUaWPjYs5ywdrhGSFHV3jDycqYLtHL':
    CdmProductAssetVarianceCapFloorSchema,
  DyvMnYXfQRGwqfP9Kybg1qYNhMuFyGyMpw3x1vAopkmX:
    CdmProductAssetVarianceReturnTermsSchema,
  '2FArPnEgeydac33KBUck7sDiK4rQpun7wismexFXyRmD':
    CdmProductAssetVolatilityCapFloorSchema,
  '3e4M5cnE53HFtp4uJHoNYZeL1Vwo4xTDK6XJh5tNRiGb':
    CdmProductAssetVolatilityReturnTermsSchema,
  EFt5vpwMjQFJJ8LHLDpuEqY5R7UNo6zDPqdti3crxcVv:
    CdmProductCollateralAgencyRatingCriteriaSchema,
  'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#2':
    CdmProductCollateralAllCriteriaSchema,
  HwuWMb3tTYLKx27eGnZD5LB4TVdV6iz8fUGmWx1zqM21:
    CdmProductCollateralAlternativeToInterestAmountEnumSchema,
  'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#3':
    CdmProductCollateralAnyCriteriaSchema,
  '3Z7Qd4nvD5kznK6ReEW6jkdThhTmUXZjY8dXKEUBgqXx':
    CdmProductCollateralAssetAgencyRatingSchema,
  Fdf7nwnsHtnk24Wpyw2jqDFq5rEd7WLR39X6EQnoWsmU:
    CdmProductCollateralAssetCountryOfOriginSchema,
  '7xRHcjREGdk4hE9MrxxaotTFeaL3wGTBBs3Ez8K8o259':
    CdmProductCollateralAssetMaturitySchema,
  '58o5oEHw5suowY8qW1qPwFwvjEWhvEosaggAnTkfqHUm':
    CdmProductCollateralAverageTradingVolumeSchema,
  DBtNQnoS2ASiapYrVYocF4KmKjybYa5xQcvCQqGs2B69:
    CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema,
  '8HEhkXnXfJhyvURQJyvVSY9RQ1RChe4ZsT8pcSGCwLWc':
    CdmProductCollateralCheckEligibilityResultSchema,
  '4TmMsyAdoN2Np4C6v3ypajqNSQXAgmDT7v2FYpcc7DY7':
    CdmProductCollateralCollateralSchema,
  CmSrznzVLE1Cqum7Xx5TArrxUTDcNSUH9UDm1PLDZWeB:
    CdmProductCollateralCollateralAgreementFloatingRateSchema,
  'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#0':
    CdmProductCollateralCollateralCriteriaSchema,
  DNrLYMzUypd54LsHQ7fuTGkHeaucAd3AmcgDyB9DXPaY:
    CdmProductCollateralCollateralCriteriaBaseSchema,
  GwW6uGFK3Akqa3zGHwGsdS5Ejo1HHYia3YVdNX9wxpAU:
    CdmProductCollateralCollateralInterestCalculationParametersSchema,
  '7fK6wnRWpFjqpe79nBuP5Y5x5DnXYGWkx1G6G3hmnf47':
    CdmProductCollateralCollateralInterestHandlingEnumSchema,
  DFfVKuUpQ3nKk6osGBkvUZ2FSvR8myNQj2QHsn5GFzo4:
    CdmProductCollateralCollateralInterestHandlingParametersSchema,
  Hu2GxR5c7eMm5dFy9t6mhrBCQP9G6EdyEPDUz7TUV7Co:
    CdmProductCollateralCollateralInterestNotificationSchema,
  '5rPzzyeLok543pSmRaRgtJQh7E6qcVWqmPgrgji6Avv2':
    CdmProductCollateralCollateralInterestParametersSchema,
  S4kLcw9up81q3TNVMZRCthznJz71LuEpiPLPWh1MJ87:
    CdmProductCollateralCollateralMarginTypeEnumSchema,
  otvEhr2nsePtQK4XNps2jE29Fd9hQtnEiPi9j3sssCi:
    CdmProductCollateralCollateralProvisionsSchema,
  BL9z4RShUcNi4oWpkU2pgnaKF2vGwrxjpJBWWMAUruzN:
    CdmProductCollateralCollateralTreatmentSchema,
  DZPehsWDuPxFb1C3cSpumhHsTjexDKRzrbgBgFDfYLKH:
    CdmProductCollateralCollateralTypeEnumSchema,
  '5tTMFMnH6nTLVpswR4BaaD9sD5W22HSgJu5F8iTop8AS':
    CdmProductCollateralCollateralValuationTreatmentSchema,
  '7JhDBQ8P99z1vkjs3NtSrZYQwsbwwMPjU8BSR4sjD7c5':
    CdmProductCollateralConcentrationLimitSchema,
  Ag7HvtBnwEeKkpZQ17isCMUnXuFik93kdftfxJN8ih6h:
    CdmProductCollateralConcentrationLimitCriteriaSchema,
  '12eAkteKQP3QRJHzFcoKpMYpGiRWkbuRMJSY7ZSMmsBi':
    CdmProductCollateralConcentrationLimitTypeEnumSchema,
  '2SCDqYNfqg2Ef6R5QB9F1V7RLuuBbGUCoc6LnFrM1jwp':
    CdmProductCollateralContactElectionSchema,
  EUQ9MJibMGwCC7weff1GEUA2cy4bvdFoqaAJx4ySahKL:
    CdmProductCollateralCounterpartyOwnIssuePermittedSchema,
  CvgQkLkTY3wpBq3P2xqK9it4xHe69wrRbrazq7FNNLci:
    CdmProductCollateralCreditSupportAgreementTypeEnumSchema,
  '8WSVgLvQLqBZPfmneqoMN3uQVAz6N5xkrPQBmDUkzdzX':
    CdmProductCollateralDeliveryAmountSchema,
  B9b96SYnsgwBPG9yHVVuip7q1ccRhp3uVXxr8cwVkBWb:
    CdmProductCollateralDeliveryAmountElectionEnumSchema,
  ABc6qnhxyapptzFA4KdSazTxrmr1Xf5LaKiVA7d9Zzgu:
    CdmProductCollateralDistributionAndInterestPaymentSchema,
  H32BQcu8EWs2WztGEuCPiGD6VGEtRwNB7CPsoE8MX25p:
    CdmProductCollateralDomesticCurrencyIssuedSchema,
  BnjZSXrPHPuuzDKnKtzYoNPSNR9RwaZyNpnHHx1MnsY8:
    CdmProductCollateralEligibilityQuerySchema,
  '4wYLbmNHssjvkRwDS66pb73SsDArUAfMW2BHtj2dZEkZ':
    CdmProductCollateralEligibleCollateralCriteriaSchema,
  '3L89wYhXf68oUZTeBkXQnsfBZCox4PN1dZWV9BcQzfdu':
    CdmProductCollateralEligibleCollateralSpecificationSchema,
  '7SZ3Np81ht94V1CujqhpiyFZFHojhPKCRtHnfChNWjyq':
    CdmProductCollateralEligibleCollateralSpecificationInstructionSchema,
  G7K82XJ1MNdo3T8yPiSDcb6H8yyWjbQwdH4WSJGPGWWx:
    CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema,
  '3RjPAV7XDWbonvs8Tan8M9CcFfX9XTnBrDec54oyL7rv':
    CdmProductCollateralIndependentAmountSchema,
  '64gfjSEPVGo67KbDGZX2jznDz7yJ8jdjLU64hFY297xY':
    CdmProductCollateralInterestAmountApplicationSchema,
  HKeLnZoECFzBPxtPse5jEjzWuTQvvvURtKimZSBSdAzL:
    CdmProductCollateralIssuerAgencyRatingSchema,
  '5vbt3yqCDAPHfDtrqySHEMgZbgECnD13NMCkT8ndvRME':
    CdmProductCollateralIssuerCountryOfOriginSchema,
  B7KUAgvBkpwEWEYnisJG6iRRicpw2LC4MuxeYzxhMh9y:
    CdmProductCollateralIssuerNameSchema,
  DBagP8NcuSpNGeJTMciJspmiVKhEvpxenhq1VwyxA9yu:
    CdmProductCollateralListingExchangeSchema,
  '7AfyjzzZ8Y9CSKTQ3jRNBeoosewUEsqKoK4tfANwmDuR':
    CdmProductCollateralListingSectorSchema,
  '7j2afftZwsKVHvwsGny36DeHZyszQTNjaKddY3EUPFWP':
    CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema,
  'FriZV1WqZYyqDSVgQuWAWwgxAjAcBjGrzBtX5z1e7ZFZ#1':
    CdmProductCollateralNegativeCriteriaSchema,
  EM2cuboURhKvNDFYAA6NaucjpnUHYb2s4CKVEyrAt3nK:
    CdmProductCollateralRatingPriorityResolutionEnumSchema,
  F5KpA82QSi1KJJu5Y1QFYm3KVvYrsajy5CANvijdTquA:
    CdmProductCollateralReturnAmountSchema,
  E3BwAcnw9Vo2sDe14rdt76sD8KTECTPFQHhFqUu5Weoe:
    CdmProductCollateralSovereignAgencyRatingSchema,
  EjBk15nz62KvMKiydMXvoDBt48tV6rBpEhuKBW5QABxM:
    CdmProductCollateralSpecificAssetSchema,
  '5jNLBK4JBUbp17MKjC98nsw6G8uvTkkc3hMW1Ao1P8Kw':
    CdmProductCollateralSubstitutionProvisionsSchema,
  FP5233evs7ZPmt4TtJViFwDZ7XUgyXmKmP7WGgjrSKtp:
    CdmProductCommonNotionalAdjustmentEnumSchema,
  FDhYdNTtaLCVNSezF95Ys51ECzH3L89vhhaxYFDFUP6w:
    CdmProductCommonScheduleAmountScheduleSchema,
  BXbBNHYXNsAs17oYsKYnKjD8RK186gXxjiPPnFzNiVVU:
    CdmProductCommonScheduleAveragingObservationListSchema,
  '9hxbzdeXPKQQGVKqPfSXbF69HWKHGiPzMLHRa4vh62dM':
    CdmProductCommonScheduleAveragingPeriodSchema,
  '5Lq5NnUDQc1VYTrSN1ydpnZwyrjq2SofswjFANgehFem':
    CdmProductCommonScheduleCalculationPeriodSchema,
  '3VwhGwLL7XV8qQMng9XQDytu3E4oEQBmpePGJqopB4yb':
    CdmProductCommonScheduleCalculationPeriodBaseSchema,
  '7vwHYRPc5UsNRrLwCSTCUnBaDSvw6C495mDPvTrmsiNe':
    CdmProductCommonScheduleCalculationPeriodDataSchema,
  HNqe2eLHMNHdTJAqM3zJLo9SBP9LgZu1vfSbhQ9KX51v:
    CdmProductCommonScheduleCalculationPeriodDatesSchema,
  '4o5d36vxkXs3Qdn8xQqyihG3a6eaDaNsQ8gKqkZoUWSK':
    CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema,
  AeiUZ17pKAByiRrS6p1GH2RgKqQbh5a2F9SJ2rTsr2bE:
    CdmProductCommonScheduleDateRelativeToPaymentDatesSchema,
  '8anXaV9kfWdcakaHM9sbDkkkXhFwYtAELJDCmQDjZ9wU':
    CdmProductCommonScheduleDateRelativeToValuationDatesSchema,
  CwVqcagqRU8u2uYQ7UX2DhBEktwSuwCNdvLc92FdhUm6:
    CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema,
  '7HjksLDGh6YzfTHkRQ2USZ5teJDX6vUpijbCQZwrYeSN':
    CdmProductCommonScheduleFxLinkedNotionalAmountSchema,
  BReQt7q6C5537Y3nyWefx79E61Eegxm6K7xrLwVrEmHp:
    CdmProductCommonScheduleFxLinkedNotionalScheduleSchema,
  Ez5s9tbfPdmp7LcecKGYBeQLLSQFq5JghRb2yZTgTQTo:
    CdmProductCommonScheduleInitialFixingDateSchema,
  '5vk3XbD6dScT1eaY9grEq8mtTaaaAM5g7kjvCTk7s5a5':
    CdmProductCommonScheduleLagSchema,
  FeNrqxwS32kNzjXs7HqrxtfK9N58r3zNtk2U2uKgXJQU:
    CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema,
  '8NNNz18sSETdae4uM2DzFCgUaZuSYVrut2KQHj6E2q46':
    CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema,
  '2jeU259hBuPLHL5wYMHnutcujA2porimr9ETLQNUcyCc':
    CdmProductCommonScheduleObservationDateSchema,
  '3eEv8a1ur5GmtEdvqCS9sTFEgTzz1ffcWEvBcZfTMy2h':
    CdmProductCommonScheduleObservationDatesSchema,
  '5HyA1BrsbksXL8qZtKjnV98GEFdqbjYkQRaHW2XuXupL':
    CdmProductCommonScheduleObservationScheduleSchema,
  '3wwdVKCEN7pSLG9mPnXFiizaAo59qz2yQnNHrzGhT59K':
    CdmProductCommonScheduleObservationTermsSchema,
  CnFPWcJf9xSTq4FLwvkKAXcrxAjrdDmjq7gzPjKyC2MN:
    CdmProductCommonScheduleParametricDatesSchema,
  '5X3D2ENebv1d9zFVGd1EdB4mT992xV4BvQ4xjuwktuNK':
    CdmProductCommonSchedulePaymentCalculationPeriodSchema,
  '913TgdFLeMHEAXnndV1KuUqmoxUtRjXn8X8JRX4n632b':
    CdmProductCommonSchedulePaymentDatesSchema,
  '6q21RVmQN33ataLNzF7toqxk33ACgLu2ai2zbmpPrgaW':
    CdmProductCommonSchedulePaymentDateScheduleSchema,
  GduyNWwKbvbkvqDp8epxCYREJb39YMi8nSs2ctyUMCXF:
    CdmProductCommonSchedulePayRelativeToEnumSchema,
  '3ScAWMceSndUiR2vHtzZGzPGccvuNjx7L5TmQVXQ9AYf':
    CdmProductCommonScheduleRateScheduleSchema,
  '3UjvYgL77sb6K36nNvsdpE4Hyt82LgNWcuWKqhKzh6to':
    CdmProductCommonScheduleResetDatesSchema,
  DpTSHTppc3xwy2ybJQxiZTCtQk19AUWX1Rca92nyrjHQ:
    CdmProductCommonScheduleResetFrequencySchema,
  Dm9PM5TwaH54z4a5ziQoapPuuwNsvRFCZkEYx2ZFiegM:
    CdmProductCommonScheduleResetRelativeToEnumSchema,
  '8zaTiZzQWmHuDkVfG5pqQfJPSbt7shdT3KzVHLNtpYEA':
    CdmProductCommonScheduleStubCalculationPeriodAmountSchema,
  '4TTL4gJb5c5Ph8vm7n74shdG3HTtVXP4jKfvM1mJ9dGi':
    CdmProductCommonScheduleStubPeriodSchema,
  '6oofq5cEqVvBXkWwkQPGzgZJdGR1TRM7i29UzSnVFFVd':
    CdmProductCommonScheduleStubPeriodTypeEnumSchema,
  fSHW6Drrbqfcs6E2UTodamRcqyfSTBkYTsnXEqbno3m:
    CdmProductCommonScheduleWeeklyRollConventionEnumSchema,
  ESLgkpXCoVxwQbnAPvgczaFCG8BevyuAr7HkFo9WThDR:
    CdmProductCommonScheduleWeightedAveragingObservationSchema,
  '6QVHrqvDdhrztaqgMzWNPogaPn1tM5Kq3cPyMJnzAoZr':
    CdmProductCommonSettlementAssetFlowBaseSchema,
  HSzaYj4NHo8yQEzxs9i6136jxrgSGM3ETvCGRjWRNBbe:
    CdmProductCommonSettlementCashflowSchema,
  Ccm42B9pqHXvdGEKGXbippze1ftyBoJLzTcK6oXCTx1s:
    CdmProductCommonSettlementCashflowTypeSchema,
  '56d1q7spHaAFPp9dywxuqec2NvTpBDCMa4ztph6Anuo5':
    CdmProductCommonSettlementCashSettlementMethodEnumSchema,
  Gitr4e5rQ7kpdhDKFvTuGDoxwkjHoVtwLL3mfUEf5BLa:
    CdmProductCommonSettlementCashSettlementTermsSchema,
  '5x1sDH43jpfnxCpn7SxGocGurJQPFSuhA9VqKTEj3p4y':
    CdmProductCommonSettlementCommodityPriceReturnTermsSchema,
  B6jumk3FUsgHPFi2jhgxri51dHbhYGBYzMNKjWYtosTm:
    CdmProductCommonSettlementComputedAmountSchema,
  Hzvh7SeAByhG3miYtQ9HRosLr6vfMQWfTTrrFpxLAd9s:
    CdmProductCommonSettlementDeliverableObligationsSchema,
  FRoMknL5tLocYSiFfWHQdaNh9P69TCfagyqaUDB7r1fx:
    CdmProductCommonSettlementDeliveryMethodEnumSchema,
  '3ahFTRDyW1vZN9J2RUwVpic72VhPCPqMVDvfoRzNAiFv':
    CdmProductCommonSettlementFixedPriceSchema,
  '8eCwVe8o3HJ59kXXDpmZNzc3nFwUj5KV4TtcM7LbwaRA':
    CdmProductCommonSettlementFxFixingDateSchema,
  CSA4yBTRY5RmGSiiVcNmFcriFgUvvzUBaRzbignT7fcZ:
    CdmProductCommonSettlementLoanParticipationSchema,
  Eud1PpiZWvCUx1fnCMC8CwsLqPdmoGhibUuZ6Xrxayic:
    CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema,
  AZ5TAtN5poY1sFC8CQEDKukTVaTP7itawDyHn3a1MtBq:
    CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema,
  '2SgkFqRu6tSRS1M4vnbT4GFgWFQXoGgkmpiYTmqafTNK':
    CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema,
  '2iax3ewikmufx2SGAqv9teMyfvSypMUiCfrvrNVxSRwy':
    CdmProductCommonSettlementPaymentDetailSchema,
  J8ZU2YWmzTrtbSkNs5DysuLN5tLJDjMJg7Ca32VEAQqW:
    CdmProductCommonSettlementPaymentDiscountingSchema,
  N9dqrkkDsXewQqjzkzMPPFBSGpAGbdj5Nya3g9ZDPtp:
    CdmProductCommonSettlementPaymentRuleSchema,
  AACYsunmjj2NwkmbQNtZGz6ucL362oYrJR4mWh7ADhqK:
    CdmProductCommonSettlementPayoutBaseSchema,
  DRkD8HVscRs6KUaFJvG9NfY3w4CcbbHbGTZjFrUtDL9Y:
    CdmProductCommonSettlementPCDeliverableObligationCharacSchema,
  '4uSK8CTQBqbG69cx8nFuQsvcD7Weh5Dxu4368t6wLeZe':
    CdmProductCommonSettlementPercentageRuleSchema,
  '3Z1haGAuv4YLmGkJjXiSsx5csxv4vCKiyoyVtNfbZ6Ww':
    CdmProductCommonSettlementPhysicalSettlementPeriodSchema,
  E4Zcf9acqN6Mw1bpD2Joc5sWAQXChRtmorCBtr7tPWf3:
    CdmProductCommonSettlementPhysicalSettlementTermsSchema,
  ENR8ZMb3BXhAA9nevcEyKgFFFrZ2fgr7kuxCniYTsx1w:
    CdmProductCommonSettlementPricingDatesSchema,
  '9cWWHV5DRe4SuejnEf6PBEsFWjw5RA8u3n2yKvLwXzMS':
    CdmProductCommonSettlementPrincipalPaymentSchema,
  '79fSZCgPXnnm5bsD9s4XCQXn5MaCb8UAVq6ybHFbLdpq':
    CdmProductCommonSettlementPrincipalPaymentsSchema,
  '4FTqK6vYmEpdwWnDuD2EjcJ7sLWWdhgeB2duLV8aA5bC':
    CdmProductCommonSettlementPrincipalPaymentScheduleSchema,
  '2yGhR6zH9SnskKV4Btr1vhB3CY3iuq5hAcGtRNAZWJK3':
    CdmProductCommonSettlementQuantityMultiplierSchema,
  F4ihqR7D44ZpGGutb98mpsdE6QNtkrVZM4oiK6Vuzcsy:
    CdmProductCommonSettlementResolvablePriceQuantitySchema,
  FnPP6UpBmzGuofUSjyTEcZkfz1AefAVsm79a4yyozJZS:
    CdmProductCommonSettlementRollFeatureSchema,
  H7iPS6CrsvGu1PXNutZkgqEEQDC4jBXCMGkL1Ku6TxLf:
    CdmProductCommonSettlementScheduledTransferEnumSchema,
  eKGLgkZSes6kGqQ8XSphsvzmYrXGH8BYreDDqVQiE26:
    CdmProductCommonSettlementSettlementBaseSchema,
  EdmhbyH7xsBGyqV7bbekHDFWNScUciKyPKEuEsTbVHam:
    CdmProductCommonSettlementSettlementCentreEnumSchema,
  BpU6xJSR2z5NwXmV5bD8YQ9JC6fwfmHdoqNcxYGeucmQ:
    CdmProductCommonSettlementSettlementDateSchema,
  '4ZRat5NKcUmJRnQwyF3q1SUzsaJbhHUXrEPGq7p8SRcj':
    CdmProductCommonSettlementSettlementProvisionSchema,
  '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY':
    CdmProductCommonSettlementSettlementTermsSchema,
  '6PaHnEA3rYitZ2JKHenwQog3g7ZAfxruJMGQcpWCEDFK':
    CdmProductCommonSettlementSettlementTypeEnumSchema,
  '6ujxkamD9qS94hfxbcFpvQanjfpKtgYotribjwqvMsL':
    CdmProductCommonSettlementShapingProvisionSchema,
  '7YFjahYdHYHERXt79M9mLJ1qKNxQPm89ieLFXUZ2KcwA':
    CdmProductCommonSettlementStandardSettlementStyleEnumSchema,
  Dh5YZ8UboebnzAaX4XPDYtGbPzNfaHDzsrZX9Nocp8CM:
    CdmProductCommonSettlementTransferSettlementEnumSchema,
  '3FPEtqo9ZEbsCjRxeVSxiRbvCVP9ZM2mJRpkmc7uyEvM':
    CdmProductCommonSettlementValuationDateSchema,
  H5B7PvZ4UumP4QHzn5bVRpT2DxM3Cu8De5f9wQwrZZ13: CdmProductTemplateAsianSchema,
  HXa76EzxhXAHLP3yM8iCLC171STC5PBQPhnX4ghaUW4g:
    CdmProductTemplateAssetLegSchema,
  '4CuK7zsyx6DKDM2yuq991XfZ1PC48uiEZFZNsp1F4tMZ':
    CdmProductTemplateAssetPayoutSchema,
  H9K4V7vLZdWh8Vfqst6t9NiRAX6Ho6M8oZqFtojWhczK:
    CdmProductTemplateAssetPayoutTradeTypeEnumSchema,
  '7JsYEgXkXn7dqsmdqpe5ABe62ZQGPbkU5NSp8dTwtLAA':
    CdmProductTemplateAutomaticExerciseSchema,
  DgMT9GvGPfVpoxATLX7UH2QtPrCD7csg3P5rdgiQxAUg:
    CdmProductTemplateAveragingCalculationSchema,
  '7TNdG2Z7nw9MPJJnRN9AWntYxxBDXatd9BRy86A9zjep':
    CdmProductTemplateAveragingInOutEnumSchema,
  '2ivieRnuYvgJa1vamkzsA1moey8Co6QwbcHzZLJtw432':
    CdmProductTemplateAveragingStrikeFeatureSchema,
  BEbFVsDjqqvf3dVeshgGzf9rW4xPdk4DnECxRAcKSJ3M: CdmProductTemplateBarrierSchema,
  '4W1R4RHyg7dDwmQXUBPtdq2118vcYaxmhXXpAsyJ45iG':
    CdmProductTemplateCalculationScheduleSchema,
  '5BRV3dENe3YELEAA7xMEUBRjjigptKH5g74xXLVJzSQt':
    CdmProductTemplateCalendarSpreadSchema,
  '7JgCzWgxDq22P8AyrrUkykevhpTvXY5s46gDXHG4aBwP':
    CdmProductTemplateCallingPartyEnumSchema,
  CmrgcyG3eBXu1VywrDkV1pqtQ2sRfaYXfDqFSuPDN6Qh:
    CdmProductTemplateCancelableProvisionSchema,
  '5bwTE9f1nJUBqj4vqvFo7c4i18afULFEC5FeQM5nzXkr':
    CdmProductTemplateCancelableProvisionAdjustedDatesSchema,
  '6eP5udkrBCHMkFQYgYuVDdkQys7PjPXJzCoczGrwv5G1':
    CdmProductTemplateCancellationEventSchema,
  BujYvKmwMpKf1xPsjKG4tarjNAHNuBDrzcS9MthAgsXw:
    CdmProductTemplateCompositeSchema,
  AfmdCkcHzUmPq2oxE9uum8nnnL5nm62GZ5s2wsr1oobp:
    CdmProductTemplateConstituentWeightSchema,
  GWSnFb8ZSatiW9mUTcxJWEZCkQ5KmTdEqcJ45uRZ1P81:
    CdmProductTemplateDividendTermsSchema,
  '4n5WuJ3pxb3PuTwkKoXzfT7yaA7CeDwExT7qkMjxU8eb':
    CdmProductTemplateEarlyTerminationEventSchema,
  ATdAeszcXw1uFWsWdnzsyBx1vs22fznFDA5f664ZSGnW:
    CdmProductTemplateEarlyTerminationProvisionSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#4':
    CdmProductTemplateEconomicTermsSchema,
  HRvhJg5k7JKhCKUjPBe3dA2sJs8mUa8XXAKisLbesC3m:
    CdmProductTemplateEvergreenProvisionSchema,
  HvQDymCJPSYfbPyJRe3bcnP2z9wwXwLNLr39Fe2JNjXK:
    CdmProductTemplateExerciseFeeSchema,
  HHomVWgkz7HLWPaQxw8dHHS3rvajLUUT7cGBX398BLaw:
    CdmProductTemplateExerciseFeeScheduleSchema,
  DRzHnd5fFvvt3FAGunPM7qFcwB1KgFPJn8D7zyBankMz:
    CdmProductTemplateExerciseNoticeSchema,
  '12Vk9Vr4K8mMX1W8Wzr5LhciVWUSW5eLT6swkA7rmYQF':
    CdmProductTemplateExerciseNoticeGiverEnumSchema,
  FKfCuPahjxDovRJtwwh6TYBHD86Z1mi3jBbEP6dW91gZ:
    CdmProductTemplateExercisePeriodSchema,
  '9z3w1uRxwTdjEC98TsWyE2nFgxyAzTrvZBEBQiHUqoUp':
    CdmProductTemplateExerciseProcedureSchema,
  Chheuq1dPEWCj7bsdGkRo52qY4nscUb7oURn3FKrqFtS:
    CdmProductTemplateExerciseTermsSchema,
  '41zKqJF8nsUVGAhnPCpFjsuqNBTNH75h3UWaZJQ1duMg':
    CdmProductTemplateExpirationTimeTypeEnumSchema,
  X7icfoV6dj3szD5tQnt8vHJD7WqBQ86TXpN5cDpvPu7:
    CdmProductTemplateExtendibleProvisionSchema,
  '4YkGkyxKKm3k8Cp3fDdgnjWyruPT4JUACTFh2tkSUy3Q':
    CdmProductTemplateExtendibleProvisionAdjustedDatesSchema,
  '6egBPp2kV6N2Nsr2wJ4x1cygyeyacb8ybmRmite4dDKm':
    CdmProductTemplateExtensionEventSchema,
  '6ZDCQKZdsUezXkYv4TiQ9upHiNBjJ7MQMpjtwK64HMf2':
    CdmProductTemplateFixedPricePayoutSchema,
  '4vFVJ5RzFY4D7trKTFXSjcQJv9vQk2V1fzpSsA4MHF3u':
    CdmProductTemplateFxFeatureSchema,
  CL3hBXyGabfmMpYHcZYWQxP93Xs1YFHL6AcsrLfzFqtB: CdmProductTemplateKnockSchema,
  '3Wj1feGDTKdrryudkfw1ks2dViWQTUZT7ef7RbJ2a2w9':
    CdmProductTemplateMandatoryEarlyTerminationSchema,
  '5rLfe9XaZJN6C7Emyi4zRZrov1SdCdCb8wmVVLRNhwEo':
    CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema,
  '2N8WqdA3bWZaDeAy5nB7wit1jTvBeB4gLKqwL2dDqu4a':
    CdmProductTemplateManualExerciseSchema,
  '7KrSJK8LLai4ZexQz5d8ZSJSE3qocTA5XDmz3i9UNJe2':
    CdmProductTemplateMarginTypeEnumSchema,
  G3CzbfYpxoJLYRFaNem1FoCEK8YU8gE9Xy8ESCNoAr5e:
    CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema,
  '529d4eeRPqjy1E5t4zWJpWVA2HKzpHHLCXrsg3D3pMZQ':
    CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema,
  Ga3XHeXbo3fH52RQovQsWvQ4WdEQTmW3YJFW4w9QRjqE:
    CdmProductTemplateMultipleExerciseSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#2':
    CdmProductTemplateNonTransferableProductSchema,
  '6r9HC6aEvzHgbMXoGSQrFYX4t5gd7479xixcJs4h3ot1':
    CdmProductTemplateOptionalEarlyTerminationSchema,
  '3pSmHpeb9yUjkpUmFmAS4nUVy9QvuKFFwPLxuN8Yjv7W':
    CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema,
  E4R8utNSd78UCdxdMrishhhpVuyncUtJGCKUfNBVnBqu:
    CdmProductTemplateOptionExerciseStyleEnumSchema,
  JDGRPFj4wNXyhxtXXFrhaCacWSCaiZeP3YHSLDZxPpj1:
    CdmProductTemplateOptionFeatureSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#7':
    CdmProductTemplateOptionPayoutSchema,
  Ah265ohZqxFXsWTp62UC3yWMvZAwGymx5y9Hu55yG4MN:
    CdmProductTemplateOptionStrikeSchema,
  J4ZdDBZPY9VTNearpD8S9gntq7sM6egJXSCgbUSuBopC:
    CdmProductTemplateOptionTypeEnumSchema,
  '3DEqhNWWEiUQB1fLiPm2kEPVVpQNPPb4ygac1EcsPw5C':
    CdmProductTemplatePartialExerciseSchema,
  '4d4qPzCq4LAzZkhP87mw5hoXewnyCnGKrdjgtMcZYXWc':
    CdmProductTemplatePassThroughSchema,
  Hqwa8X7pvMZZRLdwwa5Cj15xwqMknn63xJyvR4RdpXvF:
    CdmProductTemplatePassThroughItemSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#3':
    CdmProductTemplatePayoutSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#1':
    CdmProductTemplatePerformancePayoutSchema,
  C2yrjwk7TcgoNvD5fnRnG7esNmaqnM1fKRrGAGhNBewD:
    CdmProductTemplatePortfolioReturnTermsSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#0':
    CdmProductTemplateProductSchema,
  FP3Z6B5EZbM6cJbRUXnbPHiNqwLhR5XncUa3C9U1okK5: CdmProductTemplateQuantoSchema,
  Em6kmmUkkT5JMxFuFBF4pMuY4Do9HDE1HCkz2RifWreo:
    CdmProductTemplateRepoDurationEnumSchema,
  H4YFmRdPDQurJuk9z7qEXdhRpcSgEWjT8SA5CmHuzJvC:
    CdmProductTemplateReturnTermsSchema,
  CUr5jr5noh86g6Ljvib2NKFYTBBK5zc36XB5Xv6Wy4v1:
    CdmProductTemplateSchedulePeriodSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#8':
    CdmProductTemplateSettlementPayoutSchema,
  DgYhTvKZWcbsWAJhHrAdY7ihYDMtyVr2mPxUjDnwHkUN:
    CdmProductTemplateStrategyFeatureSchema,
  DTjpaA5nNPtRc9cjg3pKvtYra986CsXi7yi6mkfQ6cCN: CdmProductTemplateStrikeSchema,
  '6ktRd3DjxSYyCKanDCXymsiwCRfvE8Nmdg6Hr6nRsGLs':
    CdmProductTemplateStrikeScheduleSchema,
  '3YR2sV7tFdGrtX699mGysL4mGGEkjpmBPfpeyYXKnQjU':
    CdmProductTemplateStrikeSpreadSchema,
  '9TkgobVuFAyf4FySwjWfMwU2Vem42ccyJHArhuMETnvE':
    CdmProductTemplateTerminationProvisionSchema,
  '7NAeEvw67mqergRTy5KQA52oFxHHa8GFwsojp9Laqfiv':
    CdmProductTemplateTradableProductSchema,
  ZLG4da8C48xHnYaRKjAQoKys4k2Y2XufFG4HGCeTAwU: CdmProductTemplateTradeLotSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#9':
    CdmProductTemplateTransferableProductSchema,
  'DQtAbxe1tLy9aRaawabAsHzDGXiQUiSvjt76ym1myncb#5':
    CdmProductTemplateUnderlierSchema,
  '2Midawi9zUfJvcpA1goJXVsvZDiVfwMTkFWPqYK18DH5': CdmRegulationAcctOwnrSchema,
  E7oLhGAsFNjqjmhJsUSRdndnofi3eoLvC8TzLEgS7Ajd: CdmRegulationAddtlAttrbtsSchema,
  '3aE6erdTtbhjt2mHbmzNNZUUARddk4ptbRvmzW71PMPB': CdmRegulationBuyrSchema,
  '64GDGQPRbi64gBYYU2bn3xS8o4snUE3Xkyj4KZMP7iiP':
    CdmRegulationDerivInstrmAttrbtsSchema,
  FqQmwTFY4AP5Fj5sBr9KSRM3jJXSkDdD5HqWF1F73qvx: CdmRegulationDocumentSchema,
  '5GH5b3hqDNFtdYyKYrrsT7yR5dbQz89rdseFTBATZBzE': CdmRegulationExctgPrsnSchema,
  kLfZhAvkAh8wK55kKLDNzrrUYScHA3iDAvQxXMzfg29: CdmRegulationFinInstrmSchema,
  '2CibfSNr9fgCU28YroYKvUvh4as3ggUB9FsfNBXNpvKu':
    CdmRegulationFinInstrmGnlAttrbtsSchema,
  BfKLQH4QVw4S4wzQKmy5dHE6Cv1nwWZFPDQov8mdWQhT:
    CdmRegulationFinInstrmRptgTxRptSchema,
  '3f4WiUJG3FhvWWyDoRyCBQcSoCNhmwkWYRRFeKfXoe4J': CdmRegulationIdSchema,
  GSr9GFBnxJ593ATrkLyLwdp2hjwqr3CpAxjR7PVvjrSX: CdmRegulationIndxSchema,
  '8YBEPRD6BeGxpiyzcHu23gtC1XJcfqMM5Vn8HyG134Lz':
    CdmRegulationInvstmtDcsnPrsnSchema,
  '5escwe4iATiixbpkVsC5bgMF6yMNwffv9q8Sjf2uL1MB#0': CdmRegulationNewSchema,
  DZdnkAMDLkRVqy6xSZjUpZSFPATDK7GBQSknpso93uax: CdmRegulationNmSchema,
  E2D4RQHe2Jrvc7V7HKEDA9JsHhpAZx9S896oDvTHgi9v: CdmRegulationOrdrTrnsmssnSchema,
  J3fYik4rPisN3CPxe58U3DcMcwjzE6rQTNE9q3kXLCPn: CdmRegulationOthrSchema,
  'BUq3VPPkQHRHG7roNyDNCeLNzQfLSsPoSqiRQgbDnCdv#0': CdmRegulationPricSchema,
  EHJBg7p3U5yUbBzkHyVcMUrwbPSn3FVeaRERg67YinMz: CdmRegulationPrsnSchema,
  GCcHv8RLUEgahAAWFcRgRTb784jyA3pUR884URcEurcp: CdmRegulationQtySchema,
  AcEgwB4h9wHoHeS5UXLfAN76wwkUSG2T7F7gwHYjW2mr: CdmRegulationRefRateSchema,
  HdczVmReriwEJcH4QKu8zRPfiatW6tmAm71DbNp161hr: CdmRegulationSchmeNmSchema,
  HzcHUHF1xsByJ4YwDfte8JR64TXZwA6AMYVTEAyQwbRE: CdmRegulationSellrSchema,
  DKSYtGQVeGfDCYPvWG3sDggvoZMojMdvZHwHechNkWWZ: CdmRegulationSnglSchema,
  DQ1ZuZ8UYNPHqFcdVn6TqSrr3Stdugj4GzTRnARu5M53: CdmRegulationSwpSchema,
  '2T3hoZUtEHPP41LrKUi7cCiEHCk8AwUskHa4sVvsm6GD': CdmRegulationSwpInSchema,
  '8Dw97kNp5Jao28zFYWCpReQahB3h93YosQEdCZLjdkEV': CdmRegulationSwpOutSchema,
  '7emp1LEhZ1y3VEERHEsAEa4npZSpiVUDeFQob2LpBkhG': CdmRegulationTermSchema,
  '5escwe4iATiixbpkVsC5bgMF6yMNwffv9q8Sjf2uL1MB#1': CdmRegulationTxSchema,
  BVyMiCqaVYHQWWuyvwivy7Wvm49w2nuhJV25PpEaxm23:
    CdmRegulationUndrlygInstrmSchema,
  F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY:
    ComRosettaModelFieldWithMetaStringSchema,
  '24GKTJcRDZ4QRLVkFjFWdWkoGbNLiYvcfVyFPvapMLkx':
    ComRosettaModelLibMetaKeySchema,
  DZcxdcnsm5jzC1CJU9fo6qUsNmG7i4H6LgZ4otSyMwas:
    ComRosettaModelLibMetaReferenceSchema,
  DzqRwbzhBeAEsqWnJKowFX2zDp5bnxRrGuECR18ePGLk:
    ComRosettaModelMetafieldsMetaFieldsSchema,
  '2NmzfUpHRVGHJtBNJodPdDCxDTwixoJpKAWSpVNE9ema':
    ComRosettaModelMetafieldsReferenceWithMetaStringSchema,
};
