
export class UserClass{
        private id: string;
        private firstName: string;
        private lastName: string;
        private email: string;
        private isTimeAttendanceUser: boolean;
        private IsArchived: boolean;
        private hasUserAccount: boolean;
        private sendInvite: boolean;


        constructor(id: string, firstName:string, lastName: string, email: string, isTimeAttendanceUser: boolean, IsArchived: boolean, hasUserAccount:boolean, sendInvite: boolean){
                this.id=id;
                this.firstName=firstName;
                this.lastName=lastName;
                this.email=email;
                this.isTimeAttendanceUser=isTimeAttendanceUser;
                this.IsArchived=IsArchived;
                this.hasUserAccount=hasUserAccount;
                this.sendInvite=sendInvite;
        }

        getName(): string {
            return `${this.firstName} ${this.lastName}`;
          }
          getId(): string {
            return `${this.id}`;
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