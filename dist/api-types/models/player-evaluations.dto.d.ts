export interface PlayerEvaluationTemplateDto {
    id: string;
    type: "weekly" | "monthly" | "quarterly";
    version: number;
    templateSchema: {
        criteriaKeys: string[];
        required: string[];
        optional: string[];
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export type PlayerEvaluationTemplateSelect = PlayerEvaluationTemplateDto;
export type PlayerEvaluationTemplateInsert = Omit<PlayerEvaluationTemplateDto, "id" | "createdAt" | "updatedAt">;
export interface PlayerEvaluationPeriod {
    periodType: "micro" | "meso" | "macro";
    startDate: Date;
    endDate: Date;
}
export interface PlayerEvaluationDto {
    id: string;
    playerId: string;
    coachIds: string[];
    evaluationType: "weekly" | "monthly" | "quarterly";
    evaluationTemplateId: string;
    evaluationData: Record<string, any>;
    evaluationPeriod: PlayerEvaluationPeriod;
    status: "draft" | "submitted" | "locked";
    createdAt: Date;
    updatedAt: Date;
    submittedAt?: Date;
}
export type PlayerEvaluationSelect = PlayerEvaluationDto;
export type PlayerEvaluationInsert = Omit<PlayerEvaluationDto, "id" | "createdAt" | "updatedAt" | "submittedAt">;
export interface UpdatePlayerEvaluationDataReq {
    evaluationData: Record<string, any>;
}
export interface SubmitPlayerEvaluationReq {
}
/**
 * Response DTOs for API endpoints
 */
export interface EvaluationWarings {
}
export interface PlayerEvaluationResponseDto extends PlayerEvaluationDto {
    warnings?: EvaluationWarings;
}
export interface PlayerEvaluationListResponseDto {
    evaluations: PlayerEvaluationResponseDto[];
    total: number;
}
export interface PlayerEvaluationTemplateListResponseDto extends PlayerEvaluationTemplateDto {
    templates: PlayerEvaluationTemplateDto[];
    total: number;
}
export interface SubmitEvaluationResponseDto {
    success: boolean;
    evaluationId: string;
    status: string;
    submittedAt: string;
}
/**
 * Validation
 */
export interface PlayerEvaluationValidationResult {
    isValid: boolean;
    errors?: string[];
}
//# sourceMappingURL=player-evaluations.dto.d.ts.map