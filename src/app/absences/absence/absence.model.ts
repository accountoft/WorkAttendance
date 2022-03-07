import * as internal from "stream";

export interface INewAbsence{
    userId: string;
    timeStamp: string;
    absenceDefinitionId: string;
    origin: number;
    isPartial: boolean;
    overrideHolidayAbsence: boolean;
    }

    export interface IAbsence{
        Id: string,
        UserId: string,
        FirstName: string,
        LastName: string,
        Timestamp: string,
        AbsenceDefinitionId: string,
        AbsenceDefinitionName: string,
        InsertedOn: string,
        Origin: number,
        OriginDisplayName: string,
        Comment: string,
        IsAuthentic: boolean,
        IconId: string,
        IsCalculated: boolean,
        Status: number,
        PartialTimeDuration: number,
        IsPartial: boolean,
        OverrideHolidayAbsence: boolean,
        IsModified: boolean,
       
    }
    export interface IAbsenceDefinition{
        Id: string,
        Name: string,
        IntegrationId: number,
        Code: number,
        Type: number,
        IsAvailableForAdminsOnly: boolean,
        CategoryDefinitionId: string,
        CategoryDefinitionName: string,
        Fraction: number
    }