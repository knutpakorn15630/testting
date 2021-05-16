
export interface ReqReport {
    perPage: number;
    page: number;
}

export interface ResReport {
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    data: ResDataReport[];
}

export interface ResDataReport {
    id: number;
    mainFormName: string;
    createdAt: string;
    updatedAt: string;
    mainFormId: number;
}
