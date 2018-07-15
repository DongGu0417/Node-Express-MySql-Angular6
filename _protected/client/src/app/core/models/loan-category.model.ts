export interface CategoryAddModel {
  id?: number;
  loanName?: string;
  parentId?: number;
  loanType?: number;
  description?: string;
  minPl?: number;
  maxPl?: number;
  minTerm?: number;
  maxTerm?: number;
  isROI: number
  fixedROI: number
  variableROI?: InterestRangeModel,
  isNew?:boolean
}

export interface InterestRangeModel {
  minimum: number;
  maximum: number;
  interest: number;
}

export interface loanEnquiryFilter{
    from?: Date;
    to?: Date;
    loanType?:string;
    offset?: number;
    limit?: number;
}


