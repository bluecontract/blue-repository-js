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
  GKy9ctegTJLwNAwxTMo1WX9xQCvWbzwntin4VStfEfDi:
    CdmBaseDatetimeAdjustableDateSchema,
  '5JcKEFUStAenXhdmeTHE6nvpuhEjPvsvuge4TX2AuQrA':
    CdmBaseDatetimeAdjustableDatesSchema,
  CdgiECBjpwU7k35HhiQi9JBRDcAEBJDGnCGvMjE3KMxX:
    CdmBaseDatetimeAdjustableOrAdjustedDateSchema,
  '8VijgDyT9t9CiNbNQYVbdE1whbL9Q9DTRMZpCocVhSxF':
    CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema,
  '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R':
    CdmBaseDatetimeAdjustableOrRelativeDateSchema,
  AiYMNnHZT7DJNXi1wScVgJSGHkgj5i6eH6jUgQoxX9Bw:
    CdmBaseDatetimeAdjustableOrRelativeDatesSchema,
  '4EkR94oSN87arjWhzEQUZELGM8at9SvDoSZ3LKbE12sg':
    CdmBaseDatetimeAdjustableRelativeOrPeriodicDatesSchema,
  GagRkiFg7C2PG1ce2M6QYaKL99fY3TTLH3DBbZp4Fduc:
    CdmBaseDatetimeAdjustedRelativeDateOffsetSchema,
  CR9L4SVmKAvSmKh2xUfY6RvyAg4XL3BwDYCeqWk8ejn8:
    CdmBaseDatetimeAveragingScheduleSchema,
  Ftpos6LCMk31PB3e4E1siiMshU1M88BMeTNK4yRypXyL:
    CdmBaseDatetimeBusinessCenterEnumSchema,
  H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti:
    CdmBaseDatetimeBusinessCentersSchema,
  '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j':
    CdmBaseDatetimeBusinessCenterTimeSchema,
  HNjhMn7WT4JjM4LH3CAB6FzPpLMvur9mQW6knri1HnTg:
    CdmBaseDatetimeBusinessDateRangeSchema,
  '8ZhZC2EwhTqHnDvvcr2ZW4iwCBJM57NcLAqPCd8shypq':
    CdmBaseDatetimeBusinessDayAdjustmentsSchema,
  UEYhmdmBmLhrdtL1ThGtACP6Ljtvao5EVBeQdbiB2XJ:
    CdmBaseDatetimeBusinessDayConventionEnumSchema,
  DgNkH6r165bjLKnYWiVE6o2FPj5mEztGpd21mfsiyDXA:
    CdmBaseDatetimeCalculationFrequencySchema,
  CkosQzywFhAU6NAYFKUn1Q9gvuL9kvbk3rfWxAdrAsce:
    CdmBaseDatetimeCalculationPeriodFrequencySchema,
  '3nrMEw5ojL2L4nx9YC3c3c4ANcs6gAFKkas7RgDE5Ao2':
    CdmBaseDatetimeCommodityBusinessCalendarEnumSchema,
  GvNXAYyGbJwhZ1D7jxhPLtLsKVTeAZor6SgFatG9UvMa:
    CdmBaseDatetimeCompoundingTypeEnumSchema,
  EaaCUoNmXLQTY4MPLncXFmVQqSS88MhbwvejcfJKUAdS:
    CdmBaseDatetimeCustomisableOffsetSchema,
  '75qSo7DxMh9MksCdoEnKxduHVLunj1pn42TvPFdxTgN8': CdmBaseDatetimeDateListSchema,
  ArGvahFJrYAsyvSVWtuLJVsoGkZsS1n9aTjxhikFUxJM: CdmBaseDatetimeDateRangeSchema,
  H5D8BrpdPx4G3A74ypfsUrC27hh6pjWVeJD3s6bkSu7e:
    CdmBaseDatetimeDateTimeListSchema,
  G5reDMTj2A64oDwXZBaNeRgFEhAtZMkWvkJcte51qHiJ:
    CdmBaseDatetimeDaycountDayCountFractionEnumSchema,
  '587iDHMkRt71kZVCzE5o3zXzWprHzypcRd91TYbQnSpE':
    CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema,
  AYNVNBQsDmS46NA7kfw7jh6eh8DBspyMyDd1bzyBmDG5:
    CdmBaseDatetimeDayOfWeekEnumSchema,
  EPBWZ9jBx984Q99bnqB2NAqBTKrAr4mJWCYnwcFgnivq:
    CdmBaseDatetimeDayTypeEnumSchema,
  EtUp3RuaDWzJnGNfgdjWD82gBrcgUyd6KM7cMfBajMzy:
    CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema,
  '8TYiPxS12nea35y6YR9jrThpiNyYMJgNPgJCd6hF3T1i':
    CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema,
  DuGS3hb9QASiMfVarVtXqrw8YdvHS99bzooo3dinungf:
    CdmBaseDatetimeFieldWithMetaTimeZoneSchema,
  '66A3jW7LyiNtMy7z2YQQFpSs2dyBatQtY1MXhCSnvNPC':
    CdmBaseDatetimeFrequencySchema,
  EEy3XcQkPgCWJbBTZ5xCt324t2pFRJU6q9odJm19McMd:
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDateSchema,
  F2nvaUqNbFKSuzYyyhRM8m7PgfFhFvkDbejeQWX9jYCs:
    CdmBaseDatetimeMetafieldsReferenceWithMetaAdjustableOrRelativeDatesSchema,
  '7ACnecbuWHtBLYhrw8BaioS3DSUQFiDskjpaDNspEmof':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema,
  '8ob5XfEjggmQWCgVGZrrfihRpPpUr2yZ4MepyJHJvZ4C':
    CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessDayAdjustmentsSchema,
  GcgyRFiq68rKDTw1wtJsfsUpu4hBukUsv29vavmPQmrZ: CdmBaseDatetimeOffsetSchema,
  G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY: CdmBaseDatetimePeriodSchema,
  DtV3Ngp9MSk1v1Wcbq82ZaJHv5dkHz2XFfpccV8mzgXP:
    CdmBaseDatetimePeriodBoundSchema,
  DLZBHc2QwPj4my2QeZffRBsJxbqMSJzN3PScqxr9C1Yj: CdmBaseDatetimePeriodEnumSchema,
  BLwQ9sW7unThpYZC3TVs8YtMmiAoZ4NVGjVRppu4gm7x:
    CdmBaseDatetimePeriodExtendedEnumSchema,
  JBENwei996PNTBkNZUR1ojomCwz48ULaZEJoeaXxukmT:
    CdmBaseDatetimePeriodicDatesSchema,
  Gnv2JatHomC6ZL7YnSSsr5b8Qx1hWWGYFQocqArJgJCj:
    CdmBaseDatetimePeriodRangeSchema,
  GNrP38tyPnaCEFuGcFscbFEJhuVkgbjD2h7HMSS7WKq2:
    CdmBaseDatetimePeriodTimeEnumSchema,
  '4JvKSv6NGWh8hqfN6miPYiWwfE3g61v9yBhQuXc8tB8z':
    CdmBaseDatetimeRelativeDateOffsetSchema,
  DXynKUQNFZU7oUmvsh7mUrjs7JL5RKXrrmkH9hZr99CL:
    CdmBaseDatetimeRelativeDatesSchema,
  '5vi7aU3GvfLQ4xDo1Ud6tENVfH6eddFwtnAbqXHuxMfi':
    CdmBaseDatetimeRollConventionEnumSchema,
  Fw3wLbrcadtqbe88BTTnN3TZSgcXPzyHjjPvsic6NY2P:
    CdmBaseDatetimeRoundingFrequencyEnumSchema,
  Evebus71x5rCJiCAsgwRLqNJttzXHHUTbxXnJfjFWjpG:
    CdmBaseDatetimeTimeUnitEnumSchema,
  A5epowY7nXCnh1AWLF3H4Zv7YyXwwAFethePAEeyAQ92: CdmBaseDatetimeTimeZoneSchema,
  '8G8JMx9Qw4DFmuzKHtJVfUGbY57zaKc4EsT77wyLek9y':
    CdmBaseMathArithmeticOperationEnumSchema,
  '2EzRuguKzzQR2u8dtQqTXe7ATvUruro1jyD4Hc8MHaJk':
    CdmBaseMathAveragingCalculationMethodSchema,
  D8BAM3Ef8YgktLMNJZg82NyQjEWkwYXQ2pZYpzsXPtnQ:
    CdmBaseMathAveragingCalculationMethodEnumSchema,
  '2Xm4KS94SVHHV9NjHpmazjMW6ALPBBv1ALbx2bE3B7K5':
    CdmBaseMathAveragingWeightingMethodEnumSchema,
  g4vkocaqQK6FYK1ys61BBsp11Y2Daj3aPCffWwm5Egq:
    CdmBaseMathCapacityUnitEnumSchema,
  ERgfFXDHh7Wgme2CrDN4aVQ74wSP6ER4PpBe7JdQRPct: CdmBaseMathCompareOpSchema,
  '9zYcb3FcpfuBbxSMqUwSRoYJ3gPs7Nv1qeZUmFvVniPL': CdmBaseMathDatedValueSchema,
  '4u9YFPkqCriFw9Nz1fytvh7d9BRSRKqqQKDjqfPsqaD5':
    CdmBaseMathFieldWithMetaNonNegativeQuantityScheduleSchema,
  G6nxZBJqZZ3cY44FGfFfpKCDEC1JqqauJ8rcR7H1niTr:
    CdmBaseMathFinancialUnitEnumSchema,
  GdxjH3XMfuhBXiciCVsrgQC7QGBiz2DTWMg4SUHSMJTi: CdmBaseMathMeasureSchema,
  AwzjFS4L3p8CS3Duc2TcZNSvcwY6WewWPLRK4pNSpEge: CdmBaseMathMeasureBaseSchema,
  '9iUkF9gsuXLuwMBgKBgapjbetLX7PzRtP9ee3m9Awamv':
    CdmBaseMathMeasureScheduleSchema,
  '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP':
    CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema,
  '9fGt41es96nHUb6cGZZBa26G29o9ywchRk5rjx5ri8gp': CdmBaseMathMoneyBoundSchema,
  '4NGaBXKBS6QDTeN9ZdQEgWHvYg1Kd3Dqr86Xs9BpVh7A': CdmBaseMathMoneyRangeSchema,
  BoLMyAuLAegX9RWR7trQbdmp7pB2tAfkPhDoTzbu8acd:
    CdmBaseMathNonNegativeQuantitySchema,
  FgPwQQd53zyxFZAVWWuQLMY8QcPYNzeupku9hKxvYNob:
    CdmBaseMathNonNegativeQuantityScheduleSchema,
  '68KbNxL8Zk6injt7KEzchnGU1s7jEBrrdNTEayuTNdzA':
    CdmBaseMathNonNegativeStepSchema,
  CV1DAoEgGqnEeJtvUszvVHPatrrZQE6M5vVad2MX3ssq: CdmBaseMathNumberBoundSchema,
  '6YPBFzb6J5zZWUx1H7SSeJNLQWwAzYsVjRxgdkFZMVrn': CdmBaseMathNumberRangeSchema,
  '5AmXPpNccrpoL5H4BBSk9y2QfnizHY6JKgXqaHJTHgvy':
    CdmBaseMathQuantifierEnumSchema,
  DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR: CdmBaseMathQuantitySchema,
  '3PEKcTxZjwjadkRHkdE5cLAN5jWQkiSt4SmaU1mwZbgZ':
    CdmBaseMathQuantityChangeDirectionEnumSchema,
  DDPEJCtbjCK4fCy5ZwmHdduie29MQdvdscPV38q6HwfM:
    CdmBaseMathQuantityScheduleSchema,
  BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj: CdmBaseMathRoundingSchema,
  '53mxbAPQ46Wh3prwQvdFjRpUKwN5aa2yN3YLYMRZotEK':
    CdmBaseMathRoundingDirectionEnumSchema,
  D9YY1v2J14dSGr9FSvTV3S7cVD8933KNkDtMjV3Len2A:
    CdmBaseMathRoundingModeEnumSchema,
  FYo7TjN1ZyQhoK2ypBWjmiE2Q6gyQ13fpHnTWBZdEdi2: CdmBaseMathScheduleSchema,
  DJ7mNRisRDzwiXVunMHLfDzvMqVHiQo2iHab3fCmxUL7: CdmBaseMathUnitTypeSchema,
  DePEyNHqpBtxPVrPYXSKuWt1ugb339xn92ZXP2uKKUgY:
    CdmBaseMathWeatherUnitEnumSchema,
  '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo':
    CdmBaseStaticdataAssetCommonAssetSchema,
  JCEmAFppnRAGm6rWtFQLD8vdHx8yV6aob51V3iP4UKFa:
    CdmBaseStaticdataAssetCommonAssetBaseSchema,
  '7TQnexn6ZGhptp1EP3RxiJM3434J7VHgDn7cvqXRvfvh':
    CdmBaseStaticdataAssetCommonAssetClassEnumSchema,
  B4oXDUH9jELDatvZSw3oWXtJefJ4ixYawEjxBMqSerth:
    CdmBaseStaticdataAssetCommonAssetIdentifierSchema,
  '5mbfUkBFTEYhKyTf1DNksGFTiyJzZooRyUog7hBoYzHC':
    CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema,
  AjHv57wVryq4YK8oodLNAT95JAYhuGRRiKk7hhX93LLi:
    CdmBaseStaticdataAssetCommonAssetTypeSchema,
  '7FL7vGvhvZLCWZZPR1Eyoc1iJ69A3jcSF95meBVxT4Qe':
    CdmBaseStaticdataAssetCommonAssetTypeEnumSchema,
  G6NQsm1Wur914oo6eCsazG77Y4gjnkMAZw1cSEieEBTV:
    CdmBaseStaticdataAssetCommonCashSchema,
  GL9FygufGouoWPdbzaZ4SKyuRahWMAUxZ5q3bFMSWnRj:
    CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema,
  '6FkJxLK4KiPuQ7LHqQDvpGSeaWMVr5dw4g2K9mBrnybJ':
    CdmBaseStaticdataAssetCommonCollateralTaxonomySchema,
  '46LCCSVXKexPjXtAyPSyNEvZuzGR66uVP8ccRPSrwJhs':
    CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema,
  VrWJzqq3ogdc8MhQ87P7nugRkiYR7sK4XS7wQzTvce3:
    CdmBaseStaticdataAssetCommonCommoditySchema,
  '2U5utSJ8k2ZUUAhQ55aoZL8AB4QWHroS2oQQx7uBhvdk':
    CdmBaseStaticdataAssetCommonCommodityInformationPublisherEnumSchema,
  '42E8LjfyrvfiY3rzFn9ktgxtEHdG6eXmK5CyYGHUkotU':
    CdmBaseStaticdataAssetCommonCommodityProductDefinitionSchema,
  '3Szwd2qmGpb984rriz5Yia1VSkVLPrvXGSTv9qhsFyQf':
    CdmBaseStaticdataAssetCommonCommodityReferenceFrameworkSchema,
  C86NQuRAaVy32AX779AyrsbMw7Q2wQQu35dN3MbdAtEL:
    CdmBaseStaticdataAssetCommonCreditRiskEnumSchema,
  Gb5ryH6JKgjNLySafKo7tXkb9PRgaQkWHcSibFZ96AbP:
    CdmBaseStaticdataAssetCommonCurrencyCodeEnumSchema,
  ASAPTC3f63jq934hhnLQ4c9BNLF9RtGVn3iLdv8L37LU:
    CdmBaseStaticdataAssetCommonDebtClassEnumSchema,
  '7Lf9XXZdBaTwDFPQsXLZfcyiVkKhfJ2GJcKZFMkQ7mNX':
    CdmBaseStaticdataAssetCommonDebtEconomicsSchema,
  CKeQ92fWPg4Y5pBNbpKczdPnPQQ8erD4GHJk9jUQJ2bD:
    CdmBaseStaticdataAssetCommonDebtInterestEnumSchema,
  '6BJ4CubLVSgwchKqdWjX3bW3sPCa6dktMHc8CJzQM6HT':
    CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema,
  '2T9bE3hBaZbmmKhFKA3Vw77BMH3N5vRZDgjh4BBTWvuS':
    CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema,
  '9vqkkCNnmKd3FB5tMAKKYenwq2i3mYyHmgYdPKKqkZ8U':
    CdmBaseStaticdataAssetCommonDebtTypeSchema,
  '4ZskTzTzcVURodZiz2Xe1cU3ryAzGu9uwsf7Nc5DU4tA':
    CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema,
  BdSsHq2ECAAYgerYX9wpYFfPWLUAANHLG2TAEt8BiCNC:
    CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema,
  '7rybfxmxNUFUfZGaK3oX9W3kqCWh8zNvXJgUAjrfayPZ':
    CdmBaseStaticdataAssetCommonDigitalAssetSchema,
  DZstXEXxF1iHJunLqdgbypWWK6H28QwVCtxJRbMUDpza:
    CdmBaseStaticdataAssetCommonEquityTypeEnumSchema,
  JD6nBEcv7VVBDthKMnQ7bjvFeFys3igpBt4jJgWKqU6q:
    CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema,
  DvnafttCVMzGEcQC34ARZkLMZfgEVv5CcjPrtA2b5f3L:
    CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema,
  As4LSyzdsEDrcBhhNCQ78eXDcY41rjgBoZJZenTJ2J7F:
    CdmBaseStaticdataAssetCommonFundProductTypeEnumSchema,
  '6pomFByRysSRpLwQEWHeqiGU8sc3DrBMjCiuHEuQ1iPB':
    CdmBaseStaticdataAssetCommonInstrumentSchema,
  CfZVt2o3BMybSUEVcmhUtaaj3dFxbw8HDBEaFu9yyrTm:
    CdmBaseStaticdataAssetCommonInstrumentBaseSchema,
  EmkPx4XLJeffJqq9EbwZicZCxqAhVBpDz1vu6eP1oTYj:
    CdmBaseStaticdataAssetCommonInstrumentTypeEnumSchema,
  '9ppB13T87oA9HL9NWZr6pkLmcjb1HmUAgzVGS7yDyttw':
    CdmBaseStaticdataAssetCommonISOCountryCodeEnumSchema,
  Gu97NnLopxnvJeTi1J3ygTVWYehmh6xiwRabP93c6Y8r:
    CdmBaseStaticdataAssetCommonISOCurrencyCodeEnumSchema,
  '5Vqz5iZWg2FYRz1e6qJVm5q3vRS2ML19JPjvEpZ4bYtu':
    CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema,
  BRguGmoK69E2QqgFfbDWc1f6YVqxFzv3auepNc48tdFR:
    CdmBaseStaticdataAssetCommonListedDerivativeSchema,
  ByX5xzV8skV8bxwB7jTPa5FXEzKdm3SxrkmkC22W4nz5:
    CdmBaseStaticdataAssetCommonLoanSchema,
  '4M9RAThHXP4VWteUq2nq2RyirfHaGCinAVabk8gf2AYC':
    CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema,
  BC6YqUyfhqQhwNKk7o8C8MyYcmHWnGk8RJ3Q5Fijn3TW:
    CdmBaseStaticdataAssetCommonMoneyMarketTypeEnumSchema,
  HyV2GLWDgCxkJJ2KRpuvtTdGurQejk4MXEKSi2vu8aKN:
    CdmBaseStaticdataAssetCommonPriceSourceSchema,
  GFVh22HvpZREhKsn8HDuBiUrwRScVzwx6ZnNNmZrisx9:
    CdmBaseStaticdataAssetCommonProductIdentifierSchema,
  Eo87ZezRqLBDT3fRPNRexD992udkMVK8vj65DfWNoF4b:
    CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema,
  '4Yp9gtVpX1NNhVLvRCpFGS3MvbUnmDXUmuAKSDYaTNWN':
    CdmBaseStaticdataAssetCommonProductTaxonomySchema,
  '4fBHTQQgpt7zfCdmZdM8xKEqaXQv24aeBbn7p8bid744':
    CdmBaseStaticdataAssetCommonPutCallEnumSchema,
  GKXmRwDfJrtMQq78SdC8CuCaCqc3Fq99jNHShLFH3CFi:
    CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema,
  HLEkFY88ouS3waVvxxHJE5z23k1PYJGizdrHbYYg1rGp:
    CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema,
  '5R9o4hMGFG6JsprSkPFoQuMmr2FvfKQchfGbxtSgy2JY':
    CdmBaseStaticdataAssetCommonSecuritySchema,
  '5qsyiVpwMMJ634uApJQwMnZmrry7x6MHoaMJeGxdb5Bq':
    CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema,
  DntsTXHGwUWVz7qTBeVzcb1XUkrUGTNzhHREc9jpBLF7:
    CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema,
  '9MYk7MRYjbMWPHe7v3WexZqePowTL8eRrW8TmNNEtzQJ':
    CdmBaseStaticdataAssetCommonTaxonomySchema,
  '4yg3H6YAUTCit6hxRnAEyVQGYTMFm4nGL1gMyQpvzmZ5':
    CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema,
  CUzMUxNcMqZb1GuDaw2n29RnNcaPce9HrpKAyz8gT2m8:
    CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema,
  EnoVKrrGFyBuE513RQdZXz4EPFgLMoR13a5djKi32gB9:
    CdmBaseStaticdataAssetCommonTaxonomyValueSchema,
  AzXN6ztsTLkCn7bM8QH8xfhjrtrr3MVYuhKiVM2y7JUe:
    CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema,
  '4uCFVBTnzc9vzmmzLSyG6TPxegT1i7fGFyiwSkSAhNNW':
    CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema,
  GMpNRbtpXncDuLhyddMFw2W43rpm8H6AVYkoczBix3tG:
    CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema,
  '3kqHna3Z2FVYvPx85aDFr4WH2NPEmuQhrh8XXzbkQosH':
    CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema,
  '8hht48mGH2ZK8VFHr71MXDR5Mrge37JSMeCJn1DTKdxt':
    CdmBaseStaticdataAssetCreditObligationsSchema,
  GgYvaTiQsh1xn3XTCrAaxQ7jizAVYyU7EnLPR5eZdVUp:
    CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema,
  '2qVsAJiDNKtcYeoPmttQzFLH44MsczpvMvQ9ZQvwUW6Z':
    CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema,
  '6C5cWr4to9ATnkFbP7DRXtMUZfGVzou2g22vC7vYgdLG':
    CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema,
  Ffp3NGGHva1Wh7c62eqGBrQTxEzCeASMFJ6PAmoSuCXF:
    CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema,
  '6DRWaqGdw8CTwRo3fMjKm3geyesH3QBat4P1SeqvgNLc':
    CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema,
  HUSEHXgSpK91Brg3mku9fHTV4D8bnuM9D7uwKV2HynTU:
    CdmBaseStaticdataIdentifierAssignedIdentifierSchema,
  B6yDYwTa5XyjC3ke1cVr21qBLMFJWDovsExQd3Y68pHj:
    CdmBaseStaticdataIdentifierCommodityLocationIdentifierTypeEnumSchema,
  '4PPUed4wa5yh6Po87HFZQNZmaedjsuVfFRs2XCHbzciY':
    CdmBaseStaticdataIdentifierFieldWithMetaIdentifierSchema,
  Dq7xVZaLz1ofmKsUodtSSbe6YGxaRdCtP5HM1pKU8RHF:
    CdmBaseStaticdataIdentifierIdentifiedListSchema,
  '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv':
    CdmBaseStaticdataIdentifierIdentifierSchema,
  Cc6abtfBMYGmbDzKaDhnZfAxERd36qMiuHyDbE1wWuuQ:
    CdmBaseStaticdataIdentifierLocationIdentifierSchema,
  '9YDcX7WZdjBgo7K9Kss1FBKB5BJLedbkwzY5f4DdFZ48':
    CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema,
  HCfJUUx9k8N8QqUgtRQZDaSkcsnmcWrN6CsVeT5ViMfM:
    CdmBaseStaticdataPartyAccountSchema,
  '3RvMJskqcUvhXZBqQuGuqyxWNuVgQf51kdCaBEzensYx':
    CdmBaseStaticdataPartyAccountTypeEnumSchema,
  BMokXsNGeVbH3hGbewvBy1NG4V2DoVoJ7LRURPqGQ2Hz:
    CdmBaseStaticdataPartyAddressSchema,
  '5xa7EuQoL6MHLEkfe2xUYenDRD52BrW1dDcJHWhB4zFP':
    CdmBaseStaticdataPartyAncillaryEntitySchema,
  '3FLaoJ8BXZUb3VpFoXQ7ACwUhTaDAZgwztubj17GegH4':
    CdmBaseStaticdataPartyAncillaryPartySchema,
  C2Ec7JF7c6QV6kD3Wb7Mtfg9NJ7aemu5KqHaafpZuEvN:
    CdmBaseStaticdataPartyAncillaryRoleEnumSchema,
  '6L9P51qVV3HH366DyCCXDxSEYLtr6zN1bAMebbiK5iW1':
    CdmBaseStaticdataPartyBusinessUnitSchema,
  HA8fmtXcNJxs3hXa88H9PHchDg6hgAFvto4VVdW1aZmf:
    CdmBaseStaticdataPartyBuyerSellerSchema,
  '2vquTQrHfbG8GVEjvB7SAZfAmxeyh1hxQeEN1wjro58A':
    CdmBaseStaticdataPartyContactInformationSchema,
  '58TeStN7sJrzoG3o1U7FZq3fFkxbCXkvdWPYYZkf1r3x':
    CdmBaseStaticdataPartyCounterpartySchema,
  '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG':
    CdmBaseStaticdataPartyCounterpartyRoleEnumSchema,
  HwqBkWFGaGHyDnDyqqp3Exgm9NRyzpNMvF1N6UtAJeGi:
    CdmBaseStaticdataPartyEntityTypeEnumSchema,
  '4ziQZYSMsRBGw2UcuWWBCV7f3BDZdr6LRtdVLEavoHaw':
    CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema,
  '8JiSzKwsUM83StApPmxZgggZyHQCSUvE6Fy23XWLQHUB':
    CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema,
  '9rvLaroTfdZSpfMcA8dBg3zpJu9MmRcN4mqeMUJpWPZB':
    CdmBaseStaticdataPartyFieldWithMetaNaturalPersonRoleEnumSchema,
  '3QYsrTuj8NArStHVg4Bkwnj3LgYz2Rd52Xq4psjQm74A':
    CdmBaseStaticdataPartyFieldWithMetaPersonIdentifierSchema,
  '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS':
    CdmBaseStaticdataPartyLegalEntitySchema,
  HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaAccountSchema,
  '2y5oTswWqzzAdz3YW657fXdmY8ENhbHAEWBxJwfmi5f3':
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema,
  AqRajqKToreHabAHCgT66Zc87qk24EdQSawSThmGb9Eu:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaNaturalPersonSchema,
  Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr:
    CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema,
  Dz8x4hxN4LrnwACtSYMSryByQKNPMssYkK9899oiNbyh:
    CdmBaseStaticdataPartyNaturalPersonSchema,
  '9jMFqKdmgCwgQBzfKNbUAGoTLobW3aCoWXv25TRM7oHp':
    CdmBaseStaticdataPartyNaturalPersonRoleSchema,
  A4UUWtjEmLLX2CyaoMPRZ3X1Ea55w5TbqgueoeTHNvEs:
    CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema,
  '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy':
    CdmBaseStaticdataPartyPartySchema,
  '8otMB7Qhn3fyzdqcuRMH14nKuDGiaWnjVXn45TJ7SBLR':
    CdmBaseStaticdataPartyPartyContactInformationSchema,
  '9cfoNdV96xTzev5mSMGvEn7aYQWsjw2BsB7p8HG2KVYx':
    CdmBaseStaticdataPartyPartyIdentifierSchema,
  JCXuAtNHkVPfjzG8gXbgiwoAYAmMiB2EfaSy8qU3iqtz:
    CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema,
  '2LmejohDGLXaXF2jDmkccaa7GSQbnbp8iBMKmrxifhWs':
    CdmBaseStaticdataPartyPartyReferencePayerReceiverSchema,
  Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm:
    CdmBaseStaticdataPartyPartyRoleSchema,
  H6gWEiw9pVTmNQVvvZzt7KcBJ1Ub6wMyaVh3zbM7qCkM:
    CdmBaseStaticdataPartyPartyRoleEnumSchema,
  '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT':
    CdmBaseStaticdataPartyPayerReceiverSchema,
  AYi3oguzR4Utfj7hc4duXgvb2M7SapBbYpq8SyJbHghs:
    CdmBaseStaticdataPartyPayerReceiverEnumSchema,
  HU9UvBYP6JQj6JsSUxAzJ1j8s9qEtMMq6JEmcjiChryk:
    CdmBaseStaticdataPartyPersonIdentifierSchema,
  '2DvCCVBpSHMw3EiuFp3MYB9YQpwrSYx4jvwkNtoq3jx9':
    CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema,
  '9w3yZ13uv2onHnWSmTEKqfVrjkKHHBuryHdKhMswV6it':
    CdmBaseStaticdataPartyReferenceBankSchema,
  Dr7s6cFbs9aSU7RTFMQNVdpt9CuuUy3nRKpnUmXo3cbD:
    CdmBaseStaticdataPartyReferenceBanksSchema,
  Ckw9v2wXUokJbSTvCdt5Q8XQuPvLbUCCx6JaAoaUpDGt:
    CdmBaseStaticdataPartyRelatedPartySchema,
  '7kBg2fFNHjAkhkMGJPiz8uovR4bTqF6RJzCUk6YKB2Aq':
    CdmBaseStaticdataPartyTelephoneNumberSchema,
  '7PAPLMPSmka7bG7227fzRv3qSgjt72t52HW5JbZddX1w':
    CdmBaseStaticdataPartyTelephoneTypeEnumSchema,
  DW7rU2G1aVFJWe4AguEb2Usk8YfFAXvUzqiNDKzFurHz: CdmEventCommonActionEnumSchema,
  GaQ1ieWhk2E2fW4etzuQbWGUxDQvA7SeT6XT4nunJLWi:
    CdmEventCommonAffirmationStatusEnumSchema,
  H7BQ5tsetxzrnYgPhyG3s5vGJptCu5BD9tAGJm6R6UUp:
    CdmEventCommonAssetTransferTypeEnumSchema,
  '5W5vjs214raXHjKjnhu1xesDsR28cGgcqUEJZdPcnm9u':
    CdmEventCommonBillingInstructionSchema,
  '2zMRqKefYonWQ8EuyFg2YU4i4zB7SE1Yph91R4PEy7WW':
    CdmEventCommonBillingRecordSchema,
  DsCUffxSDY6GA5gzndifSLMQRghvnkjFraENE8pUUmzA:
    CdmEventCommonBillingRecordInstructionSchema,
  hDUXATg8yvnWEPHNH63w5HzgAKwLoFeQGGn6JTqWHsw:
    CdmEventCommonBillingSummarySchema,
  GzR7cbwzNiQXhjYVBoCoZjjS5gQuW2pqty2pX2zHCkJ7:
    CdmEventCommonBillingSummaryInstructionSchema,
  EhgUPTjNky8ntLuNCUAumwbyM9VxFbf2HcZ4Pkp2cfsM:
    CdmEventCommonBusinessEventSchema,
  J3qzEabcpDNDy884Jd998xkJpMR5zFZJuiaxAq95ZLLx:
    CdmEventCommonCalculateTransferInstructionSchema,
  Fz4NTo1FbXH16J8EfuEn4VzfYkcagg6FsmDXL49ce7H: CdmEventCommonCallTypeEnumSchema,
  '5ZkYvwfLfiF71H4xx4uG96T64QSNJTzuohdaDKaDJbbY':
    CdmEventCommonClearingInstructionSchema,
  '8nANyRzbRdjuTq7qNZchzDJ4XYqZ8HWYinBX4dWM6NAV':
    CdmEventCommonCollateralBalanceSchema,
  '7hZg754vaDMZPnXQ2cJ35bvJ8EeQtSssdsyhPk3WSW5x':
    CdmEventCommonCollateralPortfolioSchema,
  '9Pn2rDgMph8R9xESVmd1HEN7zV1kPPCcUAMomnz2RDAT':
    CdmEventCommonCollateralPositionSchema,
  ScqKZW3m5Vk4Ht3xpASxxv9euZM32FQPYjE6PbCZEHc:
    CdmEventCommonCollateralStatusEnumSchema,
  '3rCwZx3mRa8Z3ZECBEL7GM4gEwf8NnjrvaktzD83D13b':
    CdmEventCommonConfirmationStatusEnumSchema,
  G6a8EHMCBFTctoKK7wpHrSKyqmnPqZLuyEMGhXiaHYzB:
    CdmEventCommonContractDetailsSchema,
  DGsbtTnVqKahxQWYvWbmGWFYBqtFfWxbBr5DuADrAFqK:
    CdmEventCommonContractFormationInstructionSchema,
  Cd5dfDZ2vya9EXadanoFVVizmTtXVyCD3eetnLfjKM7R:
    CdmEventCommonCorporateActionSchema,
  GFvEqH3FNnzTFFJAqMgygUiVX9vA45GDjiV95ZqP4qAR:
    CdmEventCommonCorporateActionTypeEnumSchema,
  HmAtnSZuDe4ifp5cQh4JwWZmz7AEJjddmWkQ7QEmTjEv:
    CdmEventCommonCounterpartyPositionBusinessEventSchema,
  EEF9WbKw9D9wtisDhW8324FJ2E947ssWHTCgh83EtSwA:
    CdmEventCommonCounterpartyPositionStateSchema,
  AVPqeTe3UbwZW8Fbubbmr4aPptrhVekU6a5UqnSKNLfH: CdmEventCommonCreditEventSchema,
  '5fy8DQMQDgMbPNnMB9zmKJVXYJWdVuBKFNuYz87LZ6S9':
    CdmEventCommonCreditEventTypeEnumSchema,
  '3eSk21DN6a3UUApaPYyPtqi3HPeLX7zYga6PMuXULqNa':
    CdmEventCommonEventIntentEnumSchema,
  '34vDDjWK88raLcbwzsk1RG6XiYVNqS2twvW2mBVySxxe':
    CdmEventCommonExecutionDetailsSchema,
  CBTSmXARftQib1Z7xkk5BvzFCwYNVs56io1CySzwVRv6:
    CdmEventCommonExecutionInstructionSchema,
  '82AwW4L6L3Hb2HAxzeRUzisvXkEvVu1AaKYAjJ657nnt':
    CdmEventCommonExecutionTypeEnumSchema,
  C4t841uYAz7R5kNxJsYAeKiyFsyBQFp3wRvMihrEeHiA:
    CdmEventCommonExerciseEventSchema,
  '4rKQaktx1a1F9syFBAjRr1n7f9GXbzP5HKPdysPZGByq#1':
    CdmEventCommonExerciseInstructionSchema,
  C679ZMU8EZmaa6vaEdfxHjNQD8fM5PUBNsXR3ZQJUxio: CdmEventCommonExposureSchema,
  BhcAc9aom3oN5CJ2MVXmyyUEeSBLxX3PgyuKursXD5hQ:
    CdmEventCommonHaircutIndicatorEnumSchema,
  ESVYFHhwAEbDfHx7VpnDSeYjKbYM1yz22iidmSJwTbPR:
    CdmEventCommonIndexTransitionInstructionSchema,
  GEHuJ1Fk1jSrDMfbynCACW1dsPVuMhSkjFbkitJU37Qp: CdmEventCommonInstructionSchema,
  '8p1vMWCA7VEoeAswXYP9yUFGd3HxbVB48WeGbQNmrJYw':
    CdmEventCommonInstructionFunctionEnumSchema,
  AU5SZ3DHqRdpqT1JPJ9S96fTUWv7kU2ofDC4zNRK6quM: CdmEventCommonLineageSchema,
  '9CwCB3Fnvz24SzGuu8TbsuxrVJz8FFCvQCzGsfUyEjHK':
    CdmEventCommonMarginCallActionEnumSchema,
  Ee3C3vqSeFDzzP16yujSkrhc9JNvgdr2F2DYyVzGjfaG:
    CdmEventCommonMarginCallBaseSchema,
  '8nEcYjH4ixVg7JfABg3dqYi9nqpHYwCrdcXfWzfmtnkd#0':
    CdmEventCommonMarginCallExposureSchema,
  '7LjiKLT6mqi1aN28PDZP7RC1BCddoDdaZRX5HQSggkHK':
    CdmEventCommonMarginCallInstructionTypeSchema,
  D6KzTrAtJgtar4KhLVeopPRGn169Q4jxU7U1Kp2N2CEy:
    CdmEventCommonMarginCallIssuanceSchema,
  G5qfFX27BDWryZJLHxvyt5oNLEsFedJBwWzVhUDN4nQR:
    CdmEventCommonMarginCallResponseSchema,
  '7D3ayms1ts4uASMX9CDoM8rNqDQe4wV1tFypq41nC7Pd':
    CdmEventCommonMarginCallResponseActionSchema,
  DCBUG67sRjRXZ7Yi8KP7GaYSeAqW5NamG77yzUifTiX5:
    CdmEventCommonMarginCallResponseTypeEnumSchema,
  '4BrXNc4oFsUfnFzm3uWTqNmgivGhZJRmaoxvb8kK9xiw':
    CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema,
  '9QvPaXwgMX4bfTdirhDyje4sXJhxGdfrXikFFGpngwAb':
    CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema,
  AveBbPNcyiENsH8aGj4xhEY7GkX7xuoVApDW87Er969J:
    CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema,
  C5nADRBcWM2dKjXzJRRmahbypM7x2DUsv7Mxpuc9uPRu:
    CdmEventCommonMetafieldsReferenceWithMetaTradeSchema,
  EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT:
    CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema,
  '7UyroNcHi5ggaDeDqgACDvjixoTVqZyHPUiNuGcK3gXq':
    CdmEventCommonObservationEventSchema,
  '8UoUJDRFiVPok3ABp8K2j4QuwD6Mn5jbUhmPukGth8rV':
    CdmEventCommonObservationInstructionSchema,
  '23BvjXEenVrVtJqaEg2dcrfEDjwqbfn2AbohdEQC5q54':
    CdmEventCommonPartyChangeInstructionSchema,
  HCvuuD7chfLnfNLrGsb6jCRU56ynTit3RvVgZcRpjqCP:
    CdmEventCommonPerformanceTransferTypeEnumSchema,
  FurdrKKKE4EKbMMyMvsWgSGLYyqPxhjTKSZcJDKD777K:
    CdmEventCommonPositionEventIntentEnumSchema,
  '69nLFfiGcCWNuTn9H9eiEcBwsXuqgNxxqgB7X8X9XaSz':
    CdmEventCommonPositionIdentifierSchema,
  AKxcCwdA28GyqV4bAANz5gwr1mkuBEft7TkK7FwJkEew:
    CdmEventCommonPriceTimingEnumSchema,
  '4rKQaktx1a1F9syFBAjRr1n7f9GXbzP5HKPdysPZGByq#0':
    CdmEventCommonPrimitiveInstructionSchema,
  CGh8Ro5bj5zb6exK9S5PSK14D7LfDgmyq2CmshhZHCav:
    CdmEventCommonQuantityChangeInstructionSchema,
  AnFR5nwdiQukWW9YeZRmgTparyPvgRKghypvgvUWqU1c:
    CdmEventCommonRecordAmountTypeEnumSchema,
  DbDuU56mMCeHMmfAJPu7gVNzKPqsoCbfKMA4B2f7KJob:
    CdmEventCommonRegIMRoleEnumSchema,
  C9KJZWTduUXk4iocTB63NwBs7xirNjChn9pPZsyhbhHL:
    CdmEventCommonRegMarginTypeEnumSchema,
  C2cq6aR7yoFg7jn9vV3wrTukUrevaRzkBo4PeSWP5die: CdmEventCommonResetSchema,
  '8yJJHXbkr87FPBmSyeeUAyCyN3LVuUaUmGL9rTQ9nzC8':
    CdmEventCommonResetInstructionSchema,
  CHEdUbdvTiHGF4JCJFKNu57aubrgQGWDnj36TaxaftB4:
    CdmEventCommonReturnInstructionSchema,
  '4L9Uam1XY7h4ygfK9tdFjDPMNsNEn9NAVvoGNsHvGfWD':
    CdmEventCommonScheduledTransferSchema,
  GvXkW9qPM5UsXhKy6zRjhXxHpmcYaTCpkA3q2xmQuGxZ:
    CdmEventCommonSecurityLendingInvoiceSchema,
  '4rKQaktx1a1F9syFBAjRr1n7f9GXbzP5HKPdysPZGByq#2':
    CdmEventCommonSplitInstructionSchema,
  HcvuPprC3CbAxkBiEwkiWsJzW5pVqZ7occ8cncqAtQR: CdmEventCommonStateSchema,
  GAPYEKW715oyitUYJp6oG8TJQrZ3oHrfHbahRSWKXVAm:
    CdmEventCommonStockSplitInstructionSchema,
  FF9Z3uZqajrrPRisojyAFgTfoSsZRLq3qzqR19xY3meW:
    CdmEventCommonTermsChangeInstructionSchema,
  GHKfcNGEW4jfWBhqCesd1ZbQ2ZJvDnS1YMm2UZ2ZZNZG: CdmEventCommonTradeSchema,
  '6zgzXM8ryqdp6CFr8BH4PKyJcHZsjXogtRiA2DcyKgBU':
    CdmEventCommonTradeIdentifierSchema,
  '7RF4XftJyc9vK9ZmWCJeaHhcyEAv7nfiBYWQ95m9R24Y':
    CdmEventCommonTradePricingReportSchema,
  HxxzM9rdFcBDqPQ5HzDD9UxLqocN3L7WNYNZvEdpnWJd: CdmEventCommonTradeStateSchema,
  Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs: CdmEventCommonTransferSchema,
  '28K8jWekKx6AFsw5haFZg81uADTmzkkgCKQErSng8jXd':
    CdmEventCommonTransferExpressionSchema,
  EPw23JvyLZR41DTM3xD1zG4onVhCwLqBoQYZN27eS27R:
    CdmEventCommonTransferInstructionSchema,
  '9HPCH457X3P45F4b4BRLZZYtzUtV2TFY3DmCKNCJL7DZ':
    CdmEventCommonTransferStateSchema,
  CffZN3WjvV7L4yuq8gPxEorKZMGZzCxYzuaCyW5GRsfn:
    CdmEventCommonTransferStatusEnumSchema,
  '35r3StzAH6Qus8FCSpiCqqUrKHx9d4SYBCL2gEecgCJq': CdmEventCommonValuationSchema,
  EYHsr3QdfZNKZWjh2MH65Run9WHCSMwVoQabxHFou3oX:
    CdmEventCommonValuationInstructionSchema,
  GV6VzVBrD9mNeCdw21SuF8iXDvMQGY5KsZFTLB9dh5aZ:
    CdmEventCommonValuationSourceEnumSchema,
  HsG4xRp4HQZoXBBj6gQLY1cHS5gQpBY9GJeaUjGbd97Z:
    CdmEventCommonValuationTypeEnumSchema,
  '2AjMswvvUFa65tb2E1fgtkxxgJ7ReLj17xorwjbb8wAb':
    CdmEventPositionAggregationParametersSchema,
  '8gNG5f8FJbRxhdf2sZeitv3B3z4WF4YQTxzMJL1RU2Mb':
    CdmEventPositionAvailableInventorySchema,
  '2V4dGZWz8cuGsz2de8Z56U5MbYQwAFwUMekoMx6KF9MR':
    CdmEventPositionAvailableInventoryRecordSchema,
  aBFCJu2rgHDvt2e9kS3mCjQEMuVFbBnupxJkHCP32WV:
    CdmEventPositionAvailableInventoryTypeEnumSchema,
  BkMb8vLvnJKd2uBNbPk8QJCpmMbYGV8HNkhUbEsM5p81:
    CdmEventPositionContractBaseSchema,
  DhpZ3SZe34Pz3xJLcAS74rHhgZSez7ZvQx3yqmXcYA8r:
    CdmEventPositionCounterpartyPositionSchema,
  BTewRSf9MC2WLXoWSxonQnNA9mncZSiYdnUB4odA6MN9: CdmEventPositionInventorySchema,
  '6ixYuBhfiWQfvWDH1SyBRA2mJcRzpiH3SWomNPu3paz1':
    CdmEventPositionInventoryRecordSchema,
  FiGnX5GAARt1cJzgo4BT3oAxDUqkYktySnbp28d47HxS:
    CdmEventPositionMetafieldsReferenceWithMetaPortfolioStateSchema,
  '5uwV9tJmkwW5rZ6mfKRco97dQEw9rwznJePYQbLyAJco':
    CdmEventPositionPortfolioSchema,
  '5rZCg68iGGiKxNzqKGrKhdGvwvL65GzoawTiePj97t9T':
    CdmEventPositionPortfolioStateSchema,
  '22Lbahf1cGvTSTcW83aFHjBwGYU4D8XJ4Nmupa8TNRJH':
    CdmEventPositionPositionSchema,
  CtjNKoKQ8S3xNPyMY6GXJKQAAfjxpTQmdDgLUNE3iAJM:
    CdmEventPositionPositionStatusEnumSchema,
  F2Wt1EDZnfiFP4epJAKj86zS8AfxfM9y6A37JnsMLx5j:
    CdmEventPositionSecurityLocateSchema,
  '5MhstayLq1JLa2NHwkVTfhEPNG54pMxBdyN7fZ7dzvx6':
    CdmEventWorkflowCreditLimitInformationSchema,
  CRo3EU8CPpKHNiGvaX5xb9nGp7qqfXDNxyuzxdjqhqUP:
    CdmEventWorkflowCreditLimitTypeEnumSchema,
  '6jrB2pq8NLHiipfLLWQHfSy6DxQvWsHdiVcQ4VP3BUFy':
    CdmEventWorkflowCreditLimitUtilisationSchema,
  DhHQHqqp2Z9sKdNPDi7Zcxze2V3FZafnK1rKbVaWWDHE:
    CdmEventWorkflowCreditLimitUtilisationPositionSchema,
  HZmoSFgPTJDpgvQbhrw415z735PsqkkNK7AhockdXE35:
    CdmEventWorkflowCustomisedWorkflowSchema,
  A1jYzNcEp75NaNXNyvEb5S2noXSa3PnFck4qj5Cdvuvs:
    CdmEventWorkflowEventInstructionSchema,
  DSJDCMX9fWnAZqseXHzuc3NWEvtct9Ay1D8XqV7Cz8sb:
    CdmEventWorkflowEventTimestampSchema,
  '98uPvPckZ92oJWmjF6PjWKjL2AQpfcZkKBFUSXjnaWdu':
    CdmEventWorkflowEventTimestampQualificationEnumSchema,
  BRdxjWnBGUSh37id1GM71wzr5JbVB7YUZknt2qh1GRd5:
    CdmEventWorkflowFieldWithMetaCreditLimitTypeEnumSchema,
  umfXQbzquU2FEApASMDmHC7pUrpJatVHuKZmEBofQ7g:
    CdmEventWorkflowFieldWithMetaLimitLevelEnumSchema,
  '7kTQtXqJDXrzKy4Qi8KccDimTXajinKszZDzGGAVE3Fe':
    CdmEventWorkflowLimitApplicableSchema,
  EYpcaUBjmYVc34MF2zDCr15B8fCMH1Lrnw2Zq1zPU4TS:
    CdmEventWorkflowLimitApplicableExtendedSchema,
  EZdU7ZfikeT9jXmxHjC3ABGRtnYsqhzhoL58Cfo3ojj1:
    CdmEventWorkflowLimitLevelEnumSchema,
  '98dPVuFQFzp6TPmhAh6zjz4zFp8sdg597uHrfF3ztLkP':
    CdmEventWorkflowMessageInformationSchema,
  '5FztK8LEabxgM4scSQjt3nPYnDnrndC8WDtkrCKtWy5e':
    CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema,
  HL2ZcMwczuHgPoUL75nm9XG9rZy6XeFMmzGuuWfqxkya:
    CdmEventWorkflowPartyCustomisedWorkflowSchema,
  B2QkNd6opHqfsBrrTAsNeuzDJGQoGukZ6M3oQ254E6ag: CdmEventWorkflowVelocitySchema,
  '6exizYh6WdJdboTXU5vG7ZycT7oysGTNWCBaBzuWkBBs':
    CdmEventWorkflowWarehouseIdentityEnumSchema,
  '69BAj8p5rA9BuAUmQM81t6H6n2keSWdJxMXhZQqzaotS':
    CdmEventWorkflowWorkflowSchema,
  GZHhbuAMJUxPqZ627VF6tcc7Jky7YaBT1ctEWpw3De4m:
    CdmEventWorkflowWorkflowStateSchema,
  BvJRype2zWVijuwSinejW5FK4QMppv6EphZ6CPresR4s:
    CdmEventWorkflowWorkflowStatusEnumSchema,
  DocYqREg9o4T2rhZSgBc4WNY8RpRSEM9zXWkDh65v5Z7:
    CdmEventWorkflowWorkflowStepSchema,
  '3hc2fs3hNHSJTJ1K3BXvZXCq4XHj7rRGhvfo62XddQin':
    CdmEventWorkflowWorkflowStepApprovalSchema,
  '5NxschaoZUezk2BPbZj7X7nhfYwLz97EWLXacfYbzGHh':
    CdmLegaldocumentationCommonAddressForNoticesSchema,
  BU5zwrVyY7wwfteRD7Vdaj9pWLX2CSnscAydsqWAUXjk:
    CdmLegaldocumentationCommonAgreementNameSchema,
  '4KjkUNqNW52EyuCcnzPCbMA8tfR6qRi9jXUsZ3s5vFTv':
    CdmLegaldocumentationCommonAgreementTermsSchema,
  HFnvdnbcm5FbHRjXNW9KZ6x5LzJhCDhTuXtU3tDamXrQ:
    CdmLegaldocumentationCommonClosedStateSchema,
  H4Q9vZBMs955sVKjew3tU5xKipMXrqJNyTf7MDqQvRjH:
    CdmLegaldocumentationCommonClosedStateEnumSchema,
  CQzTbWm83XYnnNf8Z5x9G7WakNb7E4nLLZqNgDki1J2p:
    CdmLegaldocumentationCommonContractualDefinitionsEnumSchema,
  '6jcZ9zLDpCUUHnubcVFKvtCrbSEVir51vkUuHYoQEtTv':
    CdmLegaldocumentationCommonContractualMatrixSchema,
  B68gARDj25MKrfCetdMJ4VkSs38arw6Bqr2TPDnbwyBD:
    CdmLegaldocumentationCommonContractualSupplementTypeEnumSchema,
  '3USYNWwBjwfneMFPfLEAygbecRdE9pmiE6VzumZMpdRQ':
    CdmLegaldocumentationCommonContractualTermsSupplementSchema,
  AA7nW2FUcjuuyrgpc3ytfvoUQ34Ux6RFfNyLuHmnYxJU:
    CdmLegaldocumentationCommonCreditSupportDocumentTermsEnumSchema,
  '55eAMVBDrc97nSg81oZ8CAjTfKe1nT7pk36qGrAdm3zF':
    CdmLegaldocumentationCommonCreditSupportProviderTermsEnumSchema,
  '9dLtbVyZnKc2oNincBJmQCsy1WxLSSEybcdCJjn5TYm9':
    CdmLegaldocumentationCommonExecutionLocationEnumSchema,
  CZWJZLLr3HQs8VCBUxDWXabvSf6Q3319JdxR7Apv4ijg:
    CdmLegaldocumentationCommonFieldWithMetaContractualDefinitionsEnumSchema,
  HnmNxnPfmCYsrrcW4ZHfLPh81wfJNCf4xE2hqXeuzSgu:
    CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema,
  FPz2gxL3hhBbrKzsyDHCfd6NPDNRZN4HckQY4e1gj5u9:
    CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema,
  Eyc8B8F3y2KnRoznB2hdpowXLuoWSHAkCnr3veTzM2Lc:
    CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema,
  '27svQFwe6bB27frVyJ6e6Nx85ok2AeWiaJyYCwEwdVF4':
    CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema,
  '8Wj1ScUWE2jG7vPb1vgp6xRgqJ4EbYyCS9n2CbaCYTSY':
    CdmLegaldocumentationCommonFieldWithMetaResourceTypeEnumSchema,
  F6XBKSmZ9oSyV7jNgy8VWvvVG1HtjMoByYPxs4837cbw:
    CdmLegaldocumentationCommonGoverningLawEnumSchema,
  '9LAToUm7ugSfrCZWL6KmTwi7jAEoXH8TcNNGxr34YvFc#0':
    CdmLegaldocumentationCommonLegalAgreementSchema,
  DcgdSd4HsySv1Kjs3mmHtjdobShDTmMi1HHGXnxFpUAb:
    CdmLegaldocumentationCommonLegalAgreementBaseSchema,
  '7p7rsMrLJRwnskaTsetTmKypk1jyyLVvR6JTdJNYeFNf':
    CdmLegaldocumentationCommonLegalAgreementIdentificationSchema,
  HGBC71V1WUat7dy4BrSGTr2RgCAN75RmLY4EUC3WmHtm:
    CdmLegaldocumentationCommonLegalAgreementPublisherEnumSchema,
  '1xkXx62AuJPeBWbqXe9my7R6wp5KHPpRYMPgfh4Md8s':
    CdmLegaldocumentationCommonLegalAgreementTypeEnumSchema,
  '55gwzrtwt8NQXzuzesGej1NAFoZdqtmqMGguHuuJAZJN':
    CdmLegaldocumentationCommonLengthUnitEnumSchema,
  Cx27wd1NsZNkmCvmLdCFXNsL3u2k25coNe5ESEWgV3px:
    CdmLegaldocumentationCommonMatrixTermEnumSchema,
  '2q1k6XA3Pp2HSmogbNojZ7iaaia4yLRxkEHhC2Dnj3Rm':
    CdmLegaldocumentationCommonMatrixTypeEnumSchema,
  '8d7t77eoZznGXdoKdpQK6QFJcZuzZrjj3VtBPGBQ4sUm':
    CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema,
  '8u8RRRaPSjvteWaRcrpDfgP6uCdhaSyC9WgLTyGotjCH':
    CdmLegaldocumentationCommonOtherAgreementSchema,
  DLLTGYKnoD2U92utJW3eUJCc4mmSgtMnRGcepG9e2dps:
    CdmLegaldocumentationCommonOtherAgreementTermsSchema,
  '4anwVBorXr81GoC4Wkf4trYWror3mSXbzukXdYgwmG7N':
    CdmLegaldocumentationCommonResourceSchema,
  '3HwpSv5LnJqxEq379qzBShVAkqrJkDsW1ysGVeXzwd6B':
    CdmLegaldocumentationCommonResourceLengthSchema,
  '6Eina6hrt9KKXg8ZTfhCSwwcHkxjXe8HVdHFo6X8toya':
    CdmLegaldocumentationCommonResourceTypeEnumSchema,
  '2vjyHHweohchsUQ7vzRWYnkpZEn1AcEHAqi83TmYW23F':
    CdmLegaldocumentationCommonSpecifiedEntityClauseEnumSchema,
  '4ye56L9in1qinh2cpAHGxVWkoWGLGzRyNgsSzA4P1Kvf':
    CdmLegaldocumentationCommonSpecifiedEntityTermsEnumSchema,
  '8fyiEEfhkg9F3ovSugXkHETAhUT6cbG8QTzxvV31T8jm':
    CdmLegaldocumentationCommonTerminationCurrencyConditionEnumSchema,
  '34yZnruVzk2TWwJj25VXtQ6vJsyoHWmMQdFWUBQGYp1x':
    CdmLegaldocumentationCommonUmbrellaAgreementSchema,
  '8i9Ncryq3v4GEFNYHazXRPvCCHC9DGTnoSc9f9vqJXoN':
    CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema,
  '24XR8iGVZsSMcRtHNgWSpYEEza3KosniTayAxz2hnncm':
    CdmLegaldocumentationContractAgreementSchema,
  Fz2tnWG78N5RC4kx47Wbt87FHmqDVEUaQwx1vKzH8X53:
    CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema,
  AFqCxRJfD2r6VuMtdAaQUzB1354VrRcR3KdvEnUz8US6:
    CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema,
  CnYXLeD1YSPzKRkCdgumsMyS2pGwY5z3KFHu8tmbu9oc:
    CdmLegaldocumentationCsaSecurityAgreementElectionsSchema,
  '9k6rT7iiYXbFohPsdojsVuAV5SSxQxhoLfFzFwh9CtQy':
    CdmLegaldocumentationMasterAdditionalDisruptionEventsSchema,
  'Hn9xYtxdTe696TXzE5ge1KF3B3Ao26Z2er28HygKAoWi#0':
    CdmLegaldocumentationMasterClauseSchema,
  '2CBRVBHp8NK926NLXhHSWTgFBfRXppF92DVzGUsaWnb5':
    CdmLegaldocumentationMasterDeterminationRolesAndTermsSchema,
  '95T825bQFLe9KC4B7yuQzPWcdNpg4muWrPiQjsK914F3':
    CdmLegaldocumentationMasterEquityAdditionalTermsSchema,
  '8eyJdEjEPGbFnR2mLmiXtvsj5zsq51J2BKrRERr4rfQH':
    CdmLegaldocumentationMasterEquityCorporateEventsSchema,
  G7QNTAF4CHNyrEV1HRJJHQXd5KMBRK1ddd4XLSJSKVWe:
    CdmLegaldocumentationMasterEquityMasterConfirmationSchema,
  '39XeVq1TJts5ATQmUwpB8HKruLr5jxWH4BxrT8gtkSa9':
    CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018Schema,
  '5TwYH1UDWUhzBQmxrWFhK5phemNwZXmScWVwCZNB72rU':
    CdmLegaldocumentationMasterExtraordinaryEventsSchema,
  DkpHjXSPYeeAymNJRnod9AFWqxCfj21de5396nJX3jb5:
    CdmLegaldocumentationMasterFieldWithMetaMasterAgreementTypeEnumSchema,
  Et7RmFhXC1S5FYbAYAkgpkUfwspKqhDrsG1K89ev7DVu:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema,
  HaEz2HuxrPwUkAPyfLmet7k7WuJfH6KjErdWuSXuJE71:
    CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema,
  BLcaRJ2SjxR7oB14E6Suf1722kgvEQ8vdXcTuTM6SxNg:
    CdmLegaldocumentationMasterFxAdditionalTermsSchema,
  '7JpyU9NCehqGC5gStraNS8fct7zmgk7CRM3sBXoxQPwD':
    CdmLegaldocumentationMasterIndexAdjustmentEventsSchema,
  ALTxMwzmSAWeMbuzsF2tmt5uiyupRXVdsbuT3oYEtq4a:
    CdmLegaldocumentationMasterMasterAgreementClauseSchema,
  '8PqFpFTcFhXD8jv7MGaW7zx9isCBxvU2dYAKLW7yU6tM':
    CdmLegaldocumentationMasterMasterAgreementClauseIdentifierEnumSchema,
  '7wLk2adpUVoD6AqqF85TpGzcSum1hoSQ8TeAhfcmdpmH':
    CdmLegaldocumentationMasterMasterAgreementClauseVariantSchema,
  GMD6WsoUkvr8UPZVAk2ciZmosp1rstjA8D6jSBTFkJzm:
    CdmLegaldocumentationMasterMasterAgreementScheduleSchema,
  tC1wwJYkPfwpsdrur65zifZokmE1Kzb4gNtdNXBTLut:
    CdmLegaldocumentationMasterMasterAgreementTypeEnumSchema,
  '7x2TozKfF6tLZmiLa8mcLTM76BnCwyDrjFPBihcxGx5K#0':
    CdmLegaldocumentationMasterMasterAgreementVariableSetSchema,
  FrXtTcZdci7tGHhDi1HXMnBCW5ZREz3QTn3enyNDgvxE:
    CdmLegaldocumentationMasterMasterAgreementVariantIdentifierEnumSchema,
  Ge5XthGPax9Pcox4Sg4TN3G8GY41YZjZQjFbGESHPqiV:
    CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema,
  '6DgaHaSzK3ETUNrcEqTZUXkvS2nrBSrCTCJBLAqDEPsy':
    CdmLegaldocumentationMasterMasterConfirmationBaseSchema,
  '8CUt8DbZ5NEvW1nUfgiy523gcBrNzqqdRSQrzwY3u5Vu':
    CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema,
  '9yFNw68PR5uL5JLChMJozdWh7m979eeJVgEptMKh9oVq':
    CdmLegaldocumentationMasterNationalizationOrInsolvencyOrDelistingEventEnumSchema,
  BNwNQ6TkYDn3nzSVHofp2yxshKNkpDVyyKJASA2mjKaN:
    CdmLegaldocumentationMasterRepresentationsSchema,
  JBQsnuxVFxN3iNMcYdNDDrSvjPZ2uBGXmVMdq9rLwNYn:
    CdmLegaldocumentationMasterTransactionAdditionalTermsSchema,
  B7HxeT3Xft46tT5ze4mQnBq7hxyLkZUxSGkgRhMoPRuJ:
    CdmLegaldocumentationMasterUnderlierSubstitutionProvisionSchema,
  '2xXTVFJJC2AthhSszyY4ca794zXYkKYyEqir5EjFU4Zm':
    CdmMarginScheduleStandardizedScheduleSchema,
  CDbwJvzYyrQ7afEJRFR8x1ii8sk11Es3z1e62dbNj2rU:
    CdmMarginScheduleStandardizedScheduleAssetClassEnumSchema,
  '31LuHdvewSLrx6VphDocTHZpRiRxE7vw5HywfyoE5xsE':
    CdmMarginScheduleStandardizedScheduleInitialMarginSchema,
  BwbqfunwwJxSMfQD4CEUJ2Ab4AqzjMTjpeSCF3E1NLYx:
    CdmMarginScheduleStandardizedScheduleProductClassEnumSchema,
  AyHS2v2wXHzgR4ASSkm7Ab98k8dMLwEZKWPPPTXGUcJB:
    CdmMarginScheduleStandardizedScheduleTradeInfoSchema,
  '6PMgqftTq3a4SNfZQb4xXg2MUd6m8xZRWGy9aGWS9W8C#0':
    CdmObservableAssetBasketSchema,
  '6PMgqftTq3a4SNfZQb4xXg2MUd6m8xZRWGy9aGWS9W8C#2':
    CdmObservableAssetBasketConstituentSchema,
  '3xtXK1YdVmKnwdTBo6WKzcZ4cthkLD6Cotrd9TGebUpn':
    CdmObservableAssetCalculatedrateCalculatedRateDetailsSchema,
  DQ56S8AUX7XtvjkfZSuzYpayNS38eibZb5PEpsrperoP:
    CdmObservableAssetCalculatedrateCalculatedRateObservationDatesAndWeightsSchema,
  '4A7KRZp8xfcHRGGZtVf7xSp75Hu97uNM4dk6MD5ezR9W':
    CdmObservableAssetCalculatedrateCalculatedRateObservationsSchema,
  '5noQvmG1G1xXrG8SxnbN37mhXkXDttDg7VNkk4vHoTMt':
    CdmObservableAssetCalculatedrateCalculationMethodEnumSchema,
  '4B3Gz2f94wTHNuSEpR6eCBJGvdrLhfaVFwGYDJriKbnh':
    CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema,
  '6KNQgESYt6L53eckR5BrECbH1phWdXFMzZATcAzK9NLy':
    CdmObservableAssetCalculatedrateFallbackRateParametersSchema,
  BzAmRPH81HKGy6cSBQMksdVVxBpKtdVhJKSbFqKiErQP:
    CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema,
  '3RT4aqPB3gGbtKfrgwy1KQmMu48NpwSTvJX4tykc6r2F':
    CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema,
  HAi9mCEW8j9oop8P3eGhgP2n9tVbXqrtCWnF77msRpK4:
    CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema,
  DKxKbxnu2Fwsa8UzqKbgTU29eJKTYiwMNoJTqTNZLM6p:
    CdmObservableAssetCalculatedrateObservationParametersSchema,
  '2W3rHTz4L7GBmVkiESoY8puS9uU1rTGL2SfpTGJy2kse':
    CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema,
  '5qPopZ2RMbhbDtd5XmtdT1QCkFussYRLiFeUPqAWCd9a':
    CdmObservableAssetCalculatedrateObservationShiftCalculationSchema,
  FNvJ5Bykw9Ak2JRJJJ1nizpUFbufUY7ciCjGoMLUAQzA:
    CdmObservableAssetCalculatedrateOffsetCalculationSchema,
  FANsoqTgc5XxJH7orWbzRADwZ6drQjPzAbPN6YqvcYau:
    CdmObservableAssetCalculationAgentSchema,
  '6C5T6HNc1xggFbuGGNXtXJ2qeiBiqRvHGvNJdJA3sW6q':
    CdmObservableAssetCashCollateralValuationMethodSchema,
  EdLKjCfief3mhGVbVnHDpyHDKbTXHYqXoaTKtcn9EjDL:
    CdmObservableAssetCashPriceSchema,
  '8AJje6F3LQBvFYx4iuQMLA7qkEW1m2oeGabyMjZSLuFU':
    CdmObservableAssetCashPriceTypeEnumSchema,
  '4omrk7WjD1yjwjt3edKCzksnAKX38duEcsLE2esZpg6q':
    CdmObservableAssetCommodityReferencePriceEnumSchema,
  EXhnZXqvEcgXZrY2VK9WqgZz87y5NwxZ4axscyrAeSBv:
    CdmObservableAssetCreditIndexSchema,
  EQxsMYMc9VvECVVKm2ZJuGuMzgL8yDytdszpjwY14Yy1:
    CdmObservableAssetCreditNotationSchema,
  EGpvPDYUy6WpBH4kNy693iBCzvTxxufSoJNuPsWaeJnc:
    CdmObservableAssetCreditNotationBoundaryEnumSchema,
  DRzBA7DNKGx3x57DdS7v8C2BBHL55ia9a7Sqzx7r5Qr7:
    CdmObservableAssetCreditNotationMismatchResolutionEnumSchema,
  F93Z49WPhvseXnmUoYUCWkT5Eg6S4PQfSsy5s4SZkNoz:
    CdmObservableAssetCreditNotationsSchema,
  D1H3C3xAMJv2XQNBYfethSUKDH7kngUkefwbzLwVLW1i:
    CdmObservableAssetCreditRatingAgencyEnumSchema,
  HaWzE4gbbhGKXJnQA29vkDyfHSkhDsje8H82PYwV2Phr:
    CdmObservableAssetCreditRatingCreditWatchEnumSchema,
  H8A5EpXYgdKnD1FhyTni2vHEnBp15QF3Y1Hk9y72CfzJ:
    CdmObservableAssetCreditRatingDebtSchema,
  '8STyBvSNBUVRcziJ5ApHvpPRYRvyJTGTsrM6RAFpGJE':
    CdmObservableAssetCreditRatingOutlookEnumSchema,
  '6UyMCLhWc1ZAqEfpnAbByw5F6GWt5hg25X2o3HVmZfGn':
    CdmObservableAssetCsaTypeEnumSchema,
  '3RnDS9BkyGXnmPcVrtU9vHuk1ioPRchsKsKfZ2yvvdvp': CdmObservableAssetCurveSchema,
  AfKweapaqsU79LG9ZWn4qFZmKFXJo7xvzr7cVxixP86u:
    CdmObservableAssetDividendApplicabilitySchema,
  EArWxvBkePDwUEtKBhh6BFEHXRgqmUAiHbHAVCW9EWu4:
    CdmObservableAssetEquityIndexSchema,
  FSP23sNY1FGeadmmkSZjmqWKdkoLdCoMqZ3eBePPS9N8:
    CdmObservableAssetFallbackReferencePriceSchema,
  '2GtrN4UDxwH4P5TqQ8bNcVwjwcdDhjkNovEAYuhpAhJQ':
    CdmObservableAssetFeeTypeEnumSchema,
  '6PMgqftTq3a4SNfZQb4xXg2MUd6m8xZRWGy9aGWS9W8C#1':
    CdmObservableAssetFieldWithMetaBasketConstituentSchema,
  GPbJZLwy1LyEN9r8a3LkR1UD8WgNNEjAhcG6gxpRbWzK:
    CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema,
  '3a31df2HdfB7EqRbM2D5wwBaTaVC1tUemQ66F91P16xS':
    CdmObservableAssetFieldWithMetaCreditNotationSchema,
  JMdjF7BkL7hgbzHsPDqk4D7tgaZ98wirqwFPWCQBuvs:
    CdmObservableAssetFieldWithMetaInformationProviderEnumSchema,
  '9QkWzeLcgPCCJUappiHJdN2AEyj6ZnCAsxX668fGGgG5':
    CdmObservableAssetFieldWithMetaInterestRateIndexSchema,
  Ea14T9qt8BFXsBnenzGNrbYsLa1CRPUUK1ChYX6Zo5dK:
    CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema,
  '356TLY4h2f86ko6g3UzBMXTWaCaZ9zdRXa3zrGiVTQrL':
    CdmObservableAssetFieldWithMetaObservableSchema,
  '5P1iV2VHBfC9AHhxAxN9sAUaoXTBP5jKaV5KMwJEtLvz':
    CdmObservableAssetFieldWithMetaPriceScheduleSchema,
  '7gVW4FqUTJb8Nv4aMbSXumbRtc7MKhNqxdk3LPMZx6Qh':
    CdmObservableAssetFieldWithMetaQuotedCurrencyPairSchema,
  '8iH51R45gmWCtNjqrR63GErLSs4TeUXk51R7D4ky3NDz':
    CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema,
  '5HGCdXL7A44CctEHzdmFoxAvfxHpCB2myr1mHPM1b72K':
    CdmObservableAssetFloatingRateIndexSchema,
  '3r42QBCBADZWzkxMBCQkvH3c6M3c1raWTFgLjoCsjZoe':
    CdmObservableAssetForeignExchangeRateIndexSchema,
  '9LjQgXLW5xCQTuGhVNkiuZsj7avYufhHx2dAav9z1WxS':
    CdmObservableAssetFroFloatingRateIndexCalculationDefaultsSchema,
  Ef7JSbybnYTf6DGe3sD3EoBBngjeauFZcUey5CPfgotg:
    CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema,
  uyCbFUtyiur98B8jKgwwDdT7g5AQzSgfK77hjbHKgXm:
    CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema,
  '8cQvKoNWKBBYhoiZMn3MsZL1PgvMDDmeeSsr4MQuDxAN':
    CdmObservableAssetFroFloatingRateIndexDefinitionSchema,
  '2NHDTBFFfyusp7iNLi7PU4AMTA1BCZ8H6rJRL8xJboP9':
    CdmObservableAssetFroFloatingRateIndexIdentificationSchema,
  '98SyBWL9ENVd5hF1HHdCKz8RG35SmSdrNx9Dh2tPj9AK':
    CdmObservableAssetFroFloatingRateIndexStyleEnumSchema,
  '8RaYn7dAapW3dFmuG6AwXr5mpv24qXUMLg5Y8yn3ULA4':
    CdmObservableAssetFxInformationSourceSchema,
  '3j6sxnQ7QgWXvufbYN59akG5xPy8Sz1wg8Lr1nR32iFw':
    CdmObservableAssetFxRateSchema,
  '59cfrRQLPJncH1tkA8gcjLTVBbBRu2ex63nqTvfmmwoz':
    CdmObservableAssetFxRateSourceFixingSchema,
  GVLFiYcKvhpQsRySPjAnN9GhoocdasLdpFcxrHBBs3SB:
    CdmObservableAssetFxSettlementRateSourceSchema,
  AxAyn6UgyoJj9YDT4soz7eYpmhL8U6kEzFxGMonZgxcg:
    CdmObservableAssetFxSpotRateSourceSchema,
  FtoRYZujAAg27pRyk4p13wRUXC9JWtWMkcjiAZULxMWP: CdmObservableAssetIndexSchema,
  '6MigHz3STyVUpn4VU9UoVTrxz2mfJ7oPf6w3suDvW8z4':
    CdmObservableAssetIndexBaseSchema,
  '3PW2wc587i1dSwdY8mw99sh8auYBiNqWChG6tCKiMGS6':
    CdmObservableAssetInflationIndexSchema,
  Byw4nUAhk4eWhAxnnEkCp1oMG5Acyg7nvG75MFXFjASY:
    CdmObservableAssetInformationProviderEnumSchema,
  '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y':
    CdmObservableAssetInformationSourceSchema,
  '8wSm9S7Vp4q2gTRjpiHXeveAoWJb4WwMcfGPdNhN7TJv':
    CdmObservableAssetInterestRateCurveSchema,
  ADajEoGA7ikQhVMsqRiRuiY11MeoVJc66Wkb2WYmzsr3:
    CdmObservableAssetInterestRateIndexSchema,
  '69SohrhYgsRTiHcPmh9GwadYoxt1kJgmJ3e2nrCajFHt':
    CdmObservableAssetInterpolationMethodEnumSchema,
  '9cFYfvN7xbbc43QhKiCviJrNrMQbUP3XZPyc3x2B7CFB':
    CdmObservableAssetMakeWholeAmountSchema,
  '9TCszX7p3useiqzNm9UPp1AMdorfkHLknXYXqEVsE2N8':
    CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema,
  '4G54JBxkdxEwLZwmqaWCK5bKJB6A4GG18uBgBUKxJ4am':
    CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema,
  EP1r4ouVVbfJhEazX6iBArCJYk3u6aP7hwxJSGLBFbet:
    CdmObservableAssetMetafieldsReferenceWithMetaMoneySchema,
  '29tRf6HKyJ5PZ7qSgJmiEnuDwSx7xXy8vHzP4X2PfJU8':
    CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema,
  FZijMkQPrtZQaEQjCE7pXzh3u7cK2CoCy2dG3PDmNQc6:
    CdmObservableAssetMetafieldsReferenceWithMetaPerformanceValuationDatesSchema,
  '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy':
    CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema,
  AyEBp4Mbar43fuYsMicvQsPWCtvzqv7kEt3G9UEdSbHx:
    CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema,
  '5ELPXXGetNc7L1KzToiwonniwtgkJ3BHxxLYZiFDy22x':
    CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema,
  '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy': CdmObservableAssetMoneySchema,
  '8Zxjn3QHqYieQ4XTe55zZnRoVGJUea245LGooM18oqK2':
    CdmObservableAssetMultipleCreditNotationsSchema,
  ARtKwcQKppAKVf5WDJvuwGatLemZ18RcJsXU23W4RfH8:
    CdmObservableAssetMultipleDebtTypesSchema,
  HyKWLzqSMdXydTHsC9zJwdiVi6KcdZVngY9WJ5PV3xMR:
    CdmObservableAssetMultipleValuationDatesSchema,
  xQiQzMuZW6Q8gjgsvtqDYP1yE3C8KQUXtUp3fFAr7HS:
    CdmObservableAssetObservableSchema,
  GXtabg3erarMspr34yVya2Ybpw1LUGLXNHdWCkovVNAA:
    CdmObservableAssetOtherIndexSchema,
  GEZ4BVRUpw6ZgUyioiUUFgX7KRu1BLBoubvwFuS6XdFd:
    CdmObservableAssetPartyDeterminationEnumSchema,
  BZobD5YfuAeLKVVVDLWAMyVf4sWsCqN3MMAc39mMQMHx:
    CdmObservableAssetPerformanceValuationDatesSchema,
  BnX8YWGNQEemBPGhMwg9Dn7EZKXy7TKV3Pdoa8bijM8K:
    CdmObservableAssetPremiumExpressionSchema,
  HsnQM55utMJ2MK1JFiAmmg7CVx7NSKY33Ecru99LtN2H:
    CdmObservableAssetPremiumTypeEnumSchema,
  GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm: CdmObservableAssetPriceSchema,
  EjBpyo5KGACQ7knjNw98Y71wwTCGfQn96DouM8q8m7Gu:
    CdmObservableAssetPriceCompositeSchema,
  DGw3j3EkTUgoJb9WQD39BfVPHsqnL4bXU5uXCMnmCe3v:
    CdmObservableAssetPriceExpressionEnumSchema,
  AYFWVGAm6RijsVmJ8UzknPTSr57LT6zv3HLbBwiqWeQn:
    CdmObservableAssetPriceOperandEnumSchema,
  '2C9DbWa8E4D3cXHSXuDyYmWwrs1ySFopMnyA3XWWesm8':
    CdmObservableAssetPriceQuantitySchema,
  F7QahhLQE8sqX4t6NBvj5SDbcCWwr9pBdZDMZaqg7mSx:
    CdmObservableAssetPriceScheduleSchema,
  '7B7UekmPAs7VxgX8jAooMTn1cRUmS94ja5eiFSvuGp8L':
    CdmObservableAssetPriceSourceDisruptionSchema,
  '57TNhfCPohyptzE8EPedTDH19ZH7MkzMEo4S8VWeQ9Ck':
    CdmObservableAssetPriceTypeEnumSchema,
  '8zos93F6Rp44xvm8FYMXKw5xnQKEUMyY6UNchYmnn968':
    CdmObservableAssetQuotationRateTypeEnumSchema,
  AH1BY9EazwZmuZ6LcxCKPZSzsejRaRpRinAqLmVsFTgc:
    CdmObservableAssetQuotationSideEnumSchema,
  VVDNkAFA8n1iP8XHiNgLYMtF7r3mfFkx4P4nqUhsDYH:
    CdmObservableAssetQuotationStyleEnumSchema,
  '38MJMyCWnyrfancwTmzba2YAVR4YfwGbKcnfueN32RCR':
    CdmObservableAssetQuoteBasisEnumSchema,
  Fh47tZBtYn2vAYUQFPhW9yfe2PQ2jNgj4jqnT8kVqWGm:
    CdmObservableAssetQuotedCurrencyPairSchema,
  AxRtbapEBZySZ4EiPgeQy1TunP6re28X7ipk2brY6NJV:
    CdmObservableAssetRateObservationSchema,
  '2sDB91wA63tF5EXtQR9UbQQnyGu7CqG5AHbYURVxLHNc':
    CdmObservableAssetReferenceSwapCurveSchema,
  '4fDBuDhuDX6EwGXzGFCqTDbxE4JukhE8mVQ8BFtq5d3j':
    CdmObservableAssetSettlementRateOptionSchema,
  AC1Ks1QsNocGMbEcoyG6AAtphUMjU2nH9ByiwJVAPxWW:
    CdmObservableAssetSettlementRateOptionEnumSchema,
  '14czdjerkJ6X1HwgQE2RFvCte476RbB2aWmpUby9D7bG':
    CdmObservableAssetSingleValuationDateSchema,
  TuUaQmwiwbNnpZ2No6iRHWhHTr63186fYNv8REBGMWB:
    CdmObservableAssetSwapCurveValuationSchema,
  '2VoGuVXkABhTyi7xKubFr6JzJfGRVE4L71H1o3KouEtk':
    CdmObservableAssetTransactedPriceSchema,
  UcvnGWBznJQMKxTqZfWEzoJ4bovdXYkn8PTxfrA9Kxt:
    CdmObservableAssetValuationDatesSchema,
  G6B4zpZqUNxW8aaqxnCjbpzHwcszJHv47qgoCSRLg9FS:
    CdmObservableAssetValuationMethodSchema,
  '9Hdb7PQKx6QSKmvMRcDsHuTCkar1FKjhxc3gFZY4hgWE':
    CdmObservableAssetValuationMethodEnumSchema,
  FSNs7wPUozqjz5B6qRf7FwdstVC9R3vaMucjkk4PqKXW:
    CdmObservableAssetValuationPostponementSchema,
  FCKyQt9cG2gZA2twmB2EjomRWASZunsNMVkfDRtdJCDd:
    CdmObservableAssetValuationSourceSchema,
  F2XKDuytcyrcyYVFazD7Tuqtk1J9p5rtwDxh9Y9PUUWH:
    CdmObservableCommonDeterminationMethodEnumSchema,
  '4h5N1XJhikomVgESoUQkDUs2Qfx1RK39JWGgd8HQXgEv':
    CdmObservableCommonTimeTypeEnumSchema,
  AWhnPfrvzFRQCvzfQY8CZB6Xp8Eknw8gcnAg53xtbBwj:
    CdmObservableEventCreditEventNoticeSchema,
  '3VWXt9VeCTwLSaTRa6KebXPdyz4Gy3Xwf33wBbvgbeqo':
    CdmObservableEventCreditEventsSchema,
  '4Gy7A4j9sYhPf8Eqd9dXLdUFBWPHMDXxiV4n5VNAsmQF':
    CdmObservableEventDeterminationMethodologySchema,
  HTuXbgSEpM5XerhmFWMb4d5MBP6ixLzjeJKEuNq6pZ2n:
    CdmObservableEventFailureToPaySchema,
  '658or3kYtUm56ELDk8VvoiAT7agLsP99UNrYUqXPMWyp':
    CdmObservableEventFeaturePaymentSchema,
  FjySLYZUdztPrBskVvWtnCvGs6KZVkZWrLsrrLpotMYG:
    CdmObservableEventFieldWithMetaMarketDisruptionEnumSchema,
  vFG54w9Xw7FthPkNNnfst9e9Nf2BmRqjAGcxUSz7WPS:
    CdmObservableEventFieldWithMetaRestructuringEnumSchema,
  BTysZP1WpL4z9tsQazV1uF7AmmG5ZiX4Q8ABMpMSnfCW:
    CdmObservableEventGracePeriodExtensionSchema,
  '12z8itumtMLpP3nE32bH5sneayWtT3viPrN58UPt7BkV':
    CdmObservableEventIndexEventConsequenceEnumSchema,
  Cm6CtKyZMW81X3HmtPtvXLE5EpvBpSEnyVK5Th2bmQ3v:
    CdmObservableEventMarketDisruptionEnumSchema,
  FWcQmx5gu2ihsKm9K2BYniLmbetQeMxPF6ZpzM3uVXXD:
    CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema,
  A2eu6mCquL2q8sKhpvBAfkp3b6uAG8GdE22hHTvvQEMi:
    CdmObservableEventMetafieldsReferenceWithMetaObservationSchema,
  C6Yp749VzC7SApKQGjPSUFxLD5E445bVciFGiaHHE4pi:
    CdmObservableEventObservationSchema,
  HsL4LyTBaWKTLfoBBFsckiquH2hkGP3QRC7x8z6S4s2L:
    CdmObservableEventObservationIdentifierSchema,
  EY9iPDd22LwArn4MV9fUHUqkd2gX1guSkAntckHs1xYa:
    CdmObservableEventPubliclyAvailableInformationSchema,
  CTdbPvJCySH7c1fo91jyuTmUVte9C47K3AKTScxXfHEe:
    CdmObservableEventRestructuringSchema,
  '2nbojqENR7xMarP4TbXNuLgBPVLDgA4Jf6RYtJTucwte':
    CdmObservableEventRestructuringEnumSchema,
  CMxZE5qhdNQfLUUyDEzXKqCWuy42NTHNxfgVPFBmduvr:
    CdmObservableEventShareExtraordinaryEventEnumSchema,
  '21pozsBPMtA8xJQ77VahQiEpCbG8nV3ryR8r5xgX4sQP':
    CdmObservableEventTriggerSchema,
  GT5JdpPhpfWRiqpWewnjoM2tbwvGnNZDGUV3MrHoQ3pC:
    CdmObservableEventTriggerEventSchema,
  '9VsQvLxQQRJfFp1j9v2evTD4tnmTZzxJFZGRrDLRXRNj':
    CdmObservableEventTriggerTimeTypeEnumSchema,
  Etd1jjtUSJfgtR9oe5rJxj387pjT2ZNMQG9kipLjW5hj:
    CdmObservableEventTriggerTypeEnumSchema,
  '2MBY3n1ccqVv3XyWrmGJ6dB87YtvzCaNGTvwyiDrVjdn':
    CdmProductAssetAdditionalFixedPaymentsSchema,
  '78abSDet2v5nbbeXAmoFZG2ZcMhk4674b2vrAKGT3yiu':
    CdmProductAssetAssetDeliveryInformationSchema,
  '6ZsZcTEaVYcHQtEkhsQLm4rfmMsNHjFRR3oPX9j9T5rP':
    CdmProductAssetAssetDeliveryPeriodsSchema,
  E8QF9EBMdnTPHUuRgEqvQUvGm75ReZB3zjKJB7BSjt7z:
    CdmProductAssetAssetDeliveryProfileSchema,
  BE8tk1V1aM9RX2EaQdADCudboiUVLdjeqNbgPXMoWXXt:
    CdmProductAssetAssetDeliveryProfileBlockSchema,
  '833fsMUyREDfoeWcVvcxsNdLqF3mjxj8sUSJtn7h5aDG':
    CdmProductAssetBankHolidayTreatmentEnumSchema,
  axuXmPNwYdajJqoyfRBqGLYdVR7pu272ceY2KqBq9nB:
    CdmProductAssetBasketReferenceInformationSchema,
  '5UTtrYJXRQ91C3zHV1ASggKdKMGxrvDbyUoqY7HwknPB':
    CdmProductAssetBondReferenceSchema,
  '5h378nRjo3jm7Ls8JJ42cmd4XHzLYLu8A6TzQsDDM4f3':
    CdmProductAssetBoundedCorrelationSchema,
  DCKZsuug7AQ1eNWGKNHVPELUTjey85wne3B6xqsewUYF:
    CdmProductAssetBoundedVarianceSchema,
  '4VSDgMR93vRjmusHhPRNXjdGuVnxrN3FBojT35y2b6cd':
    CdmProductAssetCalculationScheduleDeliveryPeriodsSchema,
  DTtWhJnXuoKubPMxQyji2Nw7Ci2mGd6RoJWN5EbzReoR:
    CdmProductAssetCashflowRepresentationSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#5':
    CdmProductAssetCommodityPayoutSchema,
  HzNNten2ctS1XjUDRet8Qr7Nq3sh6vfsJBS3d1gH1JVH:
    CdmProductAssetCompoundingMethodEnumSchema,
  EwvxCeweE6NzDi8idFivNwZ9joYB35RKBbzvwypsqnAR:
    CdmProductAssetCorrelationReturnTermsSchema,
  AgZcx5eJYcy6vzz9NejmvMBuMpzza4tjH2bEtMYNkMVD:
    CdmProductAssetCreditDefaultPayoutSchema,
  Hu5VnYpz7ZCRzsMjDtVxSVoN2RK42N3T3a1rvcvnMAyV:
    CdmProductAssetCreditSeniorityEnumSchema,
  '7aBrcowDER57iJ1dKZQ3YqngDZfz6eNHJExw8Egww997':
    CdmProductAssetDayDistributionEnumSchema,
  Cr2qn4kdXt3AhEMg3m3yXpBXDDPzHwdy72ZZKWK8a1y7:
    CdmProductAssetDiscountingMethodSchema,
  EbjHFpZTcuFSaUzQnoeLBnQ5parZksPwCnkTUkahrgmy:
    CdmProductAssetDiscountingTypeEnumSchema,
  EPZXT4tSSu6F1Bgi8FKpq43oaSVqFr8Um1HXaoK25VVE:
    CdmProductAssetDividendAmountTypeEnumSchema,
  HN4sqTAXi2pGFVHbV6MLLdW3RgQ9Qq4thhJ9rWVsexks:
    CdmProductAssetDividendCompositionEnumSchema,
  '6YjggFTd8yUypLgjeUwSiJGZvfraozN2PjZBK4Q8KLQ6':
    CdmProductAssetDividendCurrencySchema,
  '27h9XhtCRRX1w8W56vcSY2T14PTbGigcrhbRWGDy7fKe':
    CdmProductAssetDividendDateReferenceSchema,
  Bh6NCuJAY3pXVNvSM2B31NzdPp9zCisTdM2dbrauJJw8:
    CdmProductAssetDividendDateReferenceEnumSchema,
  '5A3hCLVC8huTr312Z9ddi2snvyWozZsHadHLetvYe31g':
    CdmProductAssetDividendEntitlementEnumSchema,
  '555tJWt9LFti4PXtFTEEG8bsobDUDp2ySsgK7sB5kZZ7':
    CdmProductAssetDividendPaymentDateSchema,
  CXNX5xUoDwJxfTwLJdwkuXkNThirm3BpXK2QCH6kBkeu:
    CdmProductAssetDividendPayoutRatioSchema,
  EQ1DnA2mvWsTZJUqo9NJBj9AF7uJYZXPRwQw2ZUqpqQC:
    CdmProductAssetDividendPeriodSchema,
  '4Dvzid1TBuLFxwiAp8Wd2pdhRLvMpCoGBe9D6fba8eVg':
    CdmProductAssetDividendPeriodEnumSchema,
  J8EZbmYAMd5iEdiJDjh3B8Pk6R4eAXrQdryNuThytk1B:
    CdmProductAssetDividendReturnTermsSchema,
  G2uPrFU4uNeXsrT1Qauu3GMgFXeHpGU8yyPtUKRD4kr3:
    CdmProductAssetEquityUnderlierProvisionsSchema,
  Ertdu3BkSJQ4wFYEPS4YyzEkSnGfu7XaooXCfRXXXENY:
    CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema,
  BPH2yXsmaVJzV83dHZy9t4ZxLRN8JyMueAXWyLF15CnU:
    CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema,
  '4buYFvhK8MygP1T8vKFuNofU4rApmaG5WxpnBQWE5LXs':
    CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema,
  AwBvNeQkdx5SBB1b5oih7GqzBqUwUFskHKoPF7zMgqxz:
    CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema,
  DWiJVyeaSktJL6mTLvKLC2nxdiKY3CWQfU91sHJ2wtuc:
    CdmProductAssetFixedAmountCalculationDetailsSchema,
  '9svusKr6LvCBhk7gV6JsbPAwwXWASiSTahN4JPrDC5rH':
    CdmProductAssetFixedRateSpecificationSchema,
  '5arWKUo6ZdrsnkGXoVp8CVH4YWcUpQsCZ1EdqkBn5py5':
    CdmProductAssetFloatingAmountEventsSchema,
  Gd3N5B2Q5Fb7AXEaXfe3iXtXmHuAUXDYpfeqAF9fULPd:
    CdmProductAssetFloatingAmountProvisionsSchema,
  '5oZ8oDvcos6sGR3oh3ta6MA4X2qAUnyWcWnAEFRFJg7x':
    CdmProductAssetFloatingRateSchema,
  JBVrcovreAULjudjM8h3ZNKFRpz44Df8UvgAKWXwK6sa:
    CdmProductAssetFloatingrateFloatingAmountCalculationDetailsSchema,
  '8wd3KgpKHHveFneuumsbLT96wJ6Zfa7Aq8rJ2JP7kcBL':
    CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema,
  J69Sz4Uv6ctiB4mjnSwqhxeCfdaxH8nDcKbss99wExLC:
    CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema,
  '6xhUj24tdK3fZ5cyajqu3YGHmhotZzzXE5P1CxK4E7uu':
    CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema,
  FQsK7NhvbG8qLJfMS4tZVLVuJeB4Le9vPFtixb7kDC47:
    CdmProductAssetFloatingrateFloatingRateSettingDetailsSchema,
  AEj3LejPJxMDLSPh9wzuLb2u9HnXwqiUBJv4HnuBMZoS:
    CdmProductAssetFloatingRateBaseSchema,
  '4oxb1sguUNq2AqF4ycCwRJPs6eJL47WfUqhjsxJXRZNa':
    CdmProductAssetFloatingRateDefinitionSchema,
  '7Qg4XRChRagWG1WXXQ6SxKQFUAWi38ZztLZRLJigyUr8':
    CdmProductAssetFloatingRateSpecificationSchema,
  EdjmRMLoCGVJpgxbL5wiR6MA6JpvcTiLAu3PTiGCn8ci:
    CdmProductAssetForeignExchangeSchema,
  '6ddJUitXi5N7MkKNmyabHzuZ6qhZC3kt5EZJoEPpmr2P':
    CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema,
  '8KR7WNN1kPD6WbWLzqQ3tozV5eP1w3ioLjp9aTZLW14L':
    CdmProductAssetFutureValueAmountSchema,
  '3DSVTtZYj7KKPwr2oTs7ERknxwH4pXMvk9G1H7LkPkyr':
    CdmProductAssetGeneralTermsSchema,
  '2Ma1dyndNGQoSoTdwyFuZ8bbJcqQ1FbMXQMSHeWyjoao':
    CdmProductAssetIndexAnnexSourceEnumSchema,
  FWV3Br4aKDWruqfn5vhLVt6xEv37srRU5k5YncDQvGnz:
    CdmProductAssetInflationRateSpecificationSchema,
  '6JEZ2eR6XbPr27we4enAnhEA3t33WcEUzQSnH1uFWQ5Q':
    CdmProductAssetInterestRatePayoutSchema,
  '5dGWGFZAUi1PKkhPU7YyqpjKufXV7BQNEntUPbgE8HZS':
    CdmProductAssetInterestShortFallSchema,
  GtGzeeGr59oZMBK4qT628HxyPEj3ux2JxtFjbU8GTbuN:
    CdmProductAssetInterestShortfallCapEnumSchema,
  '3Cw8RykF4cE5soC5fNPE2vRpWQcT4cwXUTQED5ux8xZ6':
    CdmProductAssetLoadTypeEnumSchema,
  '9MuxTNnqdBfc2jXWLVxrcXeAQkmmc3aoj2AuNQ46RBnh':
    CdmProductAssetMetafieldsReferenceWithMetaFixedRateSpecificationSchema,
  '2U7YP6Ym1jX4mFm5GexJ4F3psZB836JfxHmp6MF1dcAF':
    CdmProductAssetMetafieldsReferenceWithMetaInterestRatePayoutSchema,
  D5MVAPQZZQMZXFW2noGBFFgRgvJ2sLSL8SKwphof8rd4:
    CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema,
  BsWNiWBWBcPvxq7gbRKXCVo4xpJ1fYXPvWNafB7Bvxzt:
    CdmProductAssetNegativeInterestRateTreatmentEnumSchema,
  '7X5DcG9JMYrcW7XQWvsmFc2zX3uk1rsikycU2gBnKSyV':
    CdmProductAssetNonCashDividendTreatmentEnumSchema,
  JAFJ1wyCKHfmK69wvo8tXGepwZYTJ4o37xsdPgsDstzv:
    CdmProductAssetPriceReturnTermsSchema,
  '6p917qiqhcPsLDv4c6fcokZDb38SkP1i69kThgdzHgBY':
    CdmProductAssetProtectionTermsSchema,
  '6sGfKpzEcNGWsWw9v54bkUTJDbBHqbhEeJFCsf6tUhXf':
    CdmProductAssetRateSpecificationSchema,
  '6vYpwpDGdaR6pbtzmJTTxmLwiWsbwBhhaiecmRbLMtix':
    CdmProductAssetRateTreatmentEnumSchema,
  '6bttAkwgoE4wCcbzrxpxn9QC6RyNAX7D58kev7GDsGiS':
    CdmProductAssetRealisedVarianceMethodEnumSchema,
  '3eDfhc11LMfKiQsRKqD5mkN3csaNKJ4Yay8qPTE3sM5f':
    CdmProductAssetReferenceInformationSchema,
  Bv5sBf6gMTS32hBro1iBzhNmGnSuqD84Wfc4EqRV4Whg:
    CdmProductAssetReferenceObligationSchema,
  '6dgH4biBE9pfYSSx3pD7kWuYHhmxVmVGoHckDDNdqz85':
    CdmProductAssetReferencePairSchema,
  rgdUZuvv5BLqYZSUay5yfjqPvRRqkZ9bhihtJLpcBKN:
    CdmProductAssetReferencePoolSchema,
  AWwDERDMrCASiqr7n2YEUi5tSny4VTcu6gDZ7vYA6Mb:
    CdmProductAssetReferencePoolItemSchema,
  '3cc9F6sZrvGSPkpHcHkSujKHWjLXZrjjdEdMNX1ityZd':
    CdmProductAssetReturnTermsBaseSchema,
  EvqKp8C4TsU58D4ZoFC8ba55Fdq8Qeka9NmEAAuioCk3:
    CdmProductAssetReturnTypeEnumSchema,
  AdBXeocSsEm9rv2JA8A8svrtozRHrQt3xCeTWXxANydN:
    CdmProductAssetRollSourceCalendarEnumSchema,
  '4A1qUaufcqcuzgYMrhKzobEdbwF774fdj4o1nwgmxUdJ':
    CdmProductAssetSettledEntityMatrixSchema,
  BMRn1GaLgfQuHBa1zsfT1sd7aCFhqKxoBzmieXMWqy17:
    CdmProductAssetSettledEntityMatrixSourceEnumSchema,
  '5PZmtNnUvmoYu5wdHEd1a3Ng2sZcZ76qmfmNG6hoFS61':
    CdmProductAssetSpreadCalculationMethodEnumSchema,
  BbmQzuzA7aBEkeWMx9NniHvZEqR3bPsBJzX8iyyokN7A:
    CdmProductAssetSpreadScheduleSchema,
  EakZSquKh6nNrGeVqD4Jn7fEVe48f55oM2KdN21fjZhY:
    CdmProductAssetSpreadScheduleTypeEnumSchema,
  '822rbnqRheYsGdSxwqfBNQRrUQGbug5bDb8Kdoz9UbSH':
    CdmProductAssetStubFloatingRateSchema,
  '9f7SedHY7MLNrDKoAPQVcQd1y4QsJTXjSzv9xZELhYij':
    CdmProductAssetStubValueSchema,
  AhnjPV8YNPhbAjozktmjeX2wDwUvX9j1SLMv3rUYCvk3: CdmProductAssetTrancheSchema,
  '3RVpuPyLZTsRz9wSfRCjDrY84adxxkZBQaYM8p28MYpK':
    CdmProductAssetValuationTermsSchema,
  '2mLzkHwpaH6DYE1kmEHmQzEUUPMt4HSJJx2cMn6WEJJL':
    CdmProductAssetVarianceCapFloorSchema,
  '7mdyTJMV5CfZFGwVGuYsu7jWpiqsAjBJWPPuvhpsR7Lu':
    CdmProductAssetVarianceReturnTermsSchema,
  GxggG4PmBLZC3tQQEfAUNmomUmcbfT2ZjjQZzWL55dng:
    CdmProductAssetVolatilityCapFloorSchema,
  '3BXRxsxyT6CgqYyNVM6wZNBwCaCAARu7VCvmQoCkn18s':
    CdmProductAssetVolatilityReturnTermsSchema,
  HWoMhvUF5jLNHYsFt98RcicKv9j3hQxYEeWQkzZHHMBU:
    CdmProductCollateralAgencyRatingCriteriaSchema,
  'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#2':
    CdmProductCollateralAllCriteriaSchema,
  DpVYkkJKuVne3rcRtkfcsA1c5rBQibEFY4ujWCibD9jS:
    CdmProductCollateralAlternativeToInterestAmountEnumSchema,
  'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#0':
    CdmProductCollateralAnyCriteriaSchema,
  '4wRJXUzN8uTkKFeHycmg5s4LPtKSpfJSj9cRXHx5JAsi':
    CdmProductCollateralAssetAgencyRatingSchema,
  FCuNiKfbXacwA5Cb4PtQoxUqheV4siYC6kq5GkcmGBvM:
    CdmProductCollateralAssetCountryOfOriginSchema,
  DvHC67ebizujZAhviEeMQ82ZhicijkGL6dTdyk24smo3:
    CdmProductCollateralAssetMaturitySchema,
  '6fscFVW5aHmtMRKjEQ93zMSWd6uq8CvM8i8Zkvtjbm5d':
    CdmProductCollateralAverageTradingVolumeSchema,
  '9ievDTbZij3cJJ9jg1P1QCr6ezKnnV7LPCaYa9ghiPQK':
    CdmProductCollateralAverageTradingVolumeMethodologyEnumSchema,
  '3M9i21vmhfQSWy2BnUDTVM3gUywbEnZ6SaPXvrvFAYTN':
    CdmProductCollateralCheckEligibilityResultSchema,
  '6jhHzxNcd11YEG9a9f1yBWhmm5qpzmbZ6E7JEqHpPj7r':
    CdmProductCollateralCollateralSchema,
  '9je4gdfYWh5s9PxZCf36xymmiBGd59PHPrBapq7pnGVf':
    CdmProductCollateralCollateralAgreementFloatingRateSchema,
  'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#1':
    CdmProductCollateralCollateralCriteriaSchema,
  EQwUBWQNzAfwaD546noV7pi1eo589s6uaDsRWdx2YCMX:
    CdmProductCollateralCollateralCriteriaBaseSchema,
  ATaY9YDiFkKfTkbxTfZ7LyFzaz3P294UgpPFzLNMMNhE:
    CdmProductCollateralCollateralInterestCalculationParametersSchema,
  sKqpZrkqt2VYmFSkbB7RRDetUKe7PJhYfsksQL6utY4:
    CdmProductCollateralCollateralInterestHandlingEnumSchema,
  EcvzpLymGTG2HkooovYn4sPFjmSFWGF1uM1CeM6FfNgz:
    CdmProductCollateralCollateralInterestHandlingParametersSchema,
  AYFPdhUATGeD5Kaw7pwDQbqnwnGZ2DyM7rk1rVn4M1uM:
    CdmProductCollateralCollateralInterestNotificationSchema,
  F248AjhdVnADUz9CQXosVKujLgoTFeRXayYnkVuaof5T:
    CdmProductCollateralCollateralInterestParametersSchema,
  '9z1L9Ava1wYq6jxK5Q25w3DTwEhKhZHbY9XE9NZCutvJ':
    CdmProductCollateralCollateralMarginTypeEnumSchema,
  EE9ddWepUCVpA88PcNq8buPwyuFbJawoqrJwAAwpCjcx:
    CdmProductCollateralCollateralProvisionsSchema,
  '3J8QUqU5781wEZ91F9Y7a1CUz2EihFL2b3SWBCB1FBth':
    CdmProductCollateralCollateralTreatmentSchema,
  HNcaEBRQkyoWFVGH1rA32NFXn4vu5wVaftRYmaKr4FMa:
    CdmProductCollateralCollateralTypeEnumSchema,
  '6jPEeuHYwc7SYkDRExZS37FF7KdHg9uaHEasdRpFFvGN':
    CdmProductCollateralCollateralValuationTreatmentSchema,
  ADNePctyfUS9D2wfp8ho1wmncZkAMrobNLpZ1gcNK8Wt:
    CdmProductCollateralConcentrationLimitSchema,
  '7YP39rZ8BWEkzLnifnowdqDWusgdTtoaAQADyndrMtvU':
    CdmProductCollateralConcentrationLimitCriteriaSchema,
  '97mmS2fJNEvvd9MB3p3a9VwsSgF8QN5MXMCg3hQhQ9EG':
    CdmProductCollateralConcentrationLimitTypeEnumSchema,
  '9TmPYroGmuj6v7x9aMMV97Hqg4a4xhW19VqhcavbmgRL':
    CdmProductCollateralContactElectionSchema,
  BSxC7wcq6PvdbEFuVkkBrzKz4bFBiG8He3PZk9SqFFeQ:
    CdmProductCollateralCounterpartyOwnIssuePermittedSchema,
  '8AGPnyrJ2WJVLWcdLebte5zu9TkzmSqbARfQEuGmSmDD':
    CdmProductCollateralCreditSupportAgreementTypeEnumSchema,
  HKVLiaT4w9torwoHkj96Mx7aKTg2Hav87Wintsd8TvXU:
    CdmProductCollateralDeliveryAmountSchema,
  ASFFM9ufg5x7Gsa379ue1XqS24UGxKLYAdFAPeQif8Zh:
    CdmProductCollateralDeliveryAmountElectionEnumSchema,
  '3i98p29gyoZ1j352vAmuPHEtinsZgRDfRmRT4oCRAjh7':
    CdmProductCollateralDistributionAndInterestPaymentSchema,
  GSqFLxJkjPptdZcwACBFg4PMYhDwpuNcRBdKtNHgs4Wn:
    CdmProductCollateralDomesticCurrencyIssuedSchema,
  EqeLySr1GukguPVVt5XqDUVQFVenWZYySiuo6qQbQ3pT:
    CdmProductCollateralEligibilityQuerySchema,
  '3GcdhwSwCmcXjxmxraErSqcv6hktXM5krtm5PeusABq6':
    CdmProductCollateralEligibleCollateralCriteriaSchema,
  '95Kqzip4NxUfKxtGutCfDtBUDLMZhWmnm6jhQZJtfzXj':
    CdmProductCollateralEligibleCollateralSpecificationSchema,
  BMz1AMPiyGb3jJWUQ9jgpmXc5r6rkWQqcXyHJjegvEEu:
    CdmProductCollateralEligibleCollateralSpecificationInstructionSchema,
  '73DfnZhYH3dTmicn8zMHsthj9qQ6K9XEB5KLdtiJSK7u':
    CdmProductCollateralFieldWithMetaCreditSupportAgreementTypeEnumSchema,
  Bx6RbJH85Gh7BbnBoSUaTvzqwCNheMpjmwzdouE6UJz:
    CdmProductCollateralIndependentAmountSchema,
  '7kes2FB65JuXjGdz6Lp6zhm95qL5DTCjDxCKwSm8USPV':
    CdmProductCollateralInterestAmountApplicationSchema,
  BQF5ff4etcuh9njP6VFEZiHKExrKnVkMbMrfqE7wkWHq:
    CdmProductCollateralIssuerAgencyRatingSchema,
  '9qB83hxGqypCsEF6MKyZFWjg9t2VMnqgDMywCd2LCh6z':
    CdmProductCollateralIssuerCountryOfOriginSchema,
  '9bkUNZgKaw1Cro32d1MxEwS5ZxRXwMi6iFvMNGxgekBC':
    CdmProductCollateralIssuerNameSchema,
  BzgPMJPnH7Cq2NK4PkNTKXVrpY3u3BUxB9jjvKLAxpq8:
    CdmProductCollateralListingExchangeSchema,
  '2sRSP8xV5oTb6nySDWzH4ZcHxhHkKtMgqw73G2Y7kwC8':
    CdmProductCollateralListingSectorSchema,
  '5okT4PBEHijywnb7jBieEoVCyGTRkhzDmbMEDnxtpD92':
    CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema,
  'HGtVL5zUGD9Z8S6VLuBSEyhaVDP2h8eWzt5te5sS8iTo#3':
    CdmProductCollateralNegativeCriteriaSchema,
  HN2xCyqgWdVYt6ta4R5o6we7NmT9i49Jn2V5R4V9BoCD:
    CdmProductCollateralRatingPriorityResolutionEnumSchema,
  HpBh6DxVn5k45kpY9oDbqGhBWE3eEphzgwottdc68x3B:
    CdmProductCollateralReturnAmountSchema,
  '8tRrLY27bAdfQuvV7dnmS5iQ1QW6VFmjUB7KsaAjNpQv':
    CdmProductCollateralSovereignAgencyRatingSchema,
  '2Gr3Akes7mjaFvgw48PJ56oasjq7iSukKYHpJJZcCwCS':
    CdmProductCollateralSpecificAssetSchema,
  G6wTgdqazh3P4ppaphmfLKqmekudYnsS5TDSKnzhiCYi:
    CdmProductCollateralSubstitutionProvisionsSchema,
  Fu36EUGcA7u8BqhZftYyUEUqgrd4mi4LXffiZx7DXTvo:
    CdmProductCommonNotionalAdjustmentEnumSchema,
  J4wqPRqUgot11KtycNoGqM9u43KZrNSvWHAbzBSR4WNS:
    CdmProductCommonScheduleAmountScheduleSchema,
  GVFbbaLLLxVnRS8pEFt4Pwr3VMsXjMm2nM6PdGfDenD3:
    CdmProductCommonScheduleAveragingObservationListSchema,
  GenPv6W1wQRbNKoBmS1tAQnF6TyrsyYYmxJJ2sufNNJ9:
    CdmProductCommonScheduleAveragingPeriodSchema,
  BXpC64gmuFbvh5L5cvC2KjCgBSBYvePrnA5wcL1K4rFT:
    CdmProductCommonScheduleCalculationPeriodSchema,
  HjEmRrvzUJGJ8GfKAGdbcnZbK68UnqsEfHnP7fQL2aXu:
    CdmProductCommonScheduleCalculationPeriodBaseSchema,
  A8TvjwnZQGaerbL4hKYYEZJYcaVL7fv6uvShyjZLGhoW:
    CdmProductCommonScheduleCalculationPeriodDataSchema,
  '7dK86pbyNfhuuigQR5bQueaqH68Sqze66Qwad2m64rxg':
    CdmProductCommonScheduleCalculationPeriodDatesSchema,
  '8a1MTndCYSZYYLgqPZewqnR4VyMuKN2TSytKifycuYRQ':
    CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema,
  Cjg8S7jVCYAEjpd8qzXY28Qmn2YJWnHx1emVGo6DF4ro:
    CdmProductCommonScheduleDateRelativeToPaymentDatesSchema,
  Amvx9G3h2wHURbQkfGuuEwHYch5CWjYiD1ooToEb9FAn:
    CdmProductCommonScheduleDateRelativeToValuationDatesSchema,
  FLLBtJA3uBehX7mffS1DNAvuAgzQmL3tLBCtQL9xQRBY:
    CdmProductCommonScheduleFinalCalculationPeriodDateAdjustmentSchema,
  J1E3aP2gHFG6xXmDZbkh3v4aXuN62czNKzQgw9T41sdB:
    CdmProductCommonScheduleFxLinkedNotionalAmountSchema,
  BRCQiBi9STYfKiP9KdPDPjoyi46W34fzykNMzGBP1YFT:
    CdmProductCommonScheduleFxLinkedNotionalScheduleSchema,
  y6unn9zuC4eqixnmkEKxXhareLao3FvJgXeACGbLHaA:
    CdmProductCommonScheduleInitialFixingDateSchema,
  H52wAsRZktjp4tpCZgu6wnQMFaksvVT2T9gxSHdZjSbg:
    CdmProductCommonScheduleLagSchema,
  '5kML8V9qeDP2N3N3L173vbHKEbT1tjwLQ89bXgwhB2jf':
    CdmProductCommonScheduleMetafieldsReferenceWithMetaCalculationPeriodDatesSchema,
  '3dRUSDjJdgNWK1v7xMqD4sANMTcNwBMxpGLaLVPaZk4D':
    CdmProductCommonScheduleMetafieldsReferenceWithMetaPaymentDatesSchema,
  JDFk4bjDaXiaZiEkLkoPoa66bJWLrnTJB59D2KofE1yE:
    CdmProductCommonScheduleObservationDateSchema,
  '93jNg58r6VkSD6oX2SzTDJrVHFDWVgDA28zPR4rQJS4F':
    CdmProductCommonScheduleObservationDatesSchema,
  '4mtcJBY3NiPAmBruiozFAPqC5nhTXezbGrPZnsfcxeAR':
    CdmProductCommonScheduleObservationScheduleSchema,
  '9pJEidhmAUQebdR3uTioauH2mNHR8RLS9r7xaB9vxpRd':
    CdmProductCommonScheduleObservationTermsSchema,
  EYbEZSe5HQWGHhD1r1THTXaZHW6xpyBn5zsupY3usXJ4:
    CdmProductCommonScheduleParametricDatesSchema,
  AGSb42ioNbHLTCP12AbmMbhsiH4CTHve73GmjTCTJtcR:
    CdmProductCommonSchedulePaymentCalculationPeriodSchema,
  '23fb9HBYcZQ8enTm83iVQjixyTrHqNc5G1ANtAbB1ixz':
    CdmProductCommonSchedulePaymentDatesSchema,
  '21vD19q8M9BVLcNChK9mx3GcJ7VRagziHdvCXtj5AFCk':
    CdmProductCommonSchedulePaymentDateScheduleSchema,
  '6w9Y1wNfyQCQMPw3tuPpDbjFcKki2M2zaFeTRXCgcGfF':
    CdmProductCommonSchedulePayRelativeToEnumSchema,
  '7EEvMt9emT8iceX5fpLkggKJmrok2qeWHbESwueZHstB':
    CdmProductCommonScheduleRateScheduleSchema,
  '2smAatQQw7CLfmf1HYvJs7niaBG5fYmRvaYQFZzbxFyF':
    CdmProductCommonScheduleResetDatesSchema,
  GKgPYhw21hXmUrUfE9bywu62WWdBcnVYxyDjjx8DND8f:
    CdmProductCommonScheduleResetFrequencySchema,
  BeEMYYKgbMhxWfYP2PwjXqrWw9s2qJ5j7iptwHErctFb:
    CdmProductCommonScheduleResetRelativeToEnumSchema,
  '5TF8P1YZtVnW4MLUB8XNfNU9ypzqPgDVZtNQasAEi6BJ':
    CdmProductCommonScheduleStubCalculationPeriodAmountSchema,
  GDsReUUBoQqUk4nzm4MUFgBzwihcp99Xt2hYSukxTdPp:
    CdmProductCommonScheduleStubPeriodSchema,
  HvTJUwtwoF7FUYtZGRhW3CHYRsrhurJcEfFY6YuH4Kaq:
    CdmProductCommonScheduleStubPeriodTypeEnumSchema,
  '4X8F2gmBL4p3H4RQFALaRrLn3E4tnCr4a7kQgN7NmnWV':
    CdmProductCommonScheduleWeeklyRollConventionEnumSchema,
  '6BCHpCe7FxvsdKprgbdq44ovxXH55YFYtLRFtqQ4KyeE':
    CdmProductCommonScheduleWeightedAveragingObservationSchema,
  DDpzEiQvyGjc3WViRctaB8EJPZHGTbbpLManidhjUsxW:
    CdmProductCommonSettlementAssetFlowBaseSchema,
  '3vRMCGh2M3Ggi4kWVbmZ85TLuo1A54NFwDCbhvAZt9XA':
    CdmProductCommonSettlementCashflowSchema,
  GArm2fDK1vopaSHjgRguRRS1k6GiHBGUifjuhdbJEfg:
    CdmProductCommonSettlementCashflowTypeSchema,
  BFK7Kwvvqbbpshj96TundhGbsBuspSgCDzv732RGP6aJ:
    CdmProductCommonSettlementCashSettlementMethodEnumSchema,
  Fffk6F9WofKSKmkg6i3ft1dNq2tPApbqbMZjguK1xFX8:
    CdmProductCommonSettlementCashSettlementTermsSchema,
  '14FV7tMj4HrFn5mGMxp1ip6AhhhvTsLR6FH1eXyL6Ts9':
    CdmProductCommonSettlementCommodityPriceReturnTermsSchema,
  BDhRUc68Brq8ongRzTRuhXJ5ZwMKhFYca1YMMPB1A4AT:
    CdmProductCommonSettlementComputedAmountSchema,
  siew7R9pM49xxdDdrA2tnaBp8jSYtkNG6esorJcxELg:
    CdmProductCommonSettlementDeliverableObligationsSchema,
  '6LWhigVjjAUUSFhmA6HbeNXAPPtSPD97nTeiyR7yRQCn':
    CdmProductCommonSettlementDeliveryMethodEnumSchema,
  '3WvaxijQwR1ELLMK9QtedoyNZ1wy9YZrGnGe2wvdpVWk':
    CdmProductCommonSettlementFixedPriceSchema,
  GsdSDZrs9XevoM9WdLLncZ1DTMsjbcSjcPyPt8z2XBWj:
    CdmProductCommonSettlementFxFixingDateSchema,
  G14P9maXfUePjqhHWmNFfQEWPG5NJ18iL3rpGBMoLyDZ:
    CdmProductCommonSettlementLoanParticipationSchema,
  '4LxF2iZVCWETVa5Sk6jK2WAVLX1SD7WaPtmgesb4xuBC':
    CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema,
  '4zZq26rs1RRNTjwdwvbyZZAbRe3y2EykE2PtTne7suWB':
    CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema,
  Dyqr7TA1HN5EcvzLV8Yzj2SDcBRhKaKqVGCBXkTfUDZZ:
    CdmProductCommonSettlementMetafieldsReferenceWithMetaResolvablePriceQuantitySchema,
  DekzGsQAbNvqbqgomWQkf83asiULvd7vJKgEzRsTBfFf:
    CdmProductCommonSettlementPaymentDetailSchema,
  '9dkTzBV6xqQ9LmULZCPBAZi5Afj3tZytwUtqXc1iccwt':
    CdmProductCommonSettlementPaymentDiscountingSchema,
  '3YeAtbFamK5F5iKzyL3iNd6gFidd9BmNNPL6HqrJVqgu':
    CdmProductCommonSettlementPaymentRuleSchema,
  ARbkpkeADfYoKeiyty5x9mD3gRHk9537e2q8tBS1SrqM:
    CdmProductCommonSettlementPayoutBaseSchema,
  CfL1c8JN1WqjG49j7D1R5Sb4acqi6yrgcRdEo3jHGKMR:
    CdmProductCommonSettlementPCDeliverableObligationCharacSchema,
  GqKSKHCa6D8xbrMJnRibPtb1dXGasKD1awv2Ubini8GT:
    CdmProductCommonSettlementPercentageRuleSchema,
  CBd7ZWKAnVWWTwFSHphamHTzqi86dtsgpe4aNTpHVHMe:
    CdmProductCommonSettlementPhysicalSettlementPeriodSchema,
  '4HwR25LkwrYYmgCxQfJaEUfML14hfQADHRnF6nmUfUtR':
    CdmProductCommonSettlementPhysicalSettlementTermsSchema,
  '2MAF9GVz5RtZKjkk4so3hxRXrU2WZSs92BQ1bUeT9CDa':
    CdmProductCommonSettlementPricingDatesSchema,
  '9XUMDnSJjmK5Kqp5BL268vZoXGmEQAMCFTKbJVVwuPbB':
    CdmProductCommonSettlementPrincipalPaymentSchema,
  '8VsQE5PSzyWWApw5Ykfum97vLPNoa36BemLUMHimzMb5':
    CdmProductCommonSettlementPrincipalPaymentsSchema,
  Esmmz6HUDCJAgn44LSSCvC1CCKuZW9U22nKNF4fXwkjv:
    CdmProductCommonSettlementPrincipalPaymentScheduleSchema,
  DJFB2Tj6nmeKEJudCnrcJLRjTfjdUDQDmosfijnNhHrg:
    CdmProductCommonSettlementQuantityMultiplierSchema,
  '7nSxNdghnPkGBbyqzqUELC5UcBMNfLdrCr4oXbav2d3J':
    CdmProductCommonSettlementResolvablePriceQuantitySchema,
  '8egmsgTVVkTcqNTDUm9EaLcKVzmRTw5uiK4S3zrc88BH':
    CdmProductCommonSettlementRollFeatureSchema,
  '9k43VLjjoSJbXKM7aCSjBTinwWFf8sRDogVJbsM2JjjR':
    CdmProductCommonSettlementScheduledTransferEnumSchema,
  FRNg4ydc3F8rvwrqYRg8u7vigXiWiCjXAY9CFHc61QKA:
    CdmProductCommonSettlementSettlementBaseSchema,
  '645oAr2atS3TekcTBduwAeUSH7aauAokbEg66ZLpz4YE':
    CdmProductCommonSettlementSettlementCentreEnumSchema,
  '7Q5F1XxXtAWfQfrSL8T366Bz2JLxc3qFWWnR7Xazhgvx':
    CdmProductCommonSettlementSettlementDateSchema,
  wNGmmHNkPh47VcmdJFAFyWS5mS1W5PvRW9UW2h3YWFW:
    CdmProductCommonSettlementSettlementProvisionSchema,
  '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m':
    CdmProductCommonSettlementSettlementTermsSchema,
  '796x89gqZi8yLKhDwKArGYcCuCbixQw7PQhuDpancqMn':
    CdmProductCommonSettlementSettlementTypeEnumSchema,
  '3fNfpR7yecM7ZSSL3mC6i4VWFehcFtvJ1FFQd1SsATpi':
    CdmProductCommonSettlementShapingProvisionSchema,
  '3gvWJxrxUUD4bdYMUZb5GWjJwHqshsA9ncx7VngcWSQG':
    CdmProductCommonSettlementStandardSettlementStyleEnumSchema,
  BSQDJMfPWXBaqWYWPJCUYYLzftmLKsUbi3EyLhuh7Mr1:
    CdmProductCommonSettlementTransferSettlementEnumSchema,
  Ec6MmK2TGnYoMytTLHEDcnQGwA2y427JhgfBex5P61Ax:
    CdmProductCommonSettlementValuationDateSchema,
  '5NmgrQaeHqWvPdpEvNrGu7kkR4UF38A8c7p9tVrF1G41': CdmProductTemplateAsianSchema,
  '4xmZ7ro4SjPB1Qqi1VDv8EsMmJHKedpeQsvvYum9u8Sn':
    CdmProductTemplateAssetLegSchema,
  CaDUz9AY1EXhFRYQN73HdC98mAe18bh4BxACMShr4JNB:
    CdmProductTemplateAssetPayoutSchema,
  '8X2WFbGTFXVbc8c7DytjqFNpyyEVGtXoNV8b14t6tRsk':
    CdmProductTemplateAssetPayoutTradeTypeEnumSchema,
  '6fnDZS1zqAsqg6ScqF5Y7LEwCWQtuBpB621ZXfC9ocuy':
    CdmProductTemplateAutomaticExerciseSchema,
  G81eqYsDuMYSpYk1hESW7JLhMtsEbDs8dVTux7zmXLUZ:
    CdmProductTemplateAveragingCalculationSchema,
  Bp5wh9hxR98RaErYfLT3GHtCA5Z4HjFmNg4EABQ26PAc:
    CdmProductTemplateAveragingInOutEnumSchema,
  HxYQ9z6xDVRw63wB5M3kiknebJ9fvTEFsXwtbJPtXRRD:
    CdmProductTemplateAveragingStrikeFeatureSchema,
  BY44nAmZ3yv6hAhiK1EG57TXEZNquFC8QoiMLUBELm2h: CdmProductTemplateBarrierSchema,
  GbAmo8bxznHkBwFWFP6JMXCQEsWMyu9iKFV2KtBqH1rP:
    CdmProductTemplateCalculationScheduleSchema,
  Be5gaN5HPKz2EcJiToRx6MH2goHMeGvXvwQWamg73gYh:
    CdmProductTemplateCalendarSpreadSchema,
  HvCMubnrJNvp3fupXZTsjTSXTE6Hx1m47cYMbRkQVWRQ:
    CdmProductTemplateCallingPartyEnumSchema,
  sVFMtj5ZT137eKRyfVL1QifzgJDfQ2Jcm4PkY5CVWd5:
    CdmProductTemplateCancelableProvisionSchema,
  CDsiMFyUmtAL1XNKLh9LcCjvCTRpiHNkgWZs3PvwAQYZ:
    CdmProductTemplateCancelableProvisionAdjustedDatesSchema,
  GqYrmY5dMSWXRFKtVLctnrBGJy893E8Gbj3pe5kFN7w:
    CdmProductTemplateCancellationEventSchema,
  DCnYs1WEp3CCC7chsbsbVHV4Z3Lc4szZSdG7Cp5A3DfU:
    CdmProductTemplateCompositeSchema,
  '6eYoofdAibUdi9DT8tvNo7PNJF1DxZcM4UrQwinBs3mk':
    CdmProductTemplateConstituentWeightSchema,
  J4xjdbvJ317WkqdXSfzxaATEcgGQkHQ7btViXDULfhK5:
    CdmProductTemplateDividendTermsSchema,
  '3wSwzEEsW9wqLsvHavDA1EwFMzMefG38hhcM1BgdrLr9':
    CdmProductTemplateEarlyTerminationEventSchema,
  '9K4QJAeRZGFPrjmc6aqWztkSzi2pqrKf43HC1nEtwp46':
    CdmProductTemplateEarlyTerminationProvisionSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#6':
    CdmProductTemplateEconomicTermsSchema,
  CMm4iPYPHqRhURXoiwZTTM4mvuLvUGKoBVRb6e2NhZEa:
    CdmProductTemplateEvergreenProvisionSchema,
  '287wM7CqpP1RTW7bu4j4pUa7QdEuXGE6E186mu2bhovh':
    CdmProductTemplateExerciseFeeSchema,
  '5tK1F6AqKSKAHYjvgz5cGCNx6EQGZTimozK4y9mc1wWx':
    CdmProductTemplateExerciseFeeScheduleSchema,
  JC1AzddnU2E4ioTzwsgW9ohgnrfpQQusp6hRq412YjUZ:
    CdmProductTemplateExerciseNoticeSchema,
  B1vhPUsx48HVhqzgCrbzrCdTrzUxEiaHYjyp5gsErLd9:
    CdmProductTemplateExerciseNoticeGiverEnumSchema,
  HUVjH3KGpFwoVaPyrgN35iMi95ckgPM1rjoMfUvcfmNe:
    CdmProductTemplateExercisePeriodSchema,
  G7wUufVEcg9HCHxDMWdxfs1AaqKxx29vqAa8aBEKkQ8Q:
    CdmProductTemplateExerciseProcedureSchema,
  J1G2hQLDGZ1gu2re4Z6NCNRA3Ze9S9LM51pbnxyzozLq:
    CdmProductTemplateExerciseTermsSchema,
  '2LeVjwPpBKrVtg3zHwoBYJoNvx1Hset4WEYcxiPcPMxA':
    CdmProductTemplateExpirationTimeTypeEnumSchema,
  '8g6Aj993L9mK5RLmqSBfVURYxXXrLK1LeswPCY4wBeSe':
    CdmProductTemplateExtendibleProvisionSchema,
  DQQrQuJKE7UsmUgxYPbLeQ8cKAW52kt3TeHJBj752tYF:
    CdmProductTemplateExtendibleProvisionAdjustedDatesSchema,
  '7kPFEKFtejzTGGDA1frQXvH2u9EU6WsGUUqNESpNkKVH':
    CdmProductTemplateExtensionEventSchema,
  HGZMKY1yoBjBujWhaTqwBYYsw3GkD4w8Wc9G6D6nrDaa:
    CdmProductTemplateFixedPricePayoutSchema,
  HPRsaReKQuhsZQyFweRGJshuiWo9hd1r6CsmkM6iPQnN:
    CdmProductTemplateFxFeatureSchema,
  '6BETyPG5V4U1TUp5rVWo3V4V47SDx9g18ekbAAYhpp4U': CdmProductTemplateKnockSchema,
  C6BHM5uzagsmiKxWqshqYj8ZhE13jTZuXKcAaJG5Lbsh:
    CdmProductTemplateMandatoryEarlyTerminationSchema,
  ENSK1BSQZtUz73JC51Ww2axF9BMWqhkBEE9AzutJiqoH:
    CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema,
  '2PgTgt4qH9bmia6Zfzyn13BPBa6T1NX5cpy1x7F86H9N':
    CdmProductTemplateManualExerciseSchema,
  FaWYhMbHHgHX1o1pCiT3R4zJ8b5g9ywJSEChRJD9m3hL:
    CdmProductTemplateMarginTypeEnumSchema,
  E8kNFVq5rjJaDyLo4StMphfzm1hmN8457CXWNFQVj2iH:
    CdmProductTemplateMetafieldsReferenceWithMetaOptionPayoutSchema,
  B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P:
    CdmProductTemplateMetafieldsReferenceWithMetaPayoutSchema,
  '8eLP8HxgpSvj1vyxDJXMhDpMcQU696aKo5Uvz1mt9Q1S':
    CdmProductTemplateMultipleExerciseSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#4':
    CdmProductTemplateNonTransferableProductSchema,
  '9qZESRoTw3JVrvChnNta2oj5TcTb7RV9ijcSRtnuCQvs':
    CdmProductTemplateOptionalEarlyTerminationSchema,
  GjM8odwxuvdr9Y58M4jULKzxi93AmZuKSFfkTFsJ7cYx:
    CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema,
  E7G8rbJWZbrsWYs4MwRaciyoqUH3qB2cKFMgynJ8Jide:
    CdmProductTemplateOptionExerciseStyleEnumSchema,
  iFRGjqPC6ijQF491otn9biLkPW4na25mmZ7gGtFn2Fj:
    CdmProductTemplateOptionFeatureSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#7':
    CdmProductTemplateOptionPayoutSchema,
  '2dSkgwb8hLPVxQFwzcY81Rz3doMpbjGnxxouhx3k8wJ2':
    CdmProductTemplateOptionStrikeSchema,
  '8ErhA2L9qAVdWjMVzZuXRSZDWRC2HdhAZCUsa4qbaya4':
    CdmProductTemplateOptionTypeEnumSchema,
  BpdSpKc8R5gAnDZQF7eJYbRNetxpvv1r1XSY9dh1LTaC:
    CdmProductTemplatePartialExerciseSchema,
  '48DkPx7UNHrRug36JutQfuqHBiEgcCS2XZiEbFZ4xi4q':
    CdmProductTemplatePassThroughSchema,
  '6NM4Yn28gaQ8DzULANDLBBiyvCGXsVB8yFf3ZfqfPgCJ':
    CdmProductTemplatePassThroughItemSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#9':
    CdmProductTemplatePayoutSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#1':
    CdmProductTemplatePerformancePayoutSchema,
  E51UFE2FEkY3QMB4wW2zNBSjHwzSoUThQsP37iRWRLuD:
    CdmProductTemplatePortfolioReturnTermsSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#0':
    CdmProductTemplateProductSchema,
  Hkq47ArK1FdesDuspFiSZKL2AMTNWMyH2tNfymLamXvR: CdmProductTemplateQuantoSchema,
  HT169Rk7tLNc9M1FuEaAZZtqo54zHh2xfJ2Sp9vugGV3:
    CdmProductTemplateRepoDurationEnumSchema,
  '3pA66XRhiAooUuGarBuys5JR2iwpE3DN1FJh1ToZzDfu':
    CdmProductTemplateReturnTermsSchema,
  CAWuQnv8ErBNebNAhWCC5XXHxx49GA2Yi9eaWFTXcij1:
    CdmProductTemplateSchedulePeriodSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#2':
    CdmProductTemplateSettlementPayoutSchema,
  '8Y5hzBqBHEUiwLTnEj3w34yWp3pZ7s2RiBzE2Mi9or3v':
    CdmProductTemplateStrategyFeatureSchema,
  H7eZouArq1oyXs52mV5ZcafixuEA7B8eTRVyaQZ6FDox: CdmProductTemplateStrikeSchema,
  '6YLNUc4mUyAXJnpaEm2W4KAfb1HUCDcrXqv7KetjrbwH':
    CdmProductTemplateStrikeScheduleSchema,
  '5ge8BnjNZtu74pTtnhLvWJ7ud6SPTwyz1TmpHomfonoo':
    CdmProductTemplateStrikeSpreadSchema,
  FpTrBfyCdqmzaN9ByjGQj2bxPZQnpJ2hHCYSkTgoJhtF:
    CdmProductTemplateTerminationProvisionSchema,
  '5L5ELtTjqEroydK4qXv9bitzL5wJ8yY6yjAhFum13A7U':
    CdmProductTemplateTradableProductSchema,
  BmdnVkDXfdg2N2r7qgbCGTcmvRVJJCeGYWgqPEVPtqns:
    CdmProductTemplateTradeLotSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#8':
    CdmProductTemplateTransferableProductSchema,
  '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#3':
    CdmProductTemplateUnderlierSchema,
  UtoHX84Jf14Vt8tqUwNyELWR28U4cEGWMm5MnHPKLpi: CdmRegulationAcctOwnrSchema,
  Avs2j3Cu7pPm5XZLVwYQ6SAEzUqvm8fnxQ3NWGaneps6: CdmRegulationAddtlAttrbtsSchema,
  D47eyKS7yewPVC5jUEbouYutWpSrDF1kdJ1AVrcHsRd4: CdmRegulationBuyrSchema,
  H4qXNCgRHrt2vNW5Ck9VynMAfvyCFYzUwMSSZWpuPRyL:
    CdmRegulationDerivInstrmAttrbtsSchema,
  J7cGS2ULhJNntQQ71zGFdzAiBmqwNpHRp6huPsfDKKtt: CdmRegulationDocumentSchema,
  Tu5nRRqGCYvPv1JfDkUiceaDiRxNSCT7gT7SQx2GA5Z: CdmRegulationExctgPrsnSchema,
  HvRvtYT6FnHr42G7nsiDHeXpPGgvFLtoazqsLEYL5gNa: CdmRegulationFinInstrmSchema,
  '8VKLe5YFMNREPES73PCMyATqUbr8SexStcAoUJHdcGEE':
    CdmRegulationFinInstrmGnlAttrbtsSchema,
  FGw3uzcfaLXE48TDaEuANFJZ3XL3kJ8QvApSUhqzHsXo:
    CdmRegulationFinInstrmRptgTxRptSchema,
  G7k1Tk3cb59mR6bbpEGUCpLLZpWszEjL9odkebn25QBq: CdmRegulationIdSchema,
  '8QRJrGUFmKzsaoBkwKWPd9tQK2zyZV2LcezMZ66M3Cr1': CdmRegulationIndxSchema,
  '9aWzcazT96cuBgu8aeqXmWbGmtbVKjeBYG4ZKYcd3zCS':
    CdmRegulationInvstmtDcsnPrsnSchema,
  '7nPHq44WkgzcmatogSGoahnTBmfbTfRpaG1YBa7e8RcQ#0': CdmRegulationNewSchema,
  Bnyu2YsX3C75feLrApJur1wxc78rkg6UmHvj7zoZSsV8: CdmRegulationNmSchema,
  ih2SVSx6Uk2K2w79prjoTJxTTBVLXjU1jfZWiKtWVz4: CdmRegulationOrdrTrnsmssnSchema,
  '2xwAHyjVuSzA57dVQJAEcfr7Eg6P3Ms4XxwPwQwPQsAK': CdmRegulationOthrSchema,
  'AbfDrU3fgSd82Mgi4iEoZ41s3qXFqRnSTETansBbw9HF#0': CdmRegulationPricSchema,
  CyNw28ZuCZFruvDWiNYs7yzqKEpzdtRFQFErS383wQQn: CdmRegulationPrsnSchema,
  '6LfAdgL3H4Evj6cxAmHvohUbKGvi8hMjCW2VA7FCmp2f': CdmRegulationQtySchema,
  '3iGK8rtshZDYPEKjPLJb7aYsVc2cBa7Pnkc4Nr1vLoZt': CdmRegulationRefRateSchema,
  '6sHTanKcHB14wiXCFtoehJEB7HWsy21ExqHEvQYtw7NP': CdmRegulationSchmeNmSchema,
  BYr7BukA73s6xgYtaFZi9nyu9YegpSmpt2B825iLKpBm: CdmRegulationSellrSchema,
  HBLtWnWoBNq2J8Z6DEVz3GUac4po9oBJgoYmPZSkT27k: CdmRegulationSnglSchema,
  '5EjZim32Eqda6ddZQRiibshQCRikGFQeJc8nvxDo9bjc': CdmRegulationSwpSchema,
  '8wDzaj8nhdMn9sTJMrWq1siNiVWLq5NQ6cURKPYNN86F': CdmRegulationSwpInSchema,
  Du8Dj1mUc32NnorgGE844tyffuiu6gfALcLKPPS9mZKL: CdmRegulationSwpOutSchema,
  BjVwAr1pYp3ZQh3wtJi2zXxjpqqqyBzNjp9m1ZpZVP15: CdmRegulationTermSchema,
  '7nPHq44WkgzcmatogSGoahnTBmfbTfRpaG1YBa7e8RcQ#1': CdmRegulationTxSchema,
  FaYSdGaujuranVkQXU82UtdDR1Gfq9L7YpR3JXGx7dZt:
    CdmRegulationUndrlygInstrmSchema,
  HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg:
    ComRosettaModelFieldWithMetaStringSchema,
  '3dJskTcZWkGvVvc2CnvQkC12gkgaSGjZ8ix7XR2XxxjR':
    ComRosettaModelLibMetaKeySchema,
  Ha6Tqhjz1UHFLv8HHkvJRZfyUyGhWefXqcUSiETMrniq:
    ComRosettaModelLibMetaReferenceSchema,
  '7r4cq2XeiqEimWoNu6KjYkx2StpkARD8adiXz8dSETZj':
    ComRosettaModelMetafieldsMetaFieldsSchema,
  '6r7X1t4mk8pzhtyij1QDYaoMrseQxsRdHuJTw8dJaEk2':
    ComRosettaModelMetafieldsReferenceWithMetaStringSchema,
};
