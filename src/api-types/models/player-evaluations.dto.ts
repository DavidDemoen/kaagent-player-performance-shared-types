export type PlayerEvaluationType = "micro" | "meso" | "macro";
export type PlayerEvaluationStatus = "draft" | "submitted" | "locked";

export interface PlayerEvaluationTemplateDto {
  id: string;
  name: string;
  type: PlayerEvaluationType;
  version: string;
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
export type PlayerEvaluationTemplateInsert = Omit<
  PlayerEvaluationTemplateDto,
  "id" | "createdAt" | "updatedAt"
>;

export interface PlayerEvaluationPeriodDto {
  id: string;
  name: string;
  season: number;
  startDate: Date;
  endDate: Date;
}

export type PlayerEvaluationPeriodSelect = PlayerEvaluationPeriodDto;
export type PlayerEvaluationPeriodInsert = Omit<
  PlayerEvaluationPeriodDto,
  "id"
>;

export interface PlayerEvaluationDto {
  id: string;
  playerId: string;
  authorId: string;
  evaluationTemplateId: string;
  evaluationData: Record<string, any>;
  evaluationPeriodId: string;
  status: PlayerEvaluationStatus;
  createdAt: Date;
  updatedAt: Date;
  submittedAt?: Date;
}
export type PlayerEvaluationSelect = PlayerEvaluationDto;
export type PlayerEvaluationInsert = Omit<
  PlayerEvaluationDto,
  "id" | "createdAt" | "updatedAt" | "submittedAt"
>;
export interface UpdatePlayerEvaluationDataReq {
  evaluationData: Record<string, any>;
}

export interface SubmitPlayerEvaluationReq {
  // no body, id from url
}

/**
 * Response DTOs for API endpoints
 */

export interface EvaluationWarings {
  // TODO: Define the structure of warnings, e.g. missing criteria, inconsistent data, etc.
}

export interface PlayerEvaluationResponseDto extends PlayerEvaluationDto {
  warnings?: EvaluationWarings; // Optional field for any warnings related to the evaluation
}

export interface PlayerEvaluationListResponseDto {
  evaluations: PlayerEvaluationResponseDto[];
  total: number; // Total number of evaluations for pagination
}

export interface PlayerEvaluationTemplateListResponseDto extends PlayerEvaluationTemplateDto {
  templates: PlayerEvaluationTemplateDto[]; // List of templates, could be used for dropdowns or selection in the UI
  total: number; // Total number of templates for pagination
}

export interface SubmitEvaluationResponseDto {
  success: boolean;
  evaluationId: string;
  status: PlayerEvaluationStatus;
  submittedAt: string;
}

/**
 * Validation
 */
export interface PlayerEvaluationValidationResult {
  isValid: boolean;
  errors?: string[]; // List of validation error messages
}
