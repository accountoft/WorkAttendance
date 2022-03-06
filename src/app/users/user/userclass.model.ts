
export class UserClass{
        private id: string;
        private firstName: string;
        private lastName: string;
        private isTimeAttendanceUser: boolean;
        private IsArchived: boolean;
        private hasUserAccount: boolean;
        private sendInvite: boolean;


        constructor(id: string, firstName:string, lastName: string, isTimeAttendanceUser: boolean, IsArchived: boolean, hasUserAccount:boolean, sendInvite: boolean){
                this.id=id;
                this.firstName=firstName;
                this.lastName=lastName;
                this.isTimeAttendanceUser=isTimeAttendanceUser;
                this.IsArchived=IsArchived;
                this.hasUserAccount=hasUserAccount;
                this.sendInvite=sendInvite;
        }

        getName(): string {
            return `${this.firstName} ${this.lastName}`;
          }



}