export class INewAbsence{
    private userId: string;
    private timeStamp: string;
    private absenceDefinitionId: string;
    private origin: number;
    private isPartial: boolean;
    private overrideHolidayAbsence: boolean;


    constructor(userId: string, timeStamp: string,absenceDefinitionId: string,origin: number,isPartial: boolean,overrideHolidayAbsence: boolean ){
        this.userId=userId;
        this.timeStamp=timeStamp;
        this.absenceDefinitionId=absenceDefinitionId;
        this.origin=origin;
        this.isPartial=isPartial;
        this.overrideHolidayAbsence=overrideHolidayAbsence;
    }

    getUserId(): string {
        return `${this.userId}`;
      }

      getTimeStamp(): string {
        return `${this.timeStamp}`;
      }
}

export class IAbsence{
  private Id: string;
  private UserId: string;
  private FirstName: string;
  private LastName: string;
  private Timestamp: string;
  private AbsenceDefinitionId: string;
  private AbsenceDefinitionName: string;
  private InsertedOn: string;
  private Origin: number;
  private OriginDisplayName: string;
  private Comment: string;
  private IsAuthentic: boolean;
  private IconId: string;
  private IsCalculated: boolean;
  private Status: number;
  private PartialTimeDuration: number;
  private IsPartial: boolean;
  private OverrideHolidayAbsence: boolean;
  private IsModified: boolean;

  constructor(Id: string,UserId: string,FirstName: string,LastName: string, Timestamp: string,AbsenceDefinitionId: string,AbsenceDefinitionName: string,InsertedOn: string,
    Origin: number,OriginDisplayName: string,Comment: string,IsAuthentic: boolean,IconId: string,IsCalculated: boolean,Status: number,PartialTimeDuration: number,IsPartial: boolean,
    OverrideHolidayAbsence: boolean,IsModified: boolean ){

    this.Id=Id;
    this.UserId=UserId;
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.Timestamp=Timestamp;
    this.AbsenceDefinitionId=AbsenceDefinitionId;
    this.AbsenceDefinitionName=AbsenceDefinitionName;
    this.InsertedOn=InsertedOn;
    this.Origin=Origin;
    this.OriginDisplayName=OriginDisplayName;
    this.Comment=Comment;
    this.IsAuthentic=IsAuthentic;
    this.IconId=IconId;
    this.IsCalculated=IsCalculated;
    this.Status=Status;
    this.PartialTimeDuration=PartialTimeDuration;
    this.IsPartial=IsPartial;
    this.OverrideHolidayAbsence=OverrideHolidayAbsence;
    this.IsModified=IsModified;
}

}
export class IAbsenceDefinition{
 private Id: string;
  private Name: string;
  private IntegrationId: number;
  private Code: number;
  private Type: number;
  private IsAvailableForAdminsOnly: boolean;
  private CategoryDefinitionId: string;
  private CategoryDefinitionName: string;
  private Fraction: number;

  constructor(Id: string, Name: string,IntegrationId: number,Code: number,Type: number,IsAvailableForAdminsOnly: boolean,CategoryDefinitionId: string,CategoryDefinitionName: string,Fraction: number){
    this.Id=Id;
    this.Name=Name;
    this.IntegrationId=IntegrationId;
    this.Code=Code;
    this.Type=Type;
    this.IsAvailableForAdminsOnly=IsAvailableForAdminsOnly;  
    this.CategoryDefinitionId=CategoryDefinitionId;
    this.CategoryDefinitionName=CategoryDefinitionName;
    this.Fraction=Fraction;

  }
}
